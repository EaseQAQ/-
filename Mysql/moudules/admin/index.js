import exp from 'express'
//配置数据库
import mysql from 'mysql';
import {config} from "../mysql_config.js";
let pool=mysql.createPool(config)
//导入共有的SQL语句
import {query_api} from '../mysql_query.js'
let admin =exp();
// 登录
admin.get('/',(req,res)=>{
    let sql = "SELECT * FROM tab_adm WHERE adm_account='admin' AND adm_pwd='123456'"
    query_api.query(sql,[],(data)=>{
        res.send(data)
    })
})
// 超级管理员
    // 列表
    admin.get('/superadmin',(req,res)=>{
        let sql = "SELECT * FROM tab_adm"
        query_api.query(sql,[],(data)=>{
            res.send(data)
        })
    })
    admin.get('/seller',(req,res)=>{
        let sql = "SELECT * FROM tab_seller"
        query_api.query(sql,[],(data)=>{
            res.send(data)
        })
    })
    admin.get('/customer',(req,res)=>{
        let sql = "SELECT * FROM customer"
        query_api.query(sql,[],(data)=>{
            res.send(data)
        })
    })
    admin.get('/delcustomer',(req, res) => {//通过id删除数据
        let sql = "delete from customer where cust_id = ?";
        query_api.query(sql, [req.query.id], (err, data) => {
            if(err) {
                return res.send('错误：' + err)
            }
            res.send(data)
        })
    })
    admin.get('/delseller',(req, res) => {//通过id删除数据
        let sql = "delete from customer where cust_id = ?";
        query_api.query(sql, [req.query.id], (err, data) => {
            if(err) {
                return res.send('错误：' + err)
            }
            res.send(data)
        })
    })
    admin.get('/deladmin',(req, res) => {//通过id删除数据
        let sql = "delete from customer where cust_id = ?";
        query_api.query(sql, [req.query.id], (err, data) => {
            if(err) {
                return res.send('错误：' + err)
            }
            res.send(data)
        })
    })

// 管理员
    // 列表
    admin.get('/order',(req,res)=>{
        let sql = "SELECT * FROM tab_order"
        query_api.query(sql,[],(data)=>{
            res.send(data)
        })
    })
    // admin.get('/seller',(req,res)=>{
    //     let sql = "SELECT * FROM tab_seller"
    //     query_api.query(sql,[],(data)=>{
    //         res.send(data)
    //     })
    // })
    // admin.get('/customer',(req,res)=>{
    //     let sql = "SELECT * FROM customer"
    //     query_api.query(sql,[],(data)=>{
    //         res.send(data)
    //     })
    // })
    // admin.get('/delcustomer',(req, res) => {//通过id删除数据
    //     let sql = "delete from customer where cust_id = ?";
    //     query_api.query(sql, [req.query.id], (err, data) => {
    //         if(err) {
    //             return res.send('错误：' + err)
    //         }
    //         res.send(data)
    //     })
    // })


export {admin};