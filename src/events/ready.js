const client = require('../bot.js');
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});