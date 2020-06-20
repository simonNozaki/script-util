[![Build Status](https://travis-ci.org/simonNozaki/script-util.svg?branch=master)](https://travis-ci.org/simonNozaki/script-util)
# script-util
Utility package for usual operation like checking null or undefined, operating array.

## 1. Usage
### 1-1. Call to utility
First of all, You will load main class.  
`const scriptUtil = require("script-util");`  

## 2. Methods
Please refer to [docs](https://simonnozaki.github.io/script-util/docs.html) .

## 3. Build
Sources are written in TypeScript, so each we should build TypeScripts for pure js.
### 3-1. assemble .ts to .js
Locally to reflect cahnges, run assembling task defined in gulp task.  
`gulp assemble`  
### 3-2. unit tseting utilities
Unit testing depends on `Jasmine`. So run jasmine testing.  
Please deploy new spec target file to `spec` directory if you need.  
You can run unit test by  
`npm test`