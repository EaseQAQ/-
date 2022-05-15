<template>
    <div>
        <div class="sonRoute">
            <div class="headline">
                <h2>管理员列表</h2>
            </div>
            <!--导航功能-->
            <div class="filtrate">
                <el-row>
                    <el-col :span="12">
                        <el-autocomplete
                        class="inline-input"
                        v-model="state1"
                        :fetch-suggestions="querySearch"
                        placeholder="请输入管理员id"
                        @select="handleSelect"
                        ></el-autocomplete>
                    </el-col>
                    <el-button type="primary">搜索</el-button>
                </el-row>
            </div>
            <div class="information">
                <div id="shopphear">
                    <el-button type="primary" round>批量删除</el-button>
                </div>
                <div id="shoppnum">共<em>0</em>名管理员</div>
            </div>
            <!--表格-->
            <div class="tab">
                <el-table :data="userlist" border style="width: 100%">
                    <el-table-column type="selection" width="55">
                    </el-table-column>
                    <el-table-column fixed prop="adm_id" label="管理员ID" width="150">
                    </el-table-column>
                    <el-table-column prop="adm_account" label="管理员账号" width="200">
                    </el-table-column>
                    <el-table-column prop="adm_pwd" label="管理员密码" width="130">
                    </el-table-column>
                    <el-table-column prop="adm_super" label="管理员权限" width="130">
                    </el-table-column>
                    <el-table-column prop="category_name" label="管理分类" width="150">
                    </el-table-column>
                    <el-table-column fixed="right" label="操作" width="130">
                    <template #default="scope">
                        <el-button @click="del(scope.row.adm_id)" type="text" size="small">删除</el-button>
                        <el-button type="text" size="small" @click="activate(scope.row.adm_id,centerDialogVisible=true)">修改</el-button>
                    </template>
                    </el-table-column>
                </el-table>
                <el-dialog title="提示" :visible.sync="centerDialogVisible" width="40%" center>
                    <el-form ref="form" :model="form" label-width="80px">
                        <el-form-item label="修改账号">
                            <el-input v-model="form.adm_account"></el-input>
                        </el-form-item>
                        <el-form-item label="修改密码">
                            <el-input v-model="form.adm_pwd"></el-input>
                        </el-form-item>
                        <el-form-item label="修改分类">
                            <el-select v-model="form.category_id" clearable placeholder="修改管理分类">
                                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-button @click="centerDialogVisible = false">取 消</el-button>
                            <el-button type="primary" @click="onSubmit">保存</el-button>
                        </el-form-item>
                    </el-form>
                </el-dialog>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        inject:['reload'],
        name: "AdministratorList",
        data() {
            return {
                userlist: [],
                form:{
                    adm_id:'',
                    adm_account:'',
                    adm_pwd:'',
                    category_id:'',
                    category_name:''
                },
                restaurants: [],
                state1: '',
                state2: '',
                centerDialogVisible: false,
                // 下拉选择框
                options: [],
                value: '',
            }
        },
        // created(){
            
        // },
        methods: {
            activate(row){
                this.form.adm_id=row
                let id =row
                console.log(id);
                this.axios.get(`http://localhost:8080/merchant/admin/superadmin/amend?adm_id=${id}`).then((response)=>{
                    this.form.adm_account=response.data[0].adm_account;
                    this.form.adm_pwd=response.data[0].adm_pwd;
                    this.form.category_id=response.data[0].category_id;
                    this.form.category_name=response.data[0].category_name;
                    console.log('修改前的数据：'+this.form.adm_account,this.form.adm_pwd,this.form.category_id,this.form.category_name);
                },(error)=>{
                    console.log(error)
                })
            },
            del(row){
                let id = row
                console.log(id)
                this.axios.get(`http://localhost:8080/merchant/admin/superadmin/superadmin?id=${id}`).
                then(res=>{
                    console.log("成功");
                    this.reload();
                })
                .catch(err=>{
                    console.log("操作失败" + err);
                })
            },
            onSubmit() {
                // 管理员的id
                let id=parseInt(this.form.adm_id);
                let category_id=parseInt(this.form.category_id);
                console.log(this.form);
                this.axios.get(`http://localhost:8080/merchant/personal/updatainfo?uid=${id}&name=${this.form.adm_account}&pwd=${this.form.adm_pwd}&phone=${category_id}`).then((response)=>{
                        // console.log(response.data);
                        console.log('修改后的数据：'+this.form.adm_account,this.form.adm_pwd,category_id);
                    },(error)=>{
                        console.log(error)
                    })
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
            loadAll() {
                return [
                { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
                { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
                { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
                { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
                { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
                { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
                { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
                { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
                { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
                { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
                { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" },
                { "value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号" },
                { "value": "Monica摩托主题咖啡店", "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F" },
                { "value": "浮生若茶（凌空soho店）", "address": "上海长宁区金钟路968号9号楼地下一层" },
                { "value": "NONO JUICE  鲜榨果汁", "address": "上海市长宁区天山西路119号" },
                { "value": "CoCo都可(北新泾店）", "address": "上海市长宁区仙霞西路" },
                { "value": "快乐柠檬（神州智慧店）", "address": "上海市长宁区天山西路567号1层R117号店铺" },
                { "value": "Merci Paul cafe", "address": "上海市普陀区光复西路丹巴路28弄6号楼819" },
                { "value": "猫山王（西郊百联店）", "address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306" },
                { "value": "枪会山", "address": "上海市普陀区棕榈路" },
                { "value": "纵食", "address": "元丰天山花园(东门) 双流路267号" },
                { "value": "钱记", "address": "上海市长宁区天山西路" },
                { "value": "壹杯加", "address": "上海市长宁区通协路" },
                { "value": "唦哇嘀咖", "address": "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元" },
                { "value": "爱茜茜里(西郊百联)", "address": "长宁区仙霞西路88号1305室" },
                { "value": "爱茜茜里(近铁广场)", "address": "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺" },
                { "value": "鲜果榨汁（金沙江路和美广店）", "address": "普陀区金沙江路2239号金沙和美广场B1-10-6" },
                { "value": "开心丽果（缤谷店）", "address": "上海市长宁区威宁路天山路341号" },
                { "value": "超级鸡车（丰庄路店）", "address": "上海市嘉定区丰庄路240号" },
                { "value": "妙生活果园（北新泾店）", "address": "长宁区新渔路144号" },
                { "value": "香宜度麻辣香锅", "address": "长宁区淞虹路148号" },
                { "value": "凡仔汉堡（老真北路店）", "address": "上海市普陀区老真北路160号" },
                { "value": "港式小铺", "address": "上海市长宁区金钟路968号15楼15-105室" },
                { "value": "蜀香源麻辣香锅（剑河路店）", "address": "剑河路443-1" },
                { "value": "北京饺子馆", "address": "长宁区北新泾街道天山西路490-1号" },
                { "value": "饭典*新简餐（凌空SOHO店）", "address": "上海市长宁区金钟路968号9号楼地下一层9-83室" },
                { "value": "焦耳·川式快餐（金钟路店）", "address": "上海市金钟路633号地下一层甲部" },
                { "value": "动力鸡车", "address": "长宁区仙霞西路299弄3号101B" },
                { "value": "浏阳蒸菜", "address": "天山西路430号" },
                { "value": "四海游龙（天山西路店）", "address": "上海市长宁区天山西路" },
                { "value": "樱花食堂（凌空店）", "address": "上海市长宁区金钟路968号15楼15-105室" },
                { "value": "壹分米客家传统调制米粉(天山店)", "address": "天山西路428号" },
                { "value": "福荣祥烧腊（平溪路店）", "address": "上海市长宁区协和路福泉路255弄57-73号" },
                { "value": "速记黄焖鸡米饭", "address": "上海市长宁区北新泾街道金钟路180号1层01号摊位" },
                { "value": "红辣椒麻辣烫", "address": "上海市长宁区天山西路492号" },
                { "value": "(小杨生煎)西郊百联餐厅", "address": "长宁区仙霞西路88号百联2楼" },
                { "value": "阳阳麻辣烫", "address": "天山西路389号" },
                { "value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13" }
                ];
            },
            handleSelect(item) {
                console.log(item);
            }
        },
        mounted() {
            this.restaurants = this.loadAll();
            this.axios.get('http://localhost:8080/merchant/admin/superadmin/superadmin').then((response) => {
                this.userlist =response.data
            }).catch(err=>{
                console.log("获取数据失败" + err);
            }),
            this.axios.get(`http://localhost:8080/merchant/admin/superadmin/select`).then((response)=>{
                console.log(response.data);
                for(let i=0;i<response.data.length;i++){
                    this.options.push({
                    value:response.data[i].category_id,
                    label:response.data[i].category_name
                    })
                }
            },(error)=>{
                console.log(error);
            })
        }
    }
</script>

<style scoped>

</style>