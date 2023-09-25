# udc-js

Question: Can Universal Data Client plugins in JavaScript also work in Java and Python?

1. The [Benchling Packager]([url](https://github.com/quiltdata/benchling-packager/blob/main/lambdas/main.py)https://github.com/quiltdata/benchling-packager/blob/main/lambdas/main.py)
   uses a very simple Client and Entity class
2. So does the [original Python UDC]([url](https://github.com/data-yaml/udc/tree/main/udc/benchling)https://github.com/data-yaml/udc/tree/main/udc/benchling),
   though more complex.
3. Rewrite those minimal classes in (ECMAScript 5) JavaScript
4. Call (and test!) them from node (directly)
5. Call (and test!) them from Python using [js2py]([url](https://pypi.org/project/Js2Py/))
6. Call (and test!) them from Java using [Rhino]([url](https://github.com/mozilla/rhino)https://github.com/mozilla/rhino)
