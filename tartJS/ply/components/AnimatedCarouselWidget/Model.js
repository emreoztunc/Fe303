/**
 * Tart Javascript Library base
 *
 * Copyright (c) 2009-2010 Techinox Information Technologies (http://www.techinox.com)
 * Techinox Commercial License
 *
 * @author osman.yuksel@tart.com.tr (Osman Yuksel)
 */

/**
 * @fileoverview ply.components.AnimatedCarouselWidget.Model is a sample component example for Playstore.
 */

goog.require('ply.components.CarouselWidget.Model');

goog.provide('ply.components.AnimatedCarouselWidget.Model');

/**
 * All component models should be inherited from goog.events.EventTarget
 * to publish events to controllers
 * @extends {ply.components.CarouselWidget.Model}
 * @constructor
 */
ply.components.AnimatedCarouselWidget.Model = function() {
    goog.base(this);
};
goog.inherits(ply.components.AnimatedCarouselWidget.Model, ply.components.CarouselWidget.Model);

/**
 * Get carousel items
 */
ply.components.AnimatedCarouselWidget.Model.prototype.getItems = function() {
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
