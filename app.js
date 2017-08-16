/**
 *
 *  Author: Troy Barnard and Spencer Walden
 *  Date: August 15th, 2017
 *  Description: A Discord chat bot intended to mimic our mutual friend, Keefe Koenig
 *
 */

// Imports
var Discord = require('discord.io');

// Constants
const memeArray = [
  getFBPicture(true, [10322445, 736571016365927, 6122631404316564888], 'b32393adff90f64d4c11861a285a87a9', '59F14A3C'),
  getFBPicture(true, [999912, 657266644296365, 1796786678], '665e2b0c0fb6d80772d087b386014b0c', '5A250558'),
	getFBPicture(true, [1471138, 657266404296389, 1462432710], 'b1905ba1377f9207343fd1eebfc97ac6', '5A2FF8AC'),
	getFBPicture(true, [1484735, 657266347629728, 1591046568], '99741f36e45fad3300f0497ec96a4bea', '5A350E3F'),
	getFBPicture(true, [1460279, 657261414296888, 1409941056], '44c48ab6188d141c491614c9a42c9b88', '5A2A7C58'),
	getFBPicture(true, [575970, 537242709632093, 622054354], '4f83aa889fa627299149cecd2bf82dfc', '59EB15D1'),
  getFBPicture(true, [578620, 536201723069525, 1049133043], '975d06a25e364ddb1602d4db889b0451', '5A2A572B'),
  getFBPicture(true, [600190, 535790019777362, 864278213], '7eeeedc214f6b79892538ad40de5ac70', '5A38ABD6'),
	getFBPicture(true, [644333, 534981119858252, 2023321938], '92668ebd73bad5f35a12ba0463dfdb49', '5A31AF7F'),
	getFBPicture(true, [295657, 534629519893412, 1735171618], '818ce513ec886d6c4e72de2b64d63094', '5A2D651A'),
	getFBPicture(true, [224637, 449150045108027, 1829597251], '9a1dedc60bb94aedd5f1763996dd989c', '5A2D7DF0'),
	getFBPicture(true, [553471, 441861062503592, 643853451], 'bfaf06a08ae8d1630ae95fa931123048', '5A29D333'),
  getFBPicture(true, [602526, 441526475870384, 907188007], '9b4164f5a64d818f6f48eec9a90d0e8c', '5A1B2185'),
	getFBPicture(true, [547738, 441187152570983, 1626969497], 'ad1a9805b6e966a326f63a117046eadd', '5A299526'),
	getFBPicture(true, [389098, 439524819403883, 1192391394], '5947d4035202a9cf4fafc60c4d77e548', '5A2811A8'),
	getFBPicture(true, [409683, 438662036156828, 612090146], '19d0a243e9ec8385c008327cac91bc4f', '59F256C4'),
	getFBPicture(true, [580857, 438633049493060, 1151942041], '8dbf5b42b6b8ef0d23f84bc7db2a7e6d', '5A1BFE81'),
	getFBPicture(true, [487190, 438337252855973, 1308119772], '26c05a7f52a086c996aa0ac7f266e823', '5A1D707B'),
	getFBPicture(true, [534513, 438333289523036, 1322988843], '3c2818e5f537fcb8b963dee9db3f65cc', '5A294A44'),
	getFBPicture(true, [251812, 438330179523347, 2051057899], '5d9c2c37633d54f49033c220b1529b11', '5A2B706B'),
	getFBPicture(false, [330822, 440572679299097, 604568631], 'dc20ef0b403d30f9c5e20407e32d770c', '5A3205A6'),
	getFBPicture(false, [334113, 440237609332604, 802765931], '820aae37e5b0d63679d704d94a2887b2', '5A1F21E2'),
	getFBPicture(false, [339383, 439894406033591, 1104072709], '2c4e6d472de9f811adbb304b87f65b62', '5A1F52FC'),
	getFBPicture(false, [266117, 439218719434493, 15443424], '8fdd6bf73a7d5eec5be51350d6417f64', '5A335EF0'),
  getFBPicture(false, [202268, 438940816128950, 1015045861], '362166da2b315dc1e1490a48c3ae7a04', '5A399A5E'),
	getFBPicture(false, [471223, 438669609489404, 379780058], '065a40ad49d03c3c2394199a9963358d', '5A395B5B'),
	getFBPicture(false, [458211, 498258963530468, 1637617887], '09b41f39f907f9095889035811ed994f', '5A24D1A7'),
	getFBPicture(false, [219596, 455967891092909, 1659676419], 'a4dd0596ab2310c120e28d662531ff39', '5A27F6D1')
];

const catchphrases = [
  'huh huh huh you\'re so funny `' + user + '`',
  'it\'s fine',
  'go fish, `'+user+'`'
];

/*
 *  Main function
 *
 */

function main() {
  // Initialize the bot
  let bot = new Discord.Client({
      autorun: true,
      token: "MzQ3MDk5OTI1MzQ5MjY5NTI0.DHTeBA.5SXpt3kCbQkwlpLmJlA0Q_BTatQ"
  });
  bot.setPresence({
    game: {
      name: "k.help for info | 1.0.0"
    }
  });

  // Define handlers for the bot
  bot.on('ready', botReady);
  bot.on('message', botMessage);
}

/*
 *  Event Handler Functions
 *
 */

function botReady(event) {
  let message = `Logged in as ${bot.username} - ${bot.id}\n`;
  console.log(message);
  return message;
}

// handler for when the bot detects a message in a channel it's subscribed to
function botMessage(user, userID, channelID, message, event) {
  let functions = {
    help: keefeHelp,
    talk: keefeTalk,
    meme: keefeMeme
  }
  let fn = message.split('.')[1];
  console.log('What AM I???', this);
  this.simulateTyping(channelID);
  let messageToSend = functions[fn](user, userID, channelID, message, event);
  this.sendMessage(messageToSend);
}

/*
 *  Helper Functions
 *
 */

// kinda a mess, tries to make the meme array less ugly... doesn't succeed
function getFBPicture(is_t_one_zero_nine, numbers, oh, oe) {
  let t_version = is_t_one_zero_nine ? '1.0-9' : '31.0-8';
  let jpg_suffix = is_t_one_zero_nine ? 'n' : 'o';
  let jpg_prefix = numbers.join('_');
  let jpg = `${jpg_prefix}_${jpg_suffix}.jpg`
  
  return `https://scontent.fsnc1-2.fna.fbcdn.net/v/t${t_version}/${jpg}?oh=${oh}&oe=${oe}`;
}

/*
 *  Keefe API functions:
 *
 *  Returns: A discord message object
 *
 *  Params: User, userID, channelID, message, and event that triggered the message handling function
 *
 */

function keefeTalk(user, userID, channelID, message, event) {
  var response = catchphrases[Math.floor(Math.random()*catchphrases.length)];
  return {
      to: channelID,
      message: response
  };
}

function keefeMeme(user, userID, channelID, message, event) {
  let imgURL = memeArray[Math.floor(Math.random()*memeArray.length)];
  return {
    to: channelID,
    embed: {
      image: {
          url: imgURL
      }
    }
  };
}

function keefeHelp(user, userID, channelID, message, event) {
  return {
    to: channelID,
    message: 
    `
    **__k.talk__** - I'll respond just like the real Keefe.
    **__k.meme__** - I'll drop a spicy Keefe meme.
    **__k.help__** - I'll display this helpful dialog
    `,
    embed: {
      image: {
        url: 'https://scontent.fsnc1-2.fna.fbcdn.net/v/t1.0-9/580926_438288669527498_1776737550_n.jpg?oh=b73fc1b6e6d20031b13c148bcf822cbe&oe=59EFBC2D',
        width: 100,
        height: 100
      },
      title: "I'm robo-keefe, and I approve this message",
      url: ''
    }
  };
}
