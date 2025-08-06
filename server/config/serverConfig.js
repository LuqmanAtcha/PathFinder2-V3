import express, { json } from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import cors from "cors";
import helmet from "helmet";

export const setupServer = () => {
  const app = express();
  const server = createServer(app);
  const corsOptions = {
    origin: "https://deployed-game-show.vercel.app",
    methods: ["GET", "POST"],
    credentials: true,
  };
  const io = new Server(server, {
    cors: corsOptions,
  });

  // Middleware
  app.use(helmet());
  app.use(cors(corsOptions)); // ✅ use same CORS options as Socket.IO
  app.use(json());

  return { app, server, io };
};
