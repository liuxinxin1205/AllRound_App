# AllRound_App

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
##主要适用技术栈
* 前端MVVM框架：Vue.JS 2.x
* 开发工作流：Webpack 1.x
* 路由：Vue-Router 2.x
* 数据交互：Axios
* JS插件：rem.js
* CSS重置:reset.js

``` bash
项目目录结构
    webpack  
      |---build  
      |---src  
        |---assets 资源  
        |---components组件  
          |---common    通用组件  
          |---movie    电影组件  
            |---Movie.vue 电影组件 
            |---MovieDetail.vue 电影详情组件 
          |---music    音乐组件  
            |---Music.vue 音乐组件  
            |---MusicDetail.vue 音乐详情组件
          |---book    书籍组件  
            |---Book.vue 书籍组件  
          |---photo    照片组件  
            |---Photo.vue 照片组件
            |---PhotoDetail.vue 照片详情组件  
      |---router  
        |---index.js 配置组件与路径  
      |---App.vue   
      |---main.js 提供项目入口  
```
移动端的AllRound_App 主要使用rem属性。配合使用rem.js,实现移动端的适配。  

优化了整体的框架，每个模块的标题，颜色，都放在了App.vue中，根据被点击的模块传参改变标题和对应的颜色。这样重用性会更好，修改添加也比较有效。这样在添加一个模块时，只用在App中添加一下，不用每个再引入一下App.vue是一个总的组件。        

