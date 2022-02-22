import fetch from "node-fetch";
// const { AuditsResult } = require("../@types/lighthouse");

export class DatadogClient {
  private apiUrl: string;

  constructor(apiKey: string | undefined) {
    if (apiKey === undefined) throw new Error("passed undefined on Datadog API key. must be string.");
    this.apiUrl = `https://api.datadoghq.com/api/v1/series?api_key=${apiKey}`;
  }

  // async sendMetrics(metricsName: string, data: AuditsResult) {
  async sendMetrics(metricsName: string) {
    const requestBody = JSON.stringify({
      series: [
        {
          metric: metricsName,
          points: [
            [
              `${Math.floor(Date.now() / 1000)}`,
              Math.floor(Math.random() * 100)
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

  private async post(requestBody: string) {
    return await fetch(this.apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: requestBody,
    });
  }
}


// ________________________________________________________

// copy from: https://docs.datadoghq.com/ja/api/latest/metrics/#submit-metrics
// 環境変数を明示的に見に行っていないので、裏で参照している？

// INSTRUCTIONS
// First install the library and its dependencies and then save the example to example.ts and run following commands:

// export DD_SITE="datadoghq.com" DD_API_KEY="<API-KEY>" DD_APP_KEY="<APP-KEY>" tsc "example.ts"


/**
 * Submit metrics returns "Payload accepted" response
 */

// import { v1 } from "@datadog/datadog-api-client";

// const configuration = v1.createConfiguration();
// const apiInstance = new v1.MetricsApi(configuration);

// let params: v1.MetricsApiSubmitMetricsRequest = {
//   body: {
//     series: [
//       {
//         metric: "system.load.1",
//         type: "gauge",
//         points: [[new Date().getTime() / 1000, 1.1]],
//         tags: ["test:ExampleSubmitmetricsreturnsPayloadacceptedresponse"],
//       },
//     ],
//   },
// };

// apiInstance
//   .submitMetrics(params)
//   .then((data: v1.IntakePayloadAccepted) => {
//     console.log(
//       "API called successfully. Returned data: " + JSON.stringify(data)
//     );
//   })
//   .catch((error: any) => console.error(error));
