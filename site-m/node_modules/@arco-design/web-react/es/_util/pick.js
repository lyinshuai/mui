// pick item from object
export default function pick(obj, keys) {
    var clone = {};
    keys.forEach(function (key) {
        var k = key;
        if (key in obj) {
            clone[k] = obj[k];
        }
    });
    return clone;
}
