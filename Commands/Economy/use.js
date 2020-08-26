const db = require("quick.db");
const {MessageEmbed} = require("discord.js");

module.exports = {
  name: "use",
  aliases: ["consume"],
  description: "E",
  run: async(client, message, args) => {
    let box = db.fetch(`bakabox_${message.author.id}`);

    if(box == null) box = 0;
    
   if(args[0] == "bakabox" || "bb")
   {
     if(box <= 0){
       message.reply("You don't own any boxes bruhh. Go and buy one kid");
     } else{
    let rand = {
         "1": "diamonds",
         "2": "Invincibility"
    };

    const values = Object.values(rand);

  const randIndex = values[parseInt(Math.random() * values.length)];

    if(randIndex == "diamonds"){
      db.add(`diamonds_${message.author.id}`, 100);

      db.subtract(`bakabox_${message.author.id}`, 1);
      message.channel.send("Woah: You got 100 diamonds from your box!");
    } else if(randIndex == "Invincibility"){
      db.push(`powers_${message.author.id}`, "Invincibility");

      db.subtract(`bakabox_${message.author.id}`, 1);
      message.channel.send("You got the godly Invincibility power! GG!");
    }
     }
    } else {
      message.reply(`Woopsies: We couldn't find that item! Make sure you own it or be gone.`)
    }
  }
}