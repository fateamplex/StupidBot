# Starting

It's very easy to start the bot for now because we haven't added any complicated stuff!

```shell 
git clone https://github.com/fateamplex/StupidBot.git

npm i

node . 
```

If you want to change the config files head over to `./System/config.json`!

Also delete the `./json.sqlite` file if you want to remove the database (We use `quick.db` to save lines of code)

## Setting up the config

In the `./System` folder, create a new file called `config.json` and put the following code

```json
{
  "bot": {
    "prefix": "^^",
    "version": "2.1",
    "codename": "Pineapple",
    "owner": "355702497110917131",
    "aephylics": "422078523147157514"
  },
  "system": {
    "nodev": "12.16.1",
    "language": "discord.js",
    "status": "Functional"
  }
}
```
change the `owner` to your ID and change the `aephylics` one to your subdeveloper!

### Basic starting

```shell
npm i
node .
```

More updates will be made and this README will also change


**Thank You**