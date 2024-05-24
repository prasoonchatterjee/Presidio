const express = require('express');
const router = express.Router();

const {loginAuth, signupAuth} = require("../controllers/auth");

router.post('/login', loginAuth);
router.post('/signup', signupAuth);

module.exports = router;
