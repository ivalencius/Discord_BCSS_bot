
const Discord = require('discord.js');  // import DiscordJS using the require() method
const client = new Discord.Client();    // create a Discord client for the bot to use

// when the client is ready, print "ready" to the console
client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', () => {
	console.log('Hello World')
});

// log your bot in to Discord using its unique token
client.login('Nzg0MjA4ODE0NzY4NjUyMjg5.X8l9Xw.91t1UX3Ovdo6heXStuiVsrucixI');
