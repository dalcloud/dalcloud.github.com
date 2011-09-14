/**
* Dalcloud recent post parser using google feed API.
**/
var feedUrl = "http://blog.dalcloud.com/feeds/posts/default";	// sucscription feed url.
var feedLimit = 5;	// Display size.

google.load("feeds", "1");

function initFeed() {
	var feedPointer = new google.feeds.Feed(feedUrl);	// Google feed API method.
	feedPointer.setNumEntries(feedLimit);	// Sets the display count.
	feedPointer.load(displayFeed);
}

function displayFeed(result) {
	if (!result.error) {
		var feedContainer = document.getElementById('feedcontainer');	// Sets the container ID.
		var theFeeds = result.feed.entries;
		var output = "";
		for (var i = 0; i < theFeeds.length; i++) {
			output += "<a href='" + theFeeds[i].link + "' target='_blank'><font color='878787'>> </font>" + theFeeds[i].title + "</a><br />";
		}
		feedContainer.innerHTML = output;
	} else {
		// Sets the error.
	}
}

google.setOnLoadCallback(initFeed);