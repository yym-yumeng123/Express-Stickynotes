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
	// 把所有的note都展示	
	var query = {raw:true}
	if(req.session.user){
		query.where = {
			uid: req.session.user.id
		}
	}
	Note.findAll(query).then(function(notes){  // query 所有的note
	console.log(notes)
	res.send({status:0,data:notes})
	}).catch(function(){
		res.send({status:1,errMessage:'数据库出错'})
	})
  
});
//增加创建
router.post('/notes/add',function(req,res,next){
	//判断用户是否登录,没登录,请登录
	if(!req.session.user){
		return res.send({status: 1,errorMsg: "请您先登录"})
	}
	var uid = req.session.user.id  // 个人id
	var note = req.body.note
	Note.create({text: note,uid: uid}).then(function(note) {
  		res.send({status:0})
	}).catch(function(){
		res.send({status:1,errMessage:'数据库出错'})
	})
})

//修改,更新 update 或者 save
router.post('/notes/edit',function(req,res,next){
	//判断用户是否登录,没登录,请登录
	if(!req.session.user){
		return res.send({status: 1,errorMsg: "请您先登录"})
	}
	var uid = req.session.user.id  // 个人id
	Note.update({text: req.body.note},{where: {id: req.body.id,uid: uid}}).then(function(){
		console.log(arguments)
		res.send({status:0})
	}).catch(function(){
		res.send({status:1,errMessage:'数据库出错'})
	})
})

//删除
router.post('/notes/delete',function (req,res,next) {
	//判断用户是否登录,没登录,请登录
	if(!req.session.user){
		return res.send({status: 1,errorMsg: "请您先登录"})
	}
	var uid = req.session.user.id  // 个人id
	Note.destroy({where:{id:req.body.id,uid: uid}}).then(function(){
		res.send({status:0})
	}).catch(function(){
		res.send({status:1,errMessage:'数据库出错'})
	})
})

module.exports = router;
