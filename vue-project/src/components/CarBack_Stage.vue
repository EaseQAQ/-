<template>
    <div class="stage">
        <!--导航条-->
        <div class="stage_center_heat">
            <!-- 卖家 -->
            <div class="center_heat">
                <div class="heat_name">
                    <a href="">卖家管理中心</a>
                </div>
                <div class="seller">
                    <el-breadcrumb separator="">
                        <el-breadcrumb-item>
                            <!-- 头像 -->
                            <div class="portrait">
                                <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                            </div>
                            <div class="vendor">
                                <el-dropdown>
                                    <a href="" @click="isokdeng">
                                        <span style="">{{this.isoklogon}}</span><i class="el-icon-arrow-down el-icon--right"></i>
                                        <br>
                                        <span style="font-size:12px">1231222221</span>
                                    </a>
                                    <el-dropdown-menu slot="dropdown" class="header-new-drop">
                                        <a href="/">
                                        <span id="tui" @click="tui">退出</span></a>
                                    </el-dropdown-menu>
                                </el-dropdown>
                            </div>
                        </el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </div>
        </div>
        <div class="stage_center">
            <div class="stage_center_bot">
                <el-row class="tac myapp" >
                    <el-col :span="3" style="height:1000px;" class="myapp">
                        <el-menu :default-active="$route.path" class="el-menu-vertical-demo  myapp" @open="handleOpen" @close="handleClose"  style="height:1000px;">
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
                            <router-link to="OrderM">
                                <el-menu-item index="/carback_stage/OrderM">
                                    <i class="el-icon-shopping-bag-1"></i>
                                    <span slot="title">订单信息</span>
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
                },
                isoklogon:'',
                circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
            };
        },
        mounted() {
            if(JSON.parse(window.sessionStorage.getItem('sellername'))=="null" || JSON.parse(window.sessionStorage.getItem('sellername'))==null ){
                //没有登录，页面显示请登录
                this.isoklogon='未登录';
                document.querySelector('#tui').style.display='none'
                this.$router.push('/car')
            }else{
                this.isoklogon=JSON.parse(window.sessionStorage.getItem('sellername'));
                document.querySelector('#tui').style.display='block'
            }
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
            isokdeng(){
                //判断用户是否登录，未登录点击进入用户登录页面
                if(this.isoklogon=='未登录'){
                    this.$router.push('/car')
                }else{//已经登录，跳转到个人中心页面
                    this.$router.push('/CarBack_Stage')
                }
            },
            tui(){
                window.sessionStorage.setItem('sellername',JSON.stringify(null))
                window.sessionStorage.setItem('sellerid',JSON.stringify(null))
                this.isoklogon='未登录'
                document.querySelector('#tui').style.display='none'
                this.$router.push('/')
            },
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
    /*导航条*/
    .stage_center_heat{
        height:60px;
        background-color: white;
        margin-bottom: 50px;
    }
    .heat_name{
        margin-left: 10px;
        font-size: 32px;
        float: left;
        line-height: 55px;
    }
    .center_heat{
        width: 1200px;
        margin: 0 auto  ;
    }
    .seller{
        margin-top: 10px;
        float:right;
    }
    .portrait{
        float: left;
    }
    .vendor{
        float: left;
    }
</style>