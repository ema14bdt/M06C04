const db = require('../database/models');

module.exports = {
    list: (req, res) => {
        db.Movie.findAll()
            .then((movies) => {
                res.render('moviesList', {
                    title: 'Home',
                    movies,
                });
            })
            .catch((errors) => {
                console.log(errors);
            });
    },
    new: (req, res) => {
        db.Movie.findAll({
            order: [['title', 'ASC']],
        })
            .then((movies) => {
                res.render('newestMovies', {
                    movies,
                });
            })
            .catch((errors) => {
                console.log(errors);
            });
    },
    recomended: (req, res) => {
        db.Movie.findAll({
            order: [['release_date', 'DESC']],
            limit: 5,
        })
            .then((movies) => {
                res.render('recommendedMovies', {
                    movies,
                });
            })
            .catch((errors) => {
                console.log(errors);
            });
    },
    detail: (req, res) => {
        db.Movie.findByPk(req.params.id)
            .then((movie) => {
                res.render('moviesDetail', {
                    title: 'Detalle de Peliculas',
                    movie,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    },
};
