<template>
    <div>
        <!-- 导航条组件 -->
        <Header></Header>
        <!-- 筛选 -->
        <Screen></Screen>
        <div class="c-goods-list">

        </div>
    </div>
</template>

<script>
import Header from './shared/header.vue'
import Screen from './shared/screen.vue'
export default {
    name: "Classification",
    data() {
        return {
            
        }
    },
    components:{
        Header,Screen
    }
}
</script>
<style scoped>

</style>