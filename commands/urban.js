const urban = require("urban");
const prefix = "!";

module.exports = {
    name: "urban",
    description: "Lets you lookup urban dictionary",
    usage: "(query)",
    args: true,
    guildOnly: false,
    cooldown: 6,
    aliases: [],
    execute(message, args, discord, bot, color){
        let emoji = require("./emoji.json");
        //if(!message.channel.nsfw) return message.reply("Urban dictionary contains nsfw content.");
        if(!args.length || ['search', 'random'].includes(args[0])) return message.reply("Just enter the query");
        let search = args.length ? urban(args.slice(prefix.length).join(" ")) : urban.random();
        try {
            search.first(res => {
                if(!res) return message.channel.send("Didn't find anything related to that.");
                let embeded = new discord.MessageEmbed()
                    .setTitle("Definition for " + res.word)
                    .setDescription(res.definition ? `**Definition** : \n ${res.definition}` : "No definition" + `\n` + res.example ? `Example: \n${res.example}` : "No Examples found")
                    .addFields([
                        {name: "Upvotes:", value: emoji.thumbsup+" "+res.thumbs_up || 0, inline: false},
                        {name: "Downvotes:", value: emoji.thumbsdown+" "+res.thumbs_down || 0, inline: false},
                        {name: "Link", value: `[Urban dictionary](${res.permalink})`, inline: false},
                    ])
                    .setColor(0xff0000)
                    .setAuthor(res.author);
                message.channel.send(embeded);
            })
        }catch (err) {
            return message.channel.send("There was an error in doing that.");
        }
    }
};
// define urban and prefix