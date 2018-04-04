<template>
    <div class="fun-wrapper">
        <div class="fun-item" @click="showModal(0)">
            <p>
                <img src="./img/fn1.png" alt="订阅短信通知" class="fun-item-img">
            </p>
            <p class="fun-item-text">订阅短信通知</p>
        </div>
        <div class="fun-item" @click="showModal(1)">
            <p>
                <img src="./img/fn2.png" alt="添加微信客服" class="fun-item-img">
            </p>
            <p class="fun-item-text">添加微信客服</p>
        </div>
        <div class="fun-item" @click="showModal(2)">
            <p>
                <img src="./img/fn3.png" alt="项目回款公告" class="fun-item-img">
            </p>
            <p class="fun-item-text">项目回款公告</p>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
               funs: [
                   "msg", "wx", "anc"
               ]
            }
        },
        methods: {
            showModal (index){
                this.$emit('showModal',this.funs[index]);
            }
        }
    }
</script>
<style lang="scss" scoped>
    .fun-wrapper {
        display: flex;
        height: 185px;
        text-align: center;
        background: #ffffff;
    }

    .fun-item {
        flex: 0 0 33.33%;
        width: 33.33%;
        padding: 20px 0 5px;
        font-size: 18px;
        color: #6f798a;
    }

    .fun-item-img {
        width: 127px;
    }

    .fun-item-text {
        position: relative;
        top: -10px;
    }
</style>