# slack-doc


To install just clone this repo and then run npm install:

```
git clone https://github.com/clarkie/slack-doc.git
cd slack-doc
npm install
```

You will need to generate a slack api key for this to hook into your own slack account. 
Go to https://YOUR_SLACK.slack.com/services/new/bot to create the key.

```
SLACK_API_KEY=<key generated above> npm start
```

This will start running the slack bot to help you with ~~some libraries~~ Lodash.

Once the bot user has been added to a channel they will respond to the following commands
```
docs [library_name] [query]
```
For example
```
docs lodash range
```
![lodash range example](https://raw.githubusercontent.com/clarkie/slack-doc/master/example.png)

## Why?

I'm a relative newbie to Lodash and often ask [@silverwolf90](https://github.com/Silverwolf90) for help. I normally do this in the form of a chat message.
Also, following the issues [Dash has had with the Apple App Store](https://blog.kapeli.com/dear-dash-users) I thought it would be interesting to see if we could get something running in slack to perform a similar job.

## Further improvements

- more libraries (e.g. Node.js, React, Redux, etc)
- automated pulls of new documentation
- better formatting
- a full service that can be used by many rather than having to run the bot yourself

## Credits

[@silverwolf90](https://github.com/Silverwolf90) for his help not just with this repo but also his ongoing Lodash education programme. 
