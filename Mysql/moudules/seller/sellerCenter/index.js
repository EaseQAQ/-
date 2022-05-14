// 卖家中心
import exp from 'express';
//配置数据库
import mysql from 'mysql';
import { config } from "../../mysql_config.js";
let pool=mysql.createPool(config)
//导入共有的SQL语句
import { query_api } from '../../mysql_query.js';
let sellercenter =exp();

sellercenter.get('/order',(req,res)=>{
    let sql = "SELECT t_o.order_id,t_o.order_time,t_o.order_done,t_o.order_sum,t_g.goods_name,t_od.detail_count,se.sel_store,t_a.addr_local,t_a.addr_person,t_a.addr_phone FROM tab_order AS t_o,tab_orderdetails AS t_od,tab_seller AS se,customer AS cu,tab_addr AS t_a,tab_goods AS t_g WHERE t_o.order_id=t_od.order_id AND t_o.sel_id= se.sel_id AND t_o.cust_id=cu.cust_id AND t_o.addr_id=t_a.addr_id AND t_od.goods_id=t_g.goods_id AND t_o.`sel_id`=?"
    query_api.query(sql,[req.query.sel_id],(data)=>{
        res.send(data)
    })
})
sellercenter.get('/ordersum',(req,res)=>{
    let sql = "SELECT count(*) AS osum FROM tab_order WHERE sel_id=?"
    query_api.query(sql,[req.query.sel_id],(data)=>{
        res.send(data)
    })
})
sellercenter.get('/paging',(req,res)=>{
    console.log(req.query);
    let {sel_id, size,current}=req.query;
    let sql = "SELECT t_g.`goods_id`,t_g.`goods_name`,t_g.`goods_price`,t_g.`goods_img`,t_gd.`goods_gender`,SUM(goods_stock) FROM tab_goods t_g,tab_goodsdetail t_gd  WHERE t_g.`goods_id`=t_gd.`goods_id` AND t_g.`sel_id`=? GROUP BY t_gd.`goods_id` LIMIT ? OFFSET ?;"
    query_api.query(sql,[sel_id,size,current],(data)=>{
        res.send(data)
    })
})
sellercenter.get('/commodity',(req,res)=>{
    console.log(req.query);
    let sql = "SELECT t_g.`goods_id`,t_g.`goods_name`,t_g.`goods_price`,t_g.`goods_img`,t_gd.`goods_gender`,SUM(goods_stock) FROM tab_goods t_g,tab_goodsdetail t_gd  WHERE t_g.`goods_id`=t_gd.`goods_id` AND t_g.`sel_id`=? GROUP BY t_gd.`goods_id` LIMIT 50 OFFSET 0;"
    query_api.query(sql,[req.query.sel_id],(data)=>{
        res.send(data)
    })
})
sellercenter.get('/commoditysum',(req,res)=>{
    let sql = "SELECT count(*) AS osum FROM tab_goods WHERE sel_id=?"
    query_api.query(sql,[req.query.sel_id],(data)=>{
        res.send(data)
    })
})
sellercenter.get('/delcommodity',(req,res)=>{
    let sql = "CALL delcommodity(?);"
    query_api.query(sql,[req.query.sel_id],(data)=>{
        res.send(data)
    })
})
export { sellercenter };