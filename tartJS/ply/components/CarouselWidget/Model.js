/**
 * Tart Javascript Library base
 *
 * Copyright (c) 2009-2010 Techinox Information Technologies (http://www.techinox.com)
 * Techinox Commercial License
 *
 * @author osman.yuksel@tart.com.tr (Osman Yuksel)
 */

/**
 * @fileoverview ply.components.CarouselWidget.Model is a sample component example for Playstore.
 */


goog.require('goog.events.EventTarget');
goog.require('tart.CircularCarousel');
goog.require('tart.components.Model');

goog.provide('ply.components.CarouselWidget.Model');
goog.provide('ply.components.CarouselWidget.Model.EventTypes');

/**
 * All component models should be inherited from goog.events.EventTarget
 * to publish events to controllers
 * @extends {tart.components.Model}
 * @constructor
 */
ply.components.CarouselWidget.Model = function() {
    goog.base(this);
    this.carousel = undefined;
};
goog.inherits(ply.components.CarouselWidget.Model, tart.components.Model);


/**
 * event types enumaration
 * @enum {string}
 */
ply.components.CarouselWidget.Model.EventTypes = {
    ITEMS_LOADED: 'loaded',
    NEXT: 'next',
    PREV: 'prev'
};


/**
 * Get carousel items
 */
ply.components.CarouselWidget.Model.prototype.getItems = function() {

    var items = [
        {name: 'one'},
        {name: 'two'},
        {name: 'three'},
        {name: 'four'},
        {name: 'five'},
        {name: 'six'},
        {name: 'seven'}
    ];

    this.initCarousel(items);
};

/**
 * Init carousel
 *
 * @param {Array.<*>} items item list.
 */
ply.components.CarouselWidget.Model.prototype.initCarousel = function(items) {

    var that = this;

    that.carousel = new tart.CircularCarousel(items);
    that.carousel.setItemPerViewport(3);

    //when carousel moved to next
    goog.events.listen(that.carousel, tart.Carousel.EventTypes.NEXT, function(e) {

        var dispatchData = {
            type: ply.components.CarouselWidget.Model.EventTypes.NEXT,
            itemsToBeRemoved: e.itemsToBeRemoved,
            itemsToBeInserted: e.itemsToBeInserted,
            newValue: that.carousel.getVisibleItems()
        };

        that.dispatchEvent(dispatchData);
    });


    //when carousel moved to previous
    goog.events.listen(that.carousel, tart.Carousel.EventTypes.PREV, function(e) {

        var dispatchData = {
            type: ply.components.CarouselWidget.Model.EventTypes.PREV,
            itemsToBeRemoved: e.itemsToBeRemoved,
            itemsToBeInserted: e.itemsToBeInserted,
            newValue: that.carousel.getVisibleItems()
        };

        that.dispatchEvent(dispatchData);
    });



    var eventObject = {type: ply.components.CarouselWidget.Model.EventTypes.ITEMS_LOADED,
                           newValue: items,
                           oldValue: items,
                           visibleItems: that.getVisibleItems()
                      };


    that.dispatchEvent(eventObject);
};


/**
 * Get carousel items
 * @return {Array.<Object>} List of visible items.
 */
ply.components.CarouselWidget.Model.prototype.getVisibleItems = function() {
    return this.carousel.getVisibleItems();
};


/**
 * Move carousel items next
 *
 * @param {number} moveCount number of move count.
 */
ply.components.CarouselWidget.Model.prototype.next = function(moveCount) {
    this.carousel.next(moveCount);
};

/**
 * Move carousel items previous
 *
 * @param {number} moveCount number of move count.
 */
ply.components.CarouselWidget.Model.prototype.prev = function(moveCount) {
    this.carousel.prev(moveCount);
};
