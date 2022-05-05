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
app.listen(8000)
/*
import express from 'express'
import mysql from 'mysql'

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'project'
});

connection.connect((err) => {
    if (!err) {
        console.log('连接mysql成功')
    }
});

const app = express()

app.get('/getCategory', (req, res) => {
    //解决跨域
    res.set('Access-Control-Allow-Origin', '*')
    connection.query('select * from test', (err, data, field) => {
        if (!err) {
            //返回查询数据
            res.send(data)
        }
    })
})

app.listen(8000, () => {
    console.log('服务器开启中')
})*/
