# Adapted from https://www.geeksforgeeks.org/how-to-run-javascript-from-python/

import js2py

SOURCE_FILE = "tests/source.js"
DEST_FILE = "tests/dest.py"
HELLO_STR = "Hello, Geeks!"

def test_js_str():
    sq_js = "function f(x) {return x*x;}"
    sq_py = js2py.eval_js(sq_js)
    assert sq_py(5) == 25

def test_js_run():
    source_fn, source = js2py.run_file(SOURCE_FILE)
    assert source.wish("Geeks") == HELLO_STR
    assert source_fn("Geeks") == HELLO_STR

def test_js_translate():
    js2py.translate_file(SOURCE_FILE, DEST_FILE)
    from tests.dest import dest
    assert dest.wish("Geeks") == HELLO_STR  # type: ignore
