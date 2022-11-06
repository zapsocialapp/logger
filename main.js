let webhookURL = "https://discord.com/api/webhooks/1038767367116820511/MvI6nC9zgDkSsTzlClGwUvZLdEAY7248_SM0Cv6SCn8OrHr4bgpE3mKKDhtRO19exKq1";
let req = new XMLHttpRequest();

const myEmbed = {
	title: "TITLE_HERE",
	description: "@everyone Here Is Your Image <IMAGE_URL_HERE>",
	color: (function(hex) {
		return parseInt(hex.replace("#", ''), 16);
	})("#0000FF");
};

const params = {
	username: "USERNAME_HERE",
	embeds: [myEmbed]
};

req.open("POST", webhookURL)
	.setRequestHeader("Content-type", "application/json")
	.send(JSON.stringify(params));

