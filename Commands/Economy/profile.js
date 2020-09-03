const db = require('quick.db');
const {MessageEmbed} = require("discord.js");

module.exports = {
  name: "profile",
  aliases: ["rank"],
  description: "E",
  run: async(client, message, args) => {
    let badges = db.fetch(`badge_${message.author.id}`);
    
    if(badges == null) badges = 'none';
    if(message.author.id == owner){
      const embed = new MessageEmbed()
       .setTitle(`${message.author.username}'s Profile`)
       .addField("Badges", badges);
      
    }
    
  }
}