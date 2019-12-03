var express = require('express');
var router = express.Router();
const weatherApiKey = 'bf3565940c52aaa3383c1dbc23799bb1';


router.get('/', (req, res, next) => {
    res.redirect(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&appid=${weatherApiKey}`);
});

router.get('/coordinates', (req, res, next) => {
    res.redirect(`https://api.openweathermap.org/data/2.5/weather?lat=${req.query.lat}&lon=${req.query.lon}&appid=${weatherApiKey}`);
});

module.exports = router;
