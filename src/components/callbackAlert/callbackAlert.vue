<template>
    <div class="callback-alert-box">
        <div class="callback-alert">
            {{alertContent}}
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            alertContent: {
                type: String,
                default: ''
            }
        },
        data() {
            return {

            }
        },
        mounted() {

        }
    }
</script>
<style lang="scss" scoped>
    .callback-alert-box {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        .callback-alert {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 182px;
            height: 80px;
            background: rgba(7, 17, 27, 0.7);
            border-radius: 6px;/*no*/
            color: #ffffff;
            line-height: 80px;
            font-size: 30px;
        }
    }
</style>