import VueRouter from 'vue-router'

import classification from "../components/classification.vue";
import homepage from "../components/homepage.vue";
import CarLogon from "../components/homepage.vue";
import BuyerLogon from "../components/homepage.vue";

const routes = [
    // 首页
    {
        path:'/',
        component:homepage,
        meta:{
            title:'首页'
        }
    },
    // 商品分类
    {
        path:'/classification',
        component:classification,
        meta:{
            title:'商品分类'
        }
    },
    // 商家登录注册
    {
        path: '/car',
        component:CarLogon,
        meta:{
            title:'商家登录/注册'
        }
    },
    //导入买家登录注册
    {
        path: '/buyerlogon',
        component: BuyerLogon,
        mate:{
            title:'用户登录/注册'
        }
    }
]

// 3. 创建 router 实例,并将其暴露出去
const router=new VueRouter({
    mode:'history',  
    routes
})
// 全局后置路由守卫
router.afterEach((to, from) => {
    console.log('目标路由你已经访问完毕.....')
    document.querySelector('title').innerText=to.meta.title;
})

// 5、暴露 router 对象
export  default  router;
