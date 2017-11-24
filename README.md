# Express-Stickynotes
node express 搭建在线留言墙

bin -- 一些可执行文件
node_modules -- 一些可依赖的模块
public -- 静态资源 源代码
routes -- 一些路由
views  -- 一些模板

src -- 静态资源的源文件
libs -- 放一些其他框架 库
app -- 不同页面的入口



```
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── imgs
│   ├── js
│    ├── fonts
│   ├── css
│       └── style.css
├── src
│   ├── webpack.config.js
│   ├── imgs
│   ├── js
         ├── app
            └── index.js
         ├── lib
         └── mod   //模块组件
│   ├── less
│       ├── index.less
         ├── note.less
         └── toast.less
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.ejs
    ├── index.ejs
    └── layout.jade

```