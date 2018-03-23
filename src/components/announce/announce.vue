<template>
    <div class="swiper-container2">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="str in listImg">{{ str }}</div>
        </div>
        <div class="swiper-pagination swiper-pagination-white"></div>
    </div>
</template>
<script>
    import Swiper from 'swiper';
    import '../../common/css/swiper.min.css';
    export default {
        data() {
            return {
                listImg: [
                    '公告：建设银行系统维修 1', '公告：建设银行系统维修 2', '公告：建设银行系统维修 3'
                ]
            }
        },
        mounted() {
            console.log('mounted', this)
            var swiper2 = new Swiper('.swiper-container2', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                loop: true,
                direction: 'vertical',
                speed: 600,
                autoplay: true,
                onTouchEnd: function () {
                    swiper2.startAutoplay()
                }
            });
        }
    }
</script>
<style lang="scss" scoped>
    .swiper-container2 {
        width: 100%;
        height: 48px;
        margin: 2px 0;
        padding: 0 25px;
        background: #ffffff;
        overflow: hidden;
        line-height: 50px;
        color: #6f798a;
        font-size: 20px;
        text-align: left;
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