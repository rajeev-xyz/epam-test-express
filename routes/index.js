var express = require('express');
var router = express.Router();

var input = require('../input.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 'title': input[0]['title'], 'content': input[0]['content']});
});


router.get('/api/articles', function(req, res, next) {
   res.send(input); 
});


router.post('/api/content', function(req, res, next) {
    var len = input.length;
    console.log('len ' + len);
    var id = req.body.id;
    console.log('id ' + id);
    var content = '';
    var title = '';
    for (var i=0;i<len;i++) {
        if (input[i] && input[i].id == id ){
            title = input[i]['title'];
            content = input[i]['content']; 
    }
  }
    res.send('content',{'title':title,'content':content});
});

router.get('*', function(req, res, next) {
            res.render('index', { 'title': input[0]['title'], 'content': input[0]['content']});
        });

module.exports = router;
