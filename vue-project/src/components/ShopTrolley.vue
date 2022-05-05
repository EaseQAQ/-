<template>
    <div>
        <!--导航条-->
        <div id="shopphead">
            <!--外面的盒子-->
            <div id="shopphead_cener">
                <!--图片-->
                <div id="cener_img">
                    <img  src="https://s2.loli.net/2022/04/26/fatzBqwgdC1y68K.png"/>
                </div>
                <!--搜索-->
                <div id="cener_ss">
                    <div id="cener_ss_one">
                        <span class="el-icon-search"></span>
                        <span>宝贝</span>
                    </div>
                    <div id="cener_ss_two">
                        <input>
                        <button>搜索</button>
                    </div>
                </div>
            </div>
        </div>
        <!--中间的部分-->
        <div id="shoppbox">
            <div id="shoppbox_cener" ref="tablewrap">
                <!--上面的到导航条-->
                <div id="shoppbox_box1">
                    <!--左边的样式-->
                    <div id="box1_left">购物车 （全部1）</div>
                    <!--右边的样式-->
                    <div id="box1_rigth">
                        <span>已选商品（1件）</span>
                        <span>0.00</span>
                        <button class="but">结 &nbsp;算</button>
                    </div>
                </div>
                <!--中间的内容-->
                <!--没有东西时候的图片-->
                <div id="noneimg">
                    <img src="https://s2.loli.net/2022/05/03/C1xt9wQrFGpsWKj.png">
                    <h4>您的购物车还是空空的，赶紧行动吧</h4>
                </div>
                <!--有内容时的样式-->
                <div class="yestext">
                    <!--上面功能样式-->
                    <div class="yestext_box">
                        <div class="yestext_box1">
                            <input type="checkbox" name="quan">全选
                        </div>
                        <div class="yestext_box2">商品信息</div>
                        <div class="yestext_box3">单价</div>
                        <div  class="yestext_box4">数量</div>
                        <div  class="yestext_box5">金额</div>
                        <div class="yestext_box6">操作</div>
                    </div>
                    <!--店铺商品内容-->
                    <div>
                        <!--店铺导航-->
                        <div class="yestext_dianpu">
                            <input type="checkbox">
                            <span>店铺：</span>
                            <span>小丁的旗舰店</span>
                        </div>
                        <!--商品购物车详情-->
                        <div class="shoppdetailbox">
                            <div class="shoppdetail">
                                <div class="detail_box1">
                                    <input  type="checkbox" name="shan">
                                </div>
                                <div class="detail_box2">
                                    <img src="../assets/吉他.png">
                                    <a>【55价】RENE CAOVILLA FROZEN白色水钻女士尖头露跟高跟鞋RC</a>
                                </div>
                                <div class="detail_box3">
                                    尺码:xxx
                                </div>
                                <div class="detail_box4">￥9000</div>
                                <div class="detail_box5">
                                    <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                                </div>
                                <div class="detail_box6">￥9000</div>
                                <div class="detail_box7">
                                    删除
                                </div>
                            </div>

                            <div class="shoppdetail">
                                <div class="detail_box1">
                                    <input  type="checkbox" name="shan">
                                </div>
                                <div class="detail_box2">
                                    <img src="../assets/吉他.png">
                                    <a>【55价】RENE CAOVILLA FROZEN白色水钻女士尖头露跟高跟鞋RC</a>
                                </div>
                                <div class="detail_box3">
                                    尺码:xxx
                                </div>
                                <div class="detail_box4">￥9000</div>
                                <div class="detail_box5">
                                    <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                                </div>
                                <div class="detail_box6">￥9000</div>
                                <div class="detail_box7">
                                    删除
                                </div>
                            </div>


                            <div class="shoppdetail">
                                <div class="detail_box1">
                                    <input  type="checkbox" name="shan">
                                </div>
                                <div class="detail_box2">
                                    <img src="../assets/吉他.png">
                                    <a>【55价】RENE CAOVILLA FROZEN白色水钻女士尖头露跟高跟鞋RC</a>
                                </div>
                                <div class="detail_box3">
                                    尺码:xxx
                                </div>
                                <div class="detail_box4">￥9000</div>
                                <div class="detail_box5">
                                    <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                                </div>
                                <div class="detail_box6">￥9000</div>
                                <div class="detail_box7">
                                    删除
                                </div>
                            </div>

                            <div class="shoppdetail">
                                <div class="detail_box1">
                                    <input  type="checkbox" name="shan">
                                </div>
                                <div class="detail_box2">
                                    <img src="../assets/吉他.png">
                                    <a>【55价】RENE CAOVILLA FROZEN白色水钻女士尖头露跟高跟鞋RC</a>
                                </div>
                                <div class="detail_box3">
                                    尺码:xxx
                                </div>
                                <div class="detail_box4">￥9000</div>
                                <div class="detail_box5">
                                    <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                                </div>
                                <div class="detail_box6">￥9000</div>
                                <div class="detail_box7">
                                    删除
                                </div>
                            </div>


                            <div class="shoppdetail">
                                <div class="detail_box1">
                                    <input  type="checkbox" name="shan">
                                </div>
                                <div class="detail_box2">
                                    <img src="../assets/吉他.png">
                                    <a>【55价】RENE CAOVILLA FROZEN白色水钻女士尖头露跟高跟鞋RC</a>
                                </div>
                                <div class="detail_box3">
                                    尺码:xxx
                                </div>
                                <div class="detail_box4">￥9000</div>
                                <div class="detail_box5">
                                    <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                                </div>
                                <div class="detail_box6">￥9000</div>
                                <div class="detail_box7">
                                    删除
                                </div>
                            </div>


                            <div class="shoppdetail">
                                <div class="detail_box1">
                                    <input  type="checkbox" name="shan">
                                </div>
                                <div class="detail_box2">
                                    <img src="../assets/吉他.png">
                                    <a>【55价】RENE CAOVILLA FROZEN白色水钻女士尖头露跟高跟鞋RC</a>
                                </div>
                                <div class="detail_box3">
                                    尺码:xxx
                                </div>
                                <div class="detail_box4">￥9000</div>
                                <div class="detail_box5">
                                    <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
                                </div>
                                <div class="detail_box6">￥9000</div>
                                <div class="detail_box7">
                                    删除
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--店铺商品结尾-->
                    </div>
                <!--下面的功能-->
                <div class="belfun"   :class="fixed == true ? 'fixed' : ''">
                    <!--左边的功能-->
                    <div class="belfun_left">
                        <div class="belfun_left1">
                            <input type="checkbox">全选
                        </div>
                        <div class="belfun_left2">删除</div>
                    </div>
                    <!--右边的功能-->
                    <div class="belfun_right">
                        <div class="belfun_right1">
                            <span>已选商品</span>
                            <span>0</span>
                            <span>件</span>
                        </div>
                        <div class="belfun_right2">合计：</div>
                        <div class="belfun_right3">0.00</div>
                        <button class="but">结 &nbsp;算</button>
                    </div>
                </div>
            </div>
        </div>
        <!--下面的导航条-->
        <div></div>
    </div>
</template>

<script>
    export default {
        name: "ShopTrolley",
        data() {
            return {
                num: 1,
                /*吸底效果*/
                fixed: false,
                height:''
            };
        },
        mounted () {
            // console.log(window.getComputedStyle(this.$refs.tablewrap).height)
            /*吸底效果*/
            window.addEventListener('scroll', this.fixedActiveBtn)
            this.height= window.getComputedStyle(this.$refs.tablewrap).height
        },
        methods: {
            /*加减数量*/
            handleChange(value) {
                console.log(value);
            },
            /*吸底效果*/
            fixedActiveBtn () {
                // console.log(window.getComputedStyle(this.$refs.tablewrap).height)
                // let height =window.getComputedStyle(this.$refs.tablewrap).height
                // console.log($(window).height())
                console.log(parseInt(this.height)-$(window).height())
                let scrollTop =
                    window.pageYOffset ||
                    document.documentElement.scrollTop ||
                    document.body.scrollTop
                    scrollTop <= parseInt(this.height)-$(window).height() ? (this.fixed = true) : (this.fixed = false)

            }
        }
    }
</script>

<style scoped>
    body{
        background-color: rgb(234,232,235);
    }
    /*导航条*/
    #shopphead{
        width: 100vm;
        height: 80px;
        box-sizing: content-box;
        background-color: white;
    }
    #shopphead_cener{
        width: 1000px;
        height: 80px;
        box-sizing: content-box;
        margin: auto;
        padding: 11px 0px;
        background-color: white;
    }
    /*导航条上的图片*/
    #cener_img{
        float: left;
    }
    #cener_img>img{
        height: 58px;
    }
    /*导航条搜索的样式*/
    #cener_ss{
        width: 424px;
        height: 42px;
        float: right;
        border-radius: 42px;
        background-color: #EBEBEB;
    }
    /*搜索图标+字体*/
    #cener_ss_one{
        float: left;
        width: 104px;
        height: 42px;
        text-align: center;
        line-height: 45px;
        background: #f5f5f5;
        border-radius: 45px 0px 0 45px;
        border: 0 none;
        color: #000;
        font-weight: 400;
        font-size: 12px;
        padding: 0;
        text-align: center;
        box-sizing: content-box;
    }
    #cener_ss_one>span:nth-of-type(2){
        color: #000!important;
        text-decoration: none;
        cursor: auto;
        font-size: 13px;
        margin-left: 4px;
    }
    /*搜索文本框*/
    #cener_ss_two>input{
        float: left;
        width: 236px;
        height: 42px;
        box-sizing: content-box;
        border: none;
        background: none;
        outline: none;
        font-size: 14px;
        line-height: 42px;
    }
    /*搜索框点击按钮*/
    #cener_ss_two>button{
        background-image: linear-gradient(to right,#ff9000 0,#ff5000 100%);
        background-repeat: repeat-x;
        text-align: center;
        width: 81px;
        height: 42px;
        line-height: 42px;
        -webkit-border-radius: 38px;
        -moz-border-radius: 38px;
        -ms-border-radius: 38px;
        border-radius: 38px;
        color: #fff;
        background-position: 0 0;
        font-size: 18px;
        font-weight: 700;
        background-color: #ff5000;
        cursor: pointer;
        border: none;
        margin-left: 2px;
        font-size: 15px;
        font-weight: 400;
    }
    /*中间购物车详情*/
    #shoppbox{
        width: 100vm;
        min-height: 400px;
        background-color: rgb(234,232,235);
        padding: 30px 0px;
    }
    #shoppbox_cener{
        width: 1000px;
        min-height: 400px;
        box-sizing: content-box;
        background-color: white;
        margin: auto;
        border-radius: 24px;
        overflow: hidden;
        padding: 0px 0px 80px 0px;
        position: relative;
    }
    /*购物车没有内容的样式*/
    #noneimg{
        width: 1000px;
        min-height: 300px;
        background-color: white;
        padding: 100px 0px 0px 50px;
        display: none;
    }
    #noneimg>h4{
        display: initial;
    }
    /*上面的导航条*/
    #shoppbox_box1{
        overflow: hidden;
        font-size: 12px;
        position: relative;
        height: 72px;
        padding: 0 18px;
        border-bottom: 1px solid #e6e6e6;
    }
    /*左边文字样式*/
    #box1_left{
        overflow: hidden;
        color: #000;
        font-size: 18px;
        font-weight: 600;
        height: 72px;
        line-height: 72px;
        float: left;
    }
    /*右边的文字样式*/
    #box1_rigth{
        height: 72px;
        line-height: 72px;
        float: right;
    }
    #box1_rigth>span:nth-of-type(1){
        font-size: 14px;
    }
    #box1_rigth>span:nth-of-type(2){
        font-family: Verdana,Arial;
        padding-left: 2px;
        font-weight: 500;
        margin-right: 12px;
        font-size: 22px;
        color: #FF5000;
    }
    .but{
        display: inline-block;
        width: 74px;
        height: 42px;
        line-height: 42px;
        color: #fff;
        background: #FF5000;
        -webkit-border-radius: 21px;
        -moz-border-radius: 21px;
        -ms-border-radius: 21px;
        border-radius: 21px;
        text-align: center;
        cursor: pointer;
        text-decoration: none;
        position: relative;
        top: -2px;
        font-size: 16px;
        border: none;
    }
    /*有内容时的购物车*/
    .yestext_box{
        height: 50px;
    }
    .yestext_box>div{
        height: 50px;
        line-height: 50px;
        float: left;
        font-size: 14px;
    }
    .yestext_box1{
        width: 80px;
        box-sizing: content-box;
        margin-left: 10px;
        text-align: center;
    }
    .yestext_box1>input{
        margin-right: 9px;
        position: relative;
        top: 2px;
    }
    .yestext_box2{
        padding-left: 85px;
        width: 330px;
    }
    .yestext_box3{
        width: 130px;
    }
    .yestext_box4{
        width: 120px;
    }
    .yestext_box5{
        width: 140px;
    }
    /*多选框选中样式*/
    input[type=checkbox] {
        cursor: pointer;
        position: relative;
    }
    input[type=checkbox]::after {
        position: absolute;
        top: 0;
        background-color: #fff;
        color: #fff;
        width: 14px;
        height: 14px;
        display: inline-block;
        visibility: visible;
        padding-left: 0px;
        text-align: center;
        content: ' ';
        border-radius: 2px;
        box-sizing: border-box;
        border: 1px solid #ddd;
    }

    input[type=checkbox]:checked::after {
        content: "";
        background-color: #ff6f06;
        border-color: #ff6f06;
        background-color: #ff6f06;
    }

    input[type=checkbox]:checked::before {
        content: '';
        position: absolute;
        top: 1px;
        left: 5px;
        width: 3px;
        height: 8px;
        border: solid white;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
        z-index: 1;
    }
    /*店铺导航*/
    .yestext_dianpu{
        height: 38px;
        box-sizing: content-box;
        padding-left: 15px;
        font-size: 13px;
        line-height: 38px;
    }
    .yestext_dianpu>input{
        margin-right: 9px;
    }
    /*商品详情*/
    .shoppdetailbox{
        width: 960px;
        min-height: 120px;
        box-sizing: content-box;
        background-color: rgb(245,245,245);
        margin-left: 21px;
        border-radius: 15px;
    }
    .shoppdetail{
        height: 120px;
    }
    .shoppdetail>div{
        float: left;
        margin-top: 20px;
        font-size: 12px;
    }
    .detail_box1{
        width: 35px;
        height: 82px;
        box-sizing: content-box;
        margin-right: 15px;
    }
    .detail_box1>input{
        float: right;
    }
    .detail_box2{
        width: 320px;
        height: 80px;
        box-sizing: content-box;
        margin-right: 10px;
    }
    .detail_box2>img {
        width: 80px;
        height: 80px;
        float: left;
        margin-right: 15px;
    }
    .detail_box2>a{
        display: inline-block;
        width: 200px;
    }
    .detail_box2>a:hover{
        color: #ff6f06;
        cursor:Pointer;
        text-decoration: underline;
        text-decoration-color: #ff6f06;
    }
    .detail_box3{
        width: 80px;
        margin: 0 5px 0 15px;
        color: #9c9c9c;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .detail_box4{
        width: 105px;
        color: #3c3c3c;
        font-weight: 700;
        font-family: Verdana,Tahoma,arial;
    }
    .detail_box5>>>.el-input-number{
        width: 90px;
        line-height: 23px;
    }
    .detail_box5>>>.el-input__inner{
        height: 25px;
        padding-left: 27px;
        padding-right: 27px;
        width: 90px;
    }
    .detail_box5>>>.el-input-number__decrease,.detail_box5>>> .el-input-number__increase{
        width: 25px;
    }
    .detail_box6{
        margin-left: 50px;
        color: #f40;
        font-weight: 700;
        width: 150px;
        box-sizing: content-box;
    }
    /*下面导航条功能*/
    .belfun{
        width: 1000px;
        height: 72px;
        box-sizing: content-box;
        position: absolute;
        height: 72px;
        background-color: #fff;
        border-top: 1px solid #e6e6e6;
        bottom: 0px;
        z-index: 1;
    }
    /*下面导航左边的功能*/
    .belfun_left{
        float: left;
        font-size: 14px;
        padding-left: 30px;
        height: 73px;
        box-sizing: content-box;
        line-height: 72px;
    }
    .belfun_left>div{
        float: left;
        height: 73px;
        box-sizing: content-box;
    }
    .belfun_left1{
        width: 100px;
    }
    .belfun_left1>input{
        margin-right: 9px;
    }
    /*下面导航右边的功能*/
    .belfun_right{
        float: right;
        padding-right: 30px;
        height: 73px;
        box-sizing: content-box;
        line-height: 72px;
    }
    .belfun_right>div{
        float: left;
        height: 73px;
        box-sizing: content-box;
    }
    .belfun_right1{
        width: 120px;
    }
    .belfun_right1>span:nth-of-type(1){
        line-height: 48px;
        font-size: 14px;
        color: #000;
    }
    .belfun_right1>span:nth-of-type(2){
        color: #f40;
        font-weight: 700;
        font-size: 20px;
        font-family: tohoma,arial;
        margin: 0px 6px;
    }
    .belfun_right1>span:nth-of-type(3){
        line-height: 48px;
        font-size: 14px;
        color: #000;
    }
    .belfun_right2{
        font-size: 14px;
        color: #000;
    }
    .belfun_right3{
        color: #f40;
        font-weight: 700;
        font-size: 22px;
        font-family: tohoma,arial;
        margin: 0px 15px 0px 5px;
    }
    .fixed {
        position: fixed;
        z-index: 1;
        bottom: 0;
    }

</style>