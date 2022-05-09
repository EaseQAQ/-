<template>
    <div>
        <!--导航条-->
        <div id="daohan">
            <div id="daohancente">
                <img src="https://s2.loli.net/2022/04/26/fatzBqwgdC1y68K.png">
            </div>
        </div>
        <!--中间的图片内容-->
        <div id="centerimg">
            <div id="centerimgbox">
                <!--表单-->
                <div class="centerimgFrom">
                    <div id="centerimgFrom_img">
                        <img src="../assets/彩虹.png">
                    </div>
                    <!--登录-->
                    <div id="loginbox">
                        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                            <el-form-item label="用户名" prop="age" class="yongone">
                                <el-input class="yong" type="text" v-model="ruleForm.age" placeholder="请输入用户账号"></el-input>
                            </el-form-item>
                            <el-form-item label="密码" prop="pass" class="yongone">
                                <el-input class="yong" type="password" v-model="ruleForm.pass" autocomplete="off"  placeholder="请输入用户密码"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="submitForm('ruleForm')" class="subclass">登 录</el-button>
                                <a href="#" class="zhanhbox" @click="loginboxOn">没有账号？点击注册</a>
                            </el-form-item>
                        </el-form>
                    </div>
                    <!--注册-->
                    <div id="registerbox">
                        <el-form :model="zruleForm" status-icon :rules="zrules" ref="zruleForm" label-width="100px" class="demo-ruleForm">
                            <el-form-item label="用户名" prop="zage" class="yongone">
                                <el-input class="yong" type="text" v-model="zruleForm.zage" placeholder="用户名3-10位"></el-input>
                            </el-form-item>
                            <el-form-item label="密码" prop="zpass" class="yongone">
                                <el-input class="yong" type="password" v-model="zruleForm.zpass" autocomplete="off"  placeholder="密码6-10位"></el-input>
                            </el-form-item>
                            <el-form-item label="手机号" prop="zpho" class="yongone">
                                <el-input class="yong" type="text" v-model="zruleForm.zpho" placeholder="请输入手机号码"></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" @click="zsubmitForm('zruleForm')" class="subclass">注 册</el-button>
                                <a href="#" class="zhanhbox" @click="registerboxOn">已有账号？点击登录</a>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
            </div>

        </div>
        <!--尾部-->
        <div></div>
    </div>
</template>

<script>
    export default {
        name: "BuyerLogon",
        data() {
            /*登录表单*/
            let checkAge = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('用户名不能为空'));
                }else {
                    callback();
                }
            };
            let validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                }else {
                    callback();
                }
            };
            /*注册表单*/
            let zcheckAge = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('用户名不能为空'));
                }else if(value.length<3 || value.length>10){
                    return callback(new Error('用户名不规范'));
                } else {
                    callback();
                }
            };
            let zvalidatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else if(value.length<6 || value.length>10){
                    return callback(new Error('密码不规范'));
                }else {
                    callback();
                }
            };
            let zphoyz=(rule, value, callback) => {
                let reg =/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
                if (value === '') {
                    callback(new Error('请输入手机号'));
                } else if(value.length<11 || !reg.test(value)){
                    return callback(new Error('手机号码不规范'));
                }else {
                    callback();
                }
            };
            return {
                /*登陆表单*/
                ruleForm: {
                    pass: '',
                    age: ''
                },
                rules: {
                    pass: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    age: [
                        { validator: checkAge, trigger: 'blur' }
                    ]
                },
                /*注册数据*/
                zruleForm: {
                    zpass: '',
                    zage: '',
                    zpho:''
                },
                zrules: {
                    zpass: [
                        { validator: zvalidatePass, trigger: 'blur' }
                    ],
                    zage: [
                        { validator: zcheckAge, trigger: 'blur' }
                    ],
                    zpho:[
                        { validator: zphoyz, trigger: 'blur' }
                    ]
                },
            };
        },
        //添加路由守卫，判断是从哪一个页面过来的
        beforeRouteEnter(to, from, next) {
            next((vm) => {
                console.log(to);
                console.log(from);
                //如果是本路由来的，就将路由赋值为首页路由
                if(from.path=="/buyerlogon"){
                    vm.fromPath = "/";
                    return
                }
                // 通过 `vm` 访问组件实例,将值传入fromPath
                vm.fromPath = from.path;
                
            });
        },
        methods: {
            /*点击更换登录注册页面方法*/
            loginboxOn(){//在登录页面中切换注册
                //隐藏登录页面
                document.querySelector('#loginbox').style.display='none'
                //显示注册页面
                document.querySelector('#registerbox').style.display='block'
            },
            registerboxOn(){//在注册页面中切换登录
                //显示登录页面
                document.querySelector('#registerbox').style.display='none'
                //隐藏注册页面
                document.querySelector('#loginbox').style.display='block'
            },
            // 登录方法，验证成功后
            submitForm(formName) {
                document.querySelector('.subclass').style.backgroundColor='rgb(250,168,172)'
                document.querySelector('.subclass').style.border='solid 1px rgb(250,168,172)'
                this.$refs[formName].validate((valid) => {
                    if (valid) {//验证成功
                        this.axios.get(`http://localhost:8080/merchant/customer?name=${this.ruleForm.age}&pas=${this.ruleForm.pass}`)
                        .then((response)=>{
                            // 数组长度为1则登录成功 数组长度为0则登录失败
                            if(response.data.length==0){//登录失败，提醒用户
                                console.log("失败");
                                this.$notify.error({
                                    message: '用户名或者密码错误'
                                });
                            }else{//成功后存入session跳转前一个页面
                                window.sessionStorage.setItem("customername",JSON.stringify(this.ruleForm.age))
                                window.sessionStorage.setItem("customerid",JSON.stringify(response.data[0].cust_id))
                                this.$router.push({
                                    path: this.fromPath,
                                });
                            }
                        },(error)=>{
                            console.log(error);
                        })
                    } else {//验证失败
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            /*注册的方法  验证成功后*/
            zsubmitForm(formName) {
                document.querySelectorAll('.subclass')[1].style.backgroundColor='rgb(250,168,172)'
                document.querySelectorAll('.subclass')[1].style.border='solid 1px rgb(250,168,172)'
                this.$refs[formName].validate((valid) => {
                    if (valid) {//规范成功
                        let name=this.zruleForm.zage
                        let pas=this.zruleForm.zpass
                        let pho=this.zruleForm.zpho
                        this.axios.get(`http://localhost:8080/merchant/customer/zu?zname=${name}&zpas=${pas}&zpho=${pho}`)
                        .then((response)=>{
                            if(response.data=='yes'){
                                //显示登录页面
                                document.querySelector('#registerbox').style.display='none'
                                //隐藏注册页面
                                document.querySelector('#loginbox').style.display='block'
                                return;
                            }
                            //如果数据的长度是1就代表用户名存在0代表用户名不存在,yes就是存储成功
                            if(response.data.length==0){//没有用户名
                                
                            }else{//有用户名进行提醒
                                this.$notify.error({
                                    message: '用户名已经存在，请重新输入'
                                });
                            }
                        },(error)=>{
                            console.log(error);
                        })
                    } else {//规范失败
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            bordercss(e){
                console.log(123)
                console.log(e.currentTarget)
            },
        }
    }
</script>

<style scoped>
    a{
        text-decoration: none;
    }
    /*导航条*/
    #daohan{
        width: 100vm;
        height: 100px;
    }
    /*导航条中间*/
    #daohancente{
        width: 1000px;
        height: 100px;
        margin: auto;
    }
    /*中间的背景*/
    #centerimg {
        width: 100vm;
        height: 600px;
        background-image: url(https://s2.loli.net/2022/04/26/NtCcgBqbjTveMo4.png);
        background-position: top center;
        background-repeat: no-repeat;
        z-index: -1;
        /*position: relative;*/
    }
    /*表单登陆注册*/
    #centerimgbox{
        width: 1000px;
        margin: auto;
        margin-left: auto;
        padding: 120px 20px 0px 20px;
        min-height: 500px;
        width: 1000px;
    }
    .centerimgFrom{
        width: 360px;
        border-radius: 2px;
        background-color: #fff;
        float: right;
        padding: 30px 40px 10px 0px;
    }
    #centerimgFrom_img>img{
        width: 100px;
    }
    /*表单提交按钮样式*/
    .subclass{
        width: 300px;
        background-color: rgb(250,168,172);
        border: solid 1px rgb(250,168,172);
        margin-left: -40px;
    }
    .subclass:hover{
        background-color: rgb(250,158,166);
        border: solid 1px rgb(250,158,166);
    }
    /*点击a标签切换按钮*/
    .zhanhbox{
        font-size: 12px;
        display: inline-block;
        margin-left: 20px;
    }/*登录盒子*/
    #loginbox >>>.el-input__inner{
        width: 270px;
    }
    /*注册盒子*/
    #registerbox{
        display: none;
    }
    #registerbox >>>.el-input__inner{
        width: 270px;
    }
</style>