import exp from 'express'
//配置数据库
import mysql from 'mysql';
import {config} from "../mysql_config.js";
let pool=mysql.createPool(config)
//导入共有的SQL语句
import {query_api} from '../mysql_query.js'
let sel =exp();
sel.get('/',(req,res)=>{
    let sql = "SELECT * FROM tab_seller WHERE sel_account='yyd' AND sel_pwd='123456'"
    query_api.query(sql,[],(data)=>{
        console.log(data)
    })
})
export {sel};