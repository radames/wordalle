import os
from datasets import load_dataset
import json
import uuid
from pathlib import Path
import json
from datasets import load_dataset
from flask import Flask
from flask_cors import CORS

app = Flask(__name__, static_url_path='/static')

CORS(app)

TOKEN = os.environ.get('dataset_token')
dataset = load_dataset("osanseviero/wordalle_prompts",
                       use_auth_token=TOKEN)



dataset = load_dataset("osanseviero/wordalle_prompts", use_auth_token=os.environ.get('dataset_token'))
Path("static/images").mkdir(parents=True, exist_ok=True)

# extract images and prompts from dataset and save to dis
data = {}
for row in dataset['train']:
    prompt = dataset['train'].features['label'].int2str(row['label'])
    image = row['image']
    hash = uuid.uuid4().hex
    image_file = Path(f'static/images/{hash}.png')
    image.save(image_file)
    if prompt not in data:
        data[prompt] = []
    data[prompt].append(str(image_file))

with open('static/data.json', 'w') as f:
    json.dump(data, f)


@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/data')
def getdata():
    return app.send_static_file('data.json')


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=7860)