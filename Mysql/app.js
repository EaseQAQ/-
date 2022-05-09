import exp from 'express' ;
//配置body—parser
import bodyParser from 'body-parser';
//配置MySQL
import mysql from 'mysql';
import {config} from './moudules/mysql_config.js'
let pool=mysql.createPool(config)
//配置异步,cookie/session ,md5....
import cors from 'cors'
import session from 'express-session'
import ejs from 'ejs'
import md5 from 'md5'
let app =exp();
//配置配置body—parser
app.use(bodyParser.urlencoded({exended:false}))
app.use(bodyParser.json());
//配置cors
app.use(cors())
//配置session
app.use(session({
    //指定cookie
    name:'name',
    //是否要加密
    secret:'keyboard cat',
    //没有强制保存
    resave:false,
    saveUninitialized:true,
    cookie:{
        secure:false,
        maxAge:new Date(new Date().getTime() + 24 * 3600000)
    }
}))
//配置管理员路由
import {admin} from './moudules/admin/index.js'
app.use('/admin',admin)
//配置顾客路由
import {cust} from './moudules/customer/index.js'
app.use('/customer',cust)
//配置卖家路由
import {sel} from './moudules/seller/index.js'
app.use('/seller',sel)
//配置分类页面商品路由
import { details } from './moudules/classificationDetails/index.js'
app.use('/classificationDetails', details)
 //配置分类页面商品路由
import { ticulars } from './moudules/partic/index.js'
app.use('/partic', ticulars)
 //配置首页面路由
import { page } from './moudules/page/index.js'
app.use('/page', page)

app.listen(8000)


