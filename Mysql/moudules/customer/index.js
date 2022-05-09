//顾客表
import exp from 'express'
//配置数据库
import mysql from 'mysql';
import { config } from "../mysql_config.js";
let pool = mysql.createPool(config)
    //导入共有的SQL语句
import { query_api } from '../mysql_query.js'
let cust = exp();
//顾客登录
cust.get('/', (req, res) => {
    let name =req.query.name;
    let pas =req.query.pas
    let sql = "SELECT * FROM customer WHERE cust_account=? AND cust_pwd=?"
    query_api.query(sql, [name,pas], (data) => {
        res.send(data);
    })
})
//顾客注册
cust.get("/zu",(req,res)=>{
    let zname=req.query.zname;
    let zpas =req.query.zpas;
    let zpho =req.query.zpho
    //查询是否有这个用户名有就判断错误
    let sql1='SELECT cust_account FROM customer WHERE cust_account=?'
    //成功后插入数据语句 第一个用户名，第二个密码 ，第三个电话号码
    let sql2='INSERT INTO customer VALUES(NULL,?,?,?,0,NULL,0,0)'
    new Promise((resolve,reject)=>{
        query_api.query(sql1,[zname],(data)=>{
            resolve(data);
        })
    }).then((data)=>{
        //如果是1就是有这个用户名
        if(data.length==0){
            query_api.query(sql2,[zname,zpas,zpho],(data)=>{
                res.send("yes")
            })
        }else{
            res.send(data);
        }
        
    })
})
export { cust };