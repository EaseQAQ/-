<template>
    <div id="header">
        <!-- 导航条 -->
        <div class="top-nav">
            <div class="content">
                <el-breadcrumb separator="" style="margin-top:10px;">
                    <!-- 左导航 -->
                    <div class="ln">
                        <el-breadcrumb-item>
                            <el-dropdown>
                                <a href="#">
                                    <span class="el-dropdown-link transform">
                                        用户名<i class="el-icon-arrow-down el-icon--right"></i>
                                    </span>
                                </a>
                                <el-dropdown-menu slot="dropdown" class="header-new-drop">
                                    <span></span>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </el-breadcrumb-item>
                        <!-- <el-breadcrumb-item>
                            <el-dropdown>
                                亲！请登录
                            </el-dropdown>
                            <el-dropdown>
                                立即注册
                            </el-dropdown>
                        </el-breadcrumb-item> -->
                    </div>
                    <!-- 右导航 -->
                    <div class="rn">
                        <el-breadcrumb-item>
                            <el-dropdown>
                                <a href="#" class="transform">
                                    <span class="el-dropdown-link">
                                        我的淘宝呗<i class="el-icon-arrow-down el-icon--right"></i>
                                    </span>
                                </a>
                                <el-dropdown-menu slot="dropdown" class="header-new-drop">
                                    <el-dropdown-item><span class="after-color">已买到的宝贝</span></el-dropdown-item>
                                    <el-dropdown-item><span class="after-color">我的足迹</span></el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </el-breadcrumb-item>
                        <el-breadcrumb-item>
                            <el-dropdown>
                                <a href="#" class="transform">
                                    <svg t="1650887898084" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3810" width="12" height="12"><path d="M919.84384 210.41664H241.17248L229.40672 113.3568c-1.92-15.83616-16.5376-28.79488-32.49664-28.79488H190.464c-2.72384 0-5.30944 0.384-7.7312 1.09056H99.77344c-19.14368 0-34.81088 14.3616-34.81088 31.90784s15.6672 31.90784 34.816 31.90784H169.3184L235.7248 697.344c1.92 15.84128 16.54272 28.8 32.49664 28.8h6.4512c2.69312 0 5.25824-0.37888 7.6544-1.07008h548.82304c19.14368 0 34.80576-14.35648 34.80576-31.90784 0-17.55136-15.66208-31.90784-34.80576-31.90784H295.81824l-8.13056-67.11296h545.1776c15.95392 0 31.89248-12.72832 35.42016-28.288l74.15296-327.14752c3.52768-15.55456-6.64064-28.288-22.59456-28.288zM294.58944 865.72032c0 42.8032 34.70336 77.51168 77.51168 77.51168s77.50656-34.70336 77.50656-77.5168c0-42.8032-34.69824-77.50656-77.50656-77.50656s-77.5168 34.70336-77.5168 77.51168z m384.23552 0c0 42.8032 34.70336 77.51168 77.5168 77.51168s77.50656-34.70336 77.50656-77.5168c0-42.8032-34.70336-77.50656-77.51168-77.50656-42.8032 0-77.51168 34.70336-77.51168 77.51168z" p-id="3811" fill="#ff4400"></path></svg>
                                    购物车
                                </a>
                            </el-dropdown>
                        </el-breadcrumb-item>
                        <el-breadcrumb-item>
                            <el-dropdown>
                                <a href="#" class="transform">
                                    免费开店
                                </a>
                            </el-dropdown>
                        </el-breadcrumb-item>
                        <el-breadcrumb-item >|</el-breadcrumb-item>
                        <el-breadcrumb-item>
                            <el-dropdown>
                                <a href="/cai" class="transform">
                                    <span class="el-dropdown-link">
                                        淘宝呗卖家中心<i class="el-icon-arrow-down el-icon--right"></i>
                                    </span>
                                </a>
                                <el-dropdown-menu slot="dropdown" class="header-new-drop">
                                    <el-dropdown-item><span class="after-color">开店入驻</span></el-dropdown-item>
                                    <el-dropdown-item><span class="after-color">出售中的宝贝</span></el-dropdown-item>
                                    <el-dropdown-item><span class="after-color">卖家服务市场</span></el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </el-breadcrumb-item>
                        <el-breadcrumb-item>
                            <el-dropdown>
                                <a href="#">
                                    <span class="el-dropdown-link transform">
                                        联系客服<i class="el-icon-arrow-down el-icon--right"></i>
                                    </span> 
                                </a>
                                <el-dropdown-menu slot="dropdown" class="header-new-drop">
                                    <el-dropdown-item><span class="after-color">消费者客服</span></el-dropdown-item>
                                    <el-dropdown-item><span class="after-color">卖家客服</span></el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </el-breadcrumb-item>
                    </div>
                </el-breadcrumb>
            </div>
        </div>
        <!-- logo、查询 -->
        <div class="head-logo">
            <div class="head-inner">
                <div class="c-logo">
                    <div class="header-logo-dop">
                        <a href="">
                            <img src="https://s2.loli.net/2022/04/26/fatzBqwgdC1y68K.png" alt height="100">
                        </a>
                    </div>
                </div>
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
                <ul class="main-nav-link">
                    <li id="J_main_nav_category" class="nav-category">
                    <a href="" class="main-nav-atag" style="color:white">商品分类</a>
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
        name: "navigation",
        data() {
            return {
                input:''
            }
        }
    }
</script>

<style scoped>
#header{
    height: 163px;
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 10%);
}
.top-nav{
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
    background-color: #f5f5f5;
    position: absolute;
    top: -1px;
    left: 0px;
}
.content{
    width: 1000px;
    margin: auto;
    line-height: 34px;
}
.rn{
    float:right;
}
.transform{
    font-size: 12px;
    font-weight: 400;
}
.transform:hover{
    color: #ff4400;
    cursor:pointer;
}
.header-new-drop li:hover{
    color: #000;
}
.head-logo{
    height: 100px;
    margin-top: 35px;   
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
    background-color: #f10180;
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
</style>
