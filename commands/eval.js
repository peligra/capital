const Discord = require('discord.js');
module.exports = {
    description: 'Evaluates a given string',
    callback: ({ message, args, text }) => {
        // permission check
        if (!message.member.hasPermission('ADMINISTRATOR')) {
            return;
        }

        if (args.length == 0) {
            // send
            const embed = new Discord.MessageEmbed()
            .setColor('#e85151')
            .setTitle('Incorrect arguments')
            .setDescription('Please specify a statement to evaluate!')
            //.setTimestamp(new Date());

            message.channel.send(embed);
            return;
        }

        try {
            // try to evaluate the input
            var result = eval(text);

            // define the embed for a successfull eval with output
            var embed = new Discord.MessageEmbed()
                .setColor('#32ed67')
                .setTitle(result)
                //.setTimestamp(new Date());

            // if there isn't an output, redefine our embed
            if (result == undefined) {
                embed = new Discord.MessageEmbed()
                .setColor('#32ed67')
                .setTitle('Evaluated `' + text +'` successfully with no output.')
                //.setTimestamp(new Date());
            }

            message.channel.send(embed);
        } catch (error) {
            // catch errors and send message
            const embed = new Discord.MessageEmbed()
            .setColor('#e85151')
            .setTitle(error)
            //.setTimestamp(new Date());

            message.channel.send(embed);
        }
    }
}
        
        