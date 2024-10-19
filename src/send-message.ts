// src/send-message.ts

import { TELEGRAM_API_URL, MESSAGE } from "./constants"
import { BOT_TOKEN, CHAT_ID } from "./config"

export async function sendTelegramMessage() {
  const response = await fetch(`${TELEGRAM_API_URL}${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: MESSAGE, // Send the message defined in the constants.ts file or any other message you want
    }),
  })

  if (response.ok) {
    console.log("Message sent successfully!")
  } else {
    console.error("Failed to send message.")
  }
}
