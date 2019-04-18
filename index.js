const { EventHubClient } = require('@azure/event-hubs');
const client = EventHubClient.createFromConnectionString(process.env["EVENTHUB_CONNECTION_STRING"], process.env["EVENTHUB_NAME"]);
 
exports.handler = async function(event, context, callback) {
  console.log('event', event);
  var delivery = await client.send(event);
  console.log('result', delivery);
  callback(null, event);
};
