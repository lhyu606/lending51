<template>
    <div>
        <transition name="fade">
            <div class="modal-outer">
                <div class="modal-inner">
                    <div class="modal-close"></div>
                    <div class="modal-content"></div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
    import mainTab from '@/components/mainTab/mainTab'
    export default {
        props: {

        },
        data() {
            return {
                tabName: 'invm'
            }
        },
        methods: {
            chageTab() {
                console.log(5);
            }
        },
        components: {
            mainTab
        }
    }
</script>
<style lang="scss">
.modal-outer{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: transparent;
}
</style>