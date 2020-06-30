/*let prefix = "!";

module.exports = {
    name: "role",
    description: "Adds/Removes role from a person",
    usage: "(person) (role)",
    args: true,
    guildOnly: true,
    cooldown: 5,
    aliases: ["updaterole"],
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
        let oldargs = message.content.substring(prefix.length).split(" ").join(" ");
        let oldargsarray = oldargs.split(" ");
        let memberargs = oldargs.split("").reverse().join("").slice(oldargsarray[oldargsarray.length-1].length+1).split("").reverse().join("").slice(oldargsarray[0].length+2);
        let actionmember = message.mentions.members.first()
            || message.guild.members.cache.get(memberargs)
            || message.guild.members.cache.find(m => m.user.username.toLowerCase() === memberargs.toLowerCase())
            || message.guild.members.cache.find(m => m.user.tag === memberargs.toLowerCase())
            || message.guild.members.cache.find(m => m.user.username.toLowerCase().includes(memberargs.toLowerCase()));
        if(!actionmember)
            return message.channel.send(
                new discord.MessageEmbed()
                    .setTitle("I cannot find that person")
                    .setColor("0xFF0000")
                    .setDescription("Couldn't find that person.")
                    .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
        );
        let roleargs = oldargs.slice(oldargs[0].length + 2).slice(memberargs.length+1);
        let actionrole = message.guild.roles.cache.find(r => r.name == roleargs)
            || message.guild.roles.cache.get(roleargs)
            || message.guild.roles.cache.find(r => r.name.toLowerCase().includes(roleargs.toLowerCase()))
            || message.mentions.roles.first();
        if(!actionrole)
        return message.channel.send(
            new discord.MessageEmbed()
                .setTitle("I cannot find that role")
                .setColor("0xFF0000")
                .setDescription("Couldn't find the role " + roleargs)
                .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
        );
        if(actionrole.comparePositionTo(message.guild.members.cache.get(message.author.id).roles.highest) > 0) {
            return message.channel.send(
                new discord.MessageEmbed()
                    .setTitle("You are not high enough in the hierachy to do that.")
                    .setDescription("Ask a person with a higher role to do it for you.")
                    .setColor("0xff0000")
                    .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
            );
        };
        if(actionmember.roles.cache.has(actionrole)){
            return actionmember.roles.remove(actionrole, {
                reason: `Role command ran by ${message.author.tag} (${message.author.id})`
            }).then((role) => {
                message.channel.send(
                    new discord.MessageEmbed()
                        .setTitle("Role Added")
                        .setColor("0x00ff00")
                        .setDescription(`<@&${role.id}> role was removed from ${actionmember.tag}`)
                        .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
                ).catch((e) => {
                    message.channel.send(
                        new discord.MessageEmbed()
                            .setTitle("Task failed")
                            .setDescription("The bot was unable to remove the specified roles, Please check my roles.")
                            .setColor("0xff0000")
                            .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic:true}))
                    );
                });
            })
        }
        if(!actionmember.roles.cache.has(actionrole)){
            return actionmember.roles.add(actionrole, {
                reason: `Role command ran by ${message.author.tag} (${message.author.id})`
            }).then((role) => {
                message.channel.send(
                    new discord.MessageEmbed()
                        .setTitle("Role Added")
                        .setColor("0x00ff00")
                        .setDescription(`<@&${role.id}> role was added to ${actionmember.tag}`)
                        .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
                ).catch((e) => {
                    message.channel.send(
                        new discord.MessageEmbed()
                            .setTitle("Task failed")
                            .setDescription("The bot was unable to add the specified roles, Please check my roles.")
                            .setColor("0xff0000")
                            .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic:true}))
                    );
                });
            })
        }
    }
};*/