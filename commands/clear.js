const Discord = require('discord.js');
module.exports = {
    description: 'Clears the specified amoung of messages',
    callback: ({ message, args }) => {
        // permission check
        if (!message.member.hasPermission('MANAGE_MESSAGES')) {
            return;
        }

        if (args.length == 0) {
            const embed = new Discord.MessageEmbed()
            .setColor('#e85151')
            .setTitle('Incorrect arguments')
            .setDescription('Please specify a quantity of messages!')

            message.channel.send(embed);
            return;
        }

        var quantity = args[0];

        // if input is not a number then send msg
        if (isNaN(quantity)) {
            const embed = new Discord.MessageEmbed()
            .setColor('#e85151')
            .setTitle('Incorrect arguments')
            .setDescription('Please specify a number!')

            message.channel.send(embed);
            return;
        }

        if (quantity > 99) {
            quantity = 99;
        }

        message.channel.bulkDelete(parseInt(quantity) + 1);
    }
}
        
        