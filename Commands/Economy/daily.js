const db = require("quick.db");
const ms = require("parse-ms");
const Discord = require("discord.js");

module.exports = {
  name: "daily",
  description: "Gives you your daily StupidCoins",
  run: async(client, message, args) => {
    let timeout = 86400000;
    let amount = 500;
    let damount = Math.floor(Math.random() * 11);

    let daily = db.fetch(`daily_${message.author.id}`);

     if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));

        const Em = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription(`Bruh, you've already collected your daily reward. Come back in **${time.hours}h ${time.minutes}m ${time.seconds}s**!`);

        message.channel.send(Em);
    } else {
      const Eme = new Discord.MessageEmbed()
        .setTitle(`${message.author.username} Daily Reward!`, message.author.displayAvatarURL())
        .setColor("GREEN")
        .setDescription(`Collected ${amount} BakaCoins and ${damount} IQ`);

        message.channel.send(Eme);

        db.add(`money_${message.author.id}`, amount)
        db.add(`diamonds_${message.author.id}`, damount)
        db.set(`daily_${message.author.id}`, Date.now())
    }
  }
}