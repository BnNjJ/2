const Discord = require("discord.js");
const config = require("../config.json");
let colour = config.colour;
let footer = config.footer;

module.exports.run = async (bot, message, args) => {
  message.delete();

  let embed = new Discord.RichEmbed()
  .setTitle("Avaible services:")
  .setDescription(".fortnite ; minecraft ; .spotify ; .uplay ")
  .setColor(colour)
  .setTimestamp()
  .setFooter("HammerLock | Generator ©");

  message.channel.send(embed);

}
module.exports.gen = {
  name: "gen"
}
