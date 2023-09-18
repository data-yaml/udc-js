import { test } from "mocha";
import { expect } from "chai";
import * as childProcess from "child_process";

// helper method to run command in shell
const exec = (command: string) => {
    return childProcess.execSync(command, {encoding: "utf8"});
};

const run = (args: string) => {
    return exec(`ts-cli ${args}`);
};

before(() => {
    exec(`npm install -g`);
    console.log("Installed CLI");
});

after(() => {
    exec(`npm uninstall -g`);
    console.log("Uninstalled CLI");
});

test("should print hello world", () => {
    const output = run(`hello`);
    expect(output).to.equal("Hello, World!\n");
});

test("should print a greeting", () => {
    const output = run(`hello Rahul`);
    expect(output).to.equal("Hello, Rahul!\n");
});

test("should perform the specified operation", () => {
    const output = run(`calc 3 4 -o multiply`);
    expect(output).to.equal("12\n");
});

test("should print the typical age for a given name", () => {
    const output = run(`age Rahul`);
    expect(output).to.equal("Rahul - 40\n");
});
