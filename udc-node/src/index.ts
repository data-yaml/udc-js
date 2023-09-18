#!/usr/bin/env node

// NOTE - using ESM modules requilres explicit '.js' extension
// even when importing from a TypeScript file

import { getAge, performOperation, printName, } from "./utils.js";
import { Command } from "commander";

const program = new Command();

program
    .command('age [name]')
    .action(getAge)

program
    .command("hello")
    .argument("[name]")
    .action(printName);

program
    .command("calc")
    .argument("<num1>")
    .argument("<num2>")
    .option("-o, --operation <operation>", "Operation to perform: add | multiply | divide")
    .action(performOperation);

program.parse(process.argv);
