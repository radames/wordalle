import os
from datasets import load_dataset
import json
import uuid
from pathlib import Path
import json
from datasets import load_dataset
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_apscheduler import APScheduler

from PIL import Image
import sqlite3
from huggingface_hub import Repository

app = Flask(__name__, static_url_path='/static')

CORS(app)

TOKEN = os.environ.get('dataset_token')

DB_FILE = Path("./data/prompts.db")

repo = Repository(
    local_dir="data",
    repo_type="dataset",
    clone_from="huggingface-projects/wordalle_guesses",
    use_auth_token=TOKEN
)
repo.git_pull()

dataset = load_dataset(
    "huggingface-projects/wordalle_prompts",
    use_auth_token=TOKEN)
Path("static/images").mkdir(parents=True, exist_ok=True)

db = sqlite3.connect(DB_FILE)
try:
    data = db.execute("SELECT * FROM prompts").fetchall()
    db.close()
except sqlite3.OperationalError:
    db.execute('CREATE TABLE prompts (guess TEXT, correct TEXT)')
    db.commit()

# extract images and prompts from dataset and save to dis
data = {}
for row in dataset['train']:
    prompt = dataset['train'].features['label'].int2str(row['label'])
    image = row['image']
    hash = uuid.uuid4().hex
    image_file = Path(f'static/images/{hash}.jpg')
    image_compress = image.resize((136, 136), Image.Resampling.LANCZOS)
    image_compress.save(image_file, optimize=True, quality=95)
    if prompt not in data:
        data[prompt] = []
    data[prompt].append(str(image_file))

with open('static/data.json', 'w') as f:
    json.dump(data, f)


def update_repository():
    with sqlite3.connect(DB_FILE) as db:
        db.row_factory = sqlite3.Row
        result = db.execute("SELECT * FROM prompts").fetchall()
        data = [dict(row) for row in result]

    with open('./data/data.json', 'w') as f:
        json.dump(data, f, separators=(',', ':'))

    print("Updating repository")
    repo.git_pull()
    repo.push_to_hub(blocking=False)


@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route('/data')
def getdata():
    return app.send_static_file('data.json')


@app.route('/prompt', methods=['POST', 'GET'])
def create():
    if request.method == 'POST':
        try:
            data = request.get_json()
            guess = data['guess']
            correct = data['correct']
            with sqlite3.connect(DB_FILE) as db:
                db.execute(
                    'INSERT INTO prompts (guess, correct) VALUES (?, ?)', (guess, correct))
                db.commit()
            return 'OK', 200
        except:
            return 'Missing guess or correct', 400


if __name__ == '__main__':
    mode = os.environ.get('FLASK_ENV', 'production')
    print(mode)
    if mode != 'development':
        scheduler = APScheduler()
        scheduler.add_job(id='Update Dataset Repository',
                          func=update_repository, trigger='interval', seconds=300)
        scheduler.start()
    app.run(host='0.0.0.0',  port=int(
        os.environ.get('PORT', 7860)), debug=True)
