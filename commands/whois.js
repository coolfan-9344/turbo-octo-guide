/*module.exports = {
    name: "whois",
    description: "Gives userinfo",
    usage: "(id or mention : Optional)",
    args: false,
    guildOnly: true,
    cooldown: 5,
    aliases: ["userinfo", "aboutperson"],
    execute(message, args, discord, bot, color){
        let embedvar = new discord.MessageEmbed().setColor("0x4b14b8").setFooter(`run !help (comand to get more info)`);
        
        if(!args.length){
            return message.channel.send(
                embedvar
                    .setTitle(`${message.author.username}'s Info`)
                    .setDescription(`<@${message.author.id}>'s Info`)
                    .setThumbnail(message.author.displayAvatarURL({dynamic: true, format: "png", size: 256}))
                    .addField("Nickname", message.guild.members.cache.get(message.author.id).nickname, true)
                    .addField("Joined the server at", message.guild.members.cache.get(message.author.id).joinedAt, true)
                    .addField("Registered at", message.author.createdAt, true)
                    .addField("Role Count", (message.guild.members.cache.get(message.author.id).roles.cache.size-1), true)
                    .addField("Roles", message.guild.members.cache.get(message.author.id).roles.cache.map(role => "<@&" + role.id + ">"), true)
            );
        };
        if(args[0] && isNaN(args[0]) && !pingtarget) return message.channel.send(embedvar.setTitle("User not found").setDescription("The user was not found, I only support ID's and mentions"));
        if(message.mentions.members.first()){
            if(!message.guild.members.cache.get(message.mentions.members.first().user.id)) { message.channel.send(embedvar.setTitle("User not found").setDescription("I couldn't find that user in this server. Please check."));} else {

        if(pingtargetg){
            let pingtarget = message.mentions.members.first();
        let pingtargetg = message.guild.members.cache.get(message.mentions.members.first().user.id);
            return message.channel.send(
                embedvar
                    .setTitle(`${pingtargetg.displayName}'s Info`)
                    .setDescription(`<@${pingtargetg.id}>'s Info`)
                    .setThumbnail(message.mentions.members.first().user.displayAvatarURL({dynamic: true, format: "png", size: 256}))
                    .addField("Nickname", pingtarget.nickname, true)
                    .addField("Joined the server at", pingtarget.joinedAt , true)
                    .addField("Registered at", pingtarget.user.createdAt, true)
                    .addField("Role Count", pingtargetg.roles.cache.size-1, true)
                    .addField("Roles", pingtargetg.roles.cache.map(role => "<@&"+role.id+">"), true)
            );
        };}} else 
        if(!isNaN(args[0])){
            let idtargetg = message.guild.members.cache.get(args[0]);
            let idtargetuser = idtargetg.user;
            if(!idtargetg) return message.channel.send(
                embedvar
                    .setTitle("Invalid user ID")
                    .setDescription("Couldn't find that user.")
            );
            message.channel.send(
                embedvar
                    .setTitle(`${idtargetuser.username}'s Info`)
                    .setDescription(`<@${args[0]}>'s Info`)
                    .setThumbnail(idtargetuser.displayAvatarURL({dynamic: true, format: "png", size: 256}))
                    .addField("Nickname", idtargetg.nickname, true)
                    .addField("Joined the server at", idtargetg.joinedAt , true)
                    .addField("Registered at", idtargetuser.createdAt, true)
                    .addField("Role Count", idtargetg.roles.cache.size-1, true)
                    .addField("Roles", idtargetg.roles.cache.map(role => "<@&"+role.id+">"), true)
            );
        };
    }
};*/