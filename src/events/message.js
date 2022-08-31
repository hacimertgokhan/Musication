/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
module.exports = async (client, message) => {
	if (message.author.bot || message.channel.type === 'dm') return;

	const messageArray = message.content.split(' ');
	let cmd = messageArray[0];
	let args = messageArray.slice(1);

	const prefix = ',';

	const commandfile = client.commands.get(cmd.slice(prefix.length).toString().toLowerCase()) || client.commands.get(client.aliases.get(cmd.slice(prefix.length).toString().toLowerCase()));

	if (commandfile) {
		try {
			await commandfile.run(client, message, args);
		}
		catch (err) {
			message.reply(`An error occured!\nError: ${require('util').inspect(err, { depth: 0 })}`, {
				allowedMentions: {
					repliedUser: false,
				},
			});
		}
	}
};
