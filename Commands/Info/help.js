const Discord = require("discord.js");

module.exports = {
  name: "help",
  description: "Shows u this msg",
  run: async(client, message, args) => {
    const Em = new Discord.MessageEmbed()
      .setTitle("Stupid Commands")
      .setDescription("**OOPS**: All of us developers (those developing stupid-bot) are busy with school so we can't work on this bot alot, thank you for reading lol")
      .addField("Fun", "`8ball`, `meme`, `joke(bad ones)`, `bakarate`")
      .addField("Info", "`help`, `uptime`, `botinfo`")
      .addField("Economy", "`bal`, `daily`, `shop`, `buy`, `use-box`, `inventory`, `idcard`")
      .addField("Moderation", "`ban`, `delete-channel`")
      .addField(`Premium`, "hentai`")
     .setColor("RANDOM");
      message.channel.send(Em);
  }
}