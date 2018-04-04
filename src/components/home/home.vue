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
        <!-- 轮播图 -->
        <carousel></carousel>
        <!-- 公告 -->
        <announce></announce>
        <split></split>
        <!-- 订阅短信 -->
        <funWraper v-on:showModal="_showModal"></funWraper>
        <split></split>
        <!-- 平台产品、安全保障 -->
        <platWraper></platWraper>
        <mainTab :tabName="tabName"></mainTab>
        <split></split>
        <!-- 订阅短信通知 -->
        <transition name="modal-fade">
            <modal v-show="msgShow" :modalFlag="'msg'" v-on:closeModal="_closeModal">
                <div slot="title" class="modal-title">
                    订阅短信通知
                </div>
                <div slot="content" class="modal-content">
                    <span class="border-1px border-bottom dis-inline-block mt50">
                        <input type="text" placeholder="填写您的手机号" class=" input" v-model.trim="mobileph">
                    </span>
                    <div class="madol-button-box">
                        <span class="dis-inline-block mt50 width-full">
                            <input type="submit" class="reg-gradient input button-confirm" value="确定" @click="getMsg">
                        </span>
                    </div>
                </div>
            </modal>
        </transition>
        <!-- 添加微信客服 -->
        <transition name="modal-fade">
            <modal v-show="wxShow" :modalFlag="'wx'" v-on:closeModal="_closeModal('wx')">
                <div slot="title" class="modal-title">
                    添加微信客服
                </div>
                <div slot="content" class="modal-content">
                    <span class="border-1px border-bottom dis-inline-block mt50">
                        <input type="text" placeholder="填写您的微信号" class=" input">
                    </span>
                    <div class="madol-button-box">
                        <span class="dis-inline-block mt50 width-full">
                            <input type="submit" class="reg-gradient input button-confirm" value="确定">
                        </span>
                    </div>
                </div>
            </modal>
        </transition>
        <!-- 项目回款公告 -->
        <div class="bottom-height"></div>
        <!-- 订阅成功通知 -->
        <transition name="alert-fade">
            <callbackAlert :alertContent='alertContent' v-show="showAlert"></callbackAlert>
        </transition>

    </div>
</template>
<script>
    import mainTab from '@/components/mainTab/mainTab'
    import carousel from '@/components/carousel/carousel'
    import announce from '@/components/announce/announce'
    import split from '@/components/split/split'
    import funWraper from '@/components/funWraper/funWraper'
    import platWraper from '@/components/platWraper/platWraper'
    import modal from '@/components/modal/modal'
    import callbackAlert from '@/components/callbackAlert/callbackAlert'
    export default {
        data() {
            return {
                tabName: 'home',
                logIn: true,
                wxShow: false,
                msgShow: false,
                ancShow: false,
                mobileph: '',
                showAlert: false,
                alertContent: ''
            }
        },
        methods: {
            _showModal(key) {
                console.log(key);
                if (key == 'wx') {
                    this.wxShow = true;
                } else if (key == 'msg') {
                    this.msgShow = true;
                } else if (key == 'anc') {
                    this.ancShow = true;
                }
            },
            _closeModal(key) {
                console.log(key);
                if (key == 'wx') {
                    this.wxShow = false;
                } else if (key == 'msg') {
                    this.msgShow = false;
                } else if (key == 'anc') {
                    this.ancShow = false;
                }
            },
            getMsg() {
                this.msgShow = false;
                this.$store.dispatch('subscribeMsg', this.mobileph).then((callbackMsg) => {
                    this.alertContent = callbackMsg;
                    this.showAlert = true;
                    setTimeout(() => {
                        this.showAlert = false;
                    }, 2000);
                })
            }
        },
        components: {
            mainTab,
            carousel,
            announce,
            split,
            funWraper,
            platWraper,
            modal,
            callbackAlert
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
    }

    .modal-fade-enter-active {
        transition: all .3s ease-in;
    }

    .modal-fade-leave-active {
        transition: all .5s ease-out;
    }

    .modal-fade-enter,
    .modal-fade-leave-to {
        opacity: 0;
    }
     .alert-fade-enter-active {
        transition: all .1s ease-in;
    }

    .alert-fade-leave-active {
        transition: all .5s ease-out;
    }

    .alert-fade-enter,
    .alert-fade-leave-to {
        opacity: 0;
    }
</style>