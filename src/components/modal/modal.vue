<template>
    <div>
       <div class="modal-outer">
            <div class="modal-inner">
                <div class="modal-close" @click="close">
                    <img src="./img/madol-close.png" class="modal-close-btn">
                </div>
                <slot name="title" class="modal-title"></slot>
                <slot name="content" class="madol-content"></slot>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            modalFlag: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                
            }
        },
        methods: {
           close() {
                this.$emit("closeModal",this.modalFlag);
            }
        },
        components: {

        }
    }
</script>
<style lang="scss">
     @import '../../common/css/mixin.scss';
    .modal-outer {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: transparent;
        z-index: 10000;
        .modal-inner {
            background: #ffffff;
            min-height: 250px;
            max-width: 512px;/*no*/
            width: 88%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            box-shadow: 0px 0px 20px 20px rgba( 170, 203, 228, 0.6);/*no*/
            border-radius: 8px;/*no*/
            padding: 10px;/*no*/
            padding-bottom: 20px;/*no*/
            .modal-close{
                text-align: right;
                .modal-close-btn{
                    width: 24px;
                }
            }
            .modal-title{
                height: 30px;
                line-height: 30px;
                color: #44525d;
                font-size: 30px;
            }
            .madol-button-box{
                width: 319px;
                margin: 0 auto;
                text-align: center;
            }
        }
    }
</style>