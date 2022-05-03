<template>
    <div>
        <Header></Header>
        <!-- 买家 -->
        <div class="stage">
            <div class="stage_center">
                <div class="stage_center_bot">
                    <el-row class="tac myapp" >
                        <el-col :span="3" :style="GetWindowHeight" class="myapp">
                            <el-menu :default-active="$route.path" class="el-menu-vertical-demo  myapp" @open="handleOpen" @close="handleClose"  :style="GetWindowHeight" >
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
                                <router-link to="OrderAnagement">
                                    <el-menu-item index="/Personal_center/OrderAnagement">
                                        <i class="el-icon-sell"></i>
                                        <span slot="title">订单管理</span>
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
        <Footer></Footer>
    </div>


</template>

<script>
import Header from './shared/header.vue';
import Footer from './shared/footer.vue';
    export default {
        name: "CarBack_Stage",
        data() {
            return {
                /*根据浏览器改高度*/
                tabPosition: 'left',
                GetWindowHeight: {
                    height: ''
                },
                circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
            };
        },
        // import引入的组件需要注入到对象中才能使用
        components: {
            Header,Footer
        },
        // 生命周期 - 创建完成（可以访问当前this实例）
        created () {
            /*根据浏览器改高度*/
            window.addEventListener('resize', this.getHeight) // 注册监听器
            this.getHeight() // 页面创建时先调用一次
        },
        // 生命周期 - 销毁完成
        destroyed () {
            /*根据浏览器改高度*/
            window.removeEventListener('resize', this.getHeight)
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
            }
        }
    }
</script>

<style scoped>
    .stage{
        width: 100%;
        background-color: rgb(234,232,235);
    }
    .stage:after{
        content: '';
        display: block;
        clear: both;
    }
    /*中间的盒子*/
    .stage_center {
        width: 1190px;
        margin: 0 auto;
    }
    /*中间路由盒子*/
    .stage_center_bot{
        position: relative;
        background: #fff;
        width: 1190px;
        border-radius: 18px 18px 0 0;
        padding: 10px;
    }
    .stage_center_bot:after{
        content: '';
        display: block;
        clear: both;
    }
    .myapp>>>.el-menu-item.is-active{
        background: none;
    }
</style>