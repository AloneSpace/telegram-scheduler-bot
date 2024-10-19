// src/index.ts

import cron from "node-cron"
import { sendTelegramMessage } from "./send-message"

// Schedule the message to be sent every minute
cron.schedule("* * * * *", () => {
  console.log(`(${new Date().toISOString()}) Sending message to Telegram...`)
  sendTelegramMessage()
})

console.log("Scheduler is running... Press Ctrl+C to stop.")
