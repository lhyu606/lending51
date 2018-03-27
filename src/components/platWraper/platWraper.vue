<template>
    <div class="plat-wrapper">
        <div v-for="(item,idx) in platPro">
            <div class="plat-item" :class="{ active : item.isActive}" @click="toggleShow(idx)">
                <div class="plat-item-title" :class="classes[idx]">
                    {{ item.title }}
                </div>
                <transition name="move" mode="out-in" appear>
                    <div class="plat-item-cara">
                        {{ item.charac }}
                    </div>
                </transition>
                <transition name="fade" mode="out-in" appear></transition>
                <div class="plat-item-desc">
                    <p class="income">{{ item.childTitle }} </p>
                    <p class="instruct">{{ item.childDesc }}</p>
                </div>
                </transition>
            </div>
            <split></split>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue'
    import split from '@/components/split/split'
    export default {
        data() {
            return {
                platPro: [
                    {
                        title: '平台产品',
                        charac: '短期、小额',
                        childTitle: '预期最高年化收益11% ',
                        childDesc: '平均产品周期 60-120 天，平均单个项 目总额小于 10 万。'
                    }, {
                        title: '安全保障',
                        charac: '政府监管、技术安全、法律保障',
                        childTitle: '预期最高年化收益11% ',
                        childDesc: '平均产品周期 60-120 天，平均单个项 目总额小于 20 万。'
                    }, {
                        title: '关于我们',
                        charac: '平台数据、团队介绍',
                        childTitle: '预期最高年化收益11% ',
                        childDesc: '平均产品周期 60-120 天，平均单个项 目总额小于 30 万。'
                    }, {
                        title: '帮助中心',
                        charac: '注册、投资、提现等帮助',
                        childTitle: '预期最高年化收益11% ',
                        childDesc: '平均产品周期 60-120 天，平均单个项 目总额小于 40 万。'
                    }
                ],
                classes: [
                    'title-icon1', 'title-icon2', 'title-icon3', 'title-icon4'
                ]
            }
        },
        mounted() {
            this.platPro.forEach((item, idx) => {
                Vue.set(this.platPro[idx], 'isActive', idx == 0 ? false : true);
            });
        },
        methods: {
            toggleShow(idx) {
                this.platPro[idx].isActive = !this.platPro[idx].isActive;
            }
        },
        components: {
            split
        }
    }
</script>
<style lang="scss" scoped>
    .plat-item {
        padding: 25px;
        background: #ffffff;
        font-size: 0;
        text-align: left;
    }

    .plat-item-title {
        display: inline-block;
        height: 32px;
        width: 50%;
        padding-left: 50px;
        line-height: 32px;
        font-size: 24px;
        font-weight: 700;
        vertical-align: top;
    }

    .title-icon1 {
        background: url(./img/spirit1.png) no-repeat 0 0;
        background-size: 32px;
    }

    .title-icon2 {
        background: url(./img/spirit2.png) no-repeat 0 0;
        background-size: 32px;
    }

    .title-icon3 {
        background: url(./img/spirit3.png) no-repeat 0 0;
        background-size: 32px;
    }

    .title-icon4 {
        background: url(./img/spirit4.png) no-repeat 0 0;
        background-size: 32px;
    }

    .plat-item-cara {
        display: inline-block;
        height: 32px;
        width: 50%;
        font-size: 22px;
        font-weight: 700;
        color: #ffb23a;
        vertical-align: top;
        text-align: right;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .plat-item-desc {
        min-height: 140px;
        padding: 25px 0 0 250px;
        background: url(./img/plat-item-pic1.png) no-repeat 0 25px;
        background-size: 166px;
        overflow: hidden;
        transition: all 0.3s
    }

    .plat-item.active .plat-item-cara {
        width: 100%;
        margin-top: 10px;
        font-size: 20px;
        font-weight: normal;
        color: #909090;
        text-align: left;
    }

    .plat-item.active .plat-item-desc {
        min-height: 0;
        height: 0;
        padding: 0;
    }

    .income {
        line-height: 40px;
        font-size: 20px;
        font-weight: 700;
        color: #666666;
    }

    .instruct {
        line-height: 30px;
        font-size: 18px;
        color: #4d4e53;
    }
</style>