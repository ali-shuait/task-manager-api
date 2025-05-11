import express from "express";
import helmet from "helmet";
import cors from "cors";
import configurations from "./config/app.config.mjs";

// intial express application
const app = express();

// intial middleware
app.use(express.json({ type: "application/json" }));
app.use(helmet());
app.use(cors());

app.listen(
  configurations.serverConfig.port,
  configurations.serverConfig.host,
  (error) => {
    if (error) throw error;
    console.log(
      `server running on http://${configurations.serverConfig.host}:${configurations.serverConfig.port}`
    );
  }
);
