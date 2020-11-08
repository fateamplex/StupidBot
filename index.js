const Discord = require('discord.js');

const db = require('quick.db');

const { bot } = require('./System/config.json');
const fs = require("fs");
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
		`^help | Stupidbot | ${bot.codename} v${bot.version} | NeoSoft`
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

	if (command){
     command.run(client, message, args);
     db.add(`comrun_${message.author.id}`, 1);
  }
});

client.on('guildCreate', guild => {
	console.log(`Joined new guild: ${guild.name} with ${guild.users.cache.size}`);
});

client.login(process.env.TOKEN);

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
const Database = require("@replit/database")
