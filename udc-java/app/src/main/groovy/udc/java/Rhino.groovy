// Import and run a Rhino script to do "hello world" in Java.
package udc.java

im
import org.mozilla.javascript.Context;
import org.mozilla.javascript.Scriptable;
import groovy.transform.CompileDynamic;

@CompileDynamic
class Rhino implements AutoCloseable {

    static String run(String script) {
        Rhino rhino = new Rhino();
        return rhino.execute(script);
    }

    private final Context cx;
    private final Scriptable scope;

    public Rhino() {
        this.cx = Context.enter();
        this.scope = cx.initStandardObjects();
    }

    String execute(String script) {
        String result = cx.evaluateString(scope, script, "<cmd>", 1, null);
        return String.valueOf(result);
    }

    // call exit on close to release resources associated with Context
    void close() {
        Context.exit();
    }

}
