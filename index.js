const Discord = require("discord.js");
require("dotenv").config();

// our bot
const client = new Discord.Client();
const botToken = process.env.BOT_TOKEN;

const prefix = "kori ";

client.on("message", function (message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(" ");
  const command = args.shift().toLowerCase();

  if (command === "mila mou") {
    message.channel.send("ti thelis?");
  }
});

client.login(botToken);
