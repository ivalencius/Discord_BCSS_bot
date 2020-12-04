
const Discord = require('discord.js');  // import DiscordJS using the require() method
const client = new Discord.Client();    // create a Discord client for the bot to use

//Import config using require
const { token, prefix } = require('./config.json')

// when the client is ready, print "ready" to the console
client.once('ready', () => {
	console.log('Ready!');
	console.log('config');
});

client.on('message', (message) => {

	//If author of the message is a bot -> ignore
	//If the message doesnt start with a prefix -> ignore
	if(message.author.bot || !message.content.startsWith(prefix)) { return; }

	//String to array Ex: !beep 1 2 3 4 5
	let args = message.content.slice(prefix.length).trim().split(/ +/); //prefix removed, split along any number of spaces (25 spaces = split once)
	
	let command = args.shift().toLowerCase();

	console.log(message.content);

	//When the message is equal to beep, output boop
	if (command === 'beep') {
		message.channel.send('boop!');
	}
	//If message.content is equal to '!ping; then 'pong!'
	if (command ===  'ping') {
		message.channel.send('pong!');
	}

	//ISSUES
	//input !beep10 --> still gives output
	//Need to hide token
	//Messages like 'boop' are hardcoded
});

// log your bot in to Discord using its unique token
client.login(token);
