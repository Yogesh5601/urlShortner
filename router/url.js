import express from "express";
const router = express.Router();
import { createShortenUrl, getAll, getUrl } from "../controller/url.js";

router.post("/", createShortenUrl);
router.get("/:shortId", getUrl)
router.get("/", getAll)
export default router;
