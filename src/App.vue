<template>
    <div class="app">
        <ExerciseTrend :user="user"></ExerciseTrend>
    </div>
</template>

<script type="text/ecmascript-6">
    import ExerciseTrend from 'components/ExerciseTrend/ExerciseTrend';
    import { urlParse } from 'common/js/utils';

    export default {
        data() {
            return {
                user: {}
            };
        },
        created() {
            this.user = urlParse(window);
        },
        components: {
            ExerciseTrend
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .app
        background #f5f5f5
</style>
