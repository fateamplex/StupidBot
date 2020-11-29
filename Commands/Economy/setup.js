const db = require("quick.db");

module.exports = {
  name: "setup",
  description: "Setup your basement!",
  usage: "^setup <basement name>",
  category: "Economy",
  run: async(client, message, args) => {
    let hasBasement = db.fetch(`hasBasement_${message.author.id}`);

    if(hasBasement == "true") return message.channel.send("Bro, you already have a basement lol");

    if(args.length > 4) return message.reply("Basement name can only include four arguments e.g `Fakado's very cool basement`!");

    let bname = args.join(" ");

    if(bname == null) return message.reply("Please include a basement name lol"); 

    db.set(`hasBasement_${message.author.id}`, "true");

    db.set(`basement_${message.author.id}`, { id : message.author.id }, { name : bname});

    message.reply(`There! Created your basement with the ID: \`${message.author.id}\` and with the name \`${bname}\`!!`);
  }
}