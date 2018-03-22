<template>
    <div class="footer">
        <router-link to="/home" class="tab" :class="{'active':tab=='home'}">
            <div class="tab-icon tab-icon1">
                <!-- <img src="img/utab1.png" alt="首页" class="tab-icon-img"> -->
            </div>
            <div class="tab-text">
                首页
            </div>
        </router-link>
        <router-link to="/invm" class="tab" :class="{'active':tab=='invm'}">
            <div class="tab-icon tab-icon2">
                <!-- <img src="img/utab2.png" alt="投资" class="tab-icon-img"> -->
            </div>
            <div class="tab-text">
                投资
            </div>
        </router-link>
        <router-link to="/user" class="tab" :class="{'active':tab=='user'}">
            <div class="tab-icon tab-icon3">
                <!-- <img src="img/utab3.png" alt="账户" class="tab-icon-img"> -->
            </div>
            <div class="tab-text">
                账户
            </div>
        </router-link>
    </div>
</template>
<script>
    export default {
        props: {
            tabName: {
                type: String,
                default: 'home'
            }
        },
        data() {
            return {
                tab:this.tabName
            }
        },
        methods: {
            change(tabtype) {
                this.tab = tabtype;
            }
        }
    }
</script>
<style lang="scss">
    .footer {
        display: flex;
        width: 100%;
        position: fixed;
        bottom: 0px;
        left: 0px;
        height: 98px;
        background: #ffffff;
        border-top: 1px solid #f2f2f2;/*no*/
    }

    .tab {
        display: inline-block;
        flex: 0 0 33.33%;
        width: 33.33%;
        text-align: center;
        font-size: 0;
    }

    .tab-icon {
        height: 65px;
        padding-top: 15px;
        line-height: 45px;
    }

    .tab-icon1 {
        background: url(./img/utab1.png) no-repeat center center;
        background-size: 50px;
    }

    .tab-icon2 {
        background: url(./img/utab2.png) no-repeat center center;
        background-size: 50px;
    }

    .tab-icon3 {
        background: url(./img/utab3.png) no-repeat center center;
        background-size: 50px;
    }

    .tab-icon-img {
        width: 5px;
        vertical-align: middle;
    }

    .tab-text {
        font-size: 20px;
        color: #cccccc;
    }

    .tab.active .tab-text {
        color: #2696f3;
    }

    .tab.active .tab-icon1 {
        background: url(img/utab1-hover.png) no-repeat center center;
        background-size: 50px;
    }

    .tab.active .tab-icon2 {
        background: url(./img/utab2-hover.png) no-repeat center center;
        background-size: 50px;
    }

    .tab.active .tab-icon3 {
        background: url(./img/utab3-hover.png) no-repeat center center;
        background-size: 50px;
    }
</style>