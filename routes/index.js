var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // 判断是登录还是注销
  var data;
  if(req.session.user){
    data = {
      isLogin: true,
      user: req.session.user,
      avatar: req.session.avatar
    }
  }else{
    data = {
      isLogin: false
    }
  }
  console.log(data)
  res.render('index', data);
});

module.exports = router;