
const Discord = require('discord.js');  // import DiscordJS using the require() method
const client = new Discord.Client();    // create a Discord client for the bot to use

// when the client is ready, print "ready" to the console
client.once('ready', () => {
	console.log('Ready!');
});

// log your bot in to Discord using its unique token
client.login('your-token-goes-here');
