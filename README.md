## Reweet Bot 

Retweets the latest tweet using the **"#MeetMaye"** hashtag. 
It attempts to retweet every 30 minutes. You can always change the # to fit your needs.

### Install dependencies

Install packages while in the `./bot/` folder.

```bash
cd bot && npm install
```
 
### Connecting to Twitter 

 - Create a Twitter App on Twitter Developers : [https://apps.twitter.com/app/new ](https://apps.twitter.com/app/new). 
 
 - Next you'll see a screen with a "Details" tab. Setup the App and "Application Type", choose "Read and Write". 

### Create a config.ts file in the ./bot folder

Copy `config_sample.ts` to `bot/config.ts`, then go to the Keys and Access Tokens tab and fill in the credentials:
 
```ts
export default {
  consumer_key:        'API key',
  consumer_secret:     'API secret key',
  access_token:        'Access token',
  access_token_secret: 'Access token secret',
};
``` 

In between those quotes, instead of `'key'`, paste the appropriate info from the Details page. 

### Run the app

Run directly with ts-node while in the `./bot` folder directory:
 
```bash
npm start
``` 

Or compile first and run the output:

```bash
npm run build
npm run serve
```

### Celebrate

Expect a success message in your console! 
