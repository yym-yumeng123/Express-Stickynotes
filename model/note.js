var path = require('path')
//连接数据库

var Sequelize = require('sequelize');
var sequelize = new Sequelize(undefined, undefined, undefined, {
  host: 'localhost',
  dialect: 'sqlite',


  // 仅限 SQLite  存储位置
  storage: path.join(__dirname,'../database/database.sqlite'),
});


//测试连接
/*
sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function(err)  {
    console.error('Unable to connect to the database:', err);
  });

*/

//定义模型
/*
模型就是一个表,表里面是数据结构

对应条目:
1 hello  12345  3435366   id text Time
 */
var Note = sequelize.define('note', {
  text: {   //数据库里的内容
    type: Sequelize.STRING
  }
});


// force: true 如果表已经存在，将会丢弃表

/*
Note.sync().then(function(){
	//创建数据
	Note.create({text:'Hello World'})
}).then(function(){
	//查找数据
	Note.findAll({raw:true}).then(function(notes) {
	  console.log(notes)
	})
});

*/


//查找 where 通常用 attribute:value 键值对获取一个对象，其中 value 可以是匹配等式的数据或其他运算符的键值对象。
// Note.findAll({raw:true,where:{id:2}}).then(function(notes){
// 	console.log(notes)
// })
module.exports.Note = Note