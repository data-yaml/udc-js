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
    private static final String[] FUNCTION_NAMES = [ 'print', 'load']

    private final Context cx
    private final ScriptableObject scope
    private final Scriptable args
    private final RhinoRuntime runtime

    Rhino() {
        this.cx = Context.enter()
        this.runtime = new RhinoRuntime()
        this.scope = cx.initStandardObjects(runtime, true)
        scope.defineFunctionProperties(FUNCTION_NAMES, scope.getClass(), ScriptableObject.DONTENUM)
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

    void processSource(String source, String name) {
        runtime.processSourceNamed(cx, source, name)
    }

    // call exit on close to release resources associated with Context
    void close() {
        Context.exit()
    }

}
