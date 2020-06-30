module.exports = {
    name: "about",
    description: "Tells you about the bot",
    usage: "",
    args: false,
    guildOnly: false,
    cooldown: 3,
    aliases: ["info", "aboutme"],
    execute(message, args, discord, bot, color){
        let embed = new discord.MessageEmbed()
            .setTitle("About the bot.")
            .setDescription("This is a bot")
            .setThumbnail(bot.user.displayAvatarURL())
            .setColor(color)
            .addField("Ping", bot.ws.ping + "ms", true)
            .addField("Name", bot.user.username, true)
            .addField("Discriminator", bot.user.discriminator, true)
            .addField("Server count", bot.guilds.cache.size, true)
            .addField("Member count", bot.users.cache.size, true)
            .addField("Developer", "Fan Boy#9344", true)
            .addField("Node version", "v13.5.0",  true);
        message.channel.send(embed); 
    }
};