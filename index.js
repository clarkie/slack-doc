const Bot = require('slackbots');
const lodashDocs = require('./docs/lodash')

var settings = {
  token: process.env.SLACK_API_KEY,
  name: 'DocBot'
};

var bot = new Bot(settings);

const docs = {
  lodash: {},
};


const isChatMessage = message => message.type === 'message' && message.text;
const isChannelConversation = message => typeof message.channel === 'string' && message.channel[0] === 'C';
const isDocumenationRequest = message => message.text.slice(0, 4) === 'docs';
const lookupDocs = message => {
  const commands = message.text.split(' ');
  const library = commands[1];
  const query = commands[2];

  if (!docs[library]) return 'Sorry dude, I don\'t know that library';
  if (!docs[library][query]) return `Hey man, ${query} was never part of the spec! Try something else`;
  return docs[library][query];
}

bot.on('start', (message) => {
  docs.lodash = lodashDocs();
});

bot.on('message', (message) => {
  if (isChatMessage(message) && isChannelConversation(message) && isDocumenationRequest(message)) {
    const docs = lookupDocs(message);
    bot.postMessage(message.channel, docs);
  }
})
