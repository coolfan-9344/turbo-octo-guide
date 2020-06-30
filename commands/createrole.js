module.exports = {
    name: "createrole",
    description: "Makes a role",
    usage: "(role name) (role color : 6 digit : optional)",
    args: true,
    guildOnly: true,
    cooldown: 3,
    aliases: ["addrole", "makerole"],
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
        if(args[args.length-1].length === 6 && /^([0-9a-fA-F]{3}){1,2}$/.test(args[args.length-1]) && args[1]){
            let reversedstring = args.join(" ").split("").reverse().join("").slice(7).split("").reverse().join("");
            message.guild.roles.create({
                data: {
                    name: reversedstring,
                    color: args[args.length-1]
                },
                reason: `Create-Role command used by ${message.author.tag} (${message.author.id})`
            }).then((role) => {
                message.channel.send(
                    new discord.MessageEmbed()
                        .setTitle("Role created")
                        .setColor("0x00FF00")
                        .setDescription(`<@&${role.id}> Has been created.`)
                );
            });
        } else {
            let reversedstring = args.join(" ");
            message.guild.roles.create({
                data: {
                    name: reversedstring
                },
                reason: `Create-Role command used by ${message.author.tag} (${message.author.id})`
            }).then((role) => {
                message.channel.send(
                    new discord.MessageEmbed()
                        .setTitle("Role created")
                        .setColor("0x00FF00")
                        .setDescription(`<@&${role.id}> Has been created.`)
                );
            });
        }
    }
};