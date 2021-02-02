module.exports = (client, instance) => {
    client.on('guildMemberAdd', m => {
        const guild = client.guilds.cache.get('795125822453317643');
        const channel = guild.channels.cache.get('795125822960566375');

        var messages = [
            `Welcome, <@${m.user.id}>!`, 
            `Ahoy! It's <@${m.user.id}>`, 
            `Wassup, <@${m.user.id}>!`]
        channel.send(messages[Math.floor(Math.random() * messages.length)]);
    });
  }