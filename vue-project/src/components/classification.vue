<template>
    <div>
        <!-- 导航条组件 -->
        <Header></Header>
        <!-- 筛选 -->
        <Screen></Screen>
    </div>
</template>

<script>
import Header from './header/header.vue'
import Screen from './header/screen.vue'
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