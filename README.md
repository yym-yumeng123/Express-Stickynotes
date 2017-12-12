# Express-Stickynotes
node express 搭建在线留言墙

## 使用方法

```
git bash
# 克隆仓库
git clone 
# cd 到仓库目录后安装依赖
npm i
# 启动本地服务器，打开 http://localhost:3000
npm start
# 当然你也可以指定端口( 比如开一个2233娘端口 )
PORT=2233 node ./bin/www
```

## 文件结构

```
├── app.js
├── bin  // 一些可执行文件
│   └── www
├── database  // 数据存储
│   └── database.sqlite
├── model  //sequelize写数据库
│   └── note.js
├── package.json
├── public  // 静态资源 源代码
│   ├── imgs
│   ├── js
│	    └── index.js 编译后的js文件
│   ├── fonts
│   ├── css
│       └── style.css
├── src  // 静态资源的源文件
│   ├── webpack.config.js  // webpack配置
│   ├── imgs
│   ├── js
│         ├── app  // 不同页面的入口
│            └── index.js
│         ├── lib
               └── jquery.min.js
│         └── mod   // 模块组件
│             ├── toast.js  // 提醒组件
│             ├── note.js
              ├── note-manager.js
              ├── waterfall.js
│             └── event.js
│   ├── less
│       ├── index.less
│       ├── note.less
│       └── toast.less
├── routes  // 路由
│   ├── index.js
│   └── api.js
└── views  // 模板引擎
    ├── error.ejs
    └── index.ejs

```

## 目前完成功能如下：

( 仅供参考学习 )

1. 完成 `Toast` 模块，发送消息提示
2. 完成 `Note` 模块，增删改
3. 完成 `Waterfall` 模块，瀑布流布局
4. 定义路由 `api.js` 增删改查，mock 数据
5. 完成 `EventCenter`,订阅发布模式
6. 完成 `Note-manger` 模块，控制 `Note` 事件
7. 完成 `note.js` 模块，使用 `sequelize` + `sqlite3` 存储数据
8. 完成路由 `api.js`, mock 数据改成真实数据
9. 完成路由 `auth.js`，调用 github-passport
10. 完成中间件 `app.js`，设置 `session`
11. 完成 `index.ejs` 模板，切换登录展示
12. 修正路由 `api.js`，`session` 判断用户增删改权限 + 错误信息反馈
13. 修正路由 `index.js`,`session` 判断登录状态
14. 修复若干 BUG
15. 功能完善中 ...（ 凑数 `(*^▽^*)`）

## 用到的技术栈

**前端：**
1. webpack 前端模块打包
2. SCSS 样式预处理器
3. npm 包管理
4. 模块化发开
5. JS 组件封装
6. pub / sub 设计模式
7. 前后端联调

**后端：**
1. express ( based on Node.js ) 路由 中间件
2. MVC 分离
3. sequelize + sqlite3 数据库
4. ejs 模板引擎
5. session
6. passport + github-passport
7. pm2
8. linux

## 其他
1. bug 提交或其他问题，移步 [ issue ](../../issues)
2. Author: AlbertLee
3. 协议 [ MIT ](./LICENSE)
