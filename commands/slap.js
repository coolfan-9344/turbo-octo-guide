module.exports = {
    name: "slap",
    description: "slap a user of choice",
    usage: "(user)",
    args: false,
    guildOnly: true,
    cooldown: 3,
    execute(message, args, discord, bot, color){
        if(args.length && !message.mentions.members.first()) return;
        let slap_emotes = [
            "https://media2.giphy.com/media/Gf3AUz3eBNbTW/giphy.gif",
            "https://i.imgur.com/fm49srQ.gif",
            "https://thumbs.gfycat.com/PersonalUnlinedAsiaticwildass-size_restricted.gif",
            "https://i.pinimg.com/originals/46/b0/a2/46b0a213e3ea1a9c6fcc060af6843a0e.gif",
            "https://i.pinimg.com/originals/4e/9e/a1/4e9ea150354ad3159339b202cbc6cad9.gif",
            "https://i.pinimg.com/originals/1c/8f/0f/1c8f0f43c75c11bf504b25340ddd912d.gif",
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b02c16d5-1b1b-4139-92e6-ca6b3d768d7a/d6wv007-5fbf8755-5fca-4e12-b04a-ab43156ac7d4.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYjAyYzE2ZDUtMWIxYi00MTM5LTkyZTYtY2E2YjNkNzY4ZDdhXC9kNnd2MDA3LTVmYmY4NzU1LTVmY2EtNGUxMi1iMDRhLWFiNDMxNTZhYzdkNC5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.u7RPUGC0FivWZl_hS-5vdlqDLpkAaHbGps9ejNTUKos",
            "https://i.imgur.com/fQytsKK.gif",
            "https://reallifeanime.files.wordpress.com/2014/06/akari-slap.gif",
            "https://30.media.tumblr.com/tumblr_m1nsxc3jUu1qdjfd8o1_250.gif",
            "https://pa1.narvii.com/6807/ac91cef2e5ae98f598665193f37bba223301d75c_hq.gif",
            "https://images-ext-2.discordapp.net/external/qA7fZdO8BpoYMxczVEhoaCjmQeccYMHYsA0rckBGLGE/https/cdn.weeb.sh/images/H1n57yYP-.gif?width=400&height=298",
            "https://images-ext-2.discordapp.net/external/IQnl-SE1tZ75MUQTE0A2Q8o9FCGsF99DjY-r0yiIDKc/https/cdn.weeb.sh/images/HyPjmytDW.gif",
            "https://media1.tenor.com/images/890b4a566c5a6ce97ca3a14ac8111260/tenor.gif?itemid=5024129"
        ];
        let imgs = slap_emotes[Math.floor(Math.random()*slap_emotes.length)];
        if(!args.length) {
            let embed = new discord.MessageEmbed()
                .setTitle("Ouch!")
                .setDescription(message.author.username + " slaps themselves!! Wierd.")
                .setColor(color)
                .setImage(imgs)
                .setAuthor(message.author.username, message.author.avatarURL());
            return message.channel.send(embed);                
        };
        let bro = message.mentions.members.first().user.username;
        if (message.mentions.members.first()) {
            
        
            let embed = new discord.MessageEmbed()
                .setTitle("Ouch!")
                .setDescription(message.author.username + " slaps " + bro + "! Must be painful.")
                .setColor(color)
                .setImage(imgs)
                .setAuthor(message.author.username, message.author.avatarURL());   
            message.channel.send(embed);    
        } else {
            return message.reply("Couldn't find that user.");
        };   
    }
};