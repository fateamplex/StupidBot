const Discord = require("discord.js");
const {bot} = require("../../System/config.json");

module.exports = {
  name: "bakarate",
  description: "E",
  run: async(client, message, args) => {
    if(message.author.id !== bot.owner){
    let pre = Math.floor(Math.random() * 101);
    let em = new Discord.MessageEmbed()
      .setTitle("BakaRate")
      .setDescription(`${message.author.username} is ${pre}% baka!`)
      .setColor("RANDOM");

      message.channel.send(em);
    } else {
      let em = new Discord.MessageEmbed()
      .setTitle("BakaRate")
      .setDescription(`${message.author.username} is 99999% baka!`)
      .setColor("RANDOM");

      message.channel.send(em);
    }
  }
}