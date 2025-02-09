import { Router } from "express";
import { scanned } from "../controllers/scanner.controller.js";
import { Alternatives } from "../controllers/alternatives.controller.js";

const router = Router();

router.route('/scanner').post(scanned);
router.route('/Alternatives').post(Alternatives);

export default router; 
