const got = require('got');
const Discord = require('discord.js');
const db = require("quick.db");

module.exports = {
  name: "autoposter",
  description: "E",
  run: async(client, message, args) => {
    let pre = db.fetch(`premium_${message.author.id}`);
            if(pre == "true"){
              if (!message.member.hasPermission("MANAGE_CHANNELS") || !message.guild.me("MANAGE_CHANNELS")) {
            return message.reply("Woopsies: I don't have the required permissions to execute this command ❌")
                .then(m => m.delete(5000));
        
        } else {
          let type = args[0];
          let t = args[1];

          //settings
          if(type = "settings"){
            if(t = "setsubreddit"){
              let sr = args[3];
              
              if(sr == null){
                message.reply("Woopsies: U did not include the subreddit Bruh ❌");
               }
              db.set(`autopost_${message.guild.id}`, { source: sr });

              message.channel.send(`Successfully changed the subreddit to r/${sr}`);
            }

            //Time
            
            //Else
             else {
              message.reply("Woopsies: That's not a valid option ❌");
            }
          }

          //Break

          //Start
          
          //Help

          //Else
          else {
            message.reply("Woopsies: That's not a valid option ❌");
          }
        }
            }
             else {
              message.reply("OOPS: You need to buy premium to execute this command lol");
            }
     }
}