const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('../lib/passportStrategy');
const SECRET = 'livingispain'
const { findByUsername, authenticate } = require('../models/user');
// initialize passport
router.use(passport.initialize());

// handle all the routes
router.post('/', findByUsername, (req, res) => {
 res.json(res.rows)
  });



module.exports = router;

// passport.authenticate('local', { session: false }),
