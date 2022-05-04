<template>
    <div class="sonRoute">
        <div class="headline">
            <h2>需上架的商品信息</h2>
        </div>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="商品标题">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="商品图片">
                <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove" v-model="form.picture">
                <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </el-form-item>
            <el-form-item label="商品分类">
                <el-select v-model="form.classify" placeholder="请选择分类">
                    <el-option label="男装" value="nvzhuang"></el-option>
                    <el-option label="女装" value="nanzhuang"></el-option>
                </el-select>
                <el-select v-model="form.specific" placeholder="请选择分类">
                    <el-option label="男装" value="nvzhuang"></el-option>
                    <el-option label="女装" value="nanzhuang"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="商品价格">
                <el-input v-model="form.price"></el-input>
            </el-form-item>
            <el-form-item label="库存">
                <el-input v-model="form.inventory"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">提交上架申请</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "GoodsShelves",
        data() {
            return {
                form: {
                    name: '',
                    classify: '',
                    price: '',
                    picture: '',
                    specific:''
                },
                dialogImageUrl: '',
                dialogVisible: false
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            }
        }
    }
</script>

<style scoped>

</style>