// Edit these.
var username = 'yourusername'; // your twitch username.
var oauth = 'youroauthtoken'; // oauth token from https://twitchapps.com/tmi/ without oauth: infront of it.
var channel = '#yourchannel'; // the channel you want the messages to be send to with a # infront of it.
var message = 'bleedPurple {user} just subscribed for their {month} time! bleedPurple'; // The message you want to send to the channel. Variables: {user} and {month}.



// Don't edit stuff below if you don't know what your doing.
const tmi = require('tmi.js');
const client = new tmi.client({
		connection: {
			reconnect: true,
			secure: true
		},
		identity: {
			username: username,
			password: oauth
        },
        channels: [channel]
	});

client.connect()
.then(() => {
	console.log('Connected');
});

client.on("subscription", (channel, username, method, submessage, userstate) => {
	m = message.replace('{user}', username).replace('{month}', '1');
	console.log(m);
	client.say(channel, m);
});
client.on("resub", (channel, username, months, submessage, userstate, methods) => {
	m = message.replace('{user}', username).replace('{month}', userstate["msg-param-cumulative-months"]);
	console.log(m);
	client.say(channel, m);
});