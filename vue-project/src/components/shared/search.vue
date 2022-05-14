<template>
    <div>
        <!-- logo、搜索 -->
        <div class="head-logo">

                <!-- logo -->
                <div class="c-logo">
                    <div class="header-logo-dop">
                        <a href="/">
                            <img src="https://s2.loli.net/2022/04/26/fatzBqwgdC1y68K.png" alt height="100">
                        </a>
                    </div>
                </div>
                <!-- 搜索 -->
                <div class="c-search">
                    <div class="c-search-form">
                        <el-input placeholder="请输入内容" clearable v-model="input" @input="sear"></el-input>
                        <el-button type="primary" icon="el-icon-search" @click="sear2">搜索</el-button>
                    </div>
                    <div class="c-search_below">
                        <ul class="list-group">
                            <li class="list-group-item" v-for="(item,index) in this.inputdata" :key="index" @click="sears(item.goods_name)">
                                <router-link to="/classification">{{item.goods_name}}</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
                

        </div>
        <!-- 商品导航 -->
        <nav class="main-nav">
            <div class="head-inner">
                <!-- 导航 -->
                <ul class="main-nav-link">
                    <li id="J_main_nav_category" class="nav-category">
                    <a href="" class="main-nav-atag" style="color:white">商品分类</a>
                    <!-- 分类 -->
                    <div class="nav-category-data">
                        <ul class="cate-menu">
                            <li class="cate-menu-item" @mouseenter="getclassification(item.NAME)" v-for="(item,index) in this.leftmac" :key='index'>
                            <span class="menu-item-tit">{{item.NAME}}</span>
                            </li>
                        </ul>
                        <div class="cate-pop" @mouseleave='leavebox'>
                            <div class="cate-part">
                                <div class="cate-part-col1">
                                    <div class="cate-detail">
                                        <dl class="cate-detail-item">
                                            <!-- 热销分类 -->
                                            <dt class="cate-detail-tit">
                                                <i class="vipFont">></i>
                                                <span>热销分类</span>
                                            </dt>
                                            <!-- 小分类 -->
                                            <dd class="cate-detail-con" v-for="(item,index) in this.smalldetails" :key="index" @click="getgoods(item.cateDetail_name)">
                                                <router-link to="/classification" class="J_category3" href=" ">{{item.cateDetail_name}}</router-link>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 分类 end -->
                    </li>
                    <li v-for="(item,index) in this.rightmac" :key="index" @click="getDetailsgoods(item.category_name)">
                        <router-link to="/classification" class="main-nav-atag">{{item.category_name}}</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    
</template>
<script>
export default {
    name:'search',
    data(){
        return {
            leftmac:'',
            rightmac:'',
            detailgoods:'',
            // 左侧小分类
            smalldetails:'',
            // 搜索框输入的内容
            input:'',
            //搜索框搜索出来的内容
            inputdata:''
        }
    },
    mounted(){
        //左侧分类栏
        this.axios
                .get('http://localhost:8080/merchant/classificationDetails/leftmac')
                .then((response)=>{
                    this.leftmac=response.data;
                //    console.log(this.leftmac);
                },(error)=>{
                    console.log(error)
                })
        //分类栏左边的数据
        this.axios
                .get('http://localhost:8080/merchant/classificationDetails/rightmac')
                .then((response)=>{
                    this.rightmac=response.data;
                //    console.log(this.rightmac);
                },(error)=>{
                    console.log(error)
                })

    },
    methods:{
        //获取数据传回分类页面
        getDetailsgoods(name){
            this.$emit('getdetails',name);
        },
        //点击大分类显示小分类
        getclassification(name){
            document.querySelector('.cate-pop').style.display='block'
            // console.log(name);
            this.axios
                .get(`http://localhost:8080/merchant/classificationDetails/smallmac?name=${name}`)
                .then((response)=>{
                    this.smalldetails=response.data;
                    // console.log(this.smalldetails);
                },(error)=>{
                    console.log(error)
                })
        },
        //鼠标移开盒子隐藏
        leavebox(){
            document.querySelector('.cate-pop').style.display='none'
        },
        // 上面分类
        getgoods(name){
            // console.log(name);
            this.$emit('abc',name);
        },
        // 搜索框
        sear(){
            console.log(this.input);
            if(!this.input==''){
                document.querySelector('.c-search_below').style.display='block';
                this.axios
                .get(`http://localhost:8080/merchant/classificationDetails/search?name=${this.input}`)
                .then((response)=>{
                    this.inputdata='';
                    this.inputdata=response.data;
                    // console.log(this.inputdata);
                },(error)=>{
                    console.log(error)
                })
            }else{
                document.querySelector('.c-search_below').style.display='none';
            }
        },
        // 点击搜索出来的内容跳转进分类页
        sears(name){
            this.$emit('sear',name)
            this.input='';
            document.querySelector('.c-search_below').style.display='none';
        },
        // 点击后面的搜索按钮搜索
        sear2(){
            this.$emit('sear2',this.input);
            this.input='';
            document.querySelector('.c-search_below').style.display='none';
        }
        
    }
}
</script>
<style>
.head-logo{
    height: 100px;
        width: 1000px;
    margin: 0 auto;
}
.c-logo{
    display: inline;
    position: relative;
    float: left;
    z-index: 1;
    margin-right: 1px;
    min-width: 140px;
    height: 100px;
}
.header-logo-dop{
    margin-left: -10px;
    margin-top: 10px;
    min-width: 160px;
    overflow: hidden;
}
.c-search{
    display: inline;
    float: right;
    margin-top: 33px;
    margin-right: 200px;
    width: 550px;
}
.c-search_below{
    display: none;
    width: 538px;
    background-color: white;
    border: 1px solid #ff4400;
    position: absolute;
    z-index: 10;
    border-radius: 7px;
}
.list-group{
    margin-bottom: 0px;
}
.list-group-item{
    white-space:nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.list-group-item a{
    color: #666;
}
#header img{
    text-decoration: none;
    vertical-align: top;
}
#header img{
    border: 0 none;
    vertical-align: top;
}
.el-button--primary{
    background-color: #ff4400;
    border-color:#ff4400;
}
.el-input{
    width: 450px;
}
.main-nav{
    margin-top: 20px;
    height: 43px;
    line-height: 43px;
    font-size: 14px;
}
.head-inner{
    width: 1000px;
    margin: 0 auto;
    position: relative;
    clear: both;
    z-index: 5;
}
#J_main_nav_category{
    background-color: #ff4400;
    width: 156px;
    height: auto;
    margin-right: 20px;
}
.main-nav-link li {
    float: left;
    position: relative;
    z-index: 1;
    height: 43px;
}
.main-nav-link li .main-nav-atag:hover{
    color: #ff4400;
}
.main-nav-link li .main-nav-atag {
    display: block;
    padding: 0 20px;
    text-align: center;
    color: #333;
    font-size: 16px;
    white-space: nowrap;
}
.nav-category-data {
    position: absolute;
    z-index: 2;
    color: #fff;
}
.cate-menu{
    display: none;
    width: 156px;
    background-color: #ff4400;
    -webkit-transition: .2s linear;
    transition: .2s linear;
    padding: 0 0 1px;
    box-shadow: -2px 2px 3px rgb(0 0 0 / 10%);
}
.nav-category:hover .cate-menu{
    display: block;
}
.nav-category-data .cate-menu .cate-menu-item {
    display: block;
    text-align: left;
    overflow: hidden;
    height: 45px;
    line-height: 45px;
    float: none;
    text-align: center;
}
.nav-category-data .cate-menu .cate-menu-item:hover{
    background-color: white;
    color: #ff4400;
    cursor: pointer;
}
.nav-category-data .cate-menu .cate-menu-item .menu-item-tit {
    font-size: 13px;
}
.after-color a{
    color:#606266
}
.after-color a:hover{
    color:#000
}
/*具体分类*/
.nav-category-data .cate-pop {
  display: none; 
  background-color: #fff;
  position:absolute;
  left:156px;
  top:0;
  width:844px;
  height: 270px;
  box-shadow: 2px 2px 3px 0 rgb(0 0 0 / 10%);
}
.cate-part {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.cate-part-col1 {
  float: left;
  width: 600px;
  padding: 16px 40px 16px 40px;
  max-height: 462px;
 border-top: 1px solid #eee;
}
.cate-detail-item {
     margin-bottom: 24px;
 position: relative;
 font-size: 12px;
}
.cate-detail-tit {
line-height: 22px;
 position: absolute;
 left: 0;
 width: 83px;
 color: #222;
 overflow: hidden;
 margin-top: 10px;
}
.vipFont{
 width: 10px;
 vertical-align: middle;
 float: right;
}
.cate-detail-tit span {
 overflow: hidden;
 text-overflow: ellipsis;
 white-space: nowrap;
 display: inline-block;
 width: 62px;
 font-weight: 700;
}
.cate-detail .cate-detail-con:nth-of-type(1) {
     margin-left: 100px;
}
.cate-detail .cate-detail-con {
 line-height: 22px;
 margin-left: 20px;
 overflow: hidden;
 word-break: keep-all;
float: left;
margin-top: 10px;
}
.cate-detail-con a {
 color: #666;
 margin-right: 3px;
}
.cate-detail-con a:hover {
 color: #ff4400;
}
</style>