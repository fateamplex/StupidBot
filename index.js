const Discord = require("discord.js");
const {bot} = require("./System/config.json");
const fs = require("fs");

const client = new Discord.Client();

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

client.categories = fs.readdirSync("./Commands/");

["Handler"].forEach(handler => {
    require(`./System/${handler}`)(client);
});


client.on('ready', () => {
  console.log(`[SYSTEM] Logged in as ${client.user.username}! Everything is functional and works fine!`);

  client.user.setActivity("Changing code, bot is closed!");
});

client.on('message', message => {
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(bot.prefix)) return;
    if (!message.member) message.member = message.guild.fetchMember(message);

    const args = message.content.slice(bot.prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    let command = client.commands.get(cmd);
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    if (command) 
        command.run(client, message, args);
});

client.login(process.env.TOKEN);

const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log("[PINGER] Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://StupidPine.fateamplex.repl.co`);
}, 280000);