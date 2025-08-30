import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import urlShortenerRoutes from "./routes/urlShortenerRoutes.js";
import { connectUrlDB } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

const corsOptions = {
    origin: "http://localhost:5173"
}
app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/shorturl", urlShortenerRoutes);

connectUrlDB().then( () => {
    app.listen(PORT, () => {
        console.log(">>>>>>>>--------Server is up and Running!---------<<<<<<<<")
    });
});