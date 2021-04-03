require ('dotenv').config();


const Discord = require('discord.js');
const client = new Discord.Client();

const Filter = require('bad-words'),
    filter = new Filter()
    ;
 
    
client.login(process.env.BOT_TOKEN);


client.on('ready', () => {
  console.log("Lets GO!!!")
})


client.on("message", msg => {
  if (msg.content && !msg.content.match(/^<@/)) {
    let input = msg.content;
    let output = filter.clean(input);
    if (input !== output) {
      // we have a bad word
      let reply = "WARNING YOU!!!! You typed a FORBIDDEN Word DON'T type it again!";

      msg.reply(reply);  
      console.log(
        "We received message with bad word content: [" 
        + input 
        + "], and type: [" 
        + msg.type 
        + "]"
        + " Filtered to: [" 
        + output 
        + "]"
        ); 
    }
    
    // console.log("We received message content: [" + input + "], and type: [" + msg.type + "]"); 
    // msg.reply(output);
    // msg.delete(output)
    // .then(msg => console.log(`Deleted message from ${msg.any} after 5 seconds`))
    // .catch(console.error);
  }
});

