const { SlashCommandBuilder } = require('discord.js');
const { createIncident } = require('../../services/incidentService');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('incident')
    .setDescription('Create a new incident')
    .addStringOption(option =>
      option.setName('title')
        .setDescription('Incident title')
        .setRequired(true)
    ),
  async execute(interaction) {
    const title = interaction.options.getString('title');
    const incident = await createIncident(title);

    await interaction.reply(`📝 Incident created with ID: **${incident.id}**`);
  },
};
