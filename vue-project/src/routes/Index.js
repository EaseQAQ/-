import VueRouter from 'vue-router'

import header from "@/components/nav/header";

import classification from "@/components/classification";

const routes = [
    // {
    //     path:'/',
    //     component:classification,
    //     meta:{
    //         title:'商品分类'
    //     }
    // },
    {
        path:'/',
        component:header,
        meta:{
            title:'导航条'
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