const Discord = require('discord.js');
module.exports = (client, instance) => {
    const guild = client.guilds.cache.get('795125822453317643');
    const log = guild.channels.cache.get('796973728050839562');

    function emoji(id) {
        return client.emojis.cache.get(id).toString();
    }

    client.on('messageDelete', message => {
        if (message.author == null || message.author == undefined) {
            return;
        }

        const embed = new Discord.MessageEmbed()
        .setTitle('Message Deleted')
        .setThumbnail(message.author.displayAvatarURL())
        .setColor('#ff5f5f')
        .setDescription(`
        <:red_arrow:783973067491770408> Author: <@!${message.author.id}> 
        <:yellow_arrow:783973070141784094> Content: \`${message.content == '' ? 'Unsupported (Image/Embed)' : message.content}\``)
        .setFooter(`ID: ${message.author.id}`)
        .setTimestamp(new Date());
        log.send(embed);
    });
}