const Discord = require('discord.js');

module.exports = {
  description: 'Music command',
  aliases: ['m'], // Optional
  callback: ({ message, args }) => {
    const vc = message.member.voice.channel;

    if (vc == undefined) {
        message.channel.send('You need to be in a VC to use music commands!')
    }

    if (args.length == 0) {
        const embed = new Discord.MessageEmbed()
        .setColor('#e85151')
        .setTitle('Invalid action')
        .setDescription('Please specify an action!')

        message.channel.send(embed);
        return;
    }

    const action = args[0];

    if (action.toUpperCase() == 'JOIN') {
        vc.join();
    } else if (action.toUpperCase() == 'LEAVE') {
        vc.leave();
    }

    
  }
}