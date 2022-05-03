<template>
    <div>
        <!-- logo、搜索 -->
        <div class="head-logo">
            <div class="head-inner">
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
                    <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
                        <el-button type="primary" icon="el-icon-search">搜索</el-button>
                    </div>
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
                            <li class="cate-menu-item"><span class="menu-item-tit">女装/男装/内衣</span></li>
                            <li class="cate-menu-item"><span class="menu-item-tit">女鞋/男鞋/箱包</span></li>
                            <li class="cate-menu-item"><span class="menu-item-tit">护肤彩妆/个护</span></li>
                            <li class="cate-menu-item"><span class="menu-item-tit">运动户外</span></li>
                            <li class="cate-menu-item"><span class="menu-item-tit">家电数码</span></li>
                            <li class="cate-menu-item"><span class="menu-item-tit">母婴童装</span></li>
                            <li class="cate-menu-item"><span class="menu-item-tit">手表配饰</span></li>
                            <li class="cate-menu-item"><span class="menu-item-tit">居家用品</span></li>
                            <li class="cate-menu-item"><span class="menu-item-tit">唯品生活</span></li>
                            <li class="cate-menu-item"><span class="menu-item-tit">医药健康</span></li>
                        </ul>
                    </div>
                    <!-- 分类 end -->
                    </li>
                    <li><a href="" class="main-nav-atag">美妆</a></li>
                    <li><a href="" class="main-nav-atag">女装</a></li>
                    <li><a href="" class="main-nav-atag">运动</a></li>
                    <li><a href="" class="main-nav-atag">鞋包</a></li>
                    <li><a href="" class="main-nav-atag">母婴</a></li>
                    <li><a href="" class="main-nav-atag">男装</a></li>
                    <li><a href="" class="main-nav-atag">电器</a></li>
                    <li><a href="" class="main-nav-atag">食品</a></li>
                    <li><a href="" class="main-nav-atag">首饰</a></li>
                    <li><a href="" class="main-nav-atag">数码</a></li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<script>
export default {
    name:'search'
}
</script>
<style>
.head-logo{
    height: 100px;
}
.head-inner{
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
    z-index: 8;
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
    background-color: #ff4400
    
    ;
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
    padding-left: 35px;
    overflow: hidden;
    height: 45px;
    line-height: 45px;
    float: none;
}
.nav-category-data .cate-menu .cate-menu-item:hover{
    background-color: white;
    color: #ff4400;
    cursor: pointer;
}
.nav-category-data .cate-menu .cate-menu-item .menu-item-tit {
    font-size: 12px;
}
.after-color a{
    color:#606266
}
.after-color a:hover{
    color:#000
}
</style>