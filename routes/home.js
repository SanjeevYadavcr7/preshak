const router = require('express').Router();

router.get('/', (req,res) => {
    return res.render('homePage');
})

module.exports = router;
