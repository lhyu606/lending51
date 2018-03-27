<template>
    <div>
        <div class="header">
            <div class="logo-wrapper">
                <router-link to='/home'>
                    <img src="./img/logo.png" alt="logo" class="logo">
                </router-link>
            </div>
            <div class="outin" v-show="logIn">
                <a href="#" class="border-1px border-right">登录</a>
                <a href="#">注册</a>
            </div>
        </div>
        <carousel></carousel>
        <announce></announce>
        <split></split>
        <funWraper></funWraper>
        <split></split>
        <platWraper></platWraper>
        <mainTab :tabName="tabName"></mainTab>
        <split></split>
        <div class="bottom-height"></div>
    </div>
</template>
<script>
    import mainTab from '@/components/mainTab/mainTab'
    import carousel from '@/components/carousel/carousel'
    import announce from '@/components/announce/announce'
    import split from '@/components/split/split'
    import funWraper from '@/components/funWraper/funWraper'
    import platWraper from '@/components/platWraper/platWraper'
    export default {
        data() {
            return {
                tabName: 'home',
                logIn: true
            }
        },
        methods: {
            chageTab() {
                console.log(5);
            },
            gg() {
                console.log('去投资....')
            }
        },
        components: {
            mainTab,
            carousel,
            announce,
            split,
            funWraper,
            platWraper
        }
    }
</script>
<style lang="scss">
    @import '../../common/css/mixin.scss';
    .header {
        height: 70px;
        font-size: 0;
        padding: 0 25px;
        background: #ffffff
    }

    .logo-wrapper {
        display: inline-block;
        width: 50%;
        text-align: left;
        vertical-align: top;
    }

    .logo {
        width: 145px;
        height: 53px;
        padding-top: 13px;
    }

    .outin {
        display: inline-block;
        width: 50%;
        text-align: right;
        font-size: 22px;
        line-height: 70px;
        color: #44525d;
        vertical-align: top;
        &:before {
            content: '';
            display: block;
        }
    }

    .outin a {
        color: #44525d;
        margin: 20px 0px 15px;
        padding: 0 5px;
        height: 22px;
        /* &:first-child{
            border-right: 1px solid #44525d;
        } */
    }
</style>