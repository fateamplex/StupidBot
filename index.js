const Discord = require('discord.js');

const db = require('quick.db');

const { bot } = require('./System/config.json');
const fs = require('fs');
const client = new Discord.Client();

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

client.categories = fs.readdirSync('./Commands/');

['Handler'].forEach(handler => {
	require(`./System/${handler}`)(client);
});

client.on('ready', () => {
	console.log(
		`[SYSTEM] Logged in as ${
			client.user.username
		}! Everything is functional and works fine!`
	);

	client.user.setActivity(
		`^help | Stupidbot | ${bot.codename} v${bot.version} | FakaCord`
	);
});

client.on('message', message => {
  let prefix = bot.prefix;
	if (message.author.bot) return;
	if (!message.guild) return;
	if (!message.content.startsWith(prefix)) return;
	if (!message.member) message.member = message.guild.fetchMember(message);

	const args = message.content
		.slice(prefix.length)
		.trim()
		.split(/ +/g);
	const cmd = args.shift().toLowerCase();

	if (cmd.length === 0) return;

	let command = client.commands.get(cmd);
	if (!command) command = client.commands.get(client.aliases.get(cmd));

	if (command) command.run(client, message, args);
});

client.on('guildCreate', guild => {
	console.log(`Joined new guild: ${guild.name} with ${guild.users.cache.size}`);
});

client.login(process.env.TOKEN);

//Music
const MusicBot = require("discord-music-system"); // Require the module
 
const mbot = new MusicBot({ // Create the bot
    token: process.env.TOKEN, // You can find the token at https://discord.com/developers/applications/
    ytApiKey: process.env.YTKEY, // Video to explain how to get it: https://www.youtube.com/watch?v=VqML5F8hcRQ
    prefix: '^music ', // Example: /
    game: 'Music is out!! Run ^music help!!' // Example: /help
});
 
mbot.run();

const http = require('http');
const express = require('express');
const app = express();
app.get('/', (request, response) => {
	console.log('[PINGER] Ping Received');
	response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
	http.get(`http://StupidPine.fateamplex.repl.co`);
}, 280000);
