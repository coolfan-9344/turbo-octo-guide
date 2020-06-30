module.exports = {
    name: "reload",
    description: "Re-starts a command, Developer only",
    usage: "(command name)",
    args: true,
    guildOnly: false,
    cooldown: 0,
    aliases: ["restart", "refresh"],
    execute(message, args, discord, bot, color){
        if(message.author.id !== "582433270944497664") return message.channel.send("You can't use this command.");
        const commandName = args[0].toLowerCase();
        const command = message.client.commands.get(commandName)
	        || message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

        if (!command) return message.channel.send(`There is no command with name or alias \`${commandName}\`, ${message.author}!`);

        delete require.cache[require.resolve(`./${command.name}.js`)];

        try {
            const newCommand = require(`./${command.name}.js`);
            message.client.commands.set(newCommand.name, newCommand);
            message.channel.send(`Command \`${command.name}\` was reloaded!`);
        } catch (error) {
            console.log(error);
            message.channel.send(`There was an error while reloading a command \`${command.name}\`:\n\`${error.message}\``);
        }
    }
};