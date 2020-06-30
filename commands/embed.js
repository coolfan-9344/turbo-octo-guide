module.exports = {
    name: "embed",
    description: "Embeds your message",
    usage: "(channel) (color, hex code. 6 digit only) (text)",
    args: true,
    guildOnly: true,
    cooldown: 5,
    aliases: ["embedded"],
    execute(message, args, discord, bot, color){
        if(!args[1]) {
            return message.channel.send("I cannot see a valid color.");
        };
        if(!args[2]) {
            return message.channel.send("I cannot see text to embed.")
        };
        if(args[1].length >= 7) return message.channel.send("Invalid hex code.");

        let channel = message.mentions.channels.first();
        if (!channel) {
            return message.channel.send("I cannot see a valid channel mention.");
        };
        let authorg = message.guild.members.cache.get(message.author.id);
        if((authorg.hasPermission("MANAGE_GUILD") && authorg.hasPermission("MANAGE_MESSAGES")) || authorg.hasPermission("ADMINISTRATOR")) {
            let oldargs = message.content.substring("!".length).split(" ");
            let unmapped = message.content.slice(oldargs[0].length + 3).split(" ");
            let totaltext = message.content.slice((oldargs[0] + oldargs[1] + oldargs[2]).length + 4).split(" ");
            let mapped = totaltext.join(" ");
            let embbed = new discord.MessageEmbed()
                .setDescription(mapped)
                .setAuthor(message.author.username, message.author.displayAvatarURL())
                .setColor("0x" + args[1]);
            channel.send(embbed);
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