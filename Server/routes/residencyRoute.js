import express from "express";
import { createResidency, getAllResidencies, getResidencyById } from "../controllers/residencyController.js";
import jwtCheck from "../config/auth0Config.js";

const router = express.Router()

router.post("/createResidency", createResidency)
router.get("/getAllResidencies", getAllResidencies)
router.get("/:id",getResidencyById)

export {router as residencyRoute}