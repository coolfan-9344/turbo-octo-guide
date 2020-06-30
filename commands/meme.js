module.exports = {
    name: "meme",
    description: "Shows you a random meme from our favourite meme reddits.",
    usage: "",
    args: false,
    guildOnly: false,
    cooldown: 2,
    aliases: ["joke", "funny"],
    async execute(message, args, discord, bot, color){
        var reeeee = require("imageapi.js");
        let memereddit = [
            "AdviceAnimals",
            "MemeEconomy",
            "ComedyCemetry",
            "memes",
            "comedyheaven",
            "dankmemes",
            "PrequelMemes",
            "terriblefacebookmemes",
            "PewdiepieSubmissions",
            "funny",
            "teenagers"
        ];
        let emotes = require("./emoji.json");
        let memesreddit = memereddit[Math.floor(Math.round(Math.random()*memereddit.length))];
        let picpicpic = await reeeee(memesreddit, true);
        let link = `https://reddit.com/r/${memesreddit}/`;
        let embed = new discord.MessageEmbed()
            .setImage(picpicpic)
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTitle("Meme")
            .setDescription("Meme link : " + picpicpic + `\nSubreddit: ${link}\n\nIf the meme is a video/audiofile please use the meme link to view the meme.`)
            .setFooter("These subreddits are not promoted, Nor do we server any purpose of advertising with them. They are just good communities for memes.");
        message.channel.send(embed).then((msg) => {
            msg.react(emotes.thumbsup);
            msg.react(emotes.thumbsdown);
        });
    }
};