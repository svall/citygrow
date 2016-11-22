const express = require('express');
const router = express.Router();
const {  getAllGardens } = require('../models/garden');


router.get('/', getAllGardens,(req, res) => {
  res.send('**********GARDEN**************');
});

module.exports = router;
