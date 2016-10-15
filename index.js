const Bot = require('slackbots');

var settings = {
  token: 'YOUR API KEY',
  name: 'DocBot'
};

var bot = new Bot(settings);

const lodashDocs = query => {
  switch (query) {
    case 'differenceBy': return 'differenceBy means x';
    case 'sortBy': return 'sortBy means x';
    default: return 'Sorry dude, Lodash ain\'t got that command';
  }
}

const isChatMessage = message => message.type === 'message' && message.text;
const isChannelConversation = message => typeof message.channel === 'string' && message.channel[0] === 'C';
const isDocumenationRequest = message => message.text.slice(0, 4) === 'docs';
const lookupDocs = message => {
  const commands = message.text.split(' ');
  const library = commands[1];
  const query = commands[2];

  switch(library) {
    case 'lodash': return lodashDocs(query);
    default: return 'Sorry dude, I don\'t know that library';
  }
}

bot.on('message', (message) => {
  if (isChatMessage(message) && isChannelConversation(message) && isDocumenationRequest(message)) {
    const docs = lookupDocs(message);
    bot.postMessage(message.channel, docs);
  }
})
