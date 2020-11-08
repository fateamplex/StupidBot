const Discord = require("discord.js");

module.exports = {
  name: "info",
  aliases: ["botinfo"],
  description: "E",
  run: async(client, message, args) => {
    const {bot} = require("../../System/config.json");
    let embed = new Discord.MessageEmbed()
       .setTitle("Some Sh!*ty things about Stupid-bot (aka Faka)")
       .addField("Backstory", "Back in 2019, a normal horny discord user decided to learn programming. He was into JavaScript and learned alot of sh*t. Anyways, he thought that the best way he could learn JavaScript was to make a discord bot. And guess what? HE DID! \n He started over a million times and never gave up. He got support from [NeoSoft](https://discord.gg/fQEYHEG) and some fellow friends! As of today, Stupid-bot is a bot which takes functionality over quality!")
       .addField("Developers", "Fakado#1963 - Main Project Leader. Founder of Stupid-bot and the horny dude \n\n Aephylics#2066 - Idea giver and co-developer. Fakado's main javascript teacher \n\n Zach - Hoster and the one who backups everything. Without him we would'nt be able to keep the bot alive! \n\n BigPapa - Ehh let's just put his name here, right Aephylics? \n\n GreenInkling - Founder of [NeoSoft](https://discord.gg/fQEYHEG). Helps us alot by giving us examples and teaching us. Very nice dude")
       .addField("Links", "**[NeoSoft](https://discord.gg/fQEYHEG)** - Basicly, the bot is owned by them")
       .setColor("RANDOM")
       .setFooter(`Currently in ${client.guilds.cache.size} guilds with ${client.users.cache.size}! | Version ${bot.version}!`);

    message.channel.send(embed);
  }
}