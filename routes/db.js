const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const {  getAllGardens } = require('../models/garden');


router.get('/', getAllGardens,(req, res) => {
  res.send('**********GARDEN**************');
=======
const { getAllGardens } = require('../models/garden');


router.get('/', getAllGardens, (req, res) => {
  res.json(res.gardens || []);
  console.log(res.gardens);
>>>>>>> 6bb9e7a545866dd236dc9d6bf35cb5493f6f4d3a
});

module.exports = router;
