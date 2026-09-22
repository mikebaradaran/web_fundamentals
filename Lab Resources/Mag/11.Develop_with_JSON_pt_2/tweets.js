/* tweets.js */

window.onload = function() {
	insertScript();

}

function insertScript() {
	// remove existing "jsonScript" element, if it exists
	var jsonScript = document.getElementById("jsonScript");
	var head = document.getElementsByTagName("head")[0];
	if (jsonScript) {
		head.removeChild(jsonScript);
	}

	// add new script element, with JSON URL and random time string
	var random = (new Date()).getTime();
	var src = "http://twitter.com/statuses/user_timeline/webdesignermag.json?callback=processData&" + random;
	jsonScript = document.createElement("script");
	jsonScript.setAttribute("id", "jsonScript");
	jsonScript.setAttribute("src", src);

	head.appendChild(jsonScript);

	// call this function again in 25 seconds
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

		divTweet.appendChild(spanText);

		li.appendChild(divImg);
		li.appendChild(divTweet);

		// add list item to list
		ul.appendChild(li);
    }
}

