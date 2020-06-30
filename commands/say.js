module.exports = {
    name: "say",
    description: "Says what you ask it to.",
    usage: "(text)",
    args: true,
    guildOnly: true,
    cooldown: 5,
    aliases: ["repeat", "announce"],
    execute(message, args, discord, bot, color){
        let authorg = message.guild.members.cache.get(message.author.id);
        if((authorg.hasPermission("MANAGE_GUILD") && authorg.hasPermission("MANAGE_MESSAGES")) || authorg.hasPermission("ADMINISTRATOR")) {
            let oldargs = message.content.substring("!".length).split(" ");
            let unmapped = message.content.slice(oldargs[0].length + 1).split(" ");
            let mapped = unmapped.join(" ");
            message.channel.send(mapped + `\n\n-${message.author.username}#${message.author.discriminator}`).then(m => message.delete());
        } else {
            return message.channel.send(
                new discord.MessageEmbed()
                    .setTitle("Error")
                    .setDescription("You do not have the appropriate permissions")
                    .setColor(color)
                    .setFooter("You need manage server and Manage messages permissions to run these commands.")
            );
        }
    }
};