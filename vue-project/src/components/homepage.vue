<template>
    <div>
        <!-- 导航条组件 -->
        <Header></Header>
        <!-- 首页主体 -->
        <div class="index-content s_bg_top" style="background-image: url(https://b.appsimg.com/upload/momin/2022/01/26/116/1643187256307.jpg)">
            <!-- 轮播图 -->
            <div class="focus-banner">
                <div class="focus-banner-con-wrq">
                    <el-carousel height="340px">
                        <el-carousel-item v-for="item in 4" :key="item">
                            <h3 class="small">{{ item }}</h3>
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>
            <div>
                
            </div>


        </div>
    </div>
</template>
<script>
import Header from './shared/header.vue'
import Screen from './shared/screen.vue'
export default {
    name: "homepage",
    data() {
        return {
            
        }
    },
    components:{
        Header,Screen
    }
}
</script>

<style scoped>
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
</style>
