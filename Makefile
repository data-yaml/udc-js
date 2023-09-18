.PHONY: all clean test test-node test-py

all: clean test

clean:
	rm -rf udc-node/node_modules udc-node/dist
	rm -rf udc-py/.pytest_cache udc-py/*/__pycache__

test: test-node test-py

test-node:
	cd udc-node && npm install && npm test

test-py:
	cd udc-py && poetry run black . && poetry run pytest
