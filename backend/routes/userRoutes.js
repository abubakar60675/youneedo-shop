import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from "../controllers/userController.js";
import { protect, admin } from "../middlewares/authMiddleWare.js";

// This is more understandable way to declare routes
router.route("/").post(registerUser).get(protect, admin, getUsers);
router.route("/login").post(authUser);
// router.post('/login',authUser) This is normal way to declare routes
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
// router.route("/");
router
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

export default router;
