module.exports.run = async (client, message, args) => {
    const player = client.manager.create({
        guild: message.guild.id,
        voiceChannel: message.member.voice.channel.id,
        textChannel: message.channel.id,
    });

    if (player.paused) {
        player.pause(false);
        message.channel.send("▶️ **RESUMED!**")
    } else {
        message.reply("u gotta pause something first bro wth")
    }
}

module.exports.config = {
    name: 'resume',
    aliases: [],
    description: 'Resumes the music',
};