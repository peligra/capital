const Discord = require('discord.js');
module.exports = {
  description: 'Gives information of a user',
  category: 'Utility',
  aliases: ['u', 'info'], // Optional
  callback: ({ message, args, text }) => {
    if (args.length == 0) {
        // send
        const embed = new Discord.MessageEmbed()
        .setColor('#e85151')
        .setTitle('Incorrect arguments')
        .setDescription('Please specify a user!')
        //.setTimestamp(new Date());

        message.channel.send(embed);
        return;
    }

    // get the input arg
    var input = args[0];

    // resolve id out of input
    input = input.replace('<@!', '');
    input = input.replace('<@', '')
    input = input.replace('>', '')

    // search for member in guild
    const member = message.guild.members.cache.find(member => member.id === input || member.user.tag.toUpperCase() == input.toUpperCase());

    if (member == undefined) {
        const embed = new Discord.MessageEmbed()
        .setColor('#e85151')
        .setTitle('Invalid member')
        .setDescription('That\'s not a valid user!')

        message.channel.send(embed);
        return;
    }

    const embed = new Discord.MessageEmbed()
        .setColor(member.displayHexColor)
        .setTitle('User Info')
        .setThumbnail(member.user.displayAvatarURL())
        .addField('Tag', member.user.tag);

    // add nickname property if a nickname is set
    if (member.nickname != undefined) {
        embed.addField('Nickname', member.nickname);
    }

    embed.addField('Joined', member.joinedAt.toLocaleDateString("en-US"))
    .addField('Created', member.user.createdAt.toLocaleDateString("en-US"))
    .setFooter('ID: ' + member.user.id);

    message.channel.send(embed);
        
  }
}