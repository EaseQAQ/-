<template>
    <div id="partculars">
        <Header></Header>
        <div class="FW-product clearfix">
            <div class="M-class">
                <div class="M-pic">
                    <div class="J-mer-ImgReview">
                        <div class="pic-sliderwrap">
                            <div class="show-midpic">
                                <a href="" class="J-mer-bigImgZoom" rel="undefined" title="undefined" style="outline-style: none; text-decoration: none;">
                                    <div class="zoomPad">
                                        <img class="slide-mid-pic" src="//h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/106756/2021/0108/150/4e776d25-1079-4457-b76e-9828fc5907aa_840x840_90.jpg" width="420" height="420" data-original="//h2.appsimg.com/a.appsimg.com/upload/merchandise/pdcvis/106756/2021/0108/150/4e776d25-1079-4457-b76e-9828fc5907aa_840x840_90.jpg" alt="">
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="pic-slider hasImageSlider">
                            <div class="pic-slider-wrap"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from './shared/header.vue'
import Footer from './shared/footer.vue'
export default {
    name: "partculars",
    data() {
        return {

        }
    },
    components:{
        Header,Footer
    }
    }
</script>

<style scoped>
.FW-product {
    width: 1000px;
    margin: 0 auto;
    position: relative;
    margin-bottom: 40px;
    padding-top: 22px;
    z-index: 10;
}
.M-class {
    width: 1000px;
    padding: 11px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: -22px;
}
.M-pic {
    float: left;
    position: relative;
}
.pic-sliderwrap {
    width: 420px;
    height: 420px;
    position: relative;
    z-index: 99;
    margin-bottom: 7px;
    background-color: #f7f7f7;
}
.show-midpic {
    width: 420px;
    height: 420px;
    position: relative;
    text-align: center;
}
.zoomPad {
    float: left;
    position: relative;
    z-index: 99;
    cursor: crosshair;
    text-align: center;
    width: 420px;
    height: 420px;
    overflow: hidden;
}
.pic-slider {
    position: relative;
    height: 64px;
    text-align: center;
}
</style>
