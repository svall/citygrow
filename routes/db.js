const express = require('express');
const router = express.Router();
<<<<<<< HEAD

const {  getAllGardens } = require('../models/garden');


=======
const { getAllGardens, getOneGarden } = require('../models/garden');
>>>>>>> 3ad0f9b73be82ae67bb203c15b0284abc8acf3d1

router.get('/:gardenID', getOneGarden, (req, res) => {
  res.json(res.garden || []);
  console.log(res.garden);
});

router.get('/', getAllGardens, (req, res) => {
  res.json(res.gardens || []);
<<<<<<< HEAD
  console.log(res.gardens);

=======
  // console.log(res.gardens);
>>>>>>> 3ad0f9b73be82ae67bb203c15b0284abc8acf3d1
});

module.exports = router;
