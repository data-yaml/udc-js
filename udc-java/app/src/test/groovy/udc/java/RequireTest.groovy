/*
 * Optionally, you can configure the sub path using require.config,
 * to specify the subdirectory inside classpath where js files are located.
 * https://stackoverflow.com/questions/11074836/resolving-modules-using-require-js-and-java-rhino
*/
package udc.java

import org.mozilla.javascript.Context
import org.mozilla.javascript.Function
import org.mozilla.javascript.ScriptableObject
import org.mozilla.javascript.Scriptable

import spock.lang.Specification
import groovy.transform.CompileDynamic

@CompileDynamic
public class RequireTest extends Specification {

    void 'test Rhino has sharedScope'() {
      when:
        final Rhino rhino = new Rhino()

      then:
        rhino.getScope('print') instanceof Function
        rhino.getScope('load') instanceof Function
        rhino.getScope('arguments') instanceof Scriptable
    }

    void 'test classLoader'() {
      given:
        Rhino rhino = new Rhino()

      expect:
        getClass() != null
        getClass().getClassLoader() != null
        Thread.currentThread().getContextClassLoader() != null
        RhinoRuntime.class.getClassLoader() != null
        ClassLoader.getSystemClassLoader() != null
        RhinoRuntime.getLoader() != null
        rhino.class.getClassLoader() != null 
        rhino.class.getClassLoader() == RhinoRuntime.class.getClassLoader()    
    }

    void 'test getResourceStream'() {
      when:
        Rhino rhino = new Rhino()
        InputStream requireStream = RhinoRuntime.getResourceStream('r.js')
        InputStream inputStream = RhinoRuntime.getResourceStream('loader_test.js')
        RhinoRuntime runtime = new RhinoRuntime()

      then:
        requireStream != null
        requireStream.available() > 0
        requireStream.close()
        inputStream != null
        inputStream.available() > 0
        inputStream.close()
        //rhino.readSource('loader_test.js', 'loader')
    }

    void 'test processSource'() {
      when:
        Context cx = Context.enter()
        RhinoRuntime runtime = new RhinoRuntime()
        Rhino rhino = new Rhino()
        rhino.processSource('r.js', 'require')
        //rhino.processSource('loader_test.js', 'loader')

      then:
        runtime != null
    }
}
