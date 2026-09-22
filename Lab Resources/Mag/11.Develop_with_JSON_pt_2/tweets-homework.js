/* 
 * tweets-homework.js 
 * 
 * Includes tweet date.
 */

window.onload = function() {
	insertScript();
}

function insertScript() {
	var jsonScript = document.getElementById("jsonScript");
	var head = document.getElementsByTagName("head")[0];
	if (jsonScript) {
		head.removeChild(jsonScript);
	}

	var random = (new Date()).getTime();
	var src = "http://twitter.com/statuses/user_timeline/webdesignermag.json?callback=processData&" + random;
	jsonScript = document.createElement("script");
	jsonScript.setAttribute("id", "jsonScript");
	jsonScript.setAttribute("src", src);

	head.appendChild(jsonScript);

	setTimeout("insertScript();", 25000);
}

function processData(tweets) {
	var ul = document.getElementById("tweetsList");

	// remove existing children before adding new ones
	while (ul.firstChild) {
		ul.removeChild(ul.firstChild);
	}

	// add all tweets to the tweets menu
	for (var i = 0; i < tweets.length; i++) {
		var tweet = tweets[i];

		// create list item element
		var li = document.createElement("li");

		// create div for img
		var divImg = document.createElement("div");
		divImg.setAttribute("class", "tweetImage");

		// create img
		var img = document.createElement("img");
		img.setAttribute("src", tweet.user.profile_image_url);
		img.setAttribute("alt", tweet.user.screen_name);
		divImg.appendChild(img);

		// create div for tweet text
		var divTweet = document.createElement("div");
		divTweet.setAttribute("class", "tweet");

		// create span for text
		var spanText = document.createElement("span");
		spanText.setAttribute("class", "tweetText");
		spanText.innerHTML = tweet.text;

		// get the date of the tweet and turn the date
		// into a sensible string
		var tweetDate = new Date(tweet.created_at);
		var tweetDateString = createDateString(tweetDate);

		// create span for date
		var spanDate = document.createElement("span");
		spanDate.setAttribute("class", "tweetDate");
		spanDate.innerHTML = tweetDateString;

		divTweet.appendChild(spanText);
		divTweet.appendChild(document.createElement("br"));
		divTweet.appendChild(spanDate);

		li.appendChild(divImg);
		li.appendChild(divTweet);

		// add list item to list
		ul.appendChild(li);
    }
}

function createDateString(d) {
	var hours = d.getHours();
	if (hours < 10) {
		hours = "0" + hours;
	}
	var mins = d.getMinutes();
	if (mins < 10) {
		mins = "0" + mins;
	}
	var date = d.getDate();
	if (date < 10) {
		date = "0" + date;
	}
	var month = d.getMonth();
	month = month + 1;
	if (month < 10) {
		month = "0" + month;
	}
	return hours + ":" + mins + " " + date + "/" + month + "/" + 
			d.getFullYear();
}

