## Reweet Bot 

Retweets the latest tweet using the **"#MeetMaye"** hashtag. 
It attempts to retweet once per hour. You can always change the # to fit your needs.

### Install twit

Install twit while in the ./bot/ folder. The library that lets us talk to Twitter.

```bash
npm i twit
```
 
### Connecting to Twitter 

 - Create a Twitter App on Twitter Developers : [https://apps.twitter.com/app/new ](https://apps.twitter.com/app/new). 
 
 - Next you'll see a screen with a "Details" tab. Setup the App and "Application Type", choose "Read and Write". 

### Create an empty config.js file in the ./bot folder

Then go to the Keys and Access Tokens tab, you will need this data to setup our **config.js** as shown below.
 
```js
module.exports = {
    consumer_key:         'API key',
    consumer_secret:      'API secret key',
    access_token:         'Access token',
    access_token_secret:  'Access token secret'
  }
``` 

In between those quotes, instead of `'key'`, paste the appropriate info from the Details page. 

### Run the app

Now type the following in the command line while in the ./bot folder directory
 
```bash
node Bot.js
``` 

### Celebrate

Expect a success message in your console! 
