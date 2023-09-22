import js2py
import os

def test_js():
    assert True

def test_js_eval():
    js = """
    function hello(name) {
        return "Hello " + name + "!";
    }
    """
    context = js2py.EvalJs()
    context.execute(js)
    assert context.hello("Peter") == "Hello Peter!"

def test_js_translate():
    SRC_FILE = "../src/actions.js"

