.PHONY: test test-node test-py

test: test-node test-py

test-node:
	cd udc-node; npm install; npm run ci-test

test-py:
	cd udc-py; poetry run black .; poetry run pytest
