module.exports.run = async (client, message, args) => {
    const player = client.manager.create({
        guild: message.guild.id,
        voiceChannel: message.member.voice.channel.id,
        textChannel: message.channel.id,
    });

    if (player.playing) {
        player.pause(true);
        message.channel.send("⏸️ **PAUSED!**")
    } else {
        message.reply("I'm not working ?")
    }
}

module.exports.config = {
    name: 'pause',
    aliases: [],
    description: 'Pauses the music',
};