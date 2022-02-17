'use strict';

// const { execLighthouse } = require("./src/execLighthouse");
const { audit } = require("./src/execLighthouseChromium");

exports.run = async (event, context) => {
  const time = new Date();
  console.log(`Your cron function "${context.functionName}" ran at ${time}, neripark!`);
};

exports.lighthouse = async (event) => {
  // todo: invoke だとevent は空文字？を確認する
  console.log("event::", event);
  console.log("message::", "use tokyo region.");
  // return execLighthouse(event);

  // ref: https://chuckwebtips.hatenablog.com/entry/2021/05/14/220648
  return audit();
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
