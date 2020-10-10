const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
  name: "balance",
  aliases: ["bal"],
  description: "E",
  run: async(client, message, args) => {
     let bal = db.fetch(`money_${message.author.id}`);

     let di = db.fetch(`diamonds_${message.author.id}`);

    if (bal === null) bal = 0;
    if (di == null) di = 0;

    const Em = new Discord.MessageEmbed()
      .setTitle(`${message.author.username}'s Balance'`)
      .addField("BakaCoins", `${bal}$`)
      .addField("IQ", `${di} IQ`)
      .setColor("RANDOM");

      message.channel.send(Em);
  }
}