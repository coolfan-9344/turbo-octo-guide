module.exports = {
    name: "serverinfo",
    description: "Tells you about this server.",
    usage: "",
    args: false,
    guildOnly: true,
    cooldown: 3,
    aliases: ["guildinfo", "serverstatus"],
    execute(message, args, discord, bot, color){
        let embed = new discord.MessageEmbed()
            .setTitle(message.guild.name + "'s info")
            .setDescription("Server's info")
            .setThumbnail(message.guild.iconURL({size: 256}))
            .addFields(
                {name: "Member count", value: message.guild.members.cache.size, inline: true},
                {name: "Human count", value: message.guild.members.cache.size-message.guild.members.cache.filter(usr => usr.user.bot).size, inline: true},
                {name: "Bot count", value: message.guild.members.cache.filter(usr => usr.user.bot).size, inline: true},
                {name: "Channel count", value: `Text Channels : ${message.guild.channels.cache.filter(ch => ch.type = "text").size}, Voice Channels : ${message.guild.channels.cache.filter(ch => ch.type = "voice").size}, Total : ${message.guild.channels.cache.filter(c => c.type === "text").size+message.guild.channels.cache.filter(c => c.type === "voice").size+message.guild.channels.cache.filter(c => c.type === "news").size+message.guild.channels.cache.filter(c => c.type === "store").size}`, inline: true},
                {name: "Role count", value: message.guild.roles.cache.size, inline: true},                
                {name: "Icon's URL", value: `[Link](${message.guild.iconURL({dynamic: true})})`, inline: true},
                {name: "Boost level", value: message.guild.premiumTier, inline: true},
                {name: "Boost Count", value: message.guild.premiumSubscriptionCount + " boosts", inline: true},
                {name: "Server Created Time", value:  message.guild.createdAt, inline: true}
            );
        message.channel.send(embed);
        message.channel.send("{name: \"Channel count\", value: `Text Channels : ${message.guild.channels.cache.filter(ch => ch.type = \"text\").size}, Voice Channels : ${message.guild.channels.cache.filter(ch => ch.type = \"voice\").size}, Total : ${message.guild.channels.cache.filter(c => c.type === \"text\").size+message.guild.channels.cache.filter(c => c.type === \"voice\").size+message.guild.channels.cache.filter(c => c.type === \"news\").size+message.guild.channels.cache.filter(c => c.type === \"store\").size}`, inline: true},")
    }
};