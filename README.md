# Starting

It's very easy to start the bot for now because we haven't added any complicated stuff!


#### Before you start the bot, please read all of this


**First enter this in your project folder:**

```shell 
git clone https://github.com/fateamplex/StupidBot.git

npm i
```
**After you've done that, make a new file called `.env` in the same folder as the `index.js` file and put the following**

```env
TOKEN = YOUR_TOKEN_GOES_HERE
```
**NOTE: Change the part where it says "YOUR_TOKEN_GOES_HERE" to your actual token without any __" "__ **

**Delete the `./json.sqlite` file if you want to remove the database (We use `quick.db` to save lines of code)**

## Setting up the config

In the `./System` folder, create a **new file** called `config.json` and put the following code

```json
{
  "bot": {
    "prefix": "^^",
    "version": "2.1",
    "codename": "Pineapple",
    "owner": "355702497110917131",
    "subdev": "422078523147157514"
  },
  "system": {
    "nodev": "12.16.1",
    "language": "discord.js",
    "status": "Functional"
  }
}
```
change the `owner` to **your ID** and **change the `subdev` one to your subdeveloper**!

### Start the bot

**Now if you've done everything correctly run**

```shell
npm i
node .
```

*Now in the console it would output something like this*

```batch
[SYSTEM] <Your bot name> is up! Everything is functional and works!
```

More updates will be made and this README will also change


**Thank You 👋**