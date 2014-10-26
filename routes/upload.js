var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('upload', { title: '上传视频' });
});

router.post('/', function(req, res) {
   console.log('11111111111111111');
});

module.exports = router;
