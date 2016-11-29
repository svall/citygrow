const express = require('express');
const router = express.Router();
const { createUser, findByUsername, authenticate } = require('../models/user');

// handle all the routes
// router.get('/check', findByUsername, authenticate, (req, res) => {
//   res.json(res.rows);
// });
router.post('/', createUser, (req, res) => {
  res.status(200).end();
});


module.exports = router;
