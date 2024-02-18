const express = require("express");
const { validateBody, upload } = require("../middlewares");
const authenticate = require("../middlewares/authenticate");

const {
  registerSchema,
  loginSchema,
  verifyEmailSchema,
} = require("../schemas");

const {
  register,
  login,
  getCurrent,
  logout,
  updateAvatar,
  verifyEmail,
  resendVerifyEmail,
} = require("../controllers");

const router = express.Router();

router.post("/register", validateBody(registerSchema), register);

router.get("/verify/:verificationToken", verifyEmail); //!VERIFY <<------------

router.post("/verify", validateBody(verifyEmailSchema), resendVerifyEmail);

router.post("/login", validateBody(loginSchema), login);

router.get("/current", authenticate, getCurrent);

router.post("/logout", authenticate, logout);

router.patch("/avatars", authenticate, upload.single("avatar"), updateAvatar);

module.exports = router;
