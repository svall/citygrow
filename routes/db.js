const express = require('express');
const router = express.Router();

const { getAllGardens, getOneGarden, addGarden, getLastGardenId, /*getQuadrants*/ } = require('../models/garden');
const { createUser, authenticate, logIn } = require('../models/user')

router.post('/users', createUser, (req, res) => {
  res.json(res.rows);
});

router.get('/users', authenticate, (req, res) => {
  res.json('You\'re a valid user');
});

router.post('/users/login', logIn, (req, res) => {
  res.json(res.rows);
});

// gets the quadrants for a gardenID
router.get('/:gardenID', getOneGarden, (req, res) => {
  res.json(res.garden || []);
  // res.rows = res.garden
  // console.log('in routes for garden id ', res.garden);
});

// router.get('/quadrants/:gardenID', getQuadrants, (req, res) => {
//   res.json(res.garden || []);
//   // console.log(res.garden);
// });

// gets all the gardens from the db
router.get('/', getAllGardens, (req, res) => {
  res.json(res.gardens || []);
});

router.post('/', addGarden, getLastGardenId, (req, res) => {
  res.json(res.gardens || []);
  // console.log(res.gardens);
});



module.exports = router;
