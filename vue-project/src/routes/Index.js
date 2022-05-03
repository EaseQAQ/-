import VueRouter from 'vue-router'

//首页
import homepage from "@/components/homepage.vue";
//商品详情页
import particulars from "@/components/particulars.vue";
//分类页
import classification from "@/components/classification.vue";
//商家登录注册组件
import CarLogon from "@/components/CarLogon";
//买家登录注册组件
import BuyerLogon from "@/components/BuyerLogon";
//管理员登录系统
import AdminLogon from "@/components/AdminLogon";
//商家后台管理系统
import CarBack_Stage from "@/components/CarBack_Stage";
/*商品信息*/
import Commodity from "@/components/CarBack_Stage/Commodity";
/*买家评论*/
import Comment from "@/components/CarBack_Stage/Comment";
/*上架商品*/
import GoodsShelves from "@/components/CarBack_Stage/GoodsShelves";


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
            title:'商品搜索分类'
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
    //买家登录注册
    {
        path: '/buyerlogon',
        component: BuyerLogon,
        mate:{
            title:'用户登录/注册'
        }
    },
    //商品详情
    {
        path: '/particulars',
        component: particulars,
        mate:{
            title:'商品详情'
        }
    },
    /*管理员登录组件*/
    {
        path: '/adminlogon',
        component: AdminLogon,
        mate: {
            title: "管理员登录"
        }
    },
    /*商家后台管理系统*/
    {
        path: "/carback_stage",
        component: CarBack_Stage,
        mate: {
            title: "商家后台管理"
        },
        /*默认设置打开商品信息页面*/
        redirect: '/carback_stage/commodity',
        /*商品信息页面*/
        children: [
            {
                path: 'commodity',
                name: 'commodity',
                component: Commodity,
                mate: {
                    title: "商品信息"
                }
            },
            /*买家评论*/
            {
                path: 'comment',
                name: 'comment',
                component: Comment,
                mate: {
                    title: "买家评论"
                }
            },
            /*上架商品*/
            {
                path: 'goodsshelves',
                name: 'goodsshelves',
                component: GoodsShelves,
                mate: {
                    title: '上架商品'
                }
            }
        ]
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
