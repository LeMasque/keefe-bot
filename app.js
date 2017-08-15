var Discord = require('discord.io');
var bot = new Discord.Client({
    autorun: true,
    token: "MzQ3MDk5OTI1MzQ5MjY5NTI0.DHTeBA.5SXpt3kCbQkwlpLmJlA0Q_BTatQ"
});

bot.on('ready', function(event) {
    console.log('Logged in as %s - %s\n', bot.username, bot.id);
});

bot.setPresence({
  game: {name: "k.help for info | 1.0.0"}
});

var memeArray = ['https://scontent.fsnc1-2.fna.fbcdn.net/v/t1.0-9/10322445_736571016365927_6122631404316564888_n.jpg?oh=b32393adff90f64d4c11861a285a87a9&oe=59F14A3C', 'https://scontent.fsnc1-2.fna.fbcdn.net/v/t1.0-9/999912_657266644296365_1796786678_n.jpg?oh=665e2b0c0fb6d80772d087b386014b0c&oe=5A250558', 'https://scontent.fsnc1-2.fna.fbcdn.net/v/t1.0-9/1471138_657266404296389_1462432710_n.jpg?oh=b1905ba1377f9207343fd1eebfc97ac6&oe=5A2FF8AC', 'https://scontent.fsnc1-2.fna.fbcdn.net/v/t1.0-9/1484735_657266347629728_1591046568_n.jpg?oh=99741f36e45fad3300f0497ec96a4bea&oe=5A350E3F', 'https://scontent.fsnc1-2.fna.fbcdn.net/v/t1.0-9/1460279_657261414296888_1409941056_n.jpg?oh=44c48ab6188d141c491614c9a42c9b88&oe=5A2A7C58', 'https://scontent.fsnc1-2.fna.fbcdn.net/v/t1.0-9/575970_537242709632093_622054354_n.jpg?oh=4f83aa889fa627299149cecd2bf82dfc&oe=59EB15D1','https://scontent.fsnc1-2.fna.fbcdn.net/v/t1.0-9/578620_536201723069525_1049133043_n.jpg?oh=975d06a25e364ddb1602d4db889b0451&oe=5A2A572B',
'https://scontent.fsnc1-2.fna.fbcdn.net/v/t1.0-9/600190_535790019777362_864278213_n.jpg?oh=7eeeedc214f6b79892538ad40de5ac70&oe=5A38ABD6', 'https://scontent.fsnc1-2.fna.fbcdn.net/v/t1.0-9/644333_534981119858252_2023321938_n.jpg?oh=92668ebd73bad5f35a12ba0463dfdb49&oe=5A31AF7F', 'https://scontent.fsnc1-2.fna.fbcdn.net/v/t1.0-9/295657_534629519893412_1735171618_n.jpg?oh=818ce513ec886d6c4e72de2b64d63094&oe=5A2D651A', 'https://scontent.fsnc1-2.fna.fbcdn.net/v/t31.0-8/458211_498258963530468_1637617887_o.jpg?oh=09b41f39f907f9095889035811ed994f&oe=5A24D1A7', 'https://scontent.fsnc1-2.fna.fbcdn.net/v/t31.0-8/219596_455967891092909_1659676419_o.jpg?oh=a4dd0596ab2310c120e28d662531ff39&oe=5A27F6D1', 'https://scontent.fsnc1-2.fna.fbcdn.net/v/t1.0-9/224637_449150045108027_1829597251_n.jpg?oh=9a1dedc60bb94aedd5f1763996dd989c&oe=5A2D7DF0', 'https://scontent.fsnc1-2.fna.fbcdn.net/v/t1.0-9/553471_441861062503592_643853451_n.jpg?oh=bfaf06a08ae8d1630ae95fa931123048&oe=5A29D333',
 'https://scontent.fsnc1-2.fna.fbcdn.net/v/t1.0-9/602526_441526475870384_907188007_n.jpg?oh=9b4164f5a64d818f6f48eec9a90d0e8c&oe=5A1B2185', 'https://scontent.fsnc1-2.fna.fbcdn.net/v/t1.0-9/547738_441187152570983_1626969497_n.jpg?oh=ad1a9805b6e966a326f63a117046eadd&oe=5A299526', 'https://scontent.fsnc1-2.fna.fbcdn.net/v/t31.0-8/330822_440572679299097_604568631_o.jpg?oh=dc20ef0b403d30f9c5e20407e32d770c&oe=5A3205A6', 'https://scontent.fsnc1-2.fna.fbcdn.net/v/t31.0-8/334113_440237609332604_802765931_o.jpg?oh=820aae37e5b0d63679d704d94a2887b2&oe=5A1F21E2', 'https://scontent.fsnc1-2.fna.fbcdn.net/v/t31.0-8/339383_439894406033591_1104072709_o.jpg?oh=2c4e6d472de9f811adbb304b87f65b62&oe=5A1F52FC', 'https://scontent.fsnc1-2.fna.fbcdn.net/v/t1.0-9/389098_439524819403883_1192391394_n.jpg?oh=5947d4035202a9cf4fafc60c4d77e548&oe=5A2811A8', 'https://scontent.fsnc1-2.fna.fbcdn.net/v/t31.0-8/266117_439218719434493_15443424_o.jpg?oh=8fdd6bf73a7d5eec5be51350d6417f64&oe=5A335EF0',
 'https://scontent.fsnc1-2.fna.fbcdn.net/v/t31.0-8/202268_438940816128950_1015045861_o.jpg?oh=362166da2b315dc1e1490a48c3ae7a04&oe=5A399A5E', 'https://scontent.fsnc1-2.fna.fbcdn.net/v/t31.0-8/471223_438669609489404_379780058_o.jpg?oh=065a40ad49d03c3c2394199a9963358d&oe=5A395B5B', 'https://scontent.fsnc1-2.fna.fbcdn.net/v/t1.0-9/409683_438662036156828_612090146_n.jpg?oh=19d0a243e9ec8385c008327cac91bc4f&oe=59F256C4', 'https://scontent.fsnc1-2.fna.fbcdn.net/v/t1.0-9/580857_438633049493060_1151942041_n.jpg?oh=8dbf5b42b6b8ef0d23f84bc7db2a7e6d&oe=5A1BFE81', 'https://scontent.fsnc1-2.fna.fbcdn.net/v/t1.0-9/487190_438337252855973_1308119772_n.jpg?oh=26c05a7f52a086c996aa0ac7f266e823&oe=5A1D707B', 'https://scontent.fsnc1-2.fna.fbcdn.net/v/t1.0-9/534513_438333289523036_1322988843_n.jpg?oh=3c2818e5f537fcb8b963dee9db3f65cc&oe=5A294A44', 'https://scontent.fsnc1-2.fna.fbcdn.net/v/t1.0-9/251812_438330179523347_2051057899_n.jpg?oh=5d9c2c37633d54f49033c220b1529b11&oe=5A2B706B']

bot.on('message', function(user, userID, channelID, message, event) {
    switch (message) {
      case 'k.help':
        bot.simulateTyping(channelID);
        bot.sendMessage({
          to: channelID,
          message: "",
          embed: {
            footer: {
              text: "Type k.talk and I'll respond just like the real Keefe.\tType k.meme for a spicy Keefe meme."
            },
            image:
            {
              url: 'https://scontent.fsnc1-2.fna.fbcdn.net/v/t1.0-9/580926_438288669527498_1776737550_n.jpg?oh=b73fc1b6e6d20031b13c148bcf822cbe&oe=59EFBC2D',
              width: 100,
              height: 100
            },
            title: "Hey there, I'm robo-keefe",
            url: ''
          }
        })
        break;
      case 'k.talk':
        bot.simulateTyping(channelID);
        var responses = ['huh huh huh you\'re so funny `' + user + '`', 'it\'s fine', 'go fish']
        var response = responses[Math.floor(Math.random()*responses.length)];
        bot.sendMessage({
            to: channelID,
            message: response
        });
        break;
      case 'k.meme':
        bot.simulateTyping(channelID);
        var imgURL = memeArray[Math.floor(Math.random()*memeArray.length)];
        bot.sendMessage({
          to: channelID,
          embed: {
            image: {
                url: imgURL
            }
          }
        })
        break;
      default:
    }

});
