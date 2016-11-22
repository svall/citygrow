const express = require('express');
const router = express.Router();
// const {   } = require('../models/garden');


router.get('/', (req, res) => {
  res.send('**********GARDEN**************');
});

module.exports = router;
