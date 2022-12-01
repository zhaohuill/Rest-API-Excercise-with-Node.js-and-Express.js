const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => {
    const data = {
        "name": "Ignacio Ceaglio",
        "website": "ignaciocwebdev.com"
    };
    res.json(data);
});


module.exports = router;