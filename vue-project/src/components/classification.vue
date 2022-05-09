<template>
    <div id="Classification">
        <!-- 头部 -->
        <Header></Header>
        <Search @abc='abc' @getdetails='getdetails' @sear='sear' @sear2='sear2'></Search>
        <!-- 筛选 -->
        <Screen :goodslength='this.goodslength' @competition='competition'></Screen>
        <!-- 在父组件中使用子组件 -->
        <div class="c-goods-list">
            <div class="c-goods-list-inner c-goods-list--normal">
                <div class="c-goods-item  J-goods-item c-goods-item--auto-width" v-for="(item,index) in goods" :key='index'>
                    <router-link :to="{path:'/particulars',query:{id:item.goods_id}}">
                        <div class="c-goods-item-top  c-goods-item-top--square">
                            <div class="c-goods-item__img">
                                <img class="J-goods-item__img" :src='item.goods_img'>
                            </div>                           
                        </div>
                        <div class="c-goods-item-bottom">
                            <div class="c-goods-item__price  c-goods-item__price--one-line  ">
                                <div class="c-goods-item__main-price     J-goods-item__main-price">
                                    <div class="c-goods-item__sale-price J-goods-item__sale-price"><span>¥</span>{{item.goods_price}}</div>
                                </div>
                            </div>
                            <div class="c-goods-item__name  c-goods-item__name--two-line">{{item.goods_name}}</div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
        <!-- 底部 -->
        <Base></Base>
    </div>
</template>

<script>
import Header from './shared/header.vue'
import Screen from './shared/screen.vue'
import Base from './shared/base.vue'
import Search from './shared/search.vue'
export default {
    name: "Classification",
    data() {
        return {
            //商品的数据
            goods:[],
            goodslength:0
        }
    },
    components:{
        Header,Screen,Base,
        Search
    },
    mounted(){

    },  
    methods:{
        abc(name){
            console.log(name);
            // 小分类的商品信息
            this.axios
                    .get(`http://localhost:8080/merchant/classificationDetails?name=${name}`)
                    .then((response)=>{
                        this.goods='';
                        this.goods=response.data;
                        this.goodslength=response.data.length
                    //    console.log(this.goods);
                    },(error)=>{
                        console.log(error)
                    })
        },
        getdetails(name){
            this.axios
                .get(`http://localhost:8080/merchant/classificationDetails/bigger?name=${name}`)
                .then((response)=>{
                    this.goods='';
                    this.goods=response.data;
                    this.goodslength=response.data.length
                },(error)=>{
                    console.log(error)
                })
        },
        //搜索框搜索出来的内容
        sear(name){
            this.axios
                .get(`http://localhost:8080/merchant/classificationDetails/sears?name=${name}`)
                .then((response)=>{
                    this.goods='';
                    this.goods=response.data;
                    this.goodslength=response.data.length
                },(error)=>{
                    console.log(error)
                })
        },
        // 点击搜索框按钮搜索出来的商品
        sear2(name){
             this.axios
                .get(`http://localhost:8080/merchant/classificationDetails/sears2?name=${name}`)
                .then((response)=>{
                    this.goods='';
                    this.goods=response.data;
                    this.goodslength=response.data.length
                },(error)=>{
                    console.log(error);
                })
        },
        // 赛选价格的商品
        competition(minimum,maximum){
            let min=minimum*1;
            let max=maximum*1;
            let shop=[];
            console.log(this.goods);
            for (let i = 0; i < this.goods.length; i++) {
                let price=this.goods[i].goods_price;
                if(price>=min && price<=max){
                    // console.log(this.goods[i]);
                    shop.push(this.goods[i])
                }
            }
            this.goods=[];
            for (let j = 0; j < shop.length; j++) {
                // console.log(shop[j]);
                this.goods.push(shop[j]);
            }
            this.goodslength=this.goods.length
            // console.log(this.goods);
        }

    },
    computed:{
        
    }
}
</script>
<style scoped>
img {
    vertical-align: top;
}
.c-goods-item:hover::before {
    display: block;
}
.c-goods-item::before {
    content: '';
    border: solid 1px #ff4400;
    position: absolute;
    top: -10px;
    left: -10px;
    bottom: -10px;
    right: -10px;
    z-index: -1;
    display: none;
    z-index: -1;
}
.c-goods-list {
    margin: 0 auto;
    width: 1000px;
    margin-bottom: 30px;
    padding-bottom: 10px;
    background-color: #fff;
    background-color: rgba(255,255,255,.85);
    min-height: 300px;
    margin-top: 20px;
    position: relative;
    z-index: 4;
}
.c-goods-list-inner {
    width: 1020px;
}
.c-goods-item {
    width: 218px;
    border: solid 1px #e7e7e7;
    position: relative;
    overflow: visible;
    font-family: arial;
    cursor: pointer;
    margin-bottom: 20px;
    margin-right: 20px;
    display: inline-block;
    vertical-align: top;
    box-sizing: border-box;
}
.c-goods-item:hover {
    border-color: rgba(255,255,255,0);
}
.c-goods-item--auto-width {
    width: 233px;
}
.c-goods-item--auto-width .c-goods-item-top--square {
    height: 235px;
}
.c-goods-item-top {
    position: relative;
    width: 100%;
}
.c-goods-item__img {
    width: 100%;
    height: 100%;
}
.c-goods-item__img img {
    max-width: 100%;
    max-height: 100%;
    display: block;
    width: auto;
    height: 100%;
    margin: 0 auto;
}
.c-goods-item__brand-logo {
    position: absolute;
    top: 8px;
    left: 8px;
    width: 60px;
    height: 30px;
}
.c-goods-item-bottom {
    padding-left: 12px;
    padding-right: 12px;
    height: 120px;
    position: relative;
}
.c-goods-item__main-price {
    box-sizing: border-box;
    height: 30px;
    padding-top: 12px;
    font-size: 0;
    white-space: nowrap;
    overflow: hidden;
}
.c-goods-item__price {
    position: relative;
}
.c-goods-item__price--one-line {
    padding-bottom: 12px;
}
.c-goods-item--auto-width .c-goods-item__sale-price {
    max-width: 211px;
}
.c-goods-item__main-price>div {
    vertical-align: bottom;
    display: inline-block;
    overflow: hidden;
}
.c-goods-item__sale-price {
    color: #333;
    font-size: 23px;
    line-height: 18px;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 194px;
}
.c-goods-item__name--two-line {
    text-overflow: ellipsis;
    min-height: 36px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}
.c-goods-item__name {
    font-size: 12px;
    color: #666;
    line-height: 18px;
    margin-bottom: 8px;
}

</style>