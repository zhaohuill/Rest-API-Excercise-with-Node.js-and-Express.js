const { Router } = require('express');
const router = Router();
const _ = require('underscore'); /**+-Underscore ( https://underscorejs.org ) es una biblioteca de JavaScript que proporciona una selección completa de útiles ayudantes de programación funcional
 sin extender ningún objeto incorporado. Es la respuesta a la pregunta: "Si me siento frente a una página HTML en blanco y quiero comenzar a ser productivo de inmediato, ¿Qué necesito?".*/

const movies = require('../routes/database-sample.json');

router.get('/', (req, res) => {
    res.json(movies);
});

router.post('/', (req, res) => {
    console.log(req.body);
    const { title, director, year, rating } = req.body;
    if (title && director && year && rating) {
        const id = movies.length + 1;
        const newMovie = {id, ...req.body};
        movies.push(newMovie);
        res.json(movies);
    } else {
        res.status(500).json({error: 'Wrong Request'});
    }
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, director, year, rating } = req.body;
    if (title && director && year && rating) {
        _.each(movies, (movie, i) => {
            if (movie.id == id) {
                movie.title = title;
                movie.director = director;
                movie.year = year;
                movie.rating = rating;
            }
        });
        res.json(movies);
    } else {
        res.status(500).json({error: 'There was en Error.'});
    }
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.each(movies, (movie, i) => {
        if (movie.id == id) {
            movies.splice(i, 1);
        }
    });
    res.json(movies);
});

module.exports = router;