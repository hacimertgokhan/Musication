module.exports.run = async (client, message, args) => {
    message.channel.send('Yeah, everything is fine...');
}

module.exports.config = {
    name: 'tst',
    aliases: [],
    description: 'Checking bot for online status',
};