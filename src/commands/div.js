const { content } = require('../msg/msg.json')
const { MessageEmbed } = require('discord.js')


module.exports.run = async(client, message, args) => {


  message.guild.members.cache.find(member => {
     member.send(content)
    .then(() => {
      console.log(`[+] ${member.user.tag} recebeu :)`)
    })
    .catch(() => {
      console.error(`[-] ${member.user.tag} nao recebeu :(`)
    })
  })
}