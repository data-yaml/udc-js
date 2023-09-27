package udc.java

import java.util.logging.Logger

import org.mozilla.javascript.Context
import org.mozilla.javascript.Function
import org.mozilla.javascript.ScriptableObject
import org.mozilla.javascript.Scriptable

import java.nio.file.Files
import java.nio.file.Paths
import java.nio.file.Path
import groovy.transform.CompileDynamic

@CompileDynamic
public class RhinoRequire extends ScriptableObject {

    private static final Logger LOG = Logger.getLogger(RhinoRequire.getName())
    private static final boolean SILENT = false

    static void print(Context cx, Scriptable thisObj, Object[] args, Function funObj) {
        if (SILENT) {
            return
        }
        for (int i = 0; i < args.length; i++) {
            LOG.info(Context.toString(args[i]))
        }
    }

    static void load(Context cx, Scriptable thisObj, Object[] args, Function funObj)
            throws FileNotFoundException, IOException {
        RhinoRequire shell = (RhinoRequire) getTopLevelScope(thisObj)
        for (int i = 0; i < args.length; i++) {
            if (!SILENT) {
                LOG.info("Loading file " + Context.toString(args[i]))
            }
            shell.processSource(cx, Context.toString(args[i]))
        }
    }

    @Override
    String getClassName() {
        return 'RhinoRequire'
    }

    def processSource(Context cx, String filename) throws FileNotFoundException, IOException {
        return cx.evaluateReader(this, new InputStreamReader(getInputStream(filename)), filename, 1, null)
    }

    InputStream getInputStream(String file) throws IOException {
        Path path = Paths.get(file)
        return Files.newInputStream(path)
    }

}
