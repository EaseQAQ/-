<template>
    <div>
        <div class="sonRoute">
            <div class="headline">
                <h2>订单信息</h2>
            </div>
            <!--导航功能-->
            <div class="filtrate">
                    <div class="c-search-form">
                        <el-input placeholder="请输入内容" clearable v-model="input"></el-input>
                        <el-button type="primary" icon="el-icon-search" >搜索</el-button>
                    </div>
            </div>
            <div class="information">
                <div id="shoppnum">共<em v-if="sum">{{sum[0].osum}}</em>单订单</div>
            </div>
            <!--表格-->
            <div class="tab">
                <el-table :data="userlist" border style="width: 100%">
                    <el-table-column type="selection" width="39">
                    </el-table-column>
                    <el-table-column fixed prop="order_id" label="订单号" width="63">
                    </el-table-column>
                    <el-table-column prop="order_time" label="下单时间" width="100">
                        <template slot-scope="scope"><span>{{ timeChange(scope.row.order_time) }}</span></template>
                    </el-table-column>
                    <el-table-column prop="order_sum" label="金额" width="49">
                    </el-table-column>
                    <el-table-column prop="order_done" label="签收时间" width="100">
                        <template slot-scope="scope"><span>{{ timeChange(scope.row.order_time) }}</span></template>
                    </el-table-column>
                    <el-table-column prop="goods_name" label="商品名" width="190">
                    </el-table-column>
                    <el-table-column prop="detail_count" label="数量" width="49">
                    </el-table-column>
                    <el-table-column prop="sel_store" label="店铺名" width="80">
                    </el-table-column>
                    <el-table-column prop="addr_local" label="收货地址" width="120">
                    </el-table-column>
                    <el-table-column prop="addr_person" label="收货人" width="65">
                    </el-table-column>
                    <el-table-column prop="addr_phone" label="收货人电话" width="112">
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "OrderManagement",
        data() {
            return {
                userlist: [],
                sum:'',
                input:'',
                //搜索框搜索出来的内容
                inputdata:''
            }
        }, 
        methods: {
            sear(){
                console.log(this.input);
                if(!this.input==''){
                    this.axios.get(`http://localhost:8080/merchant/admin/selectorder?order_id=${this.input}`).then((response)=>{
                        this.inputdata='';
                        this.inputdata=response.data;
                        console.log(this.inputdata);
                    },(error)=>{
                        console.log(error)
                    })
                }else{
                    document.querySelector('.c-search_below').style.display='none';
                }
            },
            getvalue1(){
                const data=this.inputdata
                data.forEach((item,index)=>{
                    if(item.name==this.input1){
                    this.tableData=data.splice(index,1)
                    }
                })
                this.input1=''
            },
            timeChange(data) {
                let time = data //将需要格式化的数据传入
                time = this.dayjs(time).format('YYYY-MM-DD HH:mm:ss')
                return time 
            },
        },
        mounted() {
            this.axios.get('http://localhost:8080/merchant/admin/order').then((response) => {
                this.userlist =response.data
                console.log(this.userlist);
            }).catch(err=>{
                console.log("获取数据失败" + err);
            }),
            this.axios.get('http://localhost:8080/merchant/admin/ordersum').then((response) => {
                this.sum =response.data
                console.log(this.sum[0]);
            }).catch(err=>{
                console.log("获取数据失败" + err);
            })  
        }
    }
</script>

<style scoped>

</style>