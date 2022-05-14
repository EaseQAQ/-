// 卖家
import exp from 'express'
//配置数据库
import mysql from 'mysql';
import {config} from "../mysql_config.js";
let pool=mysql.createPool(config)
//导入共有的SQL语句
import {query_api} from '../mysql_query.js'
let sel =exp();
import {sellercenter} from './sellerCenter/index.js'
sel.use('/sellercenter',sellercenter)
// 登录
sel.get('/', (req, res) => {
    let {name, pas}=req.query;
    let sql = "SELECT * FROM tab_seller WHERE sel_account=? AND sel_pwd=?"
    query_api.query(sql, [name,pas], (data) => {
        res.send(data);
    })
})
// 注册
sel.get("/zu",(req,res)=>{
    console.log(req.query)
    let {zage, zpas, zname,zpho,value}=req.query;
    console.log(zage,zpas,zname,zpho,value);
    //查询是否有这个用户名有就判断错误
    let sql1='SELECT sel_account FROM tab_seller WHERE sel_account=?'
    //成功后插入数据语句 第一个用户名，第二个密码，第三个店铺名
    let sql2='INSERT INTO tab_seller VALUES(NULL,?,?,?,NULL,NULL,?,?)'
    new Promise((resolve,reject)=>{
        query_api.query(sql1,[zage],(data)=>{
            resolve(data);
        })
    }).then((data)=>{
        //如果是1就是有这个用户名
        console.log(zage,zpas,zname,zpho,value);
        if(data.length==0){
            query_api.query(sql2,[zage,zpas,zname,value,zpho],(data)=>{
                res.send("yes")
            })
        }else{
            res.send(data);
        }
        
    })
})
//下拉框选择店铺类型
sel.get('/select',(req,res)=>{
    let sql='SELECT * FROM tab_category WHERE category_state=0'
    query_api.query(sql,[],(data)=>{
        res.send(data)
    })
})

export {sel};