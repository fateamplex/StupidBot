const {weapons, boxes} = require("./Items/items.json");
const {promptMessage} = require("../../System/functions.js");
const Discord = require("discord.js");

module.exports = {
  name: "shop",
  aliases: ["market"],
  description: "E",
  run: async(client, message, args) => {
    //PrompMessage
    const promptEmbed =  new Discord.MessageEmbed()
        .setTitle("BakaShop")
        .setColor("PINK")
        .addField("⚔", "Weapons")
        .addField("📦", "Boxes")
        .addField("🤷‍♂️", "Other Stuff")
        .setDescription("React with any of those emoji's")
        .setFooter("Goes invalid after 30 seconds");
    //weapons
    const wep = new Discord.MessageEmbed()
      .setTitle("BakaShop [Weapons]")
      .setColor("BLUE")
      .setDescription("All buyable weapons")
      .addField("Sword", `Sometimes you need to protect yourself: \`${weapons.sword}$\``)
      .addField("Rifle", `Sometimes a Sword cannot be enough: \`${weapons.rifle}$\``);

    //Boxes
    const bwep = new Discord.MessageEmbed()
      .setTitle("BakaShop [Boxes]")
      .setColor("RED")
      .setDescription("All buyable Potions")
      .addField("BakaBox", `Gives you something unbuyable: \`${boxes.bakabox}$\``);

    //Other
      const wepi = new Discord.MessageEmbed()
      .setTitle("BakaShop [Other]")
      .setColor("RED")
      .setDescription("Other Stuff")
      .addField("Premium", "Special Commands, Boost and more! `100` IQ");
      //Message
      await message.channel.send(promptEmbed).then(async msg => {
            // Await the reactions and the reactioncollector
            const emoji = await promptMessage(msg, message.author, 30, ["📦", "⚔", "🤷‍♂️"]);

            //Weapons(1)
            if(emoji == "⚔"){
              msg.delete();

              message.channel.send(wep);
            } //Boxes(2)
            else if(emoji == "📦"){
              msg.delete();

              message.channel.send(bwep);
            }
            else if(emoji == "🤷‍♂️"){
              msg.delete();

              message.channel.send(wepi);
            }
      });
  }
}