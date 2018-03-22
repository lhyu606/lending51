<template>
    <div>
        <mainTab :tabName="tabName"></mainTab>
        <div>
            <router-link to="/invm" @click="gg">去投资</router-link>
        </div>
    </div>
</template>
<script>
    import mainTab from '@/components/mainTab/mainTab'
    export default {
        data() {
            return {
                tabName: 'home'
            }
        },
        methods: {
            chageTab() {
                console.log(5);
            },
            gg(){
                console.log('去投资....')
            }
        },
        components: {
            mainTab
        }
    }
</script>
<style lang="scss">
</style>