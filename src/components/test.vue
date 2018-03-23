<template>
    <div>
        <div class="div" @click='getAction'>
            {{active}}
        </div>
        <div v-show='active'>aloga</div>
        <button @click="toggleActive">切換</button>
    </div>
    
</template>

<style lang="scss">
    $width: 100px;
    $height: 200px;
    .div {
        width: $width;
        height: $height;
        background: red;
    }
</style>

<script>
    export default {
        data() {
            return {
                active: true
            }
        },
        methods: {
            getAction() {
                this.active = this.$store.state.active
                console.log(this.active)
            },
            toggleActive() {
                console.log('sdf')
                this.$store.dispatch ('toggleActive')
            }
        }
    }
</script>