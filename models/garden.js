const db = require('../lib/dbConnect');

function getAllGardens(req, res, next) {
  // console.log('**********models/garden.js function getAllGardens');
  db.any('SELECT * FROM gardens;')
  .then((gardens) => {
    res.gardens = gardens;
    next();
  })
  .catch(error => next(error));
}

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
//   next();
//   })
//   .catch(error => console.log(error));
// }

function showMovie(req, res, next) {
  db.any(`SELECT * FROM currentmovies WHERE currentmovies.id = $1;`, [req.params.id])
  .then((movie) => {
    res.movie = movie;
    console.log('****************models/showMovie');
    next();
  })
  .catch(error => console.log(error));
}

function deleteMovie(req, res, next) {
  db.none(`DELETE FROM currentmovies WHERE id = $1;`, [req.params.id])
    .then(next())
    .catch(err => next(err));
}

module.exports = {
  getAllGardens,
  getOneGarden,
  // addGarden,
  // addMovie,
  // showMovie,
  // deleteMovie
};
