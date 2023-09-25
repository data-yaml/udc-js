import js2py
import requests

SRC_FILE = "../src/shared.cjs"


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


def test_js_run():
    """Test that the JS code can be translated to Python"""
    eval_js, shared = js2py.run_file(SRC_FILE)
    assert shared.getAge("Rahul") == "Rahul - 40"
    assert shared.printName("Rahul") == "Hello, Rahul!"
    assert shared.performOperation(10, 20, {"operation": "add"}) == 30


def test_js_context():
    context = js2py.EvalJs({"python_sum": sum})
    assert context.eval("python_sum(new Array(1, 2, 3))") == 6
