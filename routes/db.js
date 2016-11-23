const express = require('express');
const router = express.Router();
const { getAllGardens, getOneGarden, addGarden } = require('../models/garden');

router.get('/:gardenID', getOneGarden, (req, res) => {
  res.json(res.garden || []);
  console.log(res.garden);
});

router.get('/', getAllGardens, (req, res) => {
  res.json(res.gardens || []);
  // console.log(res.gardens);
});

router.post('/', addGarden, (req, res) => {
  res.json(res.gardens || []);
  // console.log(res.gardens);
});

module.exports = router;
