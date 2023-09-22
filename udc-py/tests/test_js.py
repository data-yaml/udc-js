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
    """Test that the JS code can be translated to Python"""
    SRC_FILE = "../src/shared.cjs"
    with open(SRC_FILE, "r") as f:
        src = f.read()
    context = js2py.EvalJs()
    context.execute(src)
    assert context.getAge("Rahul") == "Rahul - 40"

