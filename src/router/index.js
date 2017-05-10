import Vue from 'vue';
import Router from 'vue-router';
import ExerciseTrend from 'components/ExerciseTrend/ExerciseTrend';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/ExerciseTrend'
        },
        {
            path: '/ExerciseTrend',
            component: ExerciseTrend
        }
    ]
});
