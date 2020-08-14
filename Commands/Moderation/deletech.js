module.exports = {
  name: "delete-channel",
  description: "E",
  run: async(client, message, args) => {
    if (!message.member.hasPermission("MANAGE_CHANNELS")) {
            return message.reply("Woopsies: You don't have the required permissions to execute this command ❌")
                .then(m => m.delete(5000));
        
        }
        // No bot permissions
        if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) {
            return message.reply("Woopsies: I don't have the required permissions to execute this command ❌")
                .then(m => m.delete(5000));
        }


        const ch = message.mentions.channels.first() || message.guild.channel.get(args[0]);
      try{
        ch.delete();

        message.channel.send(`Removed ${ch.name} from this world!`);
      } catch(err){
        message.channel.send(`Woopsies: A unexpected error occured!`);
        console.log(err);
      }
  }
}