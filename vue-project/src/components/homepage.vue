<template>
    <div id="homepage">
        <!-- 导航条组件 -->
        <Header></Header>
        <Search></Search>
        <!-- 首页主体 -->
        <div class="index-content s_bg_top" style="background-image: url(https://b.appsimg.com/upload/momin/2022/01/26/116/1643187256307.jpg)">
            <!-- 轮播图 -->
            <div class="focus-banner">
                <div class="focus-banner-con-wrq">
                    <el-carousel height="340px">
                        <el-carousel-item v-for="item in this.lunimg" :key="item">
                            <img :src='item'>
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>
            <!-- 商品 -->
            <div class="layer">
                <div class="layer-inner clearfix">
                    <div class="J_Module tbh-hotsale">
                        <h3 class="hotsale-hd mod-hd bar-hd">
                            <span class="total-title fl">猜你喜欢</span>
                        </h3>
                        <div class="list clearfix">
                            <div class="item " role="listitem" aria-posinset="0" aria-setsize="75" v-for="(item,index) in this.shopp" :key="index">
                                <router-link :to="{path:'/particulars',query:{id:item[0].goods_id}}" class="hotsale-item">
                                    <div class="img-wrapper">
                                        <img :src="item[0].goods_img">
                                    </div>
                                    <h4>{{item[0].goods_name}}</h4>
                                </router-link>
                                <p class="info">
                                    <span class="price"><em>¥</em>{{item[0].goods_price}}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 底部 -->
        <Base></Base>
    </div>
</template>
<script>
import Header from './shared/header.vue'
import Base from './shared/base.vue'
import Search from './shared/search.vue'
export default {
    name: "homepage",
    data() {
        return {
            //轮播图
            lunimg:[
                'https://s2.loli.net/2022/05/05/WNlhAcB39wUISQ1.jpg',
                'https://s2.loli.net/2022/05/05/IKgarb6T4znGq89.jpg',
                'https://s2.loli.net/2022/05/05/rc64XFAjQogE5PV.jpg'
                ],
            //首页循环的商品
            shopp:'',
        }
    },
    components:{
        Header,Base,Search
    },
    mounted() {
        this.axios
                .get('http://localhost:8080/merchant/page')
                .then((response)=>{ //response : 请求的数据
                    this.shopp=response.data;
                    console.log(this.shopp);
                },(error)=>{
                    console.log(error);
                })
    },
    methods: {
        
    },
}
</script>

<style scoped>
a:hover {
    color: #F40;
    text-decoration: none;
}
.s_bg_top {
    position: relative;
    background-repeat: no-repeat;
    background-position: center top;
}
.focus-banner {
    padding-top: 30px;
    padding-bottom: 20px;
    position: relative;
    _height: 392px;
    margin-bottom: 10px;
}
.focus-banner-con-wrq {
    padding: 12px;
    padding-bottom: 0;
    background: #fff;
    background: rgba(255,255,255,.86);
    width: 976px;
    position: relative;
    margin: 0 auto;
    box-shadow: 0 1px 3px rgb(167 167 167 / 40%);
}
.layer {
    width: 1000px;
    margin: 0 auto;
}
.layer-inner {
    background-color: #fff;
}
.tbh-hotsale {
    padding-top: 20px;
    position: relative;
    overflow: hidden;
}
.J_Module {
    min-height: 0;
}
.hotsale-hd {
    display: block;
    height: 24px;
    margin-bottom: 19px;
    margin-top: 19px;
}
.bar-hd:before {
    content: '';
    position: absolute;
    width: 4px;
    height: 16px;
    top: 16px;
    left: 20px;
}
.bar-hd {
    position: relative;
    padding-left: 20px;
    margin-top: 5px;
    line-height: 48px;
    font-size: 20px;
}
.mod-hd {
    position: relative;
}
.total-title {
    font-size: 24px;
    color: #111;
    font-weight: bold;
    line-height: 24px;
}
.fl {
    float: left;
    display: inline;
}
.tbh-hotsale .list {
    min-height: 652px;
}
.tbh-hotsale .list .item {
    border-radius: 12px;
    float: left;
    padding: 7px 7px 0 7px;
    margin: 0 0 2px 17px;
    color: #6c6c6c;
    width: 215px;
    height: 319px;
    position: relative;
}
.tbh-hotsale .list .item:hover {
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -o-transition: all 0.5s;
    transition: all 0.5s;
    box-shadow: 0 19px 39px 0 rgb(0 0 0 / 12%);
}
.tbh-hotsale .list .item .info {
    margin-top: 11px;
    height: 22px;
    line-height: 22px;
    vertical-align: bottom;
    border-radius: 0 0 12px 12px;
}
.tbh-hotsale .list .item .price {
    float: left;
    color: #F40;
    font-size: 20px;
    height: 22px;
    line-height: 22px;
}
.hotsale-item .img-wrapper {
    width: 215px;
    height: 215px;
    border-radius: 12px;
    background-color: rgba(0, 0, 0, 0.2);
    overflow: hidden;
}
.img-wrapper {
    background: #f4f4f4;
    overflow: hidden;
}
.hotsale-item .img-wrapper img {
    display: block;
    border-radius: 12px;
    width: 100%;
    height: 100%;
    -webkit-transition: opacity 0.2s;
    -moz-transition: opacity 0.2s;
    -o-transition: opacity 0.2s;
    transition: opacity 0.2s;
}
.img-wrapper img {
    background: #fff;
    opacity: .9;
    filter: alpha(opacity=90);
    -webkit-transition: all .2s;
    -moz-transition: all .2s;
    -o-transition: all .2s;
    transition: all .2s;
}
.hotsale-item h4 {
    margin-top: 9px;
    line-height: 22px;
    height: 44px;
    font-size: 16px;
    color: #111111;
    font-weight: normal;
    transition: color 0.3s;
    overflow: hidden;
    text-overflow: -o-ellipsis-lastline;
}
.tbh-hotsale .list .item:hover h4 {
    color: #FF5000;
}
</style>