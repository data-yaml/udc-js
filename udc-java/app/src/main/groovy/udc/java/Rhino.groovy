// Import and run a Rhino script to do "hello world" in Java.

import org.mozilla.javascript.Context;
import org.mozilla.javascript.Scriptable;

public class Rhino {
    public static void main(String[] args) {
        Context cx = Context.enter();
        try {
            Scriptable scope = cx.initStandardObjects();
            String greet = "print('Hello, scripting!')";
            String add = "2 + 2;"
            //cx.evaluateString(scope, greet, "<cmd>", 1, null);
            String result = cx.evaluateString(scope, add, "<cmd>", 1, null);
            System.out.println(result);
        } finally {
            Context.exit();
        }
    }
}
