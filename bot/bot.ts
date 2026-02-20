// Our Twitter library
import Twit from "twit";

// We need to include our configuration file...
import config from "./config";
const twit = new Twit(config);

// This is the URL of a search for the latest tweets on the '#MeetMaye' hashtag...
const mediaArtsSearch: Twit.Params = { q: "#MeetMaye", count: 100, result_type: "recent" };

// This function finds the latest tweet with the MeetMaye hashtag and retweets.
const retweetLatest = async (): Promise<void> => {
  try {
    twit.get("search/tweets", mediaArtsSearch, (error, data) => {
      // If our search request to the server had no errors...
      if (error) {
        // However, if our original search request had an error, we want to print it out here...
        console.log(error.message);
      } else {
        const tweetData = data as Twit.Twitter.SearchResults;
        const statuses = tweetData.statuses;
        if (!Array.isArray(statuses) || statuses.length === 0) {
          console.log("No tweets found to retweet for query:", mediaArtsSearch.q);
          return;
        }
        // Grab the ID of the tweet we want to retweet...
        const retweetId = statuses[0].id_str;
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
    });
  } catch (error) {
    // Handle errors...
    console.log(error);
  }
};

// Try to retweet something as soon as we run the program...
retweetLatest();
// ...and then every hour/half thereafter. Time here is in milliseconds, so
// 1000 ms = 1 second, 1 sec * 60 = 1 min, 1 min * 60 = 1 hour --> 1000 * 60 * 60
setInterval(retweetLatest, 1000 * 60 * 30);
