module.exports = {
    name: "hug",
    description: "Hug's a user, or yourself.",
    usage: "(user : optional)",
    args: false,
    guildOnly: true,
    cooldown: 5,
    aliases: ["cuddle"],
    execute(message, args, discord, bot, color){
        let oldargs = message.content.substring("!".length).split(" ");
        if(args.length && !message.mentions.members.first()) return;
        let amotes = [
            "https://media3.giphy.com/media/PHZ7v9tfQu0o0/giphy.gif",
            "https://i.pinimg.com/originals/f2/80/5f/f2805f274471676c96aff2bc9fbedd70.gif",
            "https://media0.giphy.com/media/wnsgren9NtITS/source.gif",
            "https://media1.tenor.com/images/b0de026a12e20137a654b5e2e65e2aed/tenor.gif?itemid=7552093",
            "https://66.media.tumblr.com/18fdf4adcb5ad89f5469a91e860f80ba/tumblr_oltayyHynP1sy5k7wo1_400.gifv",
            "https://i.pinimg.com/originals/85/72/a1/8572a1d1ebaa45fae290e6760b59caac.gif",
            "https://tenor.com/blDgT.gif ",
            "https://37.media.tumblr.com/f2a878657add13aa09a5e089378ec43d/tumblr_n5uovjOi931tp7433o1_500.gif",
            "https://i.pinimg.com/originals/b6/2f/04/b62f047f8ed11b832cb6c0d8ec30687b.gif",
            "https://66.media.tumblr.com/291c8b98b219283f9e21927e7ef6c3f2/tumblr_mzscklfLYx1tptsy9o1_400.gifv",
            "https://i.imgur.com/r9aU2xv.gif"
        ];
        let randp = amotes[Math.floor(Math.random()*amotes.length)];
        if(!args.length) {
            let embd = new discord.MessageEmbed()
                .setTitle("Cute!")
                .setDescription(message.author.username + " " + oldargs[0] + "s himself/herself! Wierd!")
                .setAuthor(message.author.username, message.author.avatarURL())
                .setImage(randp)
                .setColor(color);
            return message.channel.send(embd);
        };
        let bro = message.mentions.members.first().user.username;
        if (message.mentions.members.first()) {
            let embed = new discord.MessageEmbed()
                .setTitle("Aww!")
                .setDescription(message.author.username + " "+oldargs[0]+"s " + bro + "! How cute!.")
                .setColor(color)
                .setImage(randp)
                .setAuthor(message.author.username, message.author.avatarURL());   
            return message.channel.send(embed);    
        } else {
            return message.reply("Couldn't find that user.");
        };
    }
};