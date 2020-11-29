module.exports = {
  name: "uptime",
  description: "E",
  category: "Info",
  run: async(client, message, args) => {
    function getMemoryUsage() {
  let total_rss = require('fs').readFileSync("/sys/fs/cgroup/memory/memory.stat", "utf8").split("\n").filter(l => l.startsWith("total_rss"))[0].split(" ")[1]; 
  return Math.round( Number(total_rss) / 1e6 ) - 60;
}
    let days = Math.floor(client.uptime / 86400000);
      let hours = Math.floor(client.uptime / 3600000) % 24;
      let minutes = Math.floor(client.uptime / 60000) % 60;
      let seconds = Math.floor(client.uptime / 1000) % 60;

      message.channel.send(`__Uptime (aka days without me showering if possible lol):__\n${days}d ${hours}h ${minutes}m ${seconds}s`);

      message.channel.send(`I am also using ${getMemoryUsage}% of RAM`)
  }
}