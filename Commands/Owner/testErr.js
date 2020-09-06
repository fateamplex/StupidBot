const fumey = require("fumey");

module.exports = {
  name: "testerr",
  description: "1234",
  run: async(client, message) => {
    let err = fumey.sendError("Testing the module", "Yup just testing!");

    message.channel.send(err);
  }
}