// Our Twitter library
const Twit = require("twit");

// We need to include our configuration file...
const twit = new Twit(require("./config.js"));

// This is the URL of a search for the latest tweets from a group of Palestine News Accounts
const mediaArtsSearch = { q: "from%3Amiddleeasteye%20OR%20from%3Aeyeonpalestine%20OR%20from%3Atimesofgaza%20OR%20from%3Awolpalestine%20OR%20from%3Aqudsnen%20OR%20from%3Apalyouthmvmt%20OR%20from%3Apalestinercs)%20-filter%3Areplies", count: 50, result_type: "recent" };
//Changed to get the 50 most recent tweets instead of 100

//will contain a string for a list I made for Palestine News Sources. I am changing the logic to
//Pull tweets from a twitter list instead of tweets that match a twitter search.
const palestineListId = "1746614491717022134"
// This function finds the latest tweet that matches the search above and retweets.
const retweetLatest = async() => {
  try {
	//The endpoint for tweets sent by members of a list is in lists/statusues
	twit.get("lists/statuses", palestineListId, (error, data) => {
      // twit.get("search/tweets", mediaArtsSearch, (error, data) => {
    // If our search request to the server had no errors...
    if (error) {
      // However, if our original search request had an error, we want to print it out here...
      console.log(error.message);
    } else {
	//creating a loop to retweet the entire 50 item list of tweets
	for (let i = 0; i < data.statuses.length; i++){
      // Grab the ID of the tweet we want to retweetwit...
      const retweetId = data.statuses[i].id_str;
      // Tell Twitter we want to retweet it...
      twit.post("statuses/retweet/" + retweetId, {}, (error, response) => {
        // If there was an error with our Twitter call, we print it out here...
        if (error) {
          console.log(error.message);
        } else if (response) {
          console.log("Success! Retweeted!");
        }
      });
	}
    }
  });
  } catch(error) {
     // Handle errors...
    console.log(error)
  }
};

// Try to retweet something as soon as we run the program...
retweetLatest();
// ...and then every hour/half thereafter. Time here is in milliseconds, so
// 1000 ms = 1 second, 1 sec * 60 = 1 min, 1 min * 60 = 1 hour --> 1000 * 60 * 60
//set interval to once per day by adding a * 24
setInterval(retweetLatest, 1000 * 60 * 60 * 24);
