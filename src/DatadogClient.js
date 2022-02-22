// const fetch = require("node-fetch");
const fetch = require("node-fetch");
// const { AuditsResult } = require("../@types/lighthouse");

// export class DatadogClient {
exports.DatadogClient = class {
  // private apiUrl: string;

  // constructor(apiKey: string) {
  constructor(apiKey) {
    this.apiUrl = `https://api.datadoghq.com/api/v1/series?api_key=${apiKey}`;
  }

  // async sendMetrics(metricsName: string, data: AuditsResult) {
  async sendMetrics(metricsName) {
    const requestBody = JSON.stringify({
      series: [
        {
          metric: metricsName,
          points: [
            [
              `${Math.floor(Date.now() / 1000)}`,
              98 // いったんハドコ
              // `${Math.round(data.numericValue / 10) * 10}`,
            ],
          ],
          type: "gauge",
          // > メトリクスには、次の送信タイプを指定できます
          // COUNT
          // RATE
          // GAUGE
          // SET
          // HISTOGRAM
          // DISTRIBUTION
        },
      ],
    });
    //TODO: errorハンドリングを考える
    return await this.post(requestBody);
  }

  // private async post(requestBody: string) {
  async post(requestBody) {
    return await fetch(this.apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: requestBody,
    });
  }
}