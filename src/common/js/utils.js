/**
 * 解析URL参数
 * @example ?id=12345&a=b
 * @return Object {id:12345,a:b}
 */
export function urlParse(window) {
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
