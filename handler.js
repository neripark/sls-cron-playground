'use strict';

const { audit } = require("./src/execLighthouse");
const { sendMetricsToDatadog } = require("./src/sendMetricsToDatadog");

exports.run = async (event, context) => {
  const time = new Date();
  console.log(`Your cron function "${context.functionName}" ran at ${time}, neripark!`);
};

exports.lighthouse = async (event) => {
  console.log("event::", event);
  console.log("process.env.envName::", process.env.envName);
  // console.log("process.env.DATADOG_API_KEY::", process.env.DATADOG_API_KEY);
  console.log("process.env.datadogApiKey::", process.env.datadogApiKey);

  // 今は切り離しているので単独で実行
  sendMetricsToDatadog();
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
