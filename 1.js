ctx.prototype.__applyStyleState = function (styleState) {
    iterateOnObject(styleState, (key, value) => {
        this[key] = value;
    });
};

ctx.prototype.__setDefaultStyles = function () {
    iterateOnObject(STYLES, (key, value) => {
        this[key] = value.canvas;
    });
};

ctx.prototype.__getStyleState = function () {
    var styleState = {};
    iterateOnObject(STYLES, (key) => {
        styleState[key] = this[key];
    });
    return styleState;
};

function iterateOnObject(obj, action) {
    var keys = Object.keys(obj), i, key;
    for (i = 0; i < keys.length; i++) {
        key = keys[i];
        action(key, obj[key]);
    }
}
