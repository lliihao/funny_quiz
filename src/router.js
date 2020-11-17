import App from './App'

export default [{
    path: '/',
    component: App,

    children: [{
        path: '', 
        component: r => require.ensure([], () => r(require('./pages/Home.vue')), 'home')
    }, {
        path: '/item',
        component: r => require.ensure([], () => r(require('./pages/Item.vue')), 'item')
    }, {
        path: '/score',
        component: r => require.ensure([], () => r(require('./pages/Score.vue')), 'score')
    }]
    
}]


    // var home = function(f){
    //     require.ensure([],function(){f(require('../page/home/home'))},'home')
    // }
    // // require.ensure 第三个参数是你打包之后的chunkName
    // function doSomething(msg, callback){
    //     alert(msg);
    //     if(typeof callback == "function") 
    //     callback();
    //  } 
    // doSomething("回调函数", function(){
    //     alert("匿名函数实现回调!");
    //  }); 
