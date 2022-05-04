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
                <el-input v-model="form.pwd"></el-input>
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
                <el-input v-model="form.ipone"></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
                <el-input v-model="form.emlia"></el-input>
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
                    name: '',
                    pwd: '',
                    ipone: '',
                    emlia: ''
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
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