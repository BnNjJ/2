const Discord = require("discord.js");
const config = require("../config.json");
let colour = config.colour;
let footer = config.footer;

module.exports.run = async (bot, message, args) => {
  message.delete();

  let embed = new Discord.RichEmbed()
  .setTitle("Generator")
  .setDescription("**Help Commands!**\n\n**Generator commands:**\n**.gen** Avaible alts services.\n\n Created by: Flyz#0007")
  .setColor(colour)
  .setTimestamp()
  .setFooter("HammerLock | Generator ©");

  message.channel.send(embed);

}
module.exports.help = {
  name: "help"
}
