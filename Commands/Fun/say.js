module.exports = {
  name: "say",
  description: "No roleplaying haha get nuub",
  run: async(client, message, args) => {
    let e = args.join(" ");

    message.delete();

    message.channel.send(e);
  }
}