
---


# AvaDesk 🤖💼  
**Your Intelligent ITSM Assistant Inside Discord**

AvaDesk is a smart, Discord-native IT Service Management (ITSM) bot inspired by platforms like ServiceNow. Designed for IT teams, developers, and support communities, AvaDesk streamlines Catalog Management, Incident Reporting, SLA tracking, and more — all without leaving Discord.

---

## ✨ Features

- 🎫 **Incident Management**
  - Report, assign, and resolve incidents using simple commands or buttons.
  - Custom priority levels, statuses, and notifications.

- 📦 **Catalog Management**
  - Users can request services or items from a customizable catalog.
  - Auto-approval workflows, user permissions, and logs.

- ⏱️ **SLA Calculations**
  - Tracks response and resolution times based on configurable SLAs.
  - Sends alerts for SLA breaches or nearing deadlines.

- 🛠️ **Admin Tools**
  - Role-based access control (RBAC)
  - Dashboard commands for reporting and system overview
  - Real-time status updates

---

## 🚀 Getting Started

### Prerequisites
- Node.js `v18+`
- Discord.js `v14+`
- MongoDB or SQLite (for data persistence)

### Installation
```bash
git clone https://github.com/yourusername/avadesk.git
cd avadesk
npm install
```

### Configuration
1. Copy the example config file:
   ```bash
   cp .env.example .env
   ```
2. Fill in your `.env` with:
   ```
   DISCORD_TOKEN=your_bot_token
   CLIENT_ID=your_bot_client_id
   MONGODB_URI=your_mongo_uri
   GUILD_ID=your_test_guild_id
   ```

### Running the Bot
```bash
npm run start
```

---

## 📚 Usage Overview

| Command | Description |
|--------|-------------|
| `/incident report` | Submit a new incident |
| `/incident list` | View current open incidents |
| `/catalog list` | Browse service catalog |
| `/catalog request` | Submit a new service request |
| `/sla check` | View SLA status for an incident |

---

## 🧠 Bot Personality

> Ava is calm, clear, and efficient — your digital coworker that never sleeps. She keeps support queues moving, incidents under control, and users updated.

---

## 🛡 Permissions

- Manage Channels
- Manage Messages
- Use Slash Commands
- Read Message History
- Embed Links

---

## 🛠️ Tech Stack

- [Node.js](https://nodejs.org)
- [Discord.js](https://discord.js.org)
- [MongoDB](https://www.mongodb.com/) or SQLite
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Day.js](https://day.js.org/) for SLA time tracking

---

## 📌 Roadmap

- [ ] Web dashboard with analytics and configuration
- [ ] Email-to-ticket integration
- [ ] Multi-guild support with isolated configs
- [ ] Escalation rules and reminders

---

## 🤝 Contributing

Pull requests are welcome! Please open an issue first to discuss what you’d like to change or add. Help us make ITSM smarter on Discord.

---

## 📃 License

AvaDesk Software License v1.0
© 2025 Mark Geimil Tajan

---

**AvaDesk** — _Smarter service. Delivered._
