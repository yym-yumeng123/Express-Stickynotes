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
//增加创建
router.post('/notes/add',function(req,res,next){
	var note = req.body.note
	Note.create({text:note}).then(function(note) {
  		res.send({status:0})
	}).catch(function(){
		res.send({status:1,errMessage:'数据库出错'})
	})
})

//修改,更新 update 或者 save
router.post('/notes/edit',function(req,res,next){
	Note.update({text: req.body.note},{where: {id: req.body.id}}).then(function(){
		console.log(arguments)
		res.send({status:0})
	}).catch(function(){
		res.send({status:1,errMessage:'数据库出错'})
	})
})

//删除
router.post('/notes/delete',function (req,res,next) {
	Note.destroy({where:{id:req.body.id}}).then(function(){
		res.send({status:0})
	}).catch(function(){
		res.send({status:1,errMessage:'数据库出错'})
	})
})

module.exports = router;
