const discord = require("discord.js");
const fs = require("fs");
const redditapi = require("imageapi.js");
const bot = new discord.Client();
var { token } = require("./config.json");
var invlink;
//var prefixone = "e!"; 
//var prefixtwo = "e?";
var prefix = "!";
bot.commands = new discord.Collection();
const commandfiles = fs.readdirSync("./commands").filter(file => file.endsWith("js"));
for (const file of commandfiles) {
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
};

const cooldowns = new discord.Collection();

bot.on("ready", async ()=>{
    console.log("Bot rdy!");
    bot.user.setPresence({ activity: {name: "people say e!help or e?help", type: "WATCHING"}, status: "idle"}).catch((err) => console.log(err));
});

bot.on("message", async message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = bot.commands.get(commandName)
    		|| bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    
    if (!command) return;
    var color = "0x4b14b8";

    if (command.args && !args.length) {
        let reply = "You did not provide enough arguments.";
        
        if(command.usage){
            reply += `\nThe Proper usage would be: \` ${prefix}${command.name} ${command.usage}\``;
        }
        return message.channel.send(
            new discord.MessageEmbed()
                .setTitle("Not enough args passed.")
                .setDescription(reply)
                .setColor(color)
        );
    };

    if(command.guildOnly && message.channel.type !== "text") {
        return message.channel.send(
            new discord.MessageEmbed()
                .setTitle("You cannot use this command outside of a Server.")
                .setDescription("You can always invite the bot to a server and use this command." + ` (Invite here){${invlink}}`)
                .setColor(color)
        );
    };

    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new discord.Collection());
    }

    let now = Date.now();
    let timestamps = cooldowns.get(command.name);
    let cooldowntime = (command.cooldown || 5) * 1000;

    if (timestamps.has(message.author.id)){
        const expiretime = timestamps.get(message.author.id) + cooldowntime;

        if(now < expiretime) {
            const timeleft = (expiretime - now) / 1000;

            return message.channel.send(
                new discord.MessageEmbed()
                    .setTitle("You are on a cooldown.")
                    .setDescription("Please wait for " + `${timeleft.toFixed(1)} more second(s) before using the ${command.name} command again.`)
            );
        };
    };   

    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldowntime);
    
    

    try {
        command.execute(message, args, discord, bot, color);
    } catch (e){
        console.log(e);
        message.reply("There was an error in executing this command.");
    };
});

bot.login(token);
         //NzE2OTUzNjM5ODAxMDYxNDE4.XtTagw.CP9_fvVXwcQRB1YuW1d8y5ajwKE