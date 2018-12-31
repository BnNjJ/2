const Discord = require("discord.js")
const fs = require("fs")
const config = require("../config.json")
const talkedRecently = new Set();

exports.run = (client, message, args) => {

    if (talkedRecently.has(message.author.id)) {
        message.reply(`You need to wait ${config.cooldown} minutes to use this command again!`)
    } else {
        fs.readFile('./fortnite.txt', function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let random = lines[Math.floor(Math.random()*lines.length)];

            let hex = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
            let embed = new Discord.RichEmbed()
            .addField("Fortnite Alt", `Here is your Fortnite account: \n${random}`)
            .setThumbnail("https://cdn2.unrealengine.com/Fortnite%2Fsearch-for-survivors%2FsignupBanner-155x221-7d1f31411baf91e6cadf490c6f60f98a72b38b4c.png")
            .setColor(hex)
            message.author.send(embed)

            message.reply("Your account has been generated,Check your DM!")

            talkedRecently.add(message.author.id);
            setTimeout(() => {
                talkedRecently.delete(message.author.id);
            }, config.cooldown * 60 *1000);

        })
    }
}