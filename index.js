const Discord = require("discord.js");
const schedule = require('node-schedule')
const axios = require('axios');
const fsym = 'SLP'
const tsyms = 'USD'

const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
  const channelId = process.env.CHANNEL_ID
  const channel = client.channels.cache.get(channelId)
  getPrice(channel)
  schedule.scheduleJob('*/15 * * * *', function(){
    getPrice(channel)
  })
})

function getPrice(channel) {
  axios.get(`https://min-api.cryptocompare.com/data/price?fsym=${fsym}&tsyms=${tsyms}`)
    .then(function (response) {
      const price = response.data[tsyms]
      channel.send(`〽 The price of ${fsym} is ${price} ${tsyms}`)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
}