import exp from 'express'
//配置数据库
import mysql from 'mysql';
import {config} from "../mysql_config.js";
let pool=mysql.createPool(config)
//导入共有的SQL语句
import {query_api} from '../mysql_query.js'
let admin =exp();
//超级管理员
import {superadmin} from './super/index.js'
admin.use('/superadmin',superadmin)
// 登录
admin.get('/',(req,res)=>{
    let sql = "SELECT * FROM tab_adm WHERE adm_account='admin' AND adm_pwd='123456'"
    query_api.query(sql,[],(data)=>{
        res.send(data)
    })
})

// 管理员
    // 订单
    admin.get('/order',(req,res)=>{
        let sql = "SELECT t_o.order_id,t_o.order_time,t_o.order_done,t_o.order_sum,t_g.goods_name,t_od.detail_count,se.sel_store,t_a.addr_local,t_a.addr_person,t_a.addr_phone FROM tab_order AS t_o,tab_orderdetails AS t_od,tab_seller AS se,customer AS cu,tab_addr AS t_a,tab_goods AS t_g WHERE t_o.order_id=t_od.order_id AND t_o.sel_id= se.sel_id AND t_o.cust_id=cu.cust_id AND t_o.addr_id=t_a.addr_id AND t_od.goods_id=t_g.goods_id"
        query_api.query(sql,[],(data)=>{
            res.send(data)
        })
    })
    admin.get('/selectorder',(req,res)=>{
        let sql = "SELECT order_id FROM tab_order WHERE = ?"
        query_api.query(sql,[req.query.id],(data)=>{
            res.send(data)
        })
    })
    admin.get('/ordersum',(req,res)=>{
        let sql = "SELECT count(*) AS osum FROM tab_order"
        query_api.query(sql,[],(data)=>{
            res.send(data)
        })
    })
    admin.get('/merchandise',(req,res)=>{
        let sql = "SELECT t_c.`category_id`,t_c.`category_name`,t_c.`category_state`,t_cd.`cateDetail_id`,t_cd.`cateDetail_name` FROM tab_categorydetails AS t_cd,tab_category AS t_c,tab_admrole AS t_a WHERE t_cd.`category_id`=t_c.`category_id` AND t_c.`category_id`=t_a.`category_id` AND t_a.`adm_id`=10011"
        query_api.query(sql,[],(data)=>{
            res.send(data)
        })
    })
    admin.get('/delmerchandise',(req, res) => {//通过id删除数据
        let sql = "delete from tab_categorydetails where cateDetail_id = ?";
        query_api.query(sql, [req.query.id], (err, data) => {
            if(err) {
                return res.send('错误：' + err)
            }
            res.send(data)
        })
    })


export {admin};