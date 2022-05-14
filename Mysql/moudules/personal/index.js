import exp, { query, request } from 'express';
//配置数据库
import mysql, { createPool } from 'mysql';
import { config } from '../mysql_config.js';
let pool = mysql.createPool(config);
//导入共有的sql语句
import { query_api } from '../mysql_query.js';
let person=exp();
//用户信息
person.get('/',(req,res)=>{
    let id=req.query.uid;
    let sql=`SELECT cust_account,cust_pwd,cust_phone,cust_img FROM customer WHERE cust_id=${id}`;
    query_api.query(sql,[],(data)=>{
        // console.log(data);
        res.send(data)
    })
})
// 修改用户信息
person.get('/updatainfo',(req,res)=>{
    let id=req.query.uid;
    let name=req.query.name;
    let pwd=req.query.pwd;
    let phone=req.query.phone;
    console.log(id,name,pwd,phone);
    let sql=`UPDATE customer SET cust_account=?,cust_pwd=?,cust_phone=? WHERE cust_id=?`
    query_api.query(sql,[name,pwd,phone,id],(data)=>{
        res.send(data)
    })
})

export { person };