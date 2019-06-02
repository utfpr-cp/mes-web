var express = require('express');
var router = express.Router();

router.get('/login', (req, res) => {
    res.send('estamos no login');
});

module.exports = router;
