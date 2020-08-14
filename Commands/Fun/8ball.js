module.exports= {
    name: "8ball",
    description: "E",
    run: async(client, message, args) => {

    let answers = [
        //Postive
        "this is it chief", "can i get an amen", "OwO", "UwU", "Indeed, it is so", "yeet", "yes", `YES!! 👍`, "that's absolutely correct",
        "i agree", "heeyy we have something in common", "Yeah, why not", "Only if you say please",

        //Maybe??
        "ask Fakado", "i guess??", "with the way things are, who knows", "¯\\_(ツ)_/¯", "not enough info", "i don't want to answer that", `how would i know that baka`,
        "you might wanna reconsider your life choices", "how about you watch anime instead", "Maybe", "if you pray hard enough",

        //Negative
        "this is not it chief", "that's a no from me chief", "leave me alone, i'm tired", "turn the gay down a notch and i'll answer ya", `u serious :woman_facepalming:`,
        "how about you shut up", "simply put, no", "not gonna happen", "i dont think so", "ask again in 5 minutes",
    ];

    let answer = answers[Math.floor(Math.random() * answers.length)];

    if (args[0]) {
        message.channel.send(answer);
    } else {
        message.channel.send("Give me a question to predict the answer for!");
    }
    }
}