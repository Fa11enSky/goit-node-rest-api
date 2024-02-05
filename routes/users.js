const express = require('express');

const authenticate = require('../middlewares/authenticate')

const { getCurrent,logout }  = require('../controllers');

const router = express.Router();

router.get("/current", authenticate, getCurrent);

router.post('/logout',authenticate,logout)

module.exports = router;