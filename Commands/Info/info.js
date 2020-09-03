const Discord = require("discord.js");

module.exports = {
  name: "info",
  aliases: ["botinfo"],
  description: "E",
  run: async(client, message, args) => {
    const {bot} = require("../../System/config.json");
    let embed = new Discord.MessageEmbed()
       .setTitle("Some shitty things about Stupid-bot (Faka)")
       .addField("What is Stupid-bot?", "Stupid-bot (aka Faka) is a discord bot made by Fakado. He created this bot to learn the basics of JavaScript, so basically it was not intended to be released to the public. But everything changed when he met Stupid-bots great sponsor NeoSoft owner!")
       .addField("Developers", "Fakado - Head Developer / Founder (also very horny lol)\n\n Aephylics - Co-developer / Bug fixer \n\n Big Papa - Hoster / Bug fixer \n\n Zach - Co-hoster / maintainer")
       .addField("Some other shitty things", `Library - [Discord.js](https://discord.js.org) using [nodejs](https://nodejs.org) \n\n Hosting - IDFK ASK BIG PAPA OR ZACH`)
       .addField("Support", "For questions DM Fakado#1963 or Aephylics#2066! \n\n To view stupid-bot's new features join our [Discord Server](https://discord.gg/SQk3fZY) or to just mess around cuz our server is dead!")
       .addField("Sponsors", "NeoSoft - Our rival aswell, they develop in Python while we develop in JavaScript. Join their discord [here](https://discord.gg/KU5K3qK)")
       .setColor("RANDOM")
       .setFooter(`Currently in ${client.guilds.cache.size} guilds with ${client.users.cache.size}! | Version ${bot.version}!`);

    message.channel.send(embed);
  }
}