module.exports = {
    name: "removerole",
    description: "Deletes a pre-existing role",
    usage: "(role name)",
    args: true,
    guildOnly: true,
    cooldown: 3,
    aliases: ["deleterole", "delrole"],
    execute(message, args, discord, bot, color){
        if(!message.guild.members.cache.get(message.author.id).hasPermission("MANAGE_ROLES"))
        return message.channel.send(
            new discord.MessageEmbed()
                .setColor("0xFF0000")
                .setTitle("Error : You do not have the permissions")
                .setDescription("You do not have the adequate Permissions")
                .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
        );
    
    if(!message.guild.members.cache.get(bot.user.id).hasPermission("MANAGE_ROLES"))
        return message.channel.send(
            new discord.MessageEmbed()
                .setColor("0xFF0000")
                .setTitle("Error : Bot does not have the correct permissions to continue this task.")
                .setDescription("PLease contact an Admin to give proper permissions to the bot.")
                .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
        );
    let roledelete = message.guild.roles.cache.find(r => r.name == args.join(" "))
        || message.guild.roles.cache.get(args.join(" "))
        || message.guild.roles.cache.find(r => r.name.toLowerCase().includes(args.join(" ").toLowerCase()))
        || message.mentions.roles.first();
    if(!roledelete)
        return message.channel.send(
            new discord.MessageEmbed()
                .setTitle("I cannot find that role")
                .setColor("0xFF0000")
                .setDescription("Couldn't find that role.")
                .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
        );
        if(roledelete.comparePositionTo(message.guild.members.cache.get(message.author.id).roles.highest) > 0) {
            return message.channel.send(
                new discord.MessageEmbed()
                    .setTitle("You are not high enough in the hierachy to do that.")
                    .setDescription("Ask a person with a higher role to do it for you.")
                    .setColor("0xff0000")
                    .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
            );
        };
    roledelete.delete({
        reason: "Remove-role command used by " + `${message.author.tag} (${message.author.id})`
    }).then((deleted) => {
        message.channel.send(
            new discord.MessageEmbed()
                .setTitle("Deleted role")
                .setColor("0x00ff00")
                .setDescription(`${deleted.name} role was deleted.`)
                .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
        );
    })
    .catch((e) => {
        message.channel.send(
            new discord.MessageEmbed()
                .setTitle("Role could not be deleted. Please check Role hierarchy.")
                .setDescription("The role might be above the bot's role.")
                .setColor("0xff0000")
                .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
        )
    });
    }
};