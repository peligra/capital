const DiscordJS = require('discord.js');
const WOKCommands = require('wokcommands');

const client = new DiscordJS.Client({
  partials: ['MESSAGE', 'REACTION'],
})

client.on('ready', () => {
  // initialize WOKCommands
  new WOKCommands(client, {
    commandsDir: 'commands',
    featureDir: 'features',
    messagesPath: 'messages.json',
    showWarns: false // Show start up warnings
  })
    .setDefaultPrefix('.')
    .setColor(0xffffff)
    .setBotOwner('403366964669579266')
    .setCategorySettings([
      {
        name: 'Fun',
        emoji: '🎮'
      },
      {
        name: 'Utility',
        emoji: '🔨'
      },
      {
        name: 'Economy',
        emoji: '💸'
      },
      {
        name: 'Help',
        hidden: true
      },
      {
        name: 'Configuration',
        hidden: true
      }
    ])
})

client.login('Nzk1NTc1MTM3NjU0ODAwNDE2.X_LXFQ.76eZ4jrCxAQcL6eYMe1hMcNRMA8');

