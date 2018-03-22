<template>
    <div>
        <mainTab :tabName="tabName"></mainTab>
        <div>
            this is invm page....
        </div>
    </div>
</template>
<script>
    import mainTab from '@/components/mainTab/mainTab'
    export default {
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
</style>