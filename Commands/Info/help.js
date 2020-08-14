const Discord = require("discord.js");

module.exports = {
  name: "help",
  description: "Shows u this msg",
  run: async(client, message, args) => {
    const Em = new Discord.MessageEmbed()
      .setTitle("Stupid Commands")
      .addField("Fun", "`meme`")
      .addField("Info", "`help`")
      .addField("Economy", "`bal`, `daily`")
      .setColor("RANDOM");

      message.channel.send(Em);
  }
}