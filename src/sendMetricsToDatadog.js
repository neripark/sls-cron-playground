const { DatadogClient } = require('./DatadogClient');

const sendMetricsToDatadog = async () => {
  const ddClient = new DatadogClient(process.env.DATADOG_API_KEY);
  await ddClient.sendMetrics("test_metrics_name_neripark")
    .then(res => console.log(res));
  console.log("send metrics has done.");
}

exports.sendMetricsToDatadog = sendMetricsToDatadog;
