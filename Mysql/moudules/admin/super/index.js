import exp from 'express'
//配置数据库
import mysql from 'mysql';
import { config } from "../../mysql_config.js";
let pool=mysql.createPool(config)
//导入共有的SQL语句
import { query_api } from '../../mysql_query.js'
let superadmin =exp();
// 超级管理员
    //管理员
    superadmin.get('/superadmin',(req,res)=>{
        let sql = "SELECT t_a.*,t_c.`category_name` FROM tab_adm t_a,tab_admrole t_ar ,tab_category t_c WHERE t_a.`adm_id`= t_ar.`adm_id` AND t_ar.`category_id`=t_c.`category_id`"
        query_api.query(sql,[],(data)=>{
            res.send(data)
        })
    })
    superadmin.get('/select',(req,res)=>{
        let sql = "SELECT category_id,category_name FROM tab_category"
        query_api.query(sql,[],(data)=>{
            res.send(data)
        })
    })
    superadmin.get('/amend',(req,res)=>{
        let sql = "SELECT t_a.`adm_account`,t_a.`adm_pwd`,t_c.`category_id`,t_c.`category_name` FROM tab_adm t_a,tab_admrole t_ar ,tab_category t_c WHERE t_a.`adm_id`= t_ar.`adm_id` AND t_ar.`category_id`=t_c.`category_id` AND t_a.`adm_id`=?"
        query_api.query(sql,[req.query.adm_id],(data)=>{
            res.send(data)
        })
    })
    superadmin.get('/updatainfo',(req,res)=>{
        let {adm_id,adm_account,adm_pwd,category_id}=req.query;
        console.log(adm_id,adm_account,adm_pwd,category_id);
        let sql = "UPDATE tab_adm t_a,tab_admrole t_ar SET t_a.`adm_account`=?,t_a.`adm_pwd`=?,t_ar.`category_id`=? WHERE t_a.`adm_id`=t_ar.`adm_id` AND t_a.`adm_id`=?"
        query_api.query(sql,[adm_account,adm_pwd,category_id,adm_id],(data)=>{
            res.send(data)
        })
    })
    // 商家
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