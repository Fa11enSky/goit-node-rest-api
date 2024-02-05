const express = require("express");
const { validateBody } = require("../middlewares");
const { registerSchema, loginSchema } = require("../schemas");
const { register, login,getCurrent } = require("../controllers");

const router = express.Router();

router.post("/register", validateBody(registerSchema), register);

router.post("/login", validateBody(loginSchema), login);


module.exports = router;
