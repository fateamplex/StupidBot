const db = require("quick.db");
const Discord = require("discord.js");

module.exports = {
  name: "basement",
  description: "View your basement, a command very similar to inventory!",
  usage: "^basement",
  category: "Economy",
  run: async(client, message, args) => {
    let hasBasement = db.fetch(`hasBasement_${message.author.id}`);
    
    if(hasBasement == null) return message.channel.send("Ayy! You need a basement! Make one using the command `^setup`!");

    let basement = db.get(`basement_${message.author.id}`);

    let em = new Discord.MessageEmbed()
      .setTitle("Basement")
      .setDescription("Some stuff about your basement")
      .addField("Basement name", basement.name)
      .addField("Kids", 0)
      .setColor("PURPLE")
      .addField("Basement ID", basement.id); 
      
      message.channel.send(em);

  }
}