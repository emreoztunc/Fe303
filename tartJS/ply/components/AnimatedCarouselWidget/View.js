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
goog.require('ply.components.CarouselWidget.View');

goog.provide('ply.components.AnimatedCarouselWidget.View');

/**
 * example view class
 *
 * @extends {ply.components.CarouselWidget.View}
 *
 * @constructor
 */
ply.components.AnimatedCarouselWidget.View = function() {
    this.animating = false;
    goog.base(this);
};
goog.inherits(ply.components.AnimatedCarouselWidget.View, ply.components.CarouselWidget.View);


/**
 * Animate carousel with given rule
 *
 * @param {string} direction  'next' or 'previous' TODO: this should be enumarated.
 * @param {Array.<Object>} diff items to be inserted.
 */
ply.components.AnimatedCarouselWidget.View.prototype.move = function(direction, diff) {
    var that = this;

    if (diff.length > 0 && !that.animating) {

        that.animating = true;

        var moveCount = diff.length;

        var carouselItems = this.get(this.domMappings.ITEMS);

        var width = ply.components.CarouselWidget.Template.properties.CAROUSEL_ITEM_WIDTH * moveCount;

        var allCarouselItems = this.getAllCarouselItemsDomReference();

        var markup = ply.components.CarouselWidget.Template.carouselItems(diff);

        var marginLeft;

        var moveWidth = ply.components.CarouselWidget.Template.properties.CAROUSEL_ITEM_WIDTH * moveCount;

        if (direction == 'next') {

            carouselItems.append(markup);

            marginLeft = '-=' + moveWidth + 'px';

            carouselItems.animate({'margin-left': marginLeft}, 500, function() {
                for (var i = 0; i < moveCount; i++) {
                    allCarouselItems.eq(i).remove();
                }

                carouselItems.css('margin-left', '0px');
                that.animating = false;
            });
        }
        else {
            carouselItems.prepend(markup);

            carouselItems.css('margin-left', (-1 * moveWidth) + 'px');

            marginLeft = '+=' + moveWidth + 'px';

            carouselItems.animate({'margin-left': marginLeft}, 500, function() {
                for (var i = moveCount; i > 0; i--) {
                    allCarouselItems.eq(-1 * i).remove();
                }

                carouselItems.css('margin-left', '0px');
                that.animating = false;
            });
        }
    }
};
