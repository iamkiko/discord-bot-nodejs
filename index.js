const Discord = require("discord.js");
const config = require("./config.json");

// our bot
const client = new Discord.Client();

client.login(config.BOT_TOKEN);
