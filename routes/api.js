var express = require('express');
var router = express.Router();
var Note = require('../model/note.js').Note
/*
* 路由设置

 1. 获取所有的notes : /api/notes   GET
 2. 创建一个note : /api/notes/add   数据 req{note: 'Hello'}  POST  res :{status:0} {status:1,errorMsg:'失败的'原因}
 3. 修改一个note: /api/notes/edit 数据 req{note: "new note" id:"100}  POST
 4. 删除一个note: /api/notes/delete 数据 req{id:100} POST
* 
* */
//创建存储到数据库


/* GET users listing. */
router.get('/notes', function(req, res, next) {
  
  Note.findAll({raw:true}).then(function(notes){
  	console.log(notes)
  	res.send({status:0,data:notes})
  })
  
});

router.post('/notes/add',function(req,res,next){
	var note = req.body.note
	console.log('add...',note)
})
router.post('/notes/edit',function(req,res,next){

})
router.post('/notes/delete',function (req,res,next) {

})

module.exports = router;
