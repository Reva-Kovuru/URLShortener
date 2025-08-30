import express from "express";
import { getAllLiveUrl, createShortUrl, redirectUrl } from "../controllers/urlShortener.js";

const router = express.Router();

router.get("/",getAllLiveUrl);

router.post("/create",createShortUrl);

router.get("/:shortcode",redirectUrl);

export default router;