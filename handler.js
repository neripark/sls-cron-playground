'use strict';

const { execLighthouse } = require("./src/execLighthouse");

exports.run = async (event, context) => {
  const time = new Date();
  console.log(`Your cron function "${context.functionName}" ran at ${time}, neripark!`);
};

exports.lighthouse = async (event) => {
  // todo: invoke だとevent は空文字？を確認する
  console.log("event::", event);
  console.log("typeof event::", typeof event);
  return execLighthouse(event);
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
