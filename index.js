const { EventHubClient, EventPosition } = require('@azure/event-hubs');
const client = EventHubClient.createFromConnectionString(process.env["EVENTHUB_CONNECTION_STRING"], process.env["EVENTHUB_NAME"]);
 
exports.handler = function(event, context, callback) {
  console.log('event', event);
  const delivery = await client.send(event);
  callback(null, event);
};
