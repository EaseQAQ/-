<template>
    <div class="stage">
        <div class="stage_center">
            <div class="stage_center_bot">
                <el-row class="tac myapp" >
                    <el-col :span="3" :style="GetWindowHeight" class="myapp">
                        <el-menu :default-active="$route.path" class="el-menu-vertical-demo myapp" @open="handleOpen" @close="handleClose"  :style="GetWindowHeight" >
                            <router-link to="OrderManagement">
                                <el-menu-item index="/Administrator/OrderManagement">
                                    <i class="el-icon-sell"></i>
                                    <span slot="title">订单信息</span>
                                </el-menu-item>
                            </router-link>
                            <router-link to="Merchant">
                                <el-menu-item index="/Administrator/Merchant">
                                    <i class="el-icon-chat-line-square"></i>
                                    <span slot="title">商家信息</span>
                                </el-menu-item>
                            </router-link>
                            <router-link to="ApplyFor">
                                <el-menu-item index="/Administrator/ApplyFor">
                                    <i class="el-icon-shopping-bag-1"></i>
                                    <span slot="title">上架申请</span>
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
</template>

<script>
    export default {
        name: "Administrator",
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
        components: {},
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

</style>