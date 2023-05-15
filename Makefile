hello:
	echo "Hello"
	
install-dependencies:
	echo "Install dependencies"
	yarn install

build-site:
	echo "building site"
	yarn build

start-local-dev:
	yarn start

start-server:
	npm run serve

s3-sync:
	aws s3 sync ./build s3://gk-docusaurus