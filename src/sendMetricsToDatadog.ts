import { DatadogClient } from './DatadogClient';

export const sendMetricsToDatadog = async () => {
  const ddClient = new DatadogClient(process.env.DATADOG_API_KEY);
  await ddClient.sendMetrics("test_metrics_name_neripark")
    .then(res => console.log(res))
    .catch(error => console.error(error));
  console.log("send metrics has done.");
}
