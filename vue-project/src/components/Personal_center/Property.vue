<template>
    <div class="sonRoute">
        <div class="user-wallet-activation"> 
            <div class="amount-block">
                <span>零钱余额：</span>
                <span class="mount">0.00</span>
                <span class="unit">元</span>
            </div> 
        </div>
        <div class="user-wallet-activation"> 
            <div class="amount-block">
                <span>积分：</span>
                <span class="mount">0</span>
                <span class="unit">分</span>
            </div>
            <p>积分为五千即可升级会员，会员可享受会员折扣</p>
            <el-button type="primary" disabled>升级会员</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Property"
    }
</script>

<style scoped>
.user-wallet-activation {
    width: 862px;
    background: #FFF;
    padding: 40px 20px 20px;
    position: relative;
    border: 1px solid black;
}
.user-wallet-activation .amount-block {
    font-family: SimHei;
    font-size: 18px;
    color: #222;
    margin-bottom: 12px;
}
.user-wallet-activation .amount-block .mount {
    font-family: HiraginoSansGB-W3;
    font-size: 19px;
    color: #222;
    letter-spacing: 0;
    text-align: center;
}
.user-wallet-activation .amount-block .unit {
    font-family: PingFangSC-Light;
    font-size: 13px;
    color: #222;
    padding-left: 5px;
}
</style>