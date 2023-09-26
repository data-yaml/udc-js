/*
 * Optionally, you can configure the sub path using require.config, 
 * to specify the subdirectory inside classpath where js files are located.
 * https://stackoverflow.com/questions/11074836/resolving-modules-using-require-js-and-java-rhino
*/

package udc.java;

import org.mozilla.javascript.Context;
import org.mozilla.javascript.Function;
import org.mozilla.javascript.ScriptableObject;
import org.mozilla.javascript.Scriptable;
import org.mozilla.javascript.tools.shell.Global;
import org.mozilla.javascript.tools.shell.Main;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.logging.Logger;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.Path;
// import FileReader
import java.io.FileReader;

import spock.lang.Specification

public class RhinoTest extends Specification {

    public void simpleRhinoTest() throws FileNotFoundException, IOException {
    Context cx = Context.enter();

    final RhinoRuntime browserSupport = new RhinoRuntime();

    final ScriptableObject sharedScope = cx.initStandardObjects(browserSupport, true);

    String[] names = [ "print", "load"];
    sharedScope.defineFunctionProperties(names, sharedScope.getClass(), ScriptableObject.DONTENUM);

    Scriptable argsObj = cx.newArray(sharedScope, new Object[] {});
    sharedScope.defineProperty("arguments", argsObj, ScriptableObject.DONTENUM);

    cx.evaluateReader(sharedScope, new FileReader("./r.js"), "require", 1, null);
    cx.evaluateReader(sharedScope, new FileReader("./loader.js"), "loader", 1, null);

    Context.exit();

  }

}
