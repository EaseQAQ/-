import VueRouter from 'vue-router';
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
/*购物车*/
import ShopTrolley from "@/components/ShopTrolley";
//商家后台管理系统
import CarBack_Stage from "@/components/CarBack_Stage";
    /*商品信息*/
    import Commodity from "@/components/CarBack_Stage/Commodity";
    /*买家评论*/
    import Comment from "@/components/CarBack_Stage/Comment";
    /*上架商品*/
    import GoodsShelves from "@/components/CarBack_Stage/GoodsShelves";
    /*订单信息*/
    import OrderM from "@/components/CarBack_Stage/OrderM";
// 个人中心
import Personal_center from "@/components/Personal_center";
    // 个人信息
    import Personal from "@/components/Personal_center/Personal";
    // 个人资产
    import Property from "@/components/Personal_center/Property";
    // 收货地址
    import ShippingAddress from "@/components/Personal_center/ShippingAddress";
// 普通管理员
import Administrator from "@/components/Administrator"
    // 订单信息
    import OrderManagement from "@/components/Administrator/OrderManagement";
    // 商家信息
    import merchandise from "@/components/Administrator/merchandise";
    // 上架申请
    import ApplyFor from "@/components/Administrator/ApplyFor";
// 超级管理员
import SuperAdministrator from "@/components/SuperAdministrator"
    // 订单信息
    import AdministratorList from "@/components/SuperAdministrator/AdministratorList";
    // 商家信息
    import MerchantList from "@/components/SuperAdministrator/MerchantList";
    // 上架申请
    import UsersList from "@/components/SuperAdministrator/UsersList";


const routes = [
    // 首页
    {
        path: '/',
        component: homepage,
        meta: {
            title: '首页'
        }
    },
    // 商品分类
    {
        path: '/classification',
        component: classification,
        meta: {
            title: '商品搜索分类'
        }
    },
    // 商家登录注册
    {
        path: '/car',
        component: CarLogon,
        meta: {
            title: '商家登录/注册'
        }
    },
    //买家登录注册
    {
        path: '/buyerlogon',
        component: BuyerLogon,
        mate: {
            title: '用户登录/注册'
        }
    },
    //商品详情
    {
        path: '/particulars',
        component: particulars,
        mate: {
            title: '商品详情'
        },
        props({query:{id}}){
            return {id}
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
    // 购物车
    {
        path: '/shoptrolley',
        component: ShopTrolley,
        mate: {
            title: '购物车'
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
        children: [{
                path: 'commodity',
                component: Commodity,
                mate: {
                    title: "商品信息"
                }
            },
            /*买家评论*/
            {
                path: 'comment',
                component: Comment,
                mate: {
                    title: "买家评论"
                }
            },
            /*上架商品*/
            {
                path: 'goodsshelves',
                component: GoodsShelves,
                mate: {
                    title: '上架商品'
                }
            },
            {
                path: 'OrderM',
                component: OrderM,
                mate: {
                    title: '订单信息'
                }
            }
        ]
    },
    /*买家个人中心*/
    {
        path: "/Personal_center",
        component: Personal_center,
        mate: {
            title: "买家个人中心"
        },
        /*默认设置打开个人信息*/
        redirect: '/Personal_center/Myorder',
        children: [
            /*个人信息*/
            {
                path: 'Personal',
                component: Personal,
                mate: {
                    title: "个人信息"
                }
            },
            /*个人资产*/
            {
                path: 'Property',
                component: Property,
                mate: {
                    title: '个人资产'
                }
            },
            // 收货地址
            {
                path: 'ShippingAddress',
                component: ShippingAddress,
                mate: {
                    title: '收货地址'
                }
            }
        ]
    },
    /*普通管理员*/
    {
        path: "/Administrator",
        component: Administrator,
        mate: {
            title: "普通管理员"
        },
        /*默认设置打开订单信息*/
        redirect: '/Administrator/OrderManagement',
        children: [
            /*订单信息*/
            {
                path: 'OrderManagement',
                component: OrderManagement,
                mate: {
                    title: "订单信息"
                }
            },
            /*商家信息*/
            {
                path: 'merchandise',
                component: merchandise,
                mate: {
                    title: '商品类型'
                }
            },
            // 上架申请
            {
                path: 'ApplyFor',
                component: ApplyFor,
                mate: {
                    title: '上架申请'
                }
            }
        ]
    },
    /*超级管理员*/
    {
        path: "/SuperAdministrator",
        component: SuperAdministrator,
        mate: {
            title: "超级管理员"
        },
        /*默认设置打开订单信息*/
        redirect: '/SuperAdministrator/AdministratorList',
        children: [
            /*管理员列表*/
            {
                path: 'AdministratorList',
                component: AdministratorList,
                mate: {
                    title: "管理员列表"
                }
            },
            /*商家列表*/
            {
                path: 'MerchantList',
                component: MerchantList,
                mate: {
                    title: '商家列表'
                }
            },
            // 用户列表
            {
                path: 'UsersList',
                component: UsersList,
                mate: {
                    title: '用户列表'
                }
            }
        ]
    }
]

// 3. 创建 router 实例,并将其暴露出去
const router = new VueRouter({
        mode: 'history',
        routes
    })
    // 全局后置路由守卫
router.afterEach((to, from) => {
    console.log('目标路由你已经访问完毕.....')
    document.querySelector('title').innerText = to.meta.title;
})

// 5、暴露 router 对象
export default router;