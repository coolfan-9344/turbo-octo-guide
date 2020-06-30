const mathjs = require("mathjs");

module.exports = {
    name: "calculate",
    description: "Does math for you",
    usage: "(equation)",
    args: true,
    guildOnly: false,
    cooldown: 5,
    aliases: ["math", "calc"],
    execute(message, args, discord, bot, color){
        let resp;
        try {
            resp = mathjs.evaluate(args.join(' '));
        } catch (e) {
            return message.channel.send(
                new discord.MessageEmbed()
                    .setTitle("Error in maths")
                    .setDescription(`Input:\n\`\`\`js\n${args.join(" ")}\`\`\`\nOutput: Error\n${e}`)
                    .setColor("0xFF0000")
            )
        };
        return message.channel.send(
            new discord.MessageEmbed()
                .setTitle("Calculated")
                .setColor("0x00FF00")
                .setDescription(`Input:\n\`\`\`js\n${args.join(" ")}\`\`\`\nOutput: \`\`\`js\n${mathjs.evaluate(args.join(' '))}\`\`\``)                
        )
    }
};