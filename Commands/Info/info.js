const Discord = require("discord.js");

module.exports = {
  name: "info",
  aliases: ["botinfo"],
  description: "E",
  run: async(client, message, args) => {
    const {bot} = require("../../System/config.json");
    let embed = new Discord.MessageEmbed()
       .setTitle("Some shitty things about Stupid-bot (Faka)")
       .addField("Developers", "Fakado - Head Developer / Founder (also very horny lol)\n\n Aephylics - Co-developer / Bug fixer \n\n Big Papa - Hoster / Bug fixer \n\n Zach - Co-hoster / maintainer")
       .addField("Some other shitty things", `Library - [Discord.js](https://discord.js.org) using [nodejs](https://nodejs.org) \n\n Hosting - IDFK ASK BIG PAPA OR ZACH`)
       .addField("Support", "For questions DM Fakado#1963 or Aephylics#2066! \n\n To view stupid-bot's new features join our [Discord Server](https://discord.gg/SQk3fZY) or to just mess around cuz our server is dead!")
       .setColor("RANDOM")
       .setFooter(`Currently in ${client.guilds.cache.size} guilds with ${client.users.cache.size}! | Version ${bot.version}!`);

    message.channel.send(embed);
  }
}