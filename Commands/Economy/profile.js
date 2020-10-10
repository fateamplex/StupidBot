const db = require('quick.db');
const {MessageEmbed} = require("discord.js");
const {bot} = require("../../System/config.json");
module.exports = {
  name: "idcard",
  aliases: ["idc"],
  description: "E",
  run: async(client, message, args) => {
    let badges = db.fetch(`badge_${message.author.id}`);
    let run = db.fetch(`comrun_${message.author.id}`);
    let verified = db.fetch(`verified_${message.author.id}`);

    if(verified != 'true') verified = "False";
    if(run == null) run = 0;
    if(badges == null) badges = 'None';

    const eme = new MessageEmbed()
      .setTitle(`${message.author.username}'s ID`)
      .addField(`Badges`, badges)
      .addField(`Commands Run`, `${run}`, true)
      .addField(`Verified User`, verified)
      .addField(`ID`, message.author.id)
      .setColor("GREEN");
      
      message.channel.send(eme);
  }
}