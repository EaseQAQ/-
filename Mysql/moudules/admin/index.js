import exp from 'express'
//配置数据库
import mysql from 'mysql';
import {config} from "../mysql_config.js";
let pool=mysql.createPool(config)
//导入共有的SQL语句
import {query_api} from '../mysql_query.js'
let admin =exp();
admin.get('/',(req,res)=>{
    let sql = "SELECT * FROM tab_adm WHERE adm_account='admin' AND adm_pwd='123456'"
    query_api.query(sql,[],(data)=>{
        console.log(data)
    })
})
export {admin};