// const lighthouse = require('lighthouse');
// // const log = require('lighthouse-logger');
// const chromeLauncher = require('chrome-launcher');

// const opts = {
//   chromeFlags: ["--headless", "--disable-gpu"],
//   //chromeFlags: ["--disable-gpu"],
//   logLevel: "info"
// };
// // log.setLevel(opts.logLevel);

// const launchChromeAndRunLighthouse = async (url, opts, config = null) => {
//   return chromeLauncher.launch({ chromeFlags: opts.chromeFlags }).then((chrome) => {
//     opts.port = chrome.port;
//     return lighthouse(url, opts, config).then((results) => {
//       // results.lhr はよく見るスコアリングの元データ
//       // https://github.com/GoogleChrome/lighthouse/blob/master/types/lhr.d.ts
//       const {
//         // "time-to-first-byte": ttfb,
//         // "first-contentful-paint": fcp,
//         // "first-meaningful-paint": fmp,
//         // "speed-index": speedindex,
//         // interactive,
//         metrics,
//       } = results.lhr.audits;

//       return chrome.kill().then(() => ({
//         // TTFB: Math.round(ttfb.numericValue),
//         FIRST_PAINT: metrics.details.items[0].observedFirstPaint,
//         // FMP: Math.round(fmp.numericValue),
//         // FCP: Math.round(fcp.numericValue),
//         // SPEED_INDEX: Math.round(speedindex.numericValue),
//         // TTI: Math.round(interactive.numericValue),
//       }));
//     });
//   });
// }

// const createResponseBody = (event) => {
//   return {
//     statusCode: 200,
//     body: JSON.stringify(
//       {
//         message: 'Go Serverless v1.0! Your function executed successfully!',
//         input: event,
//       },
//       null,
//       2
//     ),
//   };
// }

// const execLighthouse = (event) => {
//   console.log("LOGGER:: lighthouse kicked.");

//   // いったん非同期処理を待たずにレスポンスさせる
//   launchChromeAndRunLighthouse("https://google.com", opts)
//     .then((results) => {
//       console.table(results);
//       return results;
//     })
//     .then((value) => {
//       console.log(`LOGGER::result:: ${JSON.stringify(value)}`);
//     })
//     .catch(e => {
//       console.error(e)
//     });

//   const response = createResponseBody(event);

//   return new Promise((resolve) => {
//     resolve(response)
//   })
// }

// exports.execLighthouse = execLighthouse;
exports.execLighthouse = () => console.log("simple logger by neripark.");
