const Discord = require('discord.js');
module.exports = {
    description: 'Changes the server icon',
    category: 'Utility',
    callback: ({ message, args }) => {
        // permission check
        if (!message.member.hasPermission('MANAGE_GUILD')) {
            return;
        }

        if (args.length == 0) {
            // send
            const embed = new Discord.MessageEmbed()
            .setColor('#e85151')
            .setTitle('Incorrect arguments')
            .setDescription('Please specify an icon!')
            //.setTimestamp(new Date());

            message.channel.send(embed);
            return;
        }

        const icon = args[0];

        if (icon.toUpperCase() == 'DARK' || icon.toUpperCase() == 'NIGHT') {
            message.guild.setIcon('./img/dark.png');
            const embed = new Discord.MessageEmbed()
            .setColor('#32ed67')
            .setTitle('Success')
            .setThumbnail('https://i.imgur.com/ncSZab6.png')
            .setDescription('Changed server icon to `DARK`')
            .setTimestamp(new Date());

            message.channel.send(embed);
        } else if (icon.toUpperCase() == 'LIGHT' || icon.toUpperCase() == 'DAY') {
            message.guild.setIcon('./img/light.png');
            const embed = new Discord.MessageEmbed()
            .setColor('#32ed67')
            .setTitle('Success')
            .setThumbnail('https://imgur.com/kfgVo1W.png')
            .setDescription('Changed server icon to `LIGHT`')
            .setTimestamp(new Date());

            message.channel.send(embed);
        } else {
            const embed = new Discord.MessageEmbed()
            .setColor('#e85151')
            .setTitle('Uh oh!')
            .setDescription('That\'s not a valid icon name.')
            .setTimestamp(new Date());

            message.channel.send(embed);
        }
    }
}