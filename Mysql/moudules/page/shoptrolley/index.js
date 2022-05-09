//购物车
import exp from 'express';
//配置数据库
import mysql from 'mysql';
import { config } from "../../mysql_config.js";
let pool = mysql.createPool(config)
    //导入共有的SQL语句
import { query_api } from '../../mysql_query.js';
let shoptrolley = exp();
shoptrolley.get('/',(res,req)=>{
    let sql = "SELECT  t2.sel_store 店铺名字,t2.sel_id 店铺id,t1.`goods_size` 商品尺码,t1.cart_count 商品数量, t3.* FROM tab_cart t1 INNER JOIN tab_seller t2 ON t1.sel_id=t2.sel_id INNER JOIN tab_goods t3 ON t1.goods_id=t3.goods_id WHERE t1.cust_id=? ORDER BY t2.sel_id"
    query_api.query(sql,[res.query.shopcusid],(data)=>{
        req.send(data)
    });
})
//页面进来显示商品
export { shoptrolley };