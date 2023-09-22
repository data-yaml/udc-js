import js2py
import requests

SRC_FILE = "../src/shared.cjs"

class Axios:

    def __init__(self):
        self._response : requests.Response|None = None

    def get(self, uri):
        print(f"GET: {uri}")
        self._response = requests.get(uri)
        self._response.data = self._response.json()  # type: ignore
        print(f"RESPONSE: {self._response}")
        print(f"DIR: {dir(self._response)}")
        return self
    
    def then(self, callback):
        assert self._response is not None
        if self._response.status_code == 200:
            callback(self._response)
        return self
    
    def catch(self, callback):
        assert self._response is not None
        if self._response.status_code != 200:
            callback(self._response)
        return self

def test_js_class():
    context = js2py.EvalJs()
    context.axios = Axios()
    result = context.axios.get("https://jsonplaceholder.typicode.com/todos/1")
    assert result._response.status_code == 200  # type: ignore
    assert result._response.json()["userId"] == 1  # type: ignore
    assert result._response.json()["id"] == 1  # type: ignore

def test_js_rest():
    eval_js, context = js2py.run_file(SRC_FILE)
    context.axios = Axios()
    assert context.getAge("Rahul") == "Rahul - 40"
    # assert context.callAge("Rahul") == "Rahul - 40"

