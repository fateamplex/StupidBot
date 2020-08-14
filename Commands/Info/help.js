const Discord = require("discord.js");

module.exports = {
  name: "help",
  description: "Shows u this msg",
  run: async(client, message, args) => {
    const Em = new Discord.MessageEmbed()
      .setTitle("Stupid Commands")
      .addField("Fun", "`8ball`, `meme`, `joke(bad ones)`")
      .addField("Info", "`help`, `uptime`")
      .addField("Economy", "`bal`, `daily`, `shop`, `buy`")
      .addField("Moderation", "`ban`, `delete-channel`")
      .setColor("RANDOM");

      message.channel.send(Em);
  }
}