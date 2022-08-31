module.exports.run = async (client, message, args) => {
    const player = client.manager.create({
        guild: message.guild.id,
        voiceChannel: message.member.voice.channel.id,
        textChannel: message.channel.id,
    });

    if (player.playing) {
        player.stop();
    } else {
        message.reply("Are you sure you are playing a music right now ?")
    }
}

module.exports.config = {
    name: 'stop',
    aliases: ['leave'],
    description: 'Stops and makes the bot leaves the channel',
};