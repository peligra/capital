module.exports = (client, instance) => {
    const guild = client.guilds.cache.get('795125822453317643');
    var lastCreator;
    newCreatorStatus();
    
    setInterval(() => {
        newCreatorStatus();        
    }, 360 * 1000);

    function newCreatorStatus() {
        const chosen = getRandomCreator();
        client.user.setActivity(chosen, {type:'WATCHING'});
        console.log('Status has been changed to ' + chosen);
        lastCreator = chosen;
    }
    
    function getRandomCreator() {
        let creators = guild.roles.cache.get('795565360106569738').members.map(m=>m.displayName);
        return creators[Math.floor(Math.random() * creators.length)];
    }
  }