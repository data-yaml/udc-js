# ts-cli
Demo project to create/test CLIs written using TypeScript

It is surprisingly difficult to find a currently-working example of how
to create and test Command-Line Interfaces (CLIs) written in TypeScript.

This project updates the
[How to Create a Testable CLI using TypeScript?](https://www.realpythonproject.com/how-to-create-a-testable-cli-using-typescript/)
tutorial from Jan 2023 with various fixes that were not obvious (at least to me).

In particular, it modifies the import syntax and tsconfig.json to work with 
ECMAScript Modules (ESM), such as Chalk v5.x.

Other changes include:

* Avoiding the confusingly-named 'npm run install'
* import { expect } from "chai";
* "test" : "mocha --require ts-node/register test/**/*.ts"
* Adding node GitHub Action (for continuous testing)


## Usage

```bash
$ npm run ts-cli-install
$ ts-cli hello
Hello, World!
$ ts-cli hello Universe!
Hello, Universe!!
$ ts-cli calc -o multiply 10 16 # or: add | divide
160
$ ts-cli age Ernie # Use axios to call the agify API 
Ernie - 74
```
