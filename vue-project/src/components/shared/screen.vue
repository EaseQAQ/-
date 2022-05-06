<template>
    <!-- 筛选 -->
    <div class="list-define-w wrapper">
        <div class="pro-list-oper">
            <!-- 筛选左 -->
            <div class="pro-oper">
                <!--  -->
                <div class="oper-hd-general J_oper_tag" title="综合">
                    <p>综合</p>
                </div>
                <!--  -->
                <div class="oper-hd-price J_oper_tag" title="销量">
                    <p>销量</p>
                </div>
                <!--  -->
                <div class="oper-hd-discot J_oper_tag" title="价格">
                    <p>价格</p>
                </div>
                <!-- 价格填写 -->
                <div class="oper-hd-select clearfix">
                    <div class="oper-select-inner">
                        <span class="oper-select-star">
                            <input type="text" placeholder=" ¥" value="¥" class="J_priceMin">
                            <em class="cat-select-tips J_placeholder"> ¥</em>
                        </span>
                        <i class="i-cat-pre"> - </i>
                        <span class="oper-select-end">
                            <input type="text" placeholder=" ¥" value="¥" class="J_priceMax">
                            <em class="cat-select-tips J_placeholder"> ¥</em>
                        </span>
                        <i class="J_sortSubmit_btn i-cat-btn" mars_sead="prize_screen_add" title="确定">确定</i>
                        <i class="J_priceClear i-cat-btn" mars_sead="prize_screen_cut" title="清除">清除</i>
                    </div>
                </div>
            </div>
            <!-- 筛选右 -->
            <div id="J_page_special" class="page pro-paging">
                <span class="page-total">
                    <em class="page-nub">......</em>件商品
                </span>
                <span><em class="page-nub">.</em>/..</span>
                <el-button-group style="margin-left:15px">
                    <el-button type="primary" icon="el-icon-arrow-left" size="mini"></el-button>
                    <el-button type="primary" size="mini">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
                </el-button-group>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "screen",
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.list-define-w{
    background: #fff center top no-repeat;
}
.wrapper {
    width: 1000px;
    margin: 0 auto;
    position: relative;
}
.pro-list-oper {
    margin-top: 10px;
    height: 46px;
    background-color: #f5f5f5;
    position: relative;
    border: 1px solid #dfdfdf;
    z-index: 1;
}
.pro-oper {
    float: left;
    height: 46px;
}
.oper-hd-discot, .oper-hd-general, .oper-hd-price {
    width: 67px;
    position: relative;
    z-index: 3;
    text-align: center;
    cursor: pointer;
    float: left;
    line-height: 46px;
    border-right: 1px solid #dfdfdf;
}
.oper-hd-discot:hover, .oper-hd-general:hover, .oper-hd-price:hover {
    color: #ff4400;
}
.oper-select-end, .oper-select-star {
    position: relative;
}
.oper-hd-select {
    position: relative;
    z-index: 1;
    padding-right: 5px;
    float: left;
    height: 46px;
    line-height: 46px;
}
.oper-select-inner {
    padding-left: 20px;
    line-height: 46px;
}
.clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}
.oper-hd-select input {
    width: 50px;
    height: 22px;
    line-height: 20px;
    padding: 0 5px;
    border: 1px solid #e5e5e5;
}

.cat-select-tips {
    display: none;
    position: absolute;
    left: 1px;
    top: 50%;
    margin-top: -0.6em;
    height: 1.2em;
    line-height: 1.2em;
}
.oper-hd-select .i-cat-btn {
    display: none;
    margin-left: 15px;
    width: 36px;
    line-height: 20px;
    font-size: 12px;
    text-align: center;
    color: #fff;
    height: 20px;
    background-color: #ff4400;
    border-radius: 2px;
    cursor: pointer;
}
.oper-select-inner:hover {
    position: absolute;
    top: -1px;
    left: -1px;
    width: 264px;
    height: 46px;
    border: 1px solid #c8c8c8;
    box-shadow: 0 0 2px rgb(0 0 0 / 20%);
    background-color: #fff;
}
.oper-select-inner:hover .i-cat-btn {
    display: inline-block;
}
.pro-paging {
    float: right;
    padding: 10px 10px 10px 0;
    font-size: 14px;
}
.page .page-total {
    margin-right: 22px;
}
.page-nub {
    color: #ff4400;
}
.page .page-next, .page .page-next-txt, .page .page-pre, .page .page-pre-txt {
    font-size: 12px;
    height: 24px;
    line-height: 24px;
    padding: 0 10px 0 9px;
}
.page a, .page span {
    display: inline-block;
}
</style>
