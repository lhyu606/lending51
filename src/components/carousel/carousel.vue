<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="str in listImg" :style="{ backgroundImage: 'url(' + str + ')' }"></div>
        </div>
        <div class="swiper-pagination swiper-pagination-white"></div>
    </div>
</template>
<script>
    import Swiper from 'swiper';
    import '../../common/css/swiper.min.css';
    export default {
        data(){
            return {
                listImg :[
                    'static/carouselImg/banner_1.jpg','static/carouselImg/banner_2.jpg','static/carouselImg/banner_3.jpg'
                ]
            }
        },
        mounted() {
            var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                loop: true,
                speed: 600,
                autoplay: true,
                onTouchEnd: function () {
                    swiper.startAutoplay()
                }
            });
        }
    }
</script>
<style lang="scss">
    .swiper-container {
        width: 100%;
        height: 325px;
        .swiper-wrapper {
            width: 100%;
            height: 100%;
        }
        .swiper-slide {
            background-position: center;
            background-size: cover;
            width: 100%;
            height: 100%;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .swiper-pagination-bullet {
            width: 0.833rem;
            height: 0.833rem;
            display: inline-block;
            background: #7c5e53;
        }
    }
</style>