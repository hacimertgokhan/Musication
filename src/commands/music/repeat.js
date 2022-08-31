module.exports.run = async (client, message, args) => {
    const player = client.manager.create({
        guild: message.guild.id,
        voiceChannel: message.member.voice.channel.id,
        textChannel: message.channel.id,
    });

    if (args[0].toLowerCase() === "enable" || args[0].toLowerCase() === "true") {
        player.setTrackRepeat(true)
        message.channel.send("⏸️ **REPEAT IS ENABLED!**")
    } else if (args[0].toLowerCase() === "disable" || args[0].toLowerCase() === "false") {
        player.setTrackRepeat(false)
        message.channel.send("⏸️ **REPEAT IS DISABLED!**")
    }
}

module.exports.config = {
    name: 'repeat',
    aliases: [],
    description: 'Repeats the music (Toggle)',
};