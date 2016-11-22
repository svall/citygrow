const db = require('../lib/dbConnect');

function getAllGardens(req, res, next) {
<<<<<<< HEAD
  console.log('***********************getting all gardens')
=======
  console.log('**********models/garden.js function getAllGardens');
>>>>>>> 6bb9e7a545866dd236dc9d6bf35cb5493f6f4d3a
  db.any('SELECT * FROM gardens;')
  .then((gardens) => {
    res.gardens = gardens;
    next();
  })
  .catch(error => next(error));
}

// function addMovie(req, res, next) {
//   console.log('models/addmovie');
//   // console.log('*******************'req.body);

//   db.none('INSERT INTO currentmovies (title, poster, rating, runtime) VALUES ($1, $2, $3, $4);', [req.body.Title, req.body.Poster, req.body.Rated, req.body.Runtime])
//   .then((movie) => {
//   res.movie = movie;
//   console.log('___________________' + movie);
//   next();
//   })
//   .catch(error => console.log(error));
// }

// function showMovie(req, res, next) {
//   db.any(`SELECT * FROM currentmovies WHERE currentmovies.id = $1;`, [req.params.id])
//   .then((movie) => {
//     res.movie = movie;
//     console.log('****************models/showMovie');
//     next();
//   })
//   .catch(error => console.log(error));
// }

// function deleteMovie(req, res, next) {
//   db.none(`DELETE FROM currentmovies WHERE id = $1;`, [req.params.id])
//     .then(next())
//     .catch(err => next(err));
// }

module.exports = {
  getAllGardens,
<<<<<<< HEAD
  // addMovie,
  // showMovie,
  // deleteMovie
=======
  addMovie,
  showMovie,
  deleteMovie
>>>>>>> 6bb9e7a545866dd236dc9d6bf35cb5493f6f4d3a
};
