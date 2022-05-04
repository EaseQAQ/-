<template>
    <div class="sonRoute">
        <div class="headline">
            <h2>收货地址</h2>
        </div>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="详情地址">
                <el-input type="textarea" v-model="form.local"></el-input>
            </el-form-item>
            <el-form-item label="收货人">
                <el-input v-model="form.person"></el-input>
            </el-form-item>
            <el-form-item label="电话号码">
                <el-input v-model="form.ipone"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "ShippingAddress",
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
</style>