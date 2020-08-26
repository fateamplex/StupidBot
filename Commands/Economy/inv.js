const db = require("quick.db");
const {MessageEmbed} = require("discord.js");

module.exports = {
  name: "inventory",
  aliases: ["inv"],
  description: "E",
  run: async(client, message, args) => {
    let weapons = db.get(`weapons_${message.author.id}`);
    let boxes = db.get(`bakabox_${message.author.id}`);
    let powers = db.get(`powers_${message.author.id}`);
     
    if(powers == null) powers = "None";
    if(weapons == null) weapons = "Empty";
    if(boxes == null) boxes = 0;

    let em = new MessageEmbed()
      .setTitle(`${message.author.username}'s Inventory`)
      .setColor("RANDOM")
      .addField("Weapons", weapons)
      .addField("BakaBoxes", `${boxes} <:bakabox:743816243282182205>`)
      .addField("Powers", powers);

      message.channel.send(em);
    
  }
}