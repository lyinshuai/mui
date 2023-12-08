import BTween from 'b-tween';
export function getColumnsFromFormat(format) {
    var units = ['H', 'h', 'm', 's', 'a', 'A'];
    var list = [];
    var use12Hours = false;
    units.forEach(function (unit) {
        if (format.indexOf(unit) !== -1) {
            list.push(unit);
            if (unit === 'a' || unit === 'A') {
                use12Hours = true;
            }
        }
    });
    return {
        list: list,
        use12Hours: use12Hours,
    };
}
var scrollIds = new Map();
export function scrollTo(element, to, duration) {
    if (scrollIds.get(element)) {
        cancelAnimationFrame(scrollIds.get(element));
    }
    if (duration <= 0) {
        element.scrollTop = to;
    }
    scrollIds.set(element, requestAnimationFrame(function () {
        var tween = new BTween({
            from: { scrollTop: element.scrollTop },
            to: { scrollTop: to },
            duration: duration,
            onUpdate: function (keys) {
                element.scrollTop = keys.scrollTop;
            },
            easing: 'quartInOut',
        });
        tween.start();
    }));
}
