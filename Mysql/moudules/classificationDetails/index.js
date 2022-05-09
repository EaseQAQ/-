import exp, { request } from 'express';
//配置数据库
import mysql, { createPool } from 'mysql';
import { config } from '../mysql_config.js';
let pool = mysql.createPool(config);
//导入共有的sql语句
import { query_api } from '../mysql_query.js';
let details = exp();
//商品搜索分类的商品数据
details.get('/', (req, res) => {
    let name=req.query.name;
    let sql = `SELECT t1.goods_id,t1.goods_name,t1.goods_price,t1.goods_img FROM tab_goods t1,tab_categorydetails t2 WHERE t1.cateDetail_id=t2.cateDetail_id AND t2.cateDetail_name='${name}'`
    query_api.query(sql, [], (data) => {
        // console.log(data)
        res.send(data)
    })
})
//大分类点击出的商品
details.get('/bigger', (req, res) => {
    let name=req.query.name;
    let sql =`SELECT t3.goods_id,t3.goods_name,t3.goods_price,t3.goods_img FROM tab_goods t3,(SELECT t1.cateDetail_id FROM tab_categorydetails t1,(SELECT category_id FROM tab_category WHERE category_name='${name}') t2 WHERE t1.category_id=t2.category_id) t4 WHERE t3.cateDetail_id=t4.cateDetail_id`
    query_api.query(sql, [], (data) => {
        // console.log(data)
        res.send(data)
    })
})
//商品搜索分类左边弹出分类数据
details.get('/leftmac', (req, res) => {
    let sql = ' SELECT NAME FROM tab_id'
    query_api.query(sql, [], (data) => {
        // console.log(data);
        res.send(data)
    })
})
//商品搜索分类左边弹出分类数据框右边的数据
details.get('/rightmac',(req,res)=>{
    let sql='SELECT category_name FROM tab_category ORDER BY fen_id LIMIT 0,11'
    query_api.query(sql,[],(data)=>{
        // console.log(data);
        res.send(data)
    })
})
//鼠标放大分类上显示具体分类
details.get('/smallmac',(req,res)=>{
    let name=req.query.name;
    let sql=`SELECT t3.cateDetail_name,t4.category_name FROM tab_categorydetails t3,(SELECT t1.category_id,t1.category_name FROM tab_category t1,tab_id t2 WHERE t1.fen_id=t2.fen_id AND t2.name='${name}') t4 WHERE t3.category_id=t4.category_id`
    query_api.query(sql,[],(data)=>{
        // console.log(data);
        res.send(data)
    })
})
//搜索框
details.get('/search',(req,res)=>{
    let name=req.query.name;
    let sql=`SELECT goods_name FROM tab_goods WHERE goods_name LIKE '%${name}%' LIMIT 0,8`;
    query_api.query(sql,[],(data)=>{
        res.send(data);
    })
})
//搜索框搜索出来的商品
details.get('/sears',(req,res)=>{
    let name=req.query.name;
    let sql=`SELECT goods_id,goods_name,goods_price,goods_price FROM tab_goods WHERE goods_name='${name}'`;
    query_api.query(sql,[],(data)=>{
        res.send(data);
    })
})
//点击搜索按钮搜索出来的商品
details.get('/sears2',(req,res)=>{
    let name=req.query.name;
    let sql=`SELECT goods_id,goods_name,goods_price,goods_price FROM tab_goods WHERE goods_name LIKE '%${name}%'`;
    query_api.query(sql,[],(data)=>{
        res.send(data);
    })
})

export { details };