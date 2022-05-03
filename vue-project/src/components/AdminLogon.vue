<template>
    <div id="logonbox">
        <!--左边背景图片-->
        <div id="leftbox">
            <img id="leftbox_img" src="https://s1.ax1x.com/2022/04/27/LboZo6.png">
        </div>
        <!--右边登录表单-->
        <div id="rightbox">
            <div id="rightbox_text">欢迎登录</div>
            <div id="rightbox_logon">
                <p id="logon_p">管理员登录</p>
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="账号" prop="age" class="yongone">
                        <el-input clss="yong" type="text" v-model="ruleForm.age" placeholder="请输入管理员账号"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="pass" class="yongone">
                        <el-input class="yong" type="password"  v-model="ruleForm.pass" autocomplete="off"  placeholder="请输入管理员密码"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" class="deng"  @click="submitForm('ruleForm')">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "AdminLogon",
        /*管理员登录表单*/
        data(){
            let checkAge = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('账号不能为空'));
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
            return{
                /*管理员登录数据*/
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
            }
        },
        methods:{
            /*点击登录方法  规范成功后会拿到用户名和密码*/
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {//规范成功
                        alert('submit!');
                        console.log(this.ruleForm.age)
                        console.log(this.ruleForm.pass)
                    } else {//规范失败
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
        }
    }
</script>

<style scoped>
    #logonbox{
        width: 1400px;
        margin: 0 auto;
    }
    #logonbox:after{
        content: '';
        display: block;
        clear: both;
    }
    /*左边的盒子和图片*/
    #leftbox{
        width: 600px;
        height: 720px;
        min-height: 710px;
        float: left;
        background-color: rgb(236,243,255);
    }
    #leftbox_img{
        margin-left: 30px;
        height: 720px;
        min-height: 700px;
        float: left;

    }
    /*右边的盒子表单*/
    #rightbox{
        margin-top: 30px;
        float: right;
    }
    /*表单盒子*/
    #rightbox_logon{
        margin-top: 30px;
        margin-right: 140px;
        width: 460px;
        height: 400px;
        overflow: hidden;
        box-shadow: 0 0 10px 0 hsl(0deg 0% 86% / 57%);
        padding: 20px 10px 10px;
        border-radius: 12px;
        padding: 70px 44px 0px 0px;
        position: relative;
    }
    /*欢迎登录文字*/
    #rightbox_text{
        margin-top: 50px;
        font-family: PingFangSC-Medium;
        font-size: 30px;
        color: #111;
        letter-spacing: 0;
        margin-right: 17px;
    }
    #logon_p{
        width: 119px;
        font-family: PingFangSC-Regular;
        font-size: 23px;
        letter-spacing: 0;
        border-bottom: 2px solid #3D7FFF;
        border-radius: 1px;
        color: #111;
        margin: 0px 0px 30px 60px;
    }
    /*输入框样式*/
    #rightbox_logon>>>.el-input__inner{
        padding-left: 12px;
        background: #f7f8fa;
        border-radius: 9px;
        height: 60px;
    }
    #rightbox_logon>>>.el-form-item__label{
        margin-top: 10px;
        font-size: 18px;
    }
    .deng{
        background: #3d7fff;
        border-radius: 30px;
        border: none;
        margin-top: 14px;
        height: 60px;
        width: 360px;
    }
</style>