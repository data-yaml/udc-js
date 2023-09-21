__all__ = ['dest']

# Don't look below, you will not understand this Python code :) I don't.

from js2py.pyjs import *
# setting scope
var = Scope( JS_BUILTINS )
set_global_object(var)

# Code follows:
var.registers(['wish'])
@Js
def PyJsHoisted_wish_(name, this, arguments, var=var):
    var = Scope({'name':name, 'this':this, 'arguments':arguments}, var)
    var.registers(['name'])
    var.put('output', ((Js('Hello, ')+var.get('name'))+Js('!')))
    var.get('console').callprop('log', var.get('output'))
    return var.get('output')
PyJsHoisted_wish_.func_name = 'wish'
var.put('wish', PyJsHoisted_wish_)
pass
pass


# Add lib to the module scope
dest = var.to_python()