const express = require('express');
const router = express.Router();

const { getAllGardens, getOneGarden, addGarden, getLastGardenId } = require('../models/garden');


// gets the info for a specific garden
router.get('/:gardenID', getOneGarden, (req, res) => {
  res.json(res.garden || []);
  // console.log(res.garden);
});

// gets all the gardens from the db
router.get('/', getAllGardens, (req, res) => {
  res.json(res.gardens || []);
});

// adds a new garden to the db (adds name, zipcode, user_id)
router.post('/', addGarden, getLastGardenId, (req, res) => {
  res.json(res.gardens || []);
  res.id = res.gardenid;
  // console.log("id for gdn in route" , res.id);
  // console.log(res.gardens);
});

module.exports = router;
