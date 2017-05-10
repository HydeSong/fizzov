webpackJsonp([1],{

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(130)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(128),
  /* template */
  __webpack_require__(138),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_ExerciseTrend_ExerciseTrend__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_ExerciseTrend_ExerciseTrend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_components_ExerciseTrend_ExerciseTrend__);




__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
    mode: 'history',
    routes: [{
        path: '/',
        redirect: '/ExerciseTrend'
    }, {
        path: '/ExerciseTrend',
        component: __WEBPACK_IMPORTED_MODULE_2_components_ExerciseTrend_ExerciseTrend___default.a
    }]
}));

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(131)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(125),
  /* template */
  __webpack_require__(139),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = urlParse;
/**
 * 解析URL参数
 * @example ?id=12345&a=b
 * @return Object {id:12345,a:b}
 */
function urlParse(window) {
    var url = '';
    if (window && window.location && window.location.search) {
        url = window.location.search;
    }
    var obj = {};
    var reg = /[?&][^?&]+=[^?&]+/g;
    var arr = url.match(reg);

    if (arr) {
        arr.forEach(function (item) {
            var tempArr = item.substring(1).split('=');
            var key = decodeURIComponent(tempArr[0]);
            var value = decodeURIComponent(tempArr[1]);
            obj[key] = value;
        });
    }
    return obj;
};

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_router__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_resource__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_resource___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_resource__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_common_stylus_index_styl__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_common_stylus_index_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_common_stylus_index_styl__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.



// import Vuex from 'vuex';




__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_vue_resource___default.a);
// Vue.use(Vuex);

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_1_router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_3__App___default.a }
});

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_ExerciseTrend_ExerciseTrend__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_ExerciseTrend_ExerciseTrend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_components_ExerciseTrend_ExerciseTrend__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_common_js_utils__ = __webpack_require__(123);
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            user: {}
        };
    },
    created() {
        this.user = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_common_js_utils__["a" /* urlParse */])(window);
    },
    components: {
        ExerciseTrend: __WEBPACK_IMPORTED_MODULE_0_components_ExerciseTrend_ExerciseTrend___default.a
    }
});

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_echarts_v3__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_echarts_v3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_echarts_v3__);
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'BarChart',
    components: {
        IEcharts: __WEBPACK_IMPORTED_MODULE_0_vue_echarts_v3___default.a
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
                        data: [{ name: '建议值', yAxis: +this.tipVal }]
                    },
                    data: this.chartData.trendData
                }]
            }
        };
    },
    mounted() {
        // console.log('------------------mounted-----------------');
        for (let i = 0; i < this.chartData.trendData.length; i++) {
            if (this.chartData.trendData[i] > this.tipVal) {
                this.chartData.trendData[i] = {
                    value: this.chartData.trendData[i],
                    itemStyle: {
                        normal: {
                            color: this.high
                        }
                    }
                };
            }
        }
    },
    updated() {
        // console.log('------------------updated-----------------');
        for (let i = 0; i < this.chartData.trendData.length; i++) {
            if (this.chartData.trendData[i] > this.tipVal) {
                this.chartData.trendData[i] = {
                    value: this.chartData.trendData[i],
                    itemStyle: {
                        normal: {
                            color: this.high
                        }
                    }
                };
            }
        }
    },
    methods: {
        onReady(instance) {
            // console.log(instance);
        }
    }
});

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
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
                let date = __WEBPACK_IMPORTED_MODULE_0_moment___default()().startOf('week').format('MM月DD日') + '-' + __WEBPACK_IMPORTED_MODULE_0_moment___default()().endOf('week').format('MM月DD日');

                if (this.dateType === WEEKLY) {
                    date = __WEBPACK_IMPORTED_MODULE_0_moment___default()().startOf('week').format('MM月DD日') + '-' + __WEBPACK_IMPORTED_MODULE_0_moment___default()().endOf('week').format('MM月DD日');
                }

                if (this.dateType === MONTHLY) {
                    date = __WEBPACK_IMPORTED_MODULE_0_moment___default()().startOf('month').format('MM月DD日') + '-' + __WEBPACK_IMPORTED_MODULE_0_moment___default()().endOf('month').format('MM月DD日');
                }

                if (this.dateType === YEARLY) {
                    date = __WEBPACK_IMPORTED_MODULE_0_moment___default()().startOf('year').format('YYYY年MM月DD日') + '-' + __WEBPACK_IMPORTED_MODULE_0_moment___default()().endOf('year').format('YYYY年MM月DD日');
                }

                return date;
            })(),
            now: __WEBPACK_IMPORTED_MODULE_0_moment___default()().format()
        };
    },
    methods: {
        _handleDate(direction, dateType) {
            let thisDate = __WEBPACK_IMPORTED_MODULE_0_moment___default()(this.now);
            let prev = __WEBPACK_IMPORTED_MODULE_0_moment___default()(thisDate).subtract(7, 'days');
            let next = __WEBPACK_IMPORTED_MODULE_0_moment___default()(thisDate).add(7, 'days');
            const MONTHLY = '2';
            const YEARLY = '3';

            if (direction === 'prev') {
                switch (dateType) {
                    case MONTHLY:
                        prev = __WEBPACK_IMPORTED_MODULE_0_moment___default()(thisDate).subtract(1, 'months');
                        this.date = __WEBPACK_IMPORTED_MODULE_0_moment___default()(prev).startOf('month').format('MM月DD日') + '-' + __WEBPACK_IMPORTED_MODULE_0_moment___default()(prev).endOf('month').format('MM月DD日');
                        // prev month MM月DD日
                        break;
                    case YEARLY:
                        prev = __WEBPACK_IMPORTED_MODULE_0_moment___default()(thisDate).subtract(1, 'years');
                        this.date = __WEBPACK_IMPORTED_MODULE_0_moment___default()(prev).startOf('year').format('YYYY年MM月DD日') + '-' + __WEBPACK_IMPORTED_MODULE_0_moment___default()(prev).endOf('year').format('YYYY年MM月DD日');
                        break;
                    default:
                        this.date = __WEBPACK_IMPORTED_MODULE_0_moment___default()(prev).startOf('week').format('MM月DD日') + '-' + __WEBPACK_IMPORTED_MODULE_0_moment___default()(prev).endOf('week').format('MM月DD日');
                }
                // 把当前的时间暂存
                this.now = prev;
            }

            if (direction === 'next') {
                switch (dateType) {
                    case MONTHLY:
                        next = __WEBPACK_IMPORTED_MODULE_0_moment___default()(thisDate).add(1, 'months');
                        this.date = __WEBPACK_IMPORTED_MODULE_0_moment___default()(next).startOf('months').format('MM月DD日') + '-' + __WEBPACK_IMPORTED_MODULE_0_moment___default()(next).endOf('months').format('MM月DD日');
                        break;
                    case YEARLY:
                        next = __WEBPACK_IMPORTED_MODULE_0_moment___default()(thisDate).add(1, 'years');
                        this.date = __WEBPACK_IMPORTED_MODULE_0_moment___default()(next).startOf('year').format('YYYY年MM月DD日') + '-' + __WEBPACK_IMPORTED_MODULE_0_moment___default()(next).endOf('year').format('YYYY年MM月DD日');
                        break;
                    default:
                        this.date = __WEBPACK_IMPORTED_MODULE_0_moment___default()(next).startOf('week').format('MM月DD日') + '-' + __WEBPACK_IMPORTED_MODULE_0_moment___default()(next).endOf('week').format('MM月DD日');
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
});

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_DateSwiper_DateSwiper__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_DateSwiper_DateSwiper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_components_DateSwiper_DateSwiper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_BarChart_BarChart__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_BarChart_BarChart___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_components_BarChart_BarChart__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
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
    created() {
        // console.log('-----trend------');
        this.dateType = this.user.period;
        let fromDay = this._getDefaultStartDay(this.dateType);
        this._getTrendData(this.user.userid, this.user.sessionid, this.user.id, this.user.period, fromDay);

        // 汉化
        // moment.locale('zh-cn');
    },
    methods: {
        _getDefaultStartDay(dateType) {
            const WEEKLY = '1';
            const MONTHLY = '2';
            const YEARLY = '3';

            switch (dateType) {
                case WEEKLY:
                    return __WEBPACK_IMPORTED_MODULE_2_moment___default()().startOf('week').format('YYYY-MM-DD');
                case MONTHLY:
                    return __WEBPACK_IMPORTED_MODULE_2_moment___default()().startOf('month').format('YYYY-MM-DD');
                case YEARLY:
                    return __WEBPACK_IMPORTED_MODULE_2_moment___default()().startOf('year').format('YYYY-MM-DD');
                default:
                    return __WEBPACK_IMPORTED_MODULE_2_moment___default()().startOf('week').format('YYYY-MM-DD');
            }
        },
        _getTrendData(userId, sessionId, id, period, fromDay) {
            const ERR_OK = 0;
            // http://121.43.113.78
            this.$http.get('http://121.43.113.78/xingjiansport/V3/Health/getExerciseAmountTrend?userid=' + userId + '&sessionid=' + sessionId + '&id=' + id + '&period=' + period + '&from_day=' + fromDay).then(response => {
                response = response.body;
                if (response.errorcode === ERR_OK) {
                    this._handleTrendData(response.result);
                }
            }, response => {
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
                    this.timeLine.push(__WEBPACK_IMPORTED_MODULE_2_moment___default()().weekday(trend.trends[i].weekday).format('ddd'));
                } else {
                    if (this.dateType === '2') {
                        this.timeLine.push(__WEBPACK_IMPORTED_MODULE_2_moment___default()(trend.trends[i].date).format('DD'));
                    } else if (this.dateType === '3') {
                        this.timeLine.push(__WEBPACK_IMPORTED_MODULE_2_moment___default()(trend.trends[i].date).format('MM'));
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
                this._getTrendData(this.user.userid, this.user.sessionid, this.user.id, WEEKLY, __WEBPACK_IMPORTED_MODULE_2_moment___default()(now).startOf('week').format('YYYY-MM-DD'));
            }

            if (type === MONTHLY) {
                this._getTrendData(this.user.userid, this.user.sessionid, this.user.id, MONTHLY, __WEBPACK_IMPORTED_MODULE_2_moment___default()(now).startOf('month').format('YYYY-MM-DD'));
            }

            if (type === YEARLY) {
                this._getTrendData(this.user.userid, this.user.sessionid, this.user.id, YEARLY, __WEBPACK_IMPORTED_MODULE_2_moment___default()(now).startOf('year').format('YYYY-MM-DD'));
            }
        }
    },
    components: {
        BarChart: __WEBPACK_IMPORTED_MODULE_1_components_BarChart_BarChart___default.a,
        DateSwiper: __WEBPACK_IMPORTED_MODULE_0_components_DateSwiper_DateSwiper___default.a
    }
});

/***/ }),

/***/ 129:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 130:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 131:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 132:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 3,
	"./af.js": 3,
	"./ar": 10,
	"./ar-dz": 4,
	"./ar-dz.js": 4,
	"./ar-kw": 5,
	"./ar-kw.js": 5,
	"./ar-ly": 6,
	"./ar-ly.js": 6,
	"./ar-ma": 7,
	"./ar-ma.js": 7,
	"./ar-sa": 8,
	"./ar-sa.js": 8,
	"./ar-tn": 9,
	"./ar-tn.js": 9,
	"./ar.js": 10,
	"./az": 11,
	"./az.js": 11,
	"./be": 12,
	"./be.js": 12,
	"./bg": 13,
	"./bg.js": 13,
	"./bn": 14,
	"./bn.js": 14,
	"./bo": 15,
	"./bo.js": 15,
	"./br": 16,
	"./br.js": 16,
	"./bs": 17,
	"./bs.js": 17,
	"./ca": 18,
	"./ca.js": 18,
	"./cs": 19,
	"./cs.js": 19,
	"./cv": 20,
	"./cv.js": 20,
	"./cy": 21,
	"./cy.js": 21,
	"./da": 22,
	"./da.js": 22,
	"./de": 25,
	"./de-at": 23,
	"./de-at.js": 23,
	"./de-ch": 24,
	"./de-ch.js": 24,
	"./de.js": 25,
	"./dv": 26,
	"./dv.js": 26,
	"./el": 27,
	"./el.js": 27,
	"./en-au": 28,
	"./en-au.js": 28,
	"./en-ca": 29,
	"./en-ca.js": 29,
	"./en-gb": 30,
	"./en-gb.js": 30,
	"./en-ie": 31,
	"./en-ie.js": 31,
	"./en-nz": 32,
	"./en-nz.js": 32,
	"./eo": 33,
	"./eo.js": 33,
	"./es": 35,
	"./es-do": 34,
	"./es-do.js": 34,
	"./es.js": 35,
	"./et": 36,
	"./et.js": 36,
	"./eu": 37,
	"./eu.js": 37,
	"./fa": 38,
	"./fa.js": 38,
	"./fi": 39,
	"./fi.js": 39,
	"./fo": 40,
	"./fo.js": 40,
	"./fr": 43,
	"./fr-ca": 41,
	"./fr-ca.js": 41,
	"./fr-ch": 42,
	"./fr-ch.js": 42,
	"./fr.js": 43,
	"./fy": 44,
	"./fy.js": 44,
	"./gd": 45,
	"./gd.js": 45,
	"./gl": 46,
	"./gl.js": 46,
	"./gom-latn": 47,
	"./gom-latn.js": 47,
	"./he": 48,
	"./he.js": 48,
	"./hi": 49,
	"./hi.js": 49,
	"./hr": 50,
	"./hr.js": 50,
	"./hu": 51,
	"./hu.js": 51,
	"./hy-am": 52,
	"./hy-am.js": 52,
	"./id": 53,
	"./id.js": 53,
	"./is": 54,
	"./is.js": 54,
	"./it": 55,
	"./it.js": 55,
	"./ja": 56,
	"./ja.js": 56,
	"./jv": 57,
	"./jv.js": 57,
	"./ka": 58,
	"./ka.js": 58,
	"./kk": 59,
	"./kk.js": 59,
	"./km": 60,
	"./km.js": 60,
	"./kn": 61,
	"./kn.js": 61,
	"./ko": 62,
	"./ko.js": 62,
	"./ky": 63,
	"./ky.js": 63,
	"./lb": 64,
	"./lb.js": 64,
	"./lo": 65,
	"./lo.js": 65,
	"./lt": 66,
	"./lt.js": 66,
	"./lv": 67,
	"./lv.js": 67,
	"./me": 68,
	"./me.js": 68,
	"./mi": 69,
	"./mi.js": 69,
	"./mk": 70,
	"./mk.js": 70,
	"./ml": 71,
	"./ml.js": 71,
	"./mr": 72,
	"./mr.js": 72,
	"./ms": 74,
	"./ms-my": 73,
	"./ms-my.js": 73,
	"./ms.js": 74,
	"./my": 75,
	"./my.js": 75,
	"./nb": 76,
	"./nb.js": 76,
	"./ne": 77,
	"./ne.js": 77,
	"./nl": 79,
	"./nl-be": 78,
	"./nl-be.js": 78,
	"./nl.js": 79,
	"./nn": 80,
	"./nn.js": 80,
	"./pa-in": 81,
	"./pa-in.js": 81,
	"./pl": 82,
	"./pl.js": 82,
	"./pt": 84,
	"./pt-br": 83,
	"./pt-br.js": 83,
	"./pt.js": 84,
	"./ro": 85,
	"./ro.js": 85,
	"./ru": 86,
	"./ru.js": 86,
	"./sd": 87,
	"./sd.js": 87,
	"./se": 88,
	"./se.js": 88,
	"./si": 89,
	"./si.js": 89,
	"./sk": 90,
	"./sk.js": 90,
	"./sl": 91,
	"./sl.js": 91,
	"./sq": 92,
	"./sq.js": 92,
	"./sr": 94,
	"./sr-cyrl": 93,
	"./sr-cyrl.js": 93,
	"./sr.js": 94,
	"./ss": 95,
	"./ss.js": 95,
	"./sv": 96,
	"./sv.js": 96,
	"./sw": 97,
	"./sw.js": 97,
	"./ta": 98,
	"./ta.js": 98,
	"./te": 99,
	"./te.js": 99,
	"./tet": 100,
	"./tet.js": 100,
	"./th": 101,
	"./th.js": 101,
	"./tl-ph": 102,
	"./tl-ph.js": 102,
	"./tlh": 103,
	"./tlh.js": 103,
	"./tr": 104,
	"./tr.js": 104,
	"./tzl": 105,
	"./tzl.js": 105,
	"./tzm": 107,
	"./tzm-latn": 106,
	"./tzm-latn.js": 106,
	"./tzm.js": 107,
	"./uk": 108,
	"./uk.js": 108,
	"./ur": 109,
	"./ur.js": 109,
	"./uz": 111,
	"./uz-latn": 110,
	"./uz-latn.js": 110,
	"./uz.js": 111,
	"./vi": 112,
	"./vi.js": 112,
	"./x-pseudo": 113,
	"./x-pseudo.js": 113,
	"./yo": 114,
	"./yo.js": 114,
	"./zh-cn": 115,
	"./zh-cn.js": 115,
	"./zh-hk": 116,
	"./zh-hk.js": 116,
	"./zh-tw": 117,
	"./zh-tw.js": 117
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 133;

/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(129)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(126),
  /* template */
  __webpack_require__(137),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(132)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(127),
  /* template */
  __webpack_require__(140),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 137:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "barchart"
  }, [_c('div', {
    staticClass: "header"
  }, [_c('span', {
    staticClass: "num"
  }, [_c('em', [_vm._v(_vm._s(_vm.avg))]), _vm._v(_vm._s(_vm.chartTitle))]), _c('span', {
    staticClass: "tip-val"
  }, [_vm._v("建议值：" + _vm._s(_vm.tipVal))])]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('IEcharts', {
    attrs: {
      "option": _vm.bar,
      "resizable": true
    },
    on: {
      "ready": _vm.onReady
    }
  })], 1), _vm._v(" "), _vm._m(0)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "footer"
  }, [_c('i', {
    staticClass: "icon-tips"
  }), _c('span', {
    staticClass: "txt"
  }, [_vm._v("建议值根据世界卫生组织的建议和您的身体状态分析得出")])])
}]}

/***/ }),

/***/ 138:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "trend"
  }, [_c('DateSwiper', {
    attrs: {
      "dateType": _vm.dateType
    },
    on: {
      "change": _vm.changeDateHandler
    }
  }), _vm._v(" "), _c('BarChart', {
    attrs: {
      "avg": _vm.avgStep,
      "chartTitle": '平均步数',
      "tipVal": _vm.tipStep,
      "chartData": {
        trendData: _vm.stepTrend,
        timeLine: _vm.timeLine
      },
      "selectedColor": '#ff4612',
      "high": '#ffd3c6'
    }
  }), _vm._v(" "), _c('BarChart', {
    attrs: {
      "avg": _vm.avgCalorie,
      "chartTitle": '平均消耗（大卡）',
      "tipVal": _vm.tipCalorie,
      "chartData": {
        trendData: _vm.calorieTrend,
        timeLine: _vm.timeLine
      },
      "selectedColor": '#ffb300',
      "high": '#ffe3a3'
    }
  }), _vm._v(" "), _c('BarChart', {
    attrs: {
      "avg": _vm.avgMinutes,
      "chartTitle": '平均时长（分钟）',
      "tipVal": _vm.tipMinutes,
      "chartData": {
        trendData: _vm.minutesTrend,
        timeLine: _vm.timeLine
      },
      "selectedColor": '#98e961',
      "high": '#d6f6c0'
    }
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 139:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "app"
  }, [_c('ExerciseTrend', {
    attrs: {
      "user": _vm.user
    }
  })], 1)
},staticRenderFns: []}

/***/ }),

/***/ 140:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "date"
  }, [_c('div', {
    staticClass: "left",
    on: {
      "click": function($event) {
        _vm.changeDate('prev', _vm.dateType, $event)
      }
    }
  }, [_c('i', {
    staticClass: "icon-arrow-left"
  })]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.date))]), _vm._v(" "), _c('div', {
    staticClass: "right",
    on: {
      "click": function($event) {
        _vm.changeDate('next', _vm.dateType, $event)
      }
    }
  }, [_c('i', {
    staticClass: "icon-arrow-right"
  })])])
},staticRenderFns: []}

/***/ }),

/***/ 145:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[124]);