const express = require("express");
const { validateBody } = require("../middlewares");
const authenticate = require("../middlewares/authenticate");

const { registerSchema, loginSchema } = require("../schemas");
const { register, login,getCurrent,logout } = require("../controllers");

const router = express.Router();

router.post("/register", validateBody(registerSchema), register);

router.post("/login", validateBody(loginSchema), login);

router.get("/current", authenticate, getCurrent);

router.post("/logout", authenticate, logout);

module.exports = router;
