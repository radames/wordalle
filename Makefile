install-node:
	./install-node.sh
build-client:
	cd frontend && npm install && npm run build && rm -rf ../static && cp -r build/ ../static/
build-dev:
	cd frontend && npm install && NODE_ENV=development npm run build && rm -rf ../static && cp -rv build/ ../static/
run-dev:
	FLASK_DEBUG=development python app.py
run-prod:
	python app.py
# build-all: install-node build-client run
build-all: run-prod
