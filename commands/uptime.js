module.exports = {
    name: "uptime",
    description: "Shows you the bot's uptime",
    usage: "",
    args: false,
    guildOnly: false,
    cooldown: 5,
    aliases: false,
    execute(message, args, discord, bot, color){
        let timers = {
            "days": Math.floor(message.client.uptime / 86400000),
            "hours": Math.floor(message.client.uptime / 3600000) % 24,
            "mins": Math.floor(message.client.uptime / 60000) % 60,
            "seconds": Math.floor(message.client.uptime / 1000) % 60,
            "miliseconds": Math.floor(message.client.uptime / 1) % 1000
        }
        let embed = new discord.MessageEmbed()
            .setTitle("My Uptime")
            .setColor("0x00FF00")
            .setDescription(
                `Uptime: \nDays: ${timers.days}\nHours: ${timers.hours}\nMinutes: ${timers.mins}\nSeconds: ${timers.seconds}\nMilliseconds: ${timers.miliseconds}`
            );
            message.channel.send(embed).then((msg) => msg.react(require("./emoji.json").table_tennis_paddle_and_ball));
    }
};