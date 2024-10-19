# Telegram Bot Scheduler with Bun and TypeScript

This project demonstrates how to set up a Telegram bot using BotFather, schedule messages using Bun, and manage environment variables using dotenv. The bot will automatically send messages to a specified chat based on the defined schedule (every minute in this example).

## Features

- Create and configure a Telegram bot using BotFather.
- Use Bun to run your JavaScript/TypeScript code.
- Schedule recurring tasks (e.g., sending messages) without relying on system-level cron jobs.
- Store sensitive information in a .env file using dotenv.

## Prerequisites

- <a href="https://bun.sh">Bun</a> installed on your machine.
- A Telegram account with a bot created using BotFather.
- Node.js (if you choose to use npm for managing packages).

## Project Structure

```plaintext
src
| - index.ts          // Main entry point for scheduling
| - constants.ts      // Stores static message and API URL
| - config.ts         // Loads environment variables from .env
| - sendMessage.ts    // Handles sending messages to Telegram
package.json          // Bun's package file
.env                  // Environment variables for BOT_TOKEN and CHAT_ID
```

## Setup Instructions

1. Create a Telegram Bot
   Open Telegram and search for BotFather.
   Start a conversation and type `/newbot` to create a new bot.
   Follow the instructions to name your bot and get your bot token.

2. Clone This Repository
   Clone this project locally using the following command:

```bash
git clone <repository-url>
```

3. Install Dependencies
   Navigate to the project directory and install the necessary packages using Bun:

```bash
bun install
```

If you are using npm instead of Bun, run:

```bash
npm install
```

4. Configure Environment Variables
   Create a `.env` file in the root directory and add your <b>BOT_TOKEN</b> and <b>CHAT_ID</b> (replace with the values you obtained from BotFather and your Telegram chat):

```makefile
# .env
BOT_TOKEN=YOUR_BOT_API_TOKEN
CHAT_ID=YOUR_CHAT_ID
```

5. Run the Project
   To run the scheduler and send messages to your Telegram bot, execute the following command:

```bash
bun run src/index.ts
```

If you've configured everything correctly, your bot will send a message to your chat every minute.

6. Testing the Bot
   To manually test your bot:

- Open your Telegram bot chat.
- You should see messages being sent based on the schedule set in `index.ts`.

## How It Works

- <b>BotFather Setup:</b> You create a bot using <b>BotFather</b> and get an API token.
- <b>Bun & TypeScript:</b> The project is set up with <b>Bun</b> and <b>TypeScript</b> to handle scheduling and sending messages.
- <b>Scheduling:</b> The `node-cron` package is used to schedule tasks. In this example, the task sends a message to your Telegram chat every minute.
- <b>.env Configuration:</b> Sensitive information such as the bot token and chat ID is stored in a `.env` file and loaded using the dotenv package.

## Project Files

- `index.ts:` Contains the logic for scheduling the message using node-cron.
- `constants.ts:` Contains the static values such as the message and API URL.
- `config.ts:` Loads and exports environment variables from .env.
- `send-message.ts:` Handles sending the message to your Telegram chat.

## Dependencies

- `Bun:` Fast JavaScript runtime environment.
- `node-cron:` Cron job scheduling for Node.js.
