<template>
    <div class="stage">
        <div class="stage_center">
            <!--导航条-->
            <div class="stage_center_heat">
            
            </div>
            <div class="stage_center_bot">
<!--                <el-tabs :tab-position="tabPosition" :style="GetWindowHeight" class="myapp">-->
<!--                    <el-tab-pane label="商品信息">-->
<!--                        <router-link to="commodity">商品信息</router-link>-->
<!--                    </el-tab-pane>-->
<!--                    <el-tab-pane label="买家评论">-->
<!--                        <router-link to="comment">买家评论</router-link>-->
<!--                    </el-tab-pane>-->
<!--                    <el-tab-pane label="上架商品">-->

<!--                    </el-tab-pane>-->
<!--                    <router-view></router-view>-->
<!--                </el-tabs>-->
                <el-row class="tac myapp" >
                    <el-col :span="3" :style="GetWindowHeight" class="myapp">
                        <el-menu :default-active="$route.path" class="el-menu-vertical-demo  myapp" @open="handleOpen" @close="handleClose"  :style="GetWindowHeight" >
                            <router-link to="commodity">
                                <el-menu-item index="/carback_stage/commodity">
                                    <i class="el-icon-sell"></i>
                                    <span slot="title">商品信息</span>
                                </el-menu-item>
                            </router-link>
                            <router-link to="comment">
                                <el-menu-item index="/carback_stage/comment">
                                    <i class="el-icon-chat-line-square"></i>
                                    <span slot="title">买家评论</span>
                                </el-menu-item>
                            </router-link>
                            <router-link to="goodsshelves">
                                <el-menu-item index="/carback_stage/goodsshelves">
                                    <i class="el-icon-shopping-bag-1"></i>
                                    <span slot="title">上架商品</span>
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
        name: "CarBack_Stage",
        data() {
            return {
                /*根据浏览器改高度*/
                tabPosition: 'left',
                GetWindowHeight: {
                    height: ''
                }
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
    /*导航条*/
    .stage_center_heat{
        height: 100px;
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