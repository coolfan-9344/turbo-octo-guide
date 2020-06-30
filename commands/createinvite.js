module.exports = {
    name: "createinvite",
    description: "Makes an invite",
    usage: "(forever : optional)",
    args: false,
    guildOnly: true,
    cooldown: 3,
    aliases: ["makeinvite"],
    execute(message, args, discord, bot, color){
        if(!message.guild.members.cache.get(message.author.id).hasPermission("CREATE_INVITES")) return;
        if(message.content.toLowerCase().includes("forever")){
            message.channel.createInvite({
                maxAge: 0,
                maxUses: 10,
                reason: "Invite command ran by " + message.author.tag
            }).then((inv) =>{
                message.channel.send(
                    new discord.MessageEmbed()
                        .setTitle("Invite created.")
                        .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}), `https://discord.gg/${inv.code}/`)
                        .setDescription("[Invite code](" + `https://discord.gg/${inv.code})`)
                        .setColor("0x00ff00")
                );
            });
        } else {
            message.channel.createInvite({
                maxAge: 86400,
                maxUses: 10,
                reason: "Invite command ran by " + message.author.tag
            }).then((inv) =>{
                message.channel.send(
                    new discord.MessageEmbed()
                        .setTitle("Invite created.")
                        .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic: true}), `https://discord.gg/${inv.code}/`)
                        .setDescription("[Invite code](" + `https://discord.gg/${inv.code}`)
                        .setColor("0x00ff00")
                );
            });
        }
    }
};