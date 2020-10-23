const db = require("quick.db");
const got = require("got");
const Discord = require("discord.js");

module.exports = {
  name: "porn",
  description: "E",
  run: async(client, message, args) => {
    let pre = db.fetch(`premium_${message.author.id}`);
    if (message.channel.nsfw) {
              const embed = new Discord.MessageEmbed();
              got('https://www.reddit.com/r/nsfw/random/.json').then(response => {
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
            message.reply("BAKA! What if there's some underaged kiddos here? USE THIS COMMAND IN A NSFW CHANNEL!");
        }
  }
}