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
public class RhinoRuntime extends ScriptableObject {

    private static final Logger LOG = Logger.getLogger(RhinoRuntime.getName())
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
        RhinoRuntime shell = (RhinoRuntime) getTopLevelScope(thisObj)
        for (int i = 0; i < args.length; i++) {
            if (!SILENT) {
                LOG.info('Loading file ' + Context.toString(args[i]))
            }
            shell.processSource(cx, Context.toString(args[i]))
        }
            }

    static InputStream getInputStream(String file) throws IOException {
        Path path = Paths.get(file)
        return Files.newInputStream(path)
    }
    static ClassLoader getLoader() {
        return RhinoRuntime.getClassLoader()
    }

    static InputStream getResourceStream(String filename) throws IOException {
        InputStream inputStream = getLoader().getResourceAsStream(filename)
        if (inputStream == null) {
            throw new IllegalArgumentException('file not found! ' + filename)
        }
        return inputStream
    }

    @Override
    String getClassName() {
        return 'RhinoRuntime'
    }

    void processSourceNamed(Context cx, String filename, String key) throws FileNotFoundException, IOException {
        InputStream inputStream = RhinoRuntime.getResourceStream(filename)
        String name = key ?: filename
        cx.evaluateReader(this, new InputStreamReader(inputStream), name, 1, null)
    }

    void processSource(Context cx, String filename) throws FileNotFoundException, IOException {
        processSourceNamed(cx, filename, filename)
    }

}
