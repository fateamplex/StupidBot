const db = require("quick.db");
const {weapons, boxes} = require("./Items/items.json");
const Discord = require("discord.js");

module.exports = {
  name: "buy",
  description: "E",
  run: async(client, message, args) => {
    //Database Fetch
    let ub = db.fetch(`money_${message.author.id}`);

    let ud = db.fetch(`diamonds_${message.author.id}`);

    if(ud == null) ud = 0;

    if(ub == null) ub = 0;

    //Sword
    if(args[0] == "sword"){
      if(ub < weapons.sword){
        message.channel.send(`Bruh: You're too poor to buy this item1 You need atleast \`${weapons.sword}\`BakaCoins`);
      } else {
        try{
          db.subtract(`money_${message.author.id}`, weapons.sword);
          db.push(`inv_${message.author.id}`, "Sword");

          message.channel.send(`Hey homie, you've successfully buyed a sword for \`${weapons.sword}\`BakaCoins! GG`);
        } catch(err){
          message.channel.send("Woopsies: We're sorry but an error occured!").then(console.log(err));
        }
      }
    }
    //Boxes
  }
}