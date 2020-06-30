module.exports = {
    name: "ask",
    description: "ask a yes ir no question from me.",
    usage: "(question)",
    args: true,
    guildOnly: true,
    cooldown: 3,
    aliases: ["8ball", "question"],
    execute(message, args, discord, bot, color){
        let oldargs = message.content.substring("!".length).split(" ");
        let ques = message.content.slice(oldargs[0].length + 1).split(" ");
        let Answers = [
            "Maybe",
            "Yes",
            "No",
            "I don't feel like",
            "Try again",
            "Absolutely NO",
            "Why not?"
        ];
        let randanswers = Answers[Math.floor(Math.random()*Answers.length)];
        let joinedq = ques.join(" ");
        let embed = new discord.MessageEmbed()
            .setTitle("Ask!")
            .addField("Question", joinedq)
            .addField("Answer", randanswers)
            .setColor(color)
            .setAuthor(message.author.username, message.author.avatarURL());
        message.channel.send(embed);
        
    }
};