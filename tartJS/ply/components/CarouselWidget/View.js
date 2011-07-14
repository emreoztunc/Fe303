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
 * Example usage:
 */


goog.require('ply.components.CarouselWidget.Template');
goog.require('tart.components.View');

goog.provide('ply.components.CarouselWidget.View');

/**
 * example view class
 *
 * @extends {tart.components.View}
 * @constructor
 */
ply.components.CarouselWidget.View = function() {
    goog.base(this);

    this.domMappings = ply.components.CarouselWidget.Template.domMappings;

    this.output_ = ply.components.CarouselWidget.Template.base();
};
goog.inherits(ply.components.CarouselWidget.View, tart.components.View);


/**
 * Build carousel items from item arra
 *
 * @param {Array.<Object>} itemArray carousel data array.
 */
ply.components.CarouselWidget.View.prototype.buildCarouselItems = function(itemArray) {
    var carouselText = ply.components.CarouselWidget.Template.carouselItems(itemArray);
    this.get(this.domMappings.ITEMS).html(carouselText);
};


/**
 * Render method which has to be overriden
 *
 * @return {string} markup.
 */
ply.components.CarouselWidget.View.prototype.render = function() {
    return this.output_;
};

/**
 * get all carousel items' DOM reference
 *
 * @return {Object} DOM refernce.
 * @protected
 */
ply.components.CarouselWidget.View.prototype.getAllCarouselItemsDomReference = function() {
    var carouselItems = this.get(this.domMappings.ITEMS);

    //TODO: there should be more efficent way to find all direct childs
    var allCarouselItems = carouselItems.find('>*');

    return allCarouselItems;
};


/**
 * Animate carousel with given rule
 *
 * @param {string} direction  'next' or 'previous' TODO: this should be enumarated.
 * @param {Array.<Object>} diff items to be inserted.
 */
ply.components.CarouselWidget.View.prototype.move = function(direction, diff) {
    if (diff.length > 0) {

        var moveCount = diff.length;

        var carouselItems = this.get(this.domMappings.ITEMS);

        var width = ply.components.CarouselWidget.Template.properties.CAROUSEL_ITEM_WIDTH * moveCount;

        var allCarouselItems = this.getAllCarouselItemsDomReference();

        var markup = ply.components.CarouselWidget.Template.carouselItems(diff);

        if (direction == 'next') {
            carouselItems.append(markup);

            for (var i = 0; i < moveCount; i++) {
                allCarouselItems.eq(i).remove();
            }
        }
        else {
            carouselItems.prepend(markup);

            carouselItems.css('margin-left', '-' + width + 'px');
            for (var i = moveCount; i > 0; i--) {
                allCarouselItems.eq(-1 * i).remove();
            }
        }

        carouselItems.css('margin-left', '0px');
    }
};
