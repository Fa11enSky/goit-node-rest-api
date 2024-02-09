const express = require("express");
const { validateBody, upload } = require("../middlewares");
const authenticate = require("../middlewares/authenticate");

const { registerSchema, loginSchema } = require("../schemas");
const {
  register,
  login,
  getCurrent,
  logout,
  updateAvatar,
} = require("../controllers");

const router = express.Router();

router.post("/register", validateBody(registerSchema), register);

router.post("/login", validateBody(loginSchema), login);

router.get("/current", authenticate, getCurrent);

router.post("/logout", authenticate, logout);

router.patch("/avatars", authenticate, upload.single("avatar"), updateAvatar);

module.exports = router;
