<template>
    <div class="date">
        <div class="left" @click="changeDate('prev', dateType, $event)"><i class="icon-arrow-left"></i></div>
        <span>{{ date }}</span>
        <div class="right" @click="changeDate('next', dateType, $event)"><i class="icon-arrow-right"></i></div>
    </div>
</template>

<script type="text/ecmascript-6">
    import moment from 'moment';

    export default {
        props: {
            dateType: {
                type: String,
                required: true,
                default: '1'
            }
        },
        data() {
            return {
                date: (() => {
                    const WEEKLY = '1';
                    const MONTHLY = '2';
                    const YEARLY = '3';
                    let date = moment().startOf('week').format('MM月DD日') + '-' + moment().endOf('week').format('MM月DD日');

                    if (this.dateType === WEEKLY) {
                        date = moment().startOf('week').format('MM月DD日') + '-' + moment().endOf('week').format('MM月DD日');
                    }

                    if (this.dateType === MONTHLY) {
                        date = moment().startOf('month').format('MM月DD日') + '-' + moment().endOf('month').format('MM月DD日');
                    }

                    if (this.dateType === YEARLY) {
                        date = moment().startOf('year').format('YYYY年MM月DD日') + '-' + moment().endOf('year').format('YYYY年MM月DD日');
                    }

                    return date;
                })(),
                now: moment().format()
            };
        },
        methods: {
            _handleDate(direction, dateType) {
                let thisDate = moment(this.now);
                let prev = moment(thisDate).subtract(7, 'days');
                let next = moment(thisDate).add(7, 'days');
                const MONTHLY = '2';
                const YEARLY = '3';

                if (direction === 'prev') {
                    switch (dateType) {
                        case MONTHLY:
                            prev = moment(thisDate).subtract(1, 'months');
                            this.date = moment(prev).startOf('month').format('MM月DD日') + '-' + moment(prev).endOf('month').format('MM月DD日');
                            // prev month MM月DD日
                            break;
                        case YEARLY:
                            prev = moment(thisDate).subtract(1, 'years');
                            this.date = moment(prev).startOf('year').format('YYYY年MM月DD日') + '-' + moment(prev).endOf('year').format('YYYY年MM月DD日');
                            break;
                        default:
                            this.date = moment(prev).startOf('week').format('MM月DD日') + '-' + moment(prev).endOf('week').format('MM月DD日');
                    }
                    // 把当前的时间暂存
                    this.now = prev;
                }

                if (direction === 'next') {
                    switch (dateType) {
                        case MONTHLY:
                            next = moment(thisDate).add(1, 'months');
                            this.date = moment(next).startOf('months').format('MM月DD日') + '-' + moment(next).endOf('months').format('MM月DD日');
                            break;
                        case YEARLY:
                            next = moment(thisDate).add(1, 'years');
                            this.date = moment(next).startOf('year').format('YYYY年MM月DD日') + '-' + moment(next).endOf('year').format('YYYY年MM月DD日');
                            break;
                        default:
                            this.date = moment(next).startOf('week').format('MM月DD日') + '-' + moment(next).endOf('week').format('MM月DD日');
                    }
                    // 把当前的时间暂存
                    this.now = next;
                }
            },
            changeDate(direction, dateType, e) {
                if (!e.isTrusted) {
                    return;
                }

                if (direction === 'prev') {
                    this._handleDate('prev', dateType);
                }

                if (direction === 'next') {
                    this._handleDate('next', dateType);
                }

                this.$emit('change', this.now, this.date, dateType);
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .date
        width 100%
        height .298667rem
        line-height .298667rem
        background #fff
        font-size .119467rem
        color #343339
        text-align center
        display flex
        position fixed
        top 0
        left 0
        right 0
        z-index 99
        .left, .right
            flex 1
            padding 0 .1024rem
            height .298667rem
            line-height .298667rem
        .left
            text-align left
        .right
            text-align right
</style>
