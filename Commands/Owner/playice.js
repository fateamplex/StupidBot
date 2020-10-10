const ytdl = require('ytdl-core');

module.exports = {
  name: "playice",
  description: "ice",
  run: async(client, args, message) => {
if (message.member.voice.channel) {
      const connection = message.member.voice.channel.join();
      connection.play(ytdl('https://www.youtube.com/watch?v=ZlAU_w7-Xp8', { filter: 'audioonly' }));

    } else {
      message.reply('You need to join a voice channel first!');
    }
}
}