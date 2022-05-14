import exp from 'express'
//配置数据库
import mysql from 'mysql';
import { config } from "../../mysql_config.js";
let pool=mysql.createPool(config)
//导入共有的SQL语句
import { query_api } from '../../mysql_query.js'
let superadmin =exp();
// 超级管理员
    // 列表
    superadmin.get('/superadmin',(req,res)=>{
        let sql = "SELECT * FROM tab_adm"
        query_api.query(sql,[],(data)=>{
            res.send(data)
        })
    })
    superadmin.get('/seller',(req,res)=>{
        let sql = "SELECT * FROM tab_seller"
        query_api.query(sql,[],(data)=>{
            res.send(data)
        })
    })
    superadmin.get('/customer',(req,res)=>{
        let sql = "SELECT * FROM customer"
        query_api.query(sql,[],(data)=>{
            res.send(data)
        })
    })
    superadmin.get('/delcustomer',(req, res) => {//通过id删除数据
        let sql = "CALL delcust( ? )";
        query_api.query(sql, [req.query.id], (err, data) => {
            if(err) {
                return res.send('错误：' + err)
            }
            res.send(data)
        })
    })
    superadmin.get('/delseller',(req, res) => {//通过id删除数据
        let sql = "CALL delseller( ? );";
        query_api.query(sql, [req.query.id], (err, data) => {
            if(err) {
                return res.send('错误：' + err)
            }
            res.send(data)
        })
    })
    superadmin.get('/deladmin',(req, res) => {//通过id删除数据
        let sql = "CALL deladmin( ? );";
        query_api.query(sql, [req.query.id], (err, data) => {
            if(err) {
                return res.send('错误：' + err)
            }
            res.send(data)
        })
    })

export {superadmin};