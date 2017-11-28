# Express-Stickynotes
node express 搭建在线留言墙

**文件结构**

```
├── app.js
├── bin  // 一些可执行文件
│   └── www
├── package.json
├── public  // 静态资源 源代码
│   ├── imgs
│   ├── js
│    ├── fonts
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
