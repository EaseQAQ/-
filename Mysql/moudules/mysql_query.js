//共同的查询数据
import mysql from 'mysql';
import {config} from './mysql_config.js';
let pool =mysql.createPool(config)
let query_api={
    //登录的数据
    query:(sql,params,callback)=>{
        pool.getConnection((error,connection)=>{
            connection.query(sql,params,(error,results)=>{
                callback(results)
            })
            connection.release();
        })
    }
}
export {query_api}
// module.exports=seller_api;