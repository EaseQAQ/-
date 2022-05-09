import exp, { request } from 'express';
//配置数据库
import mysql, { createPool } from 'mysql';
import { config } from '../mysql_config.js';
let pool = mysql.createPool(config);
//导入共有的sql语句
import { query_api } from '../mysql_query.js';
let ticulars=exp();
//商品详情信息
ticulars.get('/',(req,res)=>{
    let id=req.query.id;
    let sql=`SELECT t1.sel_store,t2.goods_id,t2.goods_name,t2.goods_price,t2.goods_img FROM tab_seller t1,(SELECT goods_id,goods_name,goods_price,goods_img,sel_id FROM tab_goods WHERE goods_id='${id}') t2 WHERE t1.sel_id=t2.sel_id`;
    query_api.query(sql,[],(data)=>{
        // console.log(data);
        res.send(data)
    })
})
//商品的尺码
ticulars.get('/goodssize',(req,res)=>{
    // console.log(123);
    let id=req.query.id;
    let sql=`SELECT goods_size FROM tab_goodsdetail WHERE goods_id='${id}'`;
    query_api.query(sql,[],(data)=>{
        // console.log(data);
        res.send(data)
    })
})

export { ticulars };