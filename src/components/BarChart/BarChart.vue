<template>
    <div class="barchart">
        <div class="header"><span class="num"><em>{{ avg }}</em>{{ chartTitle }}</span><span
                class="tip-val">建议值：{{ tipVal }}</span></div>
        <div class="content">
            <IEcharts :option="bar" :resizable="true"></IEcharts>
        </div>
        <div class="footer"><i class="icon-tips"></i><span class="txt">建议值根据世界卫生组织的建议和您的身体状态分析得出</span></div>
    </div>
</template>

<script type="text/ecmascript-6">
    import IEcharts from 'vue-echarts-v3';

    export default {
        name: 'BarChart',
        components: {
            IEcharts
        },
        props: {
            avg: {
                type: Number
            },
            chartTitle: {
                type: String
            },
            tipVal: {
                type: Number
            },
            selectedColor: {
                type: String
            },
            high: {
                type: String
            },
            chartData: {
                type: Object
            }
        },
        data() {
            return {
                bar: {
                    color: ['rgba(64, 63, 69, 0.2)'],
                    grid: [{
                        left: '0',
                        top: '30',
                        width: '100%',
                        height: '65%'
                    }],
                    xAxis: [{
                        type: 'category',
                        axisLine: {
                            show: true,
                            onZero: true,
                            lineStyle: {
                                color: '#777',
                                width: 1,
                                type: 'solid'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#777',
                                fontSize: 13
                            }
                        },
                        splitLine: {
                            show: false
                        },
                        boundaryGap: ['10%', '10%'],
                        data: this.chartData.timeLine
                    }],
                    yAxis: [{
                        type: 'value',
                        scale: false,
                        axisLine: {
                            show: true,
                            onZero: true,
                            lineStyle: {
                                color: '#777',
                                width: 1,
                                type: 'solid'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            show: false
                        },
                        splitLine: {
                            show: false
                        }
                    }],
                    series: [{
                        type: 'bar',
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: true,
                                position: 'top',
                                offset: [0, -7],
                                textStyle: {
                                    color: '#343339',
                                    fontSize: 10
                                }
                            }
                        },
                        itemStyle: {
                            emphasis: {
                                color: this.selectedColor
                            }
                        },
                        markLine: {
                            silent: true,
                            symbol: 'circle',
                            symbolSize: [0, 0],
                            lineStyle: {
                                normal: {
                                    color: '#dadada',
                                    type: 'dashed'
                                }
                            },
                            data: [
                                {name: '建议值', yAxis: +this.tipVal}
                            ]
                        },
                        data: this.chartData.trendData
                    }]
                }
            };
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus">
    .barchart
        height 1.92rem
        padding .1024rem
        background #fff
        margin-top .08533rem
        box-sizing border-box
        .header
            display flex
            color #343339
            .num
                flex 1
                font-size .1024rem
                text-align left
                em
                    font-size .17067rem
                    font-family 'Font123go'
                    font-style normal
                    margin 0 .04267rem
            .tip-val
                flex 1
                padding .08rem 0 0 0
                font-size .08533rem
                text-align right
        .content
            height 1.4507rem
        .footer
            display flex
            .txt
                flex 1
                height .1024rem
                line-height .1024rem
                font-size .08533rem
                color #777
            i.icon-tips
                width .1024rem
                height .1024rem
                line-height .1024rem
                margin 0 .06827rem
                color #777
                font-size .1024rem
</style>
