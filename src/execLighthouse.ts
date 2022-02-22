// import chromium from 'chrome-aws-lambda'
// import { Browser } from 'puppeteer-core';
// import lighthouse  from "lighthouse";
// import metrics from "datadog-metrics";
// import { URL } from "url";

// const chromium = require('chrome-aws-lambda');
// const lighthouse  = require( "lighthouse");
// const { URL } = require("url");

// import chromium from 'chrome-aws-lambda'
import Chromium from 'chrome-aws-lambda';
import lighthouse from "lighthouse"; // たぶんTS対応していない
import { Browser } from 'puppeteer-core';
import { URL } from "url";

const chromeFlags = [
  "--headless",
  "--disable-gpu",
  "--no-sandbox",
  "--window-size=1080,1920",
];
// const loginUrl = "ここにログインページのURL";
const auditTargetUrl = "https://google.com";

// metrics.init({ 
//   apiKey: 'ここに API キー',
//   host: 'myhost',
//   prefix: 'myapp.'
// });

export const audit = async () => {
// exports.audit = async () => {
  console.log("kicked audit!!");
  let browser: Browser;

  try {
    // puppeteer を利用して、ブラウザを立ち上げておく
    browser = await Chromium.puppeteer.launch({
      args: [...Chromium.args, ...chromeFlags],
      defaultViewport: Chromium.defaultViewport,
      timeout: 0,
      executablePath: await Chromium.executablePath,
    });

    // // puppeteer を利用して、ログイン状態にしておく
    // // （アプリケーションの実装に沿って適宜書き換えてください）
    // const page = await browser.newPage();
    // await page.goto(loginUrl);
    // const emailInput = await page.$("input#email");
    // await emailInput.type("ここにメールアドレス");
    // const passwordInput = await page.$("input#password");
    // await passwordInput.type("ここにパスワード");
    // const loginButton = await page.$("button#login");
    // await loginButton.clickAndWaitForNavigation();

    // Lighthouse 実行（ここの設定内容はもっと工夫の余地があるかも）
    const runnerResult = await lighthouse(auditTargetUrl, {
      logLevel: "info",
      output: "html",
      onlyCategories: ["performance"],
      chromeFlags: chromeFlags,
      port: new URL(browser.wsEndpoint()).port,
    });
    const { audits } = runnerResult.lhr;

    // スコアの抽出(必要とあらば拡張してください)
    // const score = [
    [
      "server-response-time",
      "first-contentful-paint",
      "first-meaningful-paint",
      "interactive",
    ].forEach((key) => {
       // 必要に応じて丸め処理などをしてください
       const value = audits[key].numericValue
       console.log(`score::${key}::`, value);
      //  metrics.gauge(key, value)
    });

    await browser.close();
  } catch (e) {
    console.error(e);
    await browser!.close();
  }
};
