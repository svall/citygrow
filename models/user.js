const db = require('../lib/dbConnect');
var jwt = require('jsonwebtoken');


function CreateUser(req,res, next) {
  db.none(`INSERT INTO users (name,password) VALUES ($1,$2);`,[req.body.username,req,body,password])
  .then (()=>{
    next();
  })
}
const SECRET = 'livingispain';

// below are functions that will pass stuff into react
function authenticate (token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, SECRET, (err, decoded) => {
      if (err) return reject(err);
      resolve(true);
    });
  });
}

function signUp (token) {
  return new Promise((resolve, reject) => {
    jwt.sign(token, SECRET, (err, decoded) => {
      if (err) return reject(err);
      resolve(true);
    });
  });
}
