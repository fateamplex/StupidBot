const db = require("quick.db");
const {weapons, boxes} = require("./Items/items.json");
const Discord = require("discord.js");

module.exports = {
  name: "buy",
  description: "E",
  run: async(client, message, args) => {
    //Database Fetch
    let ub = db.fetch(`money_${message.author.id}`);

    let ud = db.fetch(`diamonds_${message.author.id}`)

    let f = db.fetch(`a1_${message.author.id}`);
    let fr = db.fetch(`a2_${message.author.id}`);

    if(ud == null) ud = 0;

    if(ub == null) ub = 0;

    //Sword
    if(args[0] == "sword"){
      if(f == "true") return message.channel.send("You've already bought this item m8");


      if(ub < weapons.sword){
        message.channel.send(`Bruh: You're too poor to buy this item! You need atleast \`${weapons.sword}\`BakaCoins`);
      } else {
        try{
          db.subtract(`money_${message.author.id}`, weapons.sword);
          db.push(`weapons_${message.author.id}`, "Sword");
          db.set(`a1_${message.author.id}`, "true");

          message.channel.send(`Hey homie, you've successfully bought a sword for \`${weapons.sword}\`BakaCoins! GG`);
        } catch(err){
          message.channel.send("Woopsies: We're sorry but an error occured!").then(console.log(err));
        }
      }
    } else if(args[0] == "rifle"){
      if(fr == "true") return message.channel.send("You've already bought this item m8");


      if(ub < weapons.rifle){
        message.channel.send(`Bruh: You're too poor to buy this item! You need atleast \`${weapons.rifle}\`BakaCoins`);
      } else {
        try{
          db.subtract(`money_${message.author.id}`, weapons.rifle);
          db.push(`weapons_${message.author.id}`, "Rifle");
          db.set(`a2_${message.author.id}`, "true");

          message.channel.send(`Hey homie, you've successfully bought a rifle for \`${weapons.rifle}\`BakaCoins! GG`);
        } catch(err){
          message.channel.send("Woopsies: We're sorry but an error occured!").then(console.log(err));
        }
      }
    }
    //Boxes
    else if(args[0] == "bakabox"){
      if(ub < boxes.bakabox){
        message.channel.send(`Bruh: You're too poor to buy this item! You need atleast \`${boxes.bakabox}\`BakaCoins`);
      } else {
        try{
          db.subtract(`money_${message.author.id}`, boxes.bakabox);
          db.add(`bakabox_${message.author.id}`, 1);

          message.channel.send(`Hey homie, you've successfully bought a bakabox for \`${boxes.bakabox}\`BakaCoins! GG`);
        } catch(err){
          message.channel.send("Woopsies: We're sorry but an error occured!").then(console.log(err));
        }
      }
    } 
    //Premium
    else if(args[0] == "premium"){
      let pre = db.fetch(`premium_${message.author.id}`);

      if(pre != true){
      if(ud < 1000) {
        message.channel.send(`Bruh: You're too poor to buy this item! You need atleast 100 IQ`);
      }
      else{
        db.subtract(`diamonds_${message.author.id}`, 100);
        db.set(`premium_${message.author.id}`, "true");
        db.push(`badge_${message.author.id}`, "Premium");

        message.channel.send(`Hey homie, you've successfully bought **__PREMIUM__** for 100 IQ! Hoorayyy!`);
      }
      } else {
        message.reply("Bro~ you already bought premium");
      }
    }
     else {
      message.channel.send("Bruh: That item doesn't exist! Note that all the items are in lowercase. For example `^buy sword` instead of `^buy Sword`!");
    } 
  }
}