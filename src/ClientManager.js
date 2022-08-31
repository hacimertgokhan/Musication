require('dotenv').config();
const {
    Client,
    Collection,
} = require('discord.js');
const EventHandler = require("./utils/loadEvents");
const chalk = require('chalk');

module.exports = class ClientManager extends Client {
    constructor(options) {
        super(options);
        this.commands = new Collection();
        this.aliases = new Collection();
    }

    setup() {
        this.manager.on("nodeConnect", node => console.log(`${chalk.bold.red('[Musication]')} All lavalink nodes connected.`))

        this.events = new EventHandler(this);
        this.events.init();

        require('./utils/loadCommands')(this);

        this.login(process.env.TOKEN);
    }
};