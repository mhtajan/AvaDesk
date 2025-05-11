const { SlashCommandBuilder } = require('discord.js');
const { createIncident } = require('../../services/catalogService');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('catalog')
    .setDescription('Create a new catalog')
    .addStringOption(option =>
      option.setName('title')
        .setDescription('Catalog title')
        .setRequired(true)
    ),
  async execute(interaction) {
    const title = interaction.options.getString('title');
    const incident = await createIncident(title);

    await interaction.reply(`📝 Catalog created with ID: **${incident.id}**`);
  },
};