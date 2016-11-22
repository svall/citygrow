const express = require('express');
const router = express.Router();

const {  getAllGardens } = require('../models/garden');




router.get('/', getAllGardens, (req, res) => {
  res.json(res.gardens || []);
  console.log(res.gardens);

});

module.exports = router;
