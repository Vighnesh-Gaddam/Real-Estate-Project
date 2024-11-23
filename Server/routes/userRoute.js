import express from "express";
import {
  allBookings,
  BookedVisit,
  cancelBooking,
  createUser,
  getAllFavorites,
  toFav,
} from "../controllers/userController.js";
import jwtCheck from "../config/auth0Config.js";

const router = express.Router();

router.post("/register", jwtCheck, createUser);
router.post("/BookedVisit/:id", jwtCheck, BookedVisit);
router.post("/allBookings", allBookings);
router.post("/cancelBooking/:id", jwtCheck, cancelBooking);
router.post("/toFav/:rid", jwtCheck, toFav);
router.post("/allFav", jwtCheck, getAllFavorites);

export { router as userRoute };
