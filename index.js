import * as core from '@actions/core';
// import * as 

const name = core.getInput("name");
const outputValue = `Hello ${name} vom Mars!`;

core.setOutput('greeting', outputValue);