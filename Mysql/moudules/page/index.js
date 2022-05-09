import exp from 'express';
//配置数据库
import mysql from 'mysql';
import { config } from "../mysql_config.js";
let pool = mysql.createPool(config)
    //导入共有的SQL语句
import { query_api } from '../mysql_query.js';
let page = exp();
// 配置购物车路由
import {shoptrolley} from './shoptrolley/index.js'
page.use('/shoptrolley',shoptrolley)
page.get('/', (req, res) => {
    //查询数据有多少行
    let sql1 = 'SELECT COUNT(*) as num FROM tab_goods '
        //查询数据语句
    let sql2 = 'SELECT * FROM tab_goods LIMIT ?,1'
        //解决异步操作，
    new Promise((resolve, reject) => { //获取数据库的长度
        query_api.query(sql1, [], (data) => {
            // 指定范围内，指定个数，无重复的随机整数
            let arr = [];
            for (let i = 0; i < 28; i++) {
                arr[i] = parseInt(Math.random() * (parseInt(data[0].num) - 1 + 1) + 1);
            }
            for (let i = 0; i < 28; i++) {
                for (let j = i + 1; j < 28; j++) {
                    if (arr[i] === arr[j]) {
                        resolve(arr)
                    }
                }
            }
        })
    }).then((data) => { //拿到随机数进行传值
        //用于储存传过来的值
        // console.log("随机", data);
        let asyncFun =function(shopparr,i){
            return new Promise((resolve,reject)=>{
                query_api.query(sql2, i, (data) => {
                    // console.log(data[i]);
                    shopparr.push(data)
                    resolve(shopparr)
                })
            })
            
        }
        return new Promise((resolve, reject) => {
            let box =async function(){
                let shopparr = [];
                for (let i = 0; i < data.length; i++) {
                    await asyncFun(shopparr,data[i]) 
                }
                resolve(shopparr);
            }
            box();
        })
    }).then((data)=>{
        res.send(data);
    })
})
export { page };