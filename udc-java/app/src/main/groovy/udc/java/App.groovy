/*
 * This Groovy source file was generated by the Gradle 'init' task.
 */
package udc.java

import groovy.transform.CompileDynamic;

@CompileDynamic
class App {
    public final String greeting = 'Hello App World!'

    static void main(String[] args) {
        println new App().greeting
        Rhino().main(args)
    }

}
