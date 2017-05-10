<template>
    <div class="trend">
        <DateSwiper :dateType="dateType" @change="changeDateHandler"></DateSwiper>
        <BarChart :avg="avgStep"
                  :chartTitle="'平均步数'"
                  :tipVal="tipStep | notZero"
                  :chartData="{trendData:sTrend, timeLine}"
                  :selectedColor="'#ff4612'"
                  :high="'#ffd3c6'">
        </BarChart>
        <BarChart :avg="avgCalorie"
                  :chartTitle="'平均消耗（大卡）'"
                  :tipVal="tipCalorie | notZero"
                  :chartData="{trendData:cTrend, timeLine}"
                  :selectedColor="'#ffb300'"
                  :high="'#ffe3a3'">
        </BarChart>
        <BarChart :avg="avgMinutes"
                  :chartTitle="'平均时长（分钟）'"
                  :tipVal="tipMinutes | notZero"
                  :chartData="{trendData:mTrend, timeLine}"
                  :selectedColor="'#98e961'"
                  :high="'#d6f6c0'">
        </BarChart>
    </div>
</template>

<script type="text/ecmascript-6">
    import DateSwiper from 'components/DateSwiper/DateSwiper';
    import BarChart from 'components/BarChart/BarChart';
    import moment from 'moment';

    export default {
        props: {
            user: {
                type: Object
            }
        },
        data() {
            return {
                dateType: 1,
                avgStep: 0,
                avgCalorie: 0,
                avgMinutes: 0,
                tipStep: 0,
                tipCalorie: 0,
                tipMinutes: 0,
                stepTrend: [],
                calorieTrend: [],
                minutesTrend: [],
                timeLine: []
            };
        },
        filters: {
            notZero(value) {
                return value > 0 ? value : 1;
            }
        },
        computed: {
            sTrend() {
                return this._highlight(this.stepTrend, this.tipStep, '#ffd3c6');
            },
            cTrend() {
                return this._highlight(this.calorieTrend, this.tipCalorie, '#ffe3a3');
            },
            mTrend() {
                return this._highlight(this.minutesTrend, this.tipMinutes, '#d6f6c0');
            }
        },
        created() {
            // console.log('-----trend------');
            this.dateType = this.user.period;
            let fromDay = this._getDefaultStartDay(this.dateType);
            this._getTrendData(
                this.user.userid,
                this.user.sessionid,
                this.user.id,
                this.user.period,
                fromDay
            );

            // 汉化
            // moment.locale('zh-cn');
        },
        methods: {
            _highlight(arr, tipVal, high) {
                if (tipVal > 0) {
                    for (let i = 0; i < arr.length; i++) {
                        if (arr[i] > tipVal) {
                            arr[i] = {
                                value: arr[i],
                                itemStyle: {
                                    normal: {
                                        color: high
                                    }
                                }
                            };
                        }
                    }
                }
                return arr;
            },
            _getDefaultStartDay(dateType) {
                const WEEKLY = '1';
                const MONTHLY = '2';
                const YEARLY = '3';

                switch (dateType) {
                    case WEEKLY:
                        return moment().startOf('week').format('YYYY-MM-DD');
                    case MONTHLY:
                        return moment().startOf('month').format('YYYY-MM-DD');
                    case YEARLY:
                        return moment().startOf('year').format('YYYY-MM-DD');
                    default:
                        return moment().startOf('week').format('YYYY-MM-DD');
                }
            },
            _getTrendData(userId, sessionId, id, period, fromDay) {
                const ERR_OK = 0;
                // http://121.43.113.78
                this.$http.get('http://121.43.113.78/xingjiansport/V3/Health/getExerciseAmountTrend?userid=' + userId + '&sessionid=' + sessionId + '&id=' + id + '&period=' + period + '&from_day=' + fromDay)
                    .then((response) => {
                        response = response.body;
                        if (response.errorcode === ERR_OK) {
                            this._handleTrendData(response.result);
                        }
                    }, (response) => {
                        console.log('--------error-------');
                        console.log(response);
                    });
            },
            _handleTrendData(trend) {
                this.avgStep = trend.avg_stepcount;
                this.avgCalorie = trend.avg_calorie;
                this.avgMinutes = trend.avg_minutes;
                this.tipStep = trend.suggest_stepcount;
                this.tipCalorie = trend.suggest_calorie;
                this.tipMinutes = trend.suggest_minutes;
                /**
                 * 数组长度重新设置为0
                 * 解决冗余数据问题
                 */
                this.stepTrend.length = 0;
                this.calorieTrend.length = 0;
                this.minutesTrend.length = 0;
                this.timeLine.length = 0;

                for (let i = 0; i < trend.trends.length; i++) {
                    this.stepTrend.push(trend.trends[i].stepcount);
                    this.calorieTrend.push(trend.trends[i].calorie);
                    this.minutesTrend.push(trend.trends[i].minutes);
                    if (trend.trends.length === 7) {
                        this.timeLine.push(moment().weekday(trend.trends[i].weekday).format('ddd'));
                    } else {
                        if (this.dateType === '2') {
                            this.timeLine.push(moment(trend.trends[i].date).format('DD'));
                        } else if (this.dateType === '3') {
                            this.timeLine.push(moment(trend.trends[i].date).format('MM'));
                        }
                    }
                }
            },
            changeDateHandler(now, date, type) {
//                console.log('------changeDate------');
//                console.log(moment(now).startOf('week').format('YYYY-MM-DD'));
//                console.log(moment(now).startOf('month').format('YYYY-MM-DD'));
//                console.log(moment(now).startOf('year').format('YYYY-MM-DD'));
//                console.log('----------------------');
//                console.log(date);
//                console.log('----------------------');

                const WEEKLY = '1';
                const MONTHLY = '2';
                const YEARLY = '3';

                if (type === WEEKLY) {
                    this._getTrendData(
                        this.user.userid,
                        this.user.sessionid,
                        this.user.id,
                        WEEKLY,
                        moment(now).startOf('week').format('YYYY-MM-DD')
                    );
                }

                if (type === MONTHLY) {
                    this._getTrendData(
                        this.user.userid,
                        this.user.sessionid,
                        this.user.id,
                        MONTHLY,
                        moment(now).startOf('month').format('YYYY-MM-DD')
                    );
                }

                if (type === YEARLY) {
                    this._getTrendData(
                        this.user.userid,
                        this.user.sessionid,
                        this.user.id,
                        YEARLY,
                        moment(now).startOf('year').format('YYYY-MM-DD')
                    );
                }
            }
        },
        components: {
            BarChart,
            DateSwiper
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .trend
        width 100%
        height 100%
        overflow hidden
        padding .298667rem 0 .8533rem
        background #f5f5f5
</style>
