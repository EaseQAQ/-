<template>
    <!-- 商品详情 -->
    <div id="particulars">
        <Header></Header>
        <Search></Search>
        <!-- 主体 -->
        <div class="FW-product clearfix">
            <div class="M-class"></div>
            <!-- 商品图片 -->
            <div class="M-pic">
                <div class="J-mer-ImgReview">
                    <div class="pic-sliderwrap">
                        <div class="show- midpic">
                                <a href="" class="J-mer-bigImgZoom" rel="undefined" title="undefined" style="outline-style: none; text-decoration: none;">
                                <div class="zoomPad">
                                    <img class="slide-mid-pic" :src="this.goodsimg" width="420" height="420" data-original="//h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/106756/2021/0108/150/4e776d25-1079-4457-b76e-9828fc5907aa_840x840_90.jpg" alt="">
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 商品信息 -->
            <div class="M-productInfo">
                <div class="pib-title">
                    <p class="pib-title-class J_brandName" mars_sead="hair_brand_click">{{this.sellname}}</p>
                    <p class="pib-title-detail" title="秋季男士时尚大衣简约百搭条纹设计休闲外套男">{{this.goodsname}}</p>
                </div>
                <div>
                    <img src="//b.appsimg.com/upload/momin/2020/08/19/22/1597801542667.png" class="price_bgimg">
                    <!-- 商品价格 -->
                    <div class="spcecialPrice-box">
                        <div class="sp-info">
                            <div class="price-v6-line-one">
                                <i class="pbox-yen">¥</i>
                                <span title="413" class="sp-price">{{this.goodsprice}}</span>
                                <span class="sp-postfix">
                                    <span class="priceV6-content">
                                        <span class="fullReductionV6">
                                            <span class="lable_img">
                                                <img src="//shop.vipstatic.com/img/detail/price/pc_pricelabel_left-hash-b2b6492f.png">
                                            </span>
                                            <span class="price-v6-special">
                                            
                                                <span class="special-title">会员价</span>
                                                <span class="special-price"><span class="sub-yen">¥</span>{{parseFloat(this.goodsprice*0.8).toFixed(2)}}<span class="priceSuff"></span></span>                            
                                            </span>
                                        </span>
                                    </span>
                                </span>                                
                            </div>
                        </div>
                    </div>
                    <div class="pi-attr-box">
                        <!-- 尺码 -->
                        <div id="J_detail_size">
                            <dl class="i-size">
                                <dt class="size-name">尺码</dt>
                                <dd class="size-list">
                                    <el-radio-group v-model="radio" size="mini">
                                        <el-radio border v-for="(item,index) in this.goodssize" :key="index" label="index">{{item.goods_size}}</el-radio>
                                    </el-radio-group>
                                </dd>
                            </dl>
                        </div>
                        <!-- 购买数量 -->
                        <dl class="i-num clearfix">
                            <dt class="num-name">数量</dt>
                            <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                        </dl>
                        <div class="tb-action">
                            <div class="tb-btn-buy">
                                <button title="点击此按钮，到下一步确认购买信息" class="J_LinkBuy" @click="buynow">立即购买</button>
                            </div>
                            <div class="tb-btn-add">
                                <button title="加入购物车" class="J_LinkAdd" @click="addTrolley">加入购物车</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Base></Base>
    </div>
</template>
<script>
import Header from './shared/header.vue'
import Base from './shared/base.vue'
import Search from './shared/search.vue'
export default {
    name: "particulars",
    data() {
        return {
            radio: 0,
            num:1,
            // 商品名字
            goodsname:'',
            // 商品价格
            goodsprice:0,
            // 商品图片
            goodsimg:'',
            // 商品尺码
            goodssize:'',
            // 商品的店铺名
            sellname:''
        }
    },
    props:['id'],
    components:{
        Header,Base,Search
    },
    mounted(){
        // 商品的详情
        this.axios
            .get(`http://localhost:8080/merchant/partic?id=${this.id}`)
            .then((response)=>{
                this.goodsname=response.data[0].goods_name;
                this.goodsprice=response.data[0].goods_price;
                this.goodsimg=response.data[0].goods_img;
                this.sellname=response.data[0].sel_store
                // console.log(this.goodsname,this.goodsprice,this.goodsimg);
            },(error)=>{
                console.log(error)
            })
        // 商品的尺寸
        this.axios
            .get(`http://localhost:8080/merchant/partic/goodssize?id=${this.id}`)
            .then((response)=>{
                this.goodssize=response.data;
                console.log(this.goodssize);
            },(error)=>{
                // console.log(456);
                console.log(error)
            })
    },
    methods:{
        buynow(){
            console.log('正在前往结算');
        },
        addTrolley(){
            console.log('添加购物车成功');
        },
        addnum(){
            console.log('数量加1');
        },
        handleChange(value) { 
            console.log(value); 
        }
    }
}
</script>

<style scoped>
.FW-product {
    width: 1000px;
    margin: 0 auto;
    position: relative;
    margin-bottom: 40px;
    padding-top: 22px;
    z-index: 1;
}
.M-class {
    width: 1000px;
    padding: 11px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: -22px;
}
.M-pic {
    float: left;
    position: relative;
}
.pic-sliderwrap {
    width: 420px;
    height: 420px;
    position: relative;
    z-index: 99;
    margin-bottom: 7px;
    background-color: #f7f7f7;
}
.show-midpic {
    width: 420px;
    height: 420px;
    position: relative;
    text-align: center;
}
.zoomPad {
    float: left;
    position: relative;
    z-index: 99;
    cursor: crosshair;
    text-align: center;
    width: 420px;
    height: 420px;
    overflow: hidden;
}
.pic-slider {
    position: relative;
    height: 64px;
    text-align: center;
}
.M-productInfo {
    float: right;
    width: 550px;
    position: relative;
    z-index: 100;
    min-height: 634px;
}
.pib-title {
    color: #4d4d4d;
    margin-bottom: 10px;
    clear: both;
}
.pib-title-class {
    display: block;
    color: #007cff;
    width: 340px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 16px;
    cursor: pointer;
    line-height: 22px;
    min-height: 22px;
}
.pib-title-detail {
    font-size: 16px;
    color: #333;
    max-height: 40px;
    overflow: hidden;
    line-height: 20px;
    margin-top: 8px;
    margin-bottom: 8px;
    font-weight: 700;
}
.price_bgimg {
    width: 550px;
    height: 94px;
    position: absolute;
}

.spcecialPrice-box {
    overflow: visible;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 0 5px;
    color: #fff;
    height: 94px;
}
.sp-info {
    float: left;
    height: 94px;
    position: relative;
    max-width: 330px;
    min-width: 200px;
    color: #fff;
    margin-left: 15px;  
}
.price-v6-line-one {
    position: relative;
    height: 50px;
    padding-top: 20px;
    width: 333px;
}
.pbox-yen {
    font-size: 24px;
    font-family: arial;
}
.sp-price {
    font-size: 38px;
    font-family: arial;
    max-width: 200px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    -webkit-box-align: baseline;
    align-items: baseline;
    font-weight: 700;
    line-height: 55px;
}
.sp-postfix {
    font-size: 20px;
    margin-left: 3px;
    margin-right: 3px;
}
.priceV6-content {
    position: absolute;
    display: inline-block;
    height: 50px;
    top: 44%;
}
.fullReductionV6 {
    position: relative;
    padding-right: 0;
}

.fullReductionV6 img {
    padding-right: 0;
    padding-top: 0px;
    vertical-align: top;
}
.price-v6-special {
    position: relative;
    display: inline-block;
    height: 30px;
    background: #fff;
    padding-right: 5px;
    background-image: url(//shop.vipstatic.com/img/detail/price/pc_pricelabel_middle-hash-122d2d65.png);
    background-position: left top;
    background-repeat: repeat-x;
}
.priceV6-content .fullReductionV6 .special-title {
    font-family: MicrosoftYaHei-Bold;
    font-size: 16px;
    color: #f03867;
    letter-spacing: 0;
    text-align: left;
    font-weight: 700;
    line-height: 30px;
    vertical-align: bottom;
}
.special-price {
    font-family: MicrosoftYaHei-Bold;
    font-size: 26px;
    color: #f03867;
    line-height: 30px;
    font-weight: 700;
    vertical-align: bottom;
}
.pi-attr-box {
    position: relative;
    z-index: 10;
}
.pi-attr-box dt {
    float: left;
    font-size: 12px;
    width: 40px;
    text-align: left;
    color: #999;
    line-height: 32px;
    overflow: hidden;
}
.pi-attr-box dd {
    float: left;
}
/*尺码*/
.i-size {
    padding: 40px 10px 0;
    position: relative;
    z-index: 11;
    margin-left: -11px;
    zoom: 1;
    min-height: 40px;
    margin-bottom: 20px;
}
.size-list{
    position: relative;
    padding-right: 120px;
    zoom: 1;
    width: 375px;
}
.size-list>>>.el-radio{
    margin-right: 0;
}
.size-list>>>.el-radio.is-bordered.is-checked{
    border-color: #ff4400;
}
.size-list>>>.el-radio__input.is-checked .el-radio__inner{
    border-color: #ff4400;
    background: #ff4400;
}
.size-list>>>.el-radio__input.is-checked+.el-radio__label {
    color: #ff4400;
}
/*购买数量*/
.i-num {
    padding: 20px 10px;
    position: relative;
    height: 30px;
    margin: -1px 0 0 -10px;
    padding-bottom: 10px;
}
.i-num>>>.el-input__inner{
    width: 180px;
}
/*购买*/
.tb-action {
    margin-top: 50px;
}
.tb-action {
    z-index: 1;
    position: relative;
    overflow: hidden;
}
.tb-btn-buy {
    margin-right: 9px;
}
.tb-btn-buy,.tb-btn-add{
    float: left;
}
.tb-btn-buy button{
    color: #E5511D;
    border-color: #F0CAB6;
    background: #FFE4D0;
}
.tb-btn-add button {
    width: 180px;
    color: #FFF;
    border-color: #F40;
    background: #F40;
}
.tb-btn-buy button,.tb-btn-add button {

    display: block;
    cursor: pointer;
    width: 134px;
    height: 38px;
    text-align: center;
    font-family: "Hiragino Sans GB","microsoft yahei",sans-serif;
    font-size: 16px;
    line-height: 38px;
    border-width: 1px;
    border-style: solid;
    border-radius: 2px;
}

</style>
