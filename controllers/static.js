var express = require('express') ;
var router  = express.Router() ;

// routes for pages
router.get('/', function(req, res) {
  res.sendfile('public/views/index.html') ;
}) ;

router.get('/signup', function(req, res) {
  res.sendfile('public/views/business/signup.html') ;
}) ;

router.post('/confirm', function(req, res) {
  res.sendfile('public/views/business/confirm.html') ;
}) ;

router.get('/editprofile', function(req, res) {
  res.sendfile('public/views/business/editProfile.html')
}) ;

router.get('/addproduct', function(req, res) {
  res.sendfile('public/views/business/addProduct.html')
}) ;

router.use(express.static(__dirname + '/../assets')) ;

module.exports = router ;
