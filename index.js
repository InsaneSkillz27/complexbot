

const Discord = require("discord.js");
const fs = require("fs");
const readline = require("readline");
const bot = new Discord.Client();
bot.login("process.env.BOT_TOKEN");

var prefix = '//' 
bot.on('message', (message) => {
    const rl = readline.createInterface({
        input: fs.createReadStream('badwords.txt')
    })

    rl.on('line', (line) => {
        if(message.content.includes(line)){
            const kickDude = message.member;
            kickDude.kick();
        }
    });
   // When they say something in the Badwords.txt file they get kicked

    if(message.content == prefix + 'Servers') {
        message.channel.sendMessage('```These are servers of my friends, and servers that have partnerd with us (Contact my DMs to get your server on this list)\n\n       Join our sencondary server Complex Gaming: https://discord.gg/hcYCgSF \n\n      This our partner server Derpee Systems (This is a serious server): https://discord.gg/hcYCgSF\n\n       This is a coding server managed by DankDimer: https://discord.gg/bUVYSFJ\n\n        This is another partner server mangaged by 0slik_rick0: https://discord.gg/NNeFe2z```')
    } else if (message.content.startsWith(prefix +'kick')) {
        if (message.mentions.users.size === 0 ) {
            message.reply("U MUST MENTION USER");
        }
        if (message.mentions.users.size > 1) {
            message.reply("U MUST MENTION ONE");
        }
        const kickDude = message.guild.member(message.mentions.users.first());
        kickDude.kick().catch(console.error);
    }
    
});
// When they say the prefix (//) then Servers right behind it then they get they links to other servers
//When I say the prefix (//) then Servers they will get kicked and it will say You have been removed from Complex Servers

bot.on('message', (message) => {
if(message.content == prefix + 'Help') {
   message.channel.sendMessage('**```our prefix is // \n\nour commands are as follows:\n\nServers (Gives links to servers, such as my friends or partners servers) \n\nKick (Will kick the person when you type kick then an @mention)(For staff use only)\n\nBotInfo: Will give you a basic overview of the Bot(Complex)\n\nServerInfo (Will gave you a basic overview of teh server, including members and roles)\n\nApplications (Will provide you a link to the applications for Complex Servers)\n\nBot is still in dev, commands will still be added)```**')
 
};
});

//when they type //Help then it will show then the commands that we have, more will have to be added, bot is still in dev

bot.on('message', (message) => {
    if(message.content == prefix + 'BotInfo'){
        message.channel.sendMessage('**Bot name**: Complex\n\n**Date made**: April 2018         **Bot State**: In development\n\n**Bot Token**: SIKE, why would I tell u?!\n\n**Developed by**: Nolan Hussey or Insaneskillz27#9243')
    }
});



var botCount = 0
bot.on("message", (message) => {
    message.guild.members.forEach(function(element) {
        if(element.user.bot){
            botCount = botCount + 1
        }
    });
    if(message.content == prefix + 'ServerInfo'){
        message.channel.sendMessage('**Server Name**: Complex Servers\n' + "**Server Members (Including bots)**: " + message.guild.memberCount + "\n**Bot Count **" + botCount +   '          **Server Roles**(That you can apply for):**```\n\n[~] Manager                          {1}\n\n~Administration Team~                {0}\n\n~Junior Administration Team~         {0}\n\n[~] Overseer                         {1}\n\n[~] Board of Directors               {1}\n\n~Development team~                   {3}\n\n~Junior Development team~            {2}\n\n~Moderation Team~                    {0}\n\n~Junior Moderation Team~             {0}```**\n\n\n **Server was made and is owned by InsaneSkillz27#9234**')
    }
});
// When the person types prefix (//) then ServerInfo then they will open up the server info, I am still working on how to display the member count

