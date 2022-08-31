const {Intents} = require('discord.js');
const {Manager} = require("erela.js");
const ClientManager = require('./ClientManager');

const client = new ClientManager({
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
    ws: {
        intents: Intents.ALL,
    },
    disableMentions: 'everyone',
});

client.manager = new Manager({
        nodes: [{
            host: process.env.LAVALINK_HOST,
            port: parseInt(process.env.LAVALINK_PORT),
            password: process.env.LAVALINK_PASS,
        }, ],

        send(id, payload) {
            const guild = client.guilds.cache.get(id);
            if (guild) guild.shard.send(payload);
        },
    })
    .on("trackStart", (player, track) => {
        client.channels.cache
            .get(player.textChannel)
            .send(`🎶 Now playing: ${track.title}`);
    })
    .on("queueEnd", (player) => {
        client.channels.cache
            .get(player.textChannel)
            .send("Queue is over");

        player.destroy();
    });


client.setup();