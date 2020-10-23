const db = require("quick.db");
const got = require("got");
const Discord = require("discord.js");

module.exports = {
  name: "hentai",
  description: "E",
  run: async(client, message, args) => {
    let pre = db.fetch(`premium_${message.author.id}`);
    if (message.channel.nsfw) {
            if(pre == "true"){
              const embed = new Discord.MessageEmbed();
              got('https://www.reddit.com/r/hentai/random/.json').then(response => {
                  let content = JSON.parse(response.body);
                  let permalink = content[0].data.children[0].data.permalink;
                  let memeUrl = `https://reddit.com${permalink}`;
                  let memeImage = content[0].data.children[0].data.url;
                  let memeTitle = content[0].data.children[0].data.title;
                    embed.addField(`${memeTitle}`, `Enjoy :D`);
                    embed.setImage(memeImage);
                    embed.setColor("RANDOM");
                    message.channel.send(embed);
    }).catch(console.error);
           }
             else {
              message.reply("OOPS: You need to buy premium to execute this command lol");
            }
        } else {
            message.reply("BAKA! What if there's some underaged kiddos here? USE THIS COMMAND IN A NSFW CHANNEL!");
        }
  }
}