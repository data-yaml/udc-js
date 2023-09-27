// Import and run a Rhino script to do "hello world" in Java.
package udc.java

import org.mozilla.javascript.Context
import org.mozilla.javascript.Scriptable
import org.mozilla.javascript.ScriptableObject
import groovy.transform.CompileDynamic

@CompileDynamic
class Rhino implements AutoCloseable {

    static String run(String script) {
        Rhino rhino = new Rhino()
        return rhino.execute(script)
    }
    private static final String[] functions = [ 'print', 'load']

    private final Context cx
    private final ScriptableObject scope
    private final Scriptable args
    private final RhinoRequire runtime

    Rhino() {
        this.cx = Context.enter()
        this.runtime = new RhinoRequire()
        this.scope = cx.initStandardObjects(runtime, true)
        scope.defineFunctionProperties(functions, scope.getClass(), ScriptableObject.DONTENUM)
        this.args = cx.newArray(scope, new Object[] {})
        scope.defineProperty('arguments', args, ScriptableObject.DONTENUM)
    }

    def getScope(name) {
        return scope.get(name, scope)
    }
    
    String execute(String script) {
        String result = cx.evaluateString(scope, script, '<cmd>', 1, null)
        return String.valueOf(result)
    }

    String readFile(String file, String name) {
        return cx.evaluateReader(scope, new FileReader(file), name, 1, null)
    }

    // call exit on close to release resources associated with Context
    void close() {
        Context.exit()
    }

}
