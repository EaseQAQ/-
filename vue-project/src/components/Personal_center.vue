<template>
    <div>
        <Header></Header>
        <header class="mt-header">
            <article>
                <div class="mt-logo" style="margin-left: 0px;">
                    <a title="我的淘宝呗" href="" class="mt-tblogo">我的淘宝呗</a>
                </div>
                <nav class="mt-nav">
                    <el-autocomplete popper-class="my-autocomplete" :fetch-suggestions="querySearch" placeholder="请输入内容" @select="handleSelect">
                        <i class="el-icon-edit el-input__icon" slot="suffix" @click="handleIconClick"></i>
                        <template slot-scope="{ item }">
                            <div class="name">{{ item.value }}</div>
                            <span class="addr">{{ item.address }}</span>
                        </template>
                    </el-autocomplete>
                    <el-button type="primary">搜索</el-button>  
                </nav>
            </article>
        </header>
        <!-- 买家 -->
        <div class="stage">
            <div class="stage_center">
                <div class="stage_center_bot">
                    <el-row class="tac myapp" >
                        <el-col :span="3" style="height:500px;" class="myapp">
                            <el-menu :default-active="$route.path" class="el-menu-vertical-demo  myapp" @open="handleOpen" @close="handleClose"  style="height:500px;" >
                                <router-link to="Myorder">
                                    <el-menu-item index="/Personal_center/Myorder">
                                        <i class="el-icon-chat-line-square"></i>
                                        <span slot="title">我的订单</span>
                                    </el-menu-item>
                                </router-link>
                                <router-link to="Personal">
                                    <el-menu-item index="/Personal_center/Personal">
                                        <i class="el-icon-sell"></i>
                                        <span slot="title">个人信息</span>
                                    </el-menu-item>
                                </router-link>
                                <router-link to="ShippingAddress">
                                    <el-menu-item index="/Personal_center/ShippingAddress">
                                        <i class="el-icon-shopping-bag-1"></i>
                                        <span slot="title">收货地址</span>
                                    </el-menu-item>
                                </router-link>
                                <router-link to="Property">
                                    <el-menu-item index="/Personal_center/Property">
                                        <i class="el-icon-chat-line-square"></i>
                                        <span slot="title">我的资产</span>
                                    </el-menu-item>
                                </router-link>
                            </el-menu>
                        </el-col>
                        <keep-alive>
                            <router-view></router-view>
                        </keep-alive>
                    </el-row>
                </div>
            </div>
        </div>
        <Base></Base>
    </div>
</template>

<script>
import Header from './shared/header.vue';
import Base from './shared/base.vue';
    export default {
        name: "CarBack_Stage",
        data() {
            return {
                circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
            };
        },
        // import引入的组件需要注入到对象中才能使用
        components: {
            Header,Base
        },
        // 方法集合
        methods: {
            /*根据浏览器改高度*/
            getHeight () {
                // 获取浏览器高度，减去顶部导航栏的值70（可动态获取）,再减去head-DIV高度值80
                this.GetWindowHeight.height = window.innerHeight+ 'px'
            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
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
            },
            handleIconClick(ev) {
                console.log(ev);
            }
        },
        mounted() {
            this.restaurants = this.loadAll();
        }
    }
</script>

<style scoped>
    .stage{
        padding-top: 30px;
    }
    .mt-header {
        height: 36px;
        background: #ff4401;
        padding: 12px 0;
        position: relative;
        z-index: 5;
        border-bottom: 1px #e7e7e7 solid;
    }
    .mt-header article {
        width: 1190px;
    }
    .mt-header article {
        margin: 0 auto;
        min-width: 860px;
    }
    .mt-header article{
        max-width: 1190px;
    }
    .mt-logo {
        float: left;
        position: relative;
        overflow: hidden;
        width: 16%;
        height: 35px;
    }
    .mt-tblogo {
        color: white;
        margin-left: 10px;
        width: 180px;
        height: 36px;
        font-size: 36px;
        line-height: 37px;
        display: inline-block;
        vertical-align: middle;
        font-family: STXinwei;
    }
    .mt-nav {
        float: right;
        width: 370px;
    }
    .my-autocomplete li {
            line-height: normal;
            padding: 7px;
    }
    .my-autocomplete .name {
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .my-autocomplete .addr {
        font-size: 12px;
        color: #b4b4b4;
    }

    .my-autocomplete .highlighted .addr {
        color: #ddd;
    }
    .mt-nav>>>.el-input{
        width: 300px;
    }
    .mt-nav .el-button--primary{
        background: #f5f5f5;
        color: black;
    }
</style>