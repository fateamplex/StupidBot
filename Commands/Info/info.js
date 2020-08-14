const Discord = require("discord.js");

module.exports = {
  name: "info",
  aliases: ["botinfo"],
  description: "E",
  run: async(client, message, args) => {
    const {bot} = require("../../System/config.json");
    let embed = new Discord.MessageEmbed()
        .setTitle("**What is Stupid-bot?**")
        .setDescription("Stupid-bot (aka Faka) is a Discord Bot created to force people to have headaches or just mess around. This bot was first a way for me to develop my javascript skills. But now, it went straight to hell.")
        .addField("Created by:",
            "Fakado- the head developer and is very horny\n\n" +
            "Aephylics - the bug fixer and co-developer of StupidBot\n\n" +
            "Big Papa - Bot Hoster and co-developer of StupidBot (Currently on vacation)\n\n" +
            "Join our [Discord](https://discord.gg/SQk3fZY) to talk with the us shitty devs or hangout cuz y not?\n\n")
        .setTimestamp()
        .setFooter(`Version:  ${bot.version} | Currently on ${client.guilds.cache.size} servers with ${client.users.cache.size} users.`)
        .setColor("GREEN");

    message.channel.send(embed);
  }
}