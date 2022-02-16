'use strict';

const { execLighthouse } = require("./src/execLighthouse");

exports.run = async (event, context) => {
  const time = new Date();
  console.log(`Your cron function "${context.functionName}" ran at ${time}, neripark!`);
};

exports.lighthouse = async () => {
  console.log(execLighthouse());
};

// esm 書けない、悔しい
// import { execLighthouse } from "./src/lighthouse.mjs";
// export const run = async (event, context) => {
//   const time = new Date();
//   console.log(`Your cron function "${context.functionName}" ran at ${time}, neripark!`);
// };
// export const lighthouse = async (event, context) => {
//   console.log(execLighthouse());
// };
