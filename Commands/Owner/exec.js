const {bot} = require("../../System/config.json");
const { exec } = require("child_process");

module.exports = {
  name: "exec",
  description: "E",
  run: async(client, message, args) => {
    if(message.author.id == bot.owner || message.author.id == bot.aephylics){
      const e = args.join(" ");
      exec(e, (error, data, getter) => {
	if(error){
		message.channel.send(`\`\`\`${error.message}\`\`\``);
		return;
	}
	if(getter){
		message.channel.send(`\`\`\`${data}\`\`\``);
		return;
	}
	message.channel.send(`\`\`\`${data}\`\`\``);

});
    } else return;
  }
}