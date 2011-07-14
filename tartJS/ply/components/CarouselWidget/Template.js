/**
 * Tart Javascript Library base
 *
 * Copyright (c) 2009-2010 Techinox Information Technologies (http://www.techinox.com)
 * Techinox Commercial License
 *
 * @author osman.yuksel@tart.com.tr (Osman Yuksel)
 */

/**
 * @fileoverview tart.components.View is a base class for all components View's.
 *
 */

goog.provide('ply.components.CarouselWidget.Template');

/**
 * Template properties such as carousel item width
 *
 * @enum
 */
ply.components.CarouselWidget.Template.properties = {
    CAROUSEL_ITEM_WIDTH: 100
};



/**
 * Dom selector  mappings for templates
 *
 * @enum {string}
 */
ply.components.CarouselWidget.Template.domMappings = {
    PREV: '.carouselPrev',
    NEXT: '.carouselNext',
    ITEMS: '.carouselItems'
};

/**
 * Base markup for carousel
 *
 * @return {string} base markup.
 */
ply.components.CarouselWidget.Template.base = function() {
    var markup = '<div>' +
                    '<a class="carouselPrev">Prev</a>' +
                    '<div class="carouselWrapper">' +
                        '<div class="carouselItems"></div>' +
                    '</div>' +
                    '<a class="carouselNext">Next</a>' +
                '</div>';

    return markup;
};

/**
 * Markup for single carousel item
 *
 * @param {string} text text to be placed in carousel.
 * @return {string} base markup.
 */
ply.components.CarouselWidget.Template.carouselItem = function(text) {
    var markup = '<strong>' + text + '</strong>';
    return markup;
};

/**
 * Markup for carousel group
 *
 * @param {Array.<*>} itemArray carousel items.
 * @return {string} base markup.
 */
ply.components.CarouselWidget.Template.carouselItems = function(itemArray) {
    var markup = '';
    for (var i = 0; i < itemArray.length; i++) {
        var text = itemArray[i].name;
        markup += ply.components.CarouselWidget.Template.carouselItem(text);
    }

    return markup;
};
