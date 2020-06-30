module.exports = {
    name: "showroles",
    description: "Lists all roles",
    usage: "",
    args: false,
    guildOnly: true,
    cooldown: 5,
    aliases: ["listroles", "roles"],
    execute(message, args, discord, bot, color){
        if(!message.guild.members.cache.get(bot.user.id).hasPermission("MANAGE_ROLES"))
        return message.channel.send(
            new discord.MessageEmbed()
                .setColor("0xFF0000")
                .setTitle("Error : Bot does not have the correct permissions to continue this task.")
                .setDescription("PLease contact an Admin to give proper permissions to the bot.")
                .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
        );
        let roles = message.guild.roles.cache.map(r => `Name: **\`${r.name}\`** Color: **\`${r.color.toString(16)}\`**`).join(`\n`);
        message.channel.send(`***Roles list for ${message.guild.name}***\n${roles}`, {split: true}).catch((e) => message.channel.send("There was a very serious error. It was unforseen, Please screenshot the message and post it in the support server."));
    }
};