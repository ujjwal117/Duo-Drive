import { Router } from "express";
import { generateResponse } from "../controller/generate-response.js";

const router = Router();

router.route("/gen-res").post(generateResponse);

export default router;
