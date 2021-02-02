const Discord = require('discord.js');
module.exports = {
  description: 'Responds with a message',
  category: 'Utility',
  aliases: ['p'], // Optional
  callback: ({ message }) => {
    message.channel.send('pong')
  }
}