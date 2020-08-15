require('dotenv').config();
const axios = require("axios").default;

var config = {
	headers: {
		Authorization: `Bearer ${process.env.token}`,
		'Client-ID': process.env.clientid,
		'Content-Type': 'application/json'
	}
}

axios.post("https://api.twitch.tv/helix/webhooks/hub", process.argv[2], config).then((res) => {
	console.log(res.status);
}).catch((err) => {
	console.log(err.response.status);
})