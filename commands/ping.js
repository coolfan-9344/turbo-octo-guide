module.exports = {
    name: "ping",
    description: "Tells you the ping.",
    usage: "",
    args: false,
    guildOnly: false,
    cooldown: 5,
    aliases: ["lag", "latency"],
    async execute(message, args, discord, bot, color){
        let embed = new discord.MessageEmbed()
            .setTitle("Ping for Ekon bot")
            .setDescription(":ping_pong: Pong! The API is " + bot.ws.ping + "ms")
            .setColor(color);
        message.channel.send(embed).then(async msg => {
            let longtest = `:ping_pong: The API ping is ${bot.ws.ping}. \nThe Bot's Ping is ${msg.createdTimestamp - message.createdTimestamp}ms`;
            let embeder = new discord.MessageEmbed().setTitle("Ping for Ekon Bot").setColor(color).setDescription(longtest);
            await msg.edit(embeder);    
        });
    }
};