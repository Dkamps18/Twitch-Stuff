# Requirements
+ Node.js
+ Git

# Installation
## Linux
Run the following commands:
```
git clone https://github.com/Dkamps18/Twitch-Stuff.git
cd Twitch-Stuff/webhooks/nodejs/subscribe
npm install
```
## Windows
Run the following commands in cmd:
```
git clone https://github.com/Dkamps18/Twitch-Stuff.git
cd Twitch-Stuff\webhooks\nodejs\subscribe
npm install
```

# Usage
Ceate a `.env` file with the following information:
```
token=YOUR AUTH TOKEN
clientid=YOUR CLIENT-ID
```
After that run:
```
node index.js BODY
```
The body is the JSON body with the required data as docummented [here](https://dev.twitch.tv/docs/api/webhooks-reference).  
Here is a example body:
```
"{\"hub.callback\":\"https://my.webhook-callback.url/twitch\",\"hub.mode\":\"subscribe\",\"hub.topic\":\"https://api.twitch.tv/helix/streams?user_id=1\",\"hub.lease_seconds\":\"40\"}"
```