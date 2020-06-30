module.exports = {
    name: "avatar",
    description: "Provides the picture of the user.",
    usage: "(id or mention : Optional)",
    args: false,
    guildOnly: true,
    cooldown: 2,
    aliases: ["av", "pfp"],
    execute(message, args, discord, bot, color){
        /*let av = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author;
        let embed = new discord.MessageEmbed()
            .setTitle(av.username + "('s) avatar")
            .setDecription(`(Link for the avatar){${av.displayAvatarURL({dynamic: true, size: 256, format: "png"})}}`)
            .setImage(av.displayAvatarURL({dynamic: true, size: 512, format: "png"}));*/
        if(!args.length){
            return message.channel.send(
                new discord.MessageEmbed()
                    .setTitle(message.author.username + "('s) Avatar")
                    .setDescription(`[Link for avatar](${message.author.displayAvatarURL({dynamic: true, format: "png"})})`)
                    .setImage(message.author.displayAvatarURL({dynamic: true, size: 512, format: "png"}))
                    .setColor(color)
            );
        }
        if(args.length && !message.mentions.members.first && isNaN(args[0])) return message.channel.send("I couldn't find that user.");
        if(!isNaN(args[0])){
            let aeidee = args[0];
            let membrr = message.guild.members.cache.get(aeidee);
            let membrru = membrr.user;
            return message.channel.send(
                new discord.MessageEmbed()
                    .setTitle(membrru.username + "('s) Avatar")
                    .setDescription(`[Link for avatar](${membrru.displayAvatarURL({dynamic: true, format: "png"})})`)
                    .setImage(membrru.displayAvatarURL({dynamic: true, size: 512, format: "png"}))
                    .setColor(color)
            );
        };
        if (message.mentions.members.first()) {
            let person = message.mentions.members.first();
            let persong = message.guild.members.cache.get(person.id);
            let personu = person.user;
            if(!persong) return message.channel.send("Cannot find that person in this server").then(m => m.delete(10000));
            message.channel.send(
                new discord.MessageEmbed()
                    .setTitle(personu.username + "('s) Avatar")
                    .setDescription(`[Link for avatar](${personu.displayAvatarURL({dynamic: true, format: "png"})})`)
                    .setImage(personu.displayAvatarURL({dynamic: true, size: 512, format: "png"}))
                    .setColor(color)
            );
        };
    }
};