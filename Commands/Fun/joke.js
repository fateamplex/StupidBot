const got = require('got');
const Discord = require('discord.js');

module.exports = {
  name: "joke",
  description: "E",
  run: async(client, message, args) => {
    got('https://www.reddit.com/r/jokes/random/.json').then(response => {
        let content = JSON.parse(response.body);
        var title = content[0].data.children[0].data.title;
        var joke = content[0].data.children[0].data.selftext;
        message.channel.send('**' + title + '**');
        message.channel.send(joke);
    }).catch(console.error);
  }
}