/*
 * Optionally, you can configure the sub path using require.config,
 * to specify the subdirectory inside classpath where js files are located.
 * https://stackoverflow.com/questions/11074836/resolving-modules-using-require-js-and-java-rhino
*/
package udc.java

import org.mozilla.javascript.Context
import org.mozilla.javascript.ScriptableObject
import org.mozilla.javascript.Scriptable

import spock.lang.Specification
import groovy.transform.CompileDynamic

@CompileDynamic
public class RequireTest extends Specification {

    void "test Rhino loads requireJS"() {
      setup:
        Context cx = Context.enter()
        final RhinoRequire browserSupport = new RhinoRequire()
        final ScriptableObject sharedScope = cx.initStandardObjects(browserSupport, true)
      when:
        String[] names = [ 'print', 'load']
        sharedScope.defineFunctionProperties(names, sharedScope.getClass(), ScriptableObject.DONTENUM)

        Scriptable argsObj = cx.newArray(sharedScope, new Object[] {})
        sharedScope.defineProperty('arguments', argsObj, ScriptableObject.DONTENUM)

      then:
        true
      // FIXME: plan to fail
      //cx.evaluateReader(sharedScope, new FileReader("./r.js"), "require", 1, null);
      //cx.evaluateReader(sharedScope, new FileReader("./loader.js"), "loader", 1, null);

      cleanup:
        Context.exit()
    }

}
