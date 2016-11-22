const express = require('express');
const router = express.Router();

const { getAllGardens, getOneGarden } = require('../models/garden');


router.get('/:gardenID', getOneGarden, (req, res) => {
  res.json(res.garden || []);
  console.log(res.garden);
});

router.get('/', getAllGardens, (req, res) => {
  res.json(res.gardens || []);


});

module.exports = router;
