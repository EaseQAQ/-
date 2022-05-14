<template>
    <div>
        <div class="sonRoute">
            <div class="headline">
                <h2>商家列表</h2>
            </div>
            <!--导航功能-->
            <div class="filtrate">
                <el-row>
                    <el-col :span="12">
                        <el-autocomplete class="inline-input" v-model="state1" :fetch-suggestions="querySearch" placeholder="请输入商家id" @select="handleSelect"></el-autocomplete>
                    </el-col>
                    <el-button type="primary">搜索</el-button>
                </el-row>
            </div>
            <div class="information">
                <div id="shopphear">
                    <el-button type="primary" round>批量删除</el-button>
                </div>
                <div id="shoppnum">共<em>0</em>名商家</div>
            </div>
            <!--表格-->
            <div class="tab">
                <el-table :data="userlist" stripe border id="box" style="width: 100%"  highlight-current-row>
                    <el-table-column type="selection" width="55"></el-table-column>
                    <el-table-column fixed prop="sel_id" label="商家ID" width="70"></el-table-column>
                    <el-table-column prop="sel_account" label="商家账号" width="165"></el-table-column>
                    <el-table-column prop="sel_pwd" label="商家密码" width="165"></el-table-column>
                    <el-table-column prop="sel_store" label="店铺名" width="130"></el-table-column>
                    <el-table-column prop="sel_phone" label="店铺号码" width="150"></el-table-column>
                    <el-table-column prop="sel_local" label="商品类型" width="120"> </el-table-column>
                    <el-table-column fixed="right" label="操作" width="130">
                        <template #default="scope">
                            <el-button @click="del(scope.row.sel_id)"  type="text"  size="small">删除</el-button>
                            <el-button plain type="text"  size="small">修改</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        inject:['reload'],
        name: "MerchantList",
        data() {
            return {
                userlist: [],
                restaurants: [],
                state1: '',
                state2: ''
            }
        },
        methods: {
            del(row){
                let id = row
                console.log(id)
                this.axios.get(`http://localhost:8080/merchant/admin/superadmin/delseller?id=${id}`).
                then(res=>{
                    console.log("成功");
                    this.reload();
                })
                .catch(err=>{
                    console.log("操作失败" + err);
                })
            },
            handleClick(row) {
                console.log(row);
            },
            querySearch(queryString, cb) {
                var restaurants = this.restaurants;
                var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
                // 调用 callback 返回建议列表的数据
                cb(results);
            },
            createFilter(queryString) {
                return (restaurant) => {
                return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                };
            },
            handleSelect(item) {
                console.log(item);
            }
        },
        mounted() {
            this.axios.get('http://localhost:8080/merchant/admin/superadmin/seller').then((response) => {
                this.userlist =response.data
            }).catch(err=>{
                console.log("获取数据失败" + err);
            }),
            this.restaurants = this.userlist;
        }
    }
</script>

<style scoped>

</style>