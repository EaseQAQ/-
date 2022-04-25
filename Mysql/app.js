import express from 'express'
import mysql from 'mysql'

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'project'
});

connection.connect((err) => {
    if (!err) {
        console.log('连接mysql成功')
    }
});

const app = express()

app.get('/getCategory', (req, res) => {
    //解决跨域
    res.set('Access-Control-Allow-Origin', '*')
    connection.query('select * from test', (err, data, field) => {
        if (!err) {
            //返回查询数据
            res.send(data)
        }
    })
})

app.listen(3000, () => {
    console.log('服务器开启中')
})