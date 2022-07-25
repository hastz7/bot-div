const { Client } = require('discord.js')
const client = new Client({ intents: 32767 })
const { token, prefix } = require('./src/config/config.json')


client.on('ready', () => {
  console.log('online')
  console.log(`conectado em ${client.user.tag}`)

  client.user.setActivity('online')
})


client.on('messageCreate', message => {

    if (message.author.bot) return;
    if (message.channel.type == 'dm') return;
    if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;

   const args = message.content.trim().slice(prefix.length).split(/ +/g);
   const command = args.shift().toLowerCase();

   try {
       const cmdFile = require(`./src/commands/${command}.js`)
         cmdFile.run(client, message, args);
   } catch (err) {   
     console.error(err)
 }
});

client.login(token)