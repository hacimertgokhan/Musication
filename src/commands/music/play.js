module.exports.run = async (client, message, args) => {
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) return message.channel.send("Nope, you cannot do that !")

    const res = await client.manager.search(
        message.content.slice(6),
        message.author
    );

    const player = client.manager.create({
        guild: message.guild.id,
        voiceChannel: message.member.voice.channel.id,
        textChannel: message.channel.id,
    });
    
    player.connect();

    player.queue.add(res.tracks[0]);
    message.channel.send(`This just got Added to the queue: ${res.tracks[0].title}.`);

    if (!player.playing && !player.paused && !player.queue.size) {
        player.play();
    }

    if (!player.playing && !player.paused && player.queue.totalSize === res.tracks.length) {
        player.play();
    }
}

module.exports.config = {
    name: 'play',
    aliases: ["p"],
    description: 'Plays a music',
};