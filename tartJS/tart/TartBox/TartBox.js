goog.provide('tart.TartBox');


/**
 * @param {string|jQuery} body
 */
tart.TartBox.init = function(title, body, type) {
    tart.TartBox.title = title;
    tart.TartBox.body = body;
    tart.TartBox.type = type;
};

tart.TartBox.setBodyFromEl = function(el) {
    if (!el || !el.jquery || el.length == 0) {
        throw new Error('Element not exists');
    }


    tart.TartBox.body = $(el).html();
};
