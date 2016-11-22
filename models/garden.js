const db = require('../lib/dbConnect');

function getAllGardens(req, res, next) {
<<<<<<< HEAD

  console.log('**********models/garden.js function getAllGardens');

=======
  // console.log('**********models/garden.js function getAllGardens');
>>>>>>> 3ad0f9b73be82ae67bb203c15b0284abc8acf3d1
  db.any('SELECT * FROM gardens;')
  .then((gardens) => {
    res.gardens = gardens;
    next();
  })
  .catch(error => next(error));
}

<<<<<<< HEAD
// function addMovie(req, res, next) {
//   console.log('models/addmovie');
//   // console.log('*******************'req.body);

//   db.none('INSERT INTO currentmovies (title, poster, rating, runtime) VALUES ($1, $2, $3, $4);', [req.body.Title, req.body.Poster, req.body.Rated, req.body.Runtime])
//   .then((movie) => {
//   res.movie = movie;
//   console.log('___________________' + movie);
=======
function getOneGarden(req, res, next) {
  // console.log('models/getGarden');
  console.log('*******************', req.body);
  const gID = Number.parseInt(req.params.gardenID);
    db.one(`SELECT *
      FROM gardens
      WHERE id = $1
      `, gID)
    .then((gdata) => {
      // console.log('in model ', movie);
      res.garden = gdata;
      next();
    })
    .catch(error => next(error));
  }

// Add new garden: (puppiesapi)
// function addGarden(req, res, next) {
//   db.one(`INSERT INTO quadrants (name, zip, size)
//     VALUES ($/name/, $/zip/, $/size/)
//     ;`, req.body)
//   .then(() => {
//     next();
//   })
// }

// function addGarden(req, res, next) {
//   db.none(`
//     INSERT INTO gardens (name, zipcode, user_id)
//     VALUES ($1, $2, $3);`,
//     [req.body.Title, req.body.Poster, req.body.Rated, req.body.Runtime])
//   .then((gdata) => {
//   res.rows = gdata;
//   console.log('___________________' + gdata);
>>>>>>> 3ad0f9b73be82ae67bb203c15b0284abc8acf3d1
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
  getOneGarden,
  // addGarden,
  // addMovie,
  // showMovie,
  // deleteMovie
>>>>>>> 3ad0f9b73be82ae67bb203c15b0284abc8acf3d1
};
