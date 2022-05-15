<template>
    <div class="sonRoute">
        <div class="headline">
            <h2>基本信息</h2>
        </div>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="昵称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="修改密码">
                <el-input type='password' v-model="form.pwd"></el-input>
            </el-form-item>
            <el-form-item label="当前头像">
                <span class="pf-avatar-box">
                    <a class="pf-avatar">
                        <img src="//wwc.alicdn.com/avatar/getAvatar.do?userId=2201557350432&amp;width=80&amp;height=80&amp;type=sns">
                    </a>
                    <a href="//i.taobao.com/user/headset.htm" class="pf-edit-avatar" style="display: none;">编辑头像</a>
                </span>
            </el-form-item>
            <el-form-item label="电话号码">
                <el-input v-model="form.phone"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Personal",
        data() {
            return {
                form: {
                    // 用户名字
                    name: '',
                    // 用户密码
                    pwd: '',
                    // 用户电话号码
                    phone: ''
                }
            }
        },
        beforeMount(){
            // 页面一进来的用户数据
            let id=JSON.parse(window.sessionStorage.getItem('customerid'))
            console.log(id);
            this.axios.get(`http://localhost:8080/merchant/personal?uid=${id}`).then((response)=>{
                    this.form.name=response.data[0].cust_account;
                    // this.form.pwd=response.data[0].cust_pwd;
                    this.form.phone=response.data[0].cust_phone;
                    this.form.portrait=response.data[0].cust_img;
                    console.log('修改前的数据：'+this.form.name,this.form.pwd,this.form.phone,this.form.portrait);
                },(error)=>{
                    console.log(error)
                })
        },
        methods: {
            // 修改用户信息
            onSubmit() {
                // 用户的id
                let id=JSON.parse(window.sessionStorage.getItem('customerid'))
                this.axios.get(`http://localhost:8080/merchant/personal/updatainfo?uid=${id}&name=${this.form.name}&pwd=${this.form.pwd}&phone=${this.form.phone}`)
                    .then((response)=>{
                        this.pwd=''
                    },(error)=>{
                        console.log(error)
                    })
            },

        }
    }
</script>

<style scoped>
.pf-avatar-box {
    display: inline-block;
    position: relative;
    border: 3px solid #e6e6e6;
    width: 80px;
    height: 80px;
}
.pf-avatar-box .pf-avatar {
    display: table-cell;
    width: 80px;
    height: 80px;
    vertical-align: middle;
    text-align: center;
}
</style>