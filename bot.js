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

//log
var guilds = {};
client.on('guildBanAdd', function(guild) {
            const rebellog = client.channels.find("name", "log"),
            Onumber = 3,
  Otime = 10000
guild.fetchAuditLogs({
    type: 22
}).then(audit => {
    let banner = audit.entries.map(banner => banner.executor.id)
    let bans = guilds[guild.id + banner].bans || 0 
    guilds[guild.id + banner] = {
        bans: 0
    }
      bans[guilds.id].bans += 1; 
if(guilds[guild.id + banner].bans >= Onumber) {
try {
let roles = guild.members.get(banner).roles.array();
guild.members.get(banner).removeRoles(roles);
  guild.guild.member(banner).kick();

} catch (error) {
console.log(error)
try {
guild.members.get(banner).ban();
  rebellog.send(`<@!${banner.id}>
حآول العبث بالسيرفر @everyone`);
guild.owner.send(`<@!${banner.id}>
حآول العبث بالسيرفر ${guild.name}`)
    setTimeout(() => {
 guilds[guild.id].bans = 0;
  },Otime)
} catch (error) {
console.log(error)
}
}
}
})
});
 let channelc = {};
  client.on('channelCreate', async (channel) => {
  const rebellog = client.channels.find("name", "log"),
  Oguild = channel.guild,
  Onumber = 3,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelcreate = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was Created By ${channelcreate.tag}`);
   if(!channelc[channelcreate.id]) {
    channelc[channelcreate.id] = {
    created : 0
     }
 }
 channelc[channelcreate.id].created += 1;
 if(channelc[channelcreate.id].created >= Onumber ) {
    Oguild.members.get(channelcreate.id).kick();
rebellog.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelc[channelcreate.id].created = 0;
  },Otime)
  });

let channelr = {};
  client.on('channelDelete', async (channel) => {
  const rebellog = client.channels.find("name", "log"),
  Oguild = channel.guild,
  Onumber = 3,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelremover = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was deleted By ${channelremover.tag}`);
   if(!channelr[channelremover.id]) {
    channelr[channelremover.id] = {
    deleted : 0
     }
 }
 channelr[channelremover.id].deleted += 1;
 if(channelr[channelremover.id].deleted >= Onumber ) {
  Oguild.guild.member(channelremover).kick();
rebellog.send(`<@!${channelremover.id}>
make some changed in your server @everyone`);
channel.guild.owner.send(`<@!${channelremover.id}>
make some changed in your serverر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelr[channelremover.id].deleted = 0;
  },Otime)
  });

client.on('message', msg => {
	var prefix = "+";
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);


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
message.channel.sendMessage('the broadcast will send now|:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});
	//clr
	
	if(command === "+clr") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```Supply A Number 👌```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```Cleard: " + textxt + "\n Messages```").then(m => m.delete(3000));
        }    
    }
}
});

//music 

const prefix = "+"
client.on('message', async msg => { 
	if (msg.author.bot) return undefined;
	if (!msg.content.startsWith(prefix)) return undefined;
	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);
	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(prefix.length)
	if (command === `play`) {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send('You should have a sound room. .');
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			
			return msg.channel.send('i do not have the power to speak this room.');
		}
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('i do not have the power to speak this room.');
		}

		if (!permissions.has('EMBED_LINKS')) {
			return msg.channel.sendMessage("**i need`EMBED LINKS`perm **")
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id);
				await handleVideo(video2, msg, voiceChannel, true);
			}
			return msg.channel.send(` **${playlist.title}** added to the playlist`);
		} else {
			try {

				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 5);
					let index = 0;
					const embed1 = new Discord.RichEmbed()
			        .setDescription(`**Select song number ** :
${videos.map(video2 => `[**${++index} **] \`${video2.title}\``).join('\n')}`)

					.setFooter("WantedBot")
					msg.channel.sendEmbed(embed1).then(message =>{message.delete(20000)})
					
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 15000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return msg.channel.send('No song selected');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send(':X: there is no search result ');
				}
			}

			return handleVideo(video, msg, voiceChannel);
		}
	} else if (command === `skip`) {
		if (!msg.member.voiceChannel) return msg.channel.send('you are not in voice channel .');
		if (!serverQueue) return msg.channel.send('there is no song to skip it');
		serverQueue.connection.dispatcher.end('skiped');
		return undefined;
	} else if (command === `stop`) {
		if (!msg.member.voiceChannel) return msg.channel.send('you are not in voice channel .');
		if (!serverQueue) return msg.channel.send('there is not music to stop it');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('stoped');
		return undefined;
	} else if (command === `vol`) {
		if (!msg.member.voiceChannel) return msg.channel.send('you are not in a voice room .');
		if (!serverQueue) return msg.channel.send('there is no song.');
		if (!args[1]) return msg.channel.send(`:loud_sound: vol **${serverQueue.volume}**`);
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
		return msg.channel.send(`:speaker: the sound has been changed to **${args[1]}**`);
	} else if (command === `np`) {
		if (!serverQueue) return msg.channel.send('there is no thing in work now.');
		const embedNP = new Discord.RichEmbed()
	.setDescription(`:notes: playing : **${serverQueue.songs[0].title}**`)
		return msg.channel.sendEmbed(embedNP);
	} else if (command === `queue`) {
		
		if (!serverQueue) return msg.channel.send('Thereis nothing working now .');
		let index = 0;
		
		const embedqu = new Discord.RichEmbed()

.setDescription(`**Songs Queue**
${serverQueue.songs.map(song => `**${++index} -** ${song.title}`).join('\n')}
**playing** ${serverQueue.songs[0].title}`)
		return msg.channel.sendEmbed(embedqu);
	} else if (command === `pause`) {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('the music is paused!');
		}
		return msg.channel.send('there is no sing in work now.');
	} else if (command === "resume") {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send('Resumed music for you!');
		}
		return msg.channel.send(' Thereis nothing present at work.');
	}

	return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	
//	console.log('yao: ' + Util.escapeMarkdown(video.thumbnailUrl));
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`i cant join to this channel ${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(` **${song.title}** The song was added to the list.!`);
	}
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(`Start : **${song.title}**`);
}

client.login(process.env.BOT_TOKEN); 
