const { expect } = require("chai");
const { it } = require("mocha");
const childProcess = require("child_process");

// helper method to run command in shell
const exec = (command) => {
    return childProcess.execSync(command, { encoding: "utf8" });
};

const run = (args) => {
    return exec(`npx udc-js ${args}`);
};

it("should talk about Tasks", () => {
    const output = run(`list`);
    expect(output).to.contain("Tasks");
});
