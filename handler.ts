'use strict';

import { audit } from "./src/execLighthouse";

export const run = async (event: any, context: any) => {
  const time = new Date();
  console.log(`Your cron function "${context.functionName}" ran at ${time}, neripark!`);
};

export const lighthouse = async (event: any) => {
  console.log("event::", event);
  console.log("message::use typescript!");

  // ref: https://chuckwebtips.hatenablog.com/entry/2021/05/14/220648
  return audit();
};

// 'use strict';

// const { audit } = require("./src/execLighthouse");

// exports.run = async (event, context) => {
//   const time = new Date();
//   console.log(`Your cron function "${context.functionName}" ran at ${time}, neripark!`);
// };

// exports.lighthouse = async (event) => {
//   console.log("event::", event);

//   // ref: https://chuckwebtips.hatenablog.com/entry/2021/05/14/220648
//   return audit();
// };
