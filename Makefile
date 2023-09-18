
test-node:
	cd udc-node; npm install; npm run ci-test

test-py:
	cd udc-py; poetry run pytest
