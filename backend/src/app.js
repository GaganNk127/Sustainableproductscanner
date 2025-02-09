import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); 

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN, 
    credentials: true
}));

app.use(express.json({
    limit: "20kb"
}));

import scanner from "./routes/scanner.route.js";

// Mount scanner routes correctly
app.use("/scanner", scanner);

export { app };
