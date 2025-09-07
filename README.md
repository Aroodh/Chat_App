# Chat App 💬

A real-time chat application built with the MERN stack (MongoDB, Express.js, React, Node.js) and Socket.IO. This app supports one-on-one messaging with features like message delivery status, image sharing, online presence indicators, and responsive design.

## 🔧 Technologies Used

- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Real-Time:** Socket.IO for live messaging
- **Authentication:** JWT-based user authentication
- **Image Upload:** Base64 or third-party image storage
- **Deployment:** Vercel (client) & Render/Heroku (server)

## ✨ Features

- Real-time private messaging
- Seen/unseen message status
- Image message support
- Delete message (soft delete)
- Online/offline status
- Mobile responsive UI
- Long-press options for mobile interactions

## 🚀 Getting Started

Clone the repo and run both client and server:

```bash
# Clone the repo
git clone https://github.com/your-username/chat-app.git
cd chat-app

# Run server
cd server
npm install
npm run dev

# Run client
cd ../client
npm install
npm start
