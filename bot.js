const Discord = require('discord.js');
const db = require('quick.db');
const client = new Discord.Client();   
const giphy = require('giphy-api')();    
const googl = require('goo.gl');  
const translate = require('google-translate-api');   
const fs = require("fs"); 
const getYoutubeID = require('get-youtube-id'); 
const moment = require("moment");  
const { Client, Util } = require('discord.js');  
const UserBlocked = new Set(); 
const jimp = require('jimp');   
const math = require('math-expression-evaluator'); 
const stripIndents = require('common-tags').stripIndents;
const figlet = require('figlet');
const google = require('google-it'); 
const queue = new Map(); 
const zalgo = require('zalgolize');   
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const sql = require("sqlite");
 const dateFormat = require('dateformat'); 
 const pretty = require('pretty-ms') 
,ti={}  
,spee={};


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`+help`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
//help command 
client.on("message", message => {
	var prefix = "+";
 if (message.content === "+help") {
  const embed = new Discord.RichEmbed()  
      .setColor("#000000") 
      .setDescription(`
	  
	         Please Chose: 

			 
${prefix}help1 ⇏ General commands

${prefix}help2 ⇏ moderators commands
			 
${prefix}help3 ⇏ Games commands

${prefix}help4 ⇏ Music commands

	  `)
   message.channel.sendEmbed(embed)
    
   }
   }); 
  

client.on("message", message => {
	var prefix = "+";
 if (message.content === "+help1") {
	 message.channel.send('**A PM was sent to you* :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed() 
      .setColor("#000000")
      .setDescription(`
			  General commands
❖+allbots ~ To display all bots to the server
❖+server ~Shows you information about the server
❖+bot ~ Shows you information about the bot
❖+skin <name> ~ Show you your skin in Minecraft
❖+count ~ Shows you the number of people on the server without Bots 
❖+link ~ Shows you the invite links for the server
❖+cal ~ Calculator
❖+trans <language> <any thing> ~ Translates you to the hierarchy of any language
❖+short ~ shorten a big link to a small link
❖+tag ~ He writes the word beautifully and in a big way
❖+google ~ To search Google by DISCORD
❖+rooms ~ Shows you all the rooms to the server with its number
❖+roles ~ Show you all the servers roles in a beautiful way
❖+emojilist ~ Shows you all the emojies on the server
❖+say ~ make the bot say your words
❖+image ~ image for the server
❖+members ~ shows all members
❖+id ~ info about you
❖+bans ~ the banned members
❖+avatar ~ your photo
❖+embed ~ He repeats what u say  in a sweet way
❖+emoji <any things> ~ To turn any word you say to emoji
❖+contact ~ contact us
`)
   message.author.sendEmbed(embed)
    
   }
   }); 
   
   client.on("message", message => {
	var prefix = "+";
 if (message.content === "+help2") {
	  message.channel.send('**A PM was sent to you** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed() 
      .setColor("#000000")
      .setDescription(`
	        moderators commands
❖+move @user ~  to move member to your voice room
❖+bc ~ a message to all members
❖+role @user <rank> ~ to give rank to member
❖+roleremove @user <rank> ~ to remove rank from member
❖+role all <rank> ~ add rank to all
❖+role humans <rank> ~ add rank to humans only
❖+role bots <rank> ~ add rank to all bots
❖+hchannel ~ hide the chat
❖+schannel ~ show the chat
❖+clr <numbr> ~ delete the chat
❖+clear ~ delete too :)
❖+mute @user <reason> ~ to  mute  a member  must <Muted> role
❖+unmute @user ~ to unmute member
❖+kick @user <reason> ~ to kick member
❖+ban @user <reason> ~ to ban member
❖+mutechannel ~ to close the chat
❖+unmutechannel ~ to open the chat
❖+dc ~ delete all rooms
❖+dr ~ delete all ranks
❖+ct <name> ~ make a chat room
❖+cv <name> ~ make a voice room
❖+delet <name> ~ delete a room voice or chat
❖+ccolors <number> ~ make colors
`)
   message.author.sendEmbed(embed)
    
   }
   }); 

   client.on("message", message => {
	var prefix = "+";
 if (message.content === "+help3") {
	  message.channel.send('**A PM was sent to you** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed() 
      .setColor("#000000")
      .setDescription(`
                Games commands
❖+rps ~ Stone Paper Scissors
❖+speed ~ the fastest one in write
❖+=disassembly ~ Word-to-letter disassembly game
❖+Capitals ~ the Capitals Game
❖+roll <number> ~ make a roll
`)
   message.author.sendEmbed(embed)
    
   }
   }); 
			  
client.on("message", message => {
	var prefix = "+";
 if (message.content === "+help4") {
	  message.channel.send('**A PM was sent to you** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed() 
      .setColor("#000000")
      .setDescription(`
	        Music Commands
❖${prefix}play ~ to play the music
❖${prefix}skip ~ to skip the music
❖${prefix}pause ~ to pause the music
❖${prefix}resume ~ to resume the music
❖${prefix}vol ~ to change the vol form 1-10
❖${prefix}stop ~ to stop the music
❖${prefix}np ~ To find out what song is playing
❖${prefix}queue ~ to find out the queue

 `)
   message.author.sendEmbed(embed)
    
   }
   }); 
//امر عرض صورة السيرفر 
client.on("message", message => {
    const prefix = "+"
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });

//bcall
client.on('message', message => {
	    let adminRole = message.guild.roles.find("name", "OWNER");
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('+bcall')){
if(message.member.roles.has(adminRole)) return;
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

client.login(process.env.BOT_TOKEN); 
