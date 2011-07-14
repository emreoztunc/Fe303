/**
 * Tart Javascript Library base
 *
 * Copyright (c) 2009-2010 Techinox Information Technologies (http://www.techinox.com)
 * Techinox Commercial License
 *
 * @author osman.yuksel@tart.com.tr (Osman Yuksel)
 */

/**
 * @fileoverview ply.components.CarouselWidget.controller is a sample component example for Playstore.
 *
 * Example usage:
 *
 *  CSS:
 *    .carouselWrapper {
 *       border: 1px solid red;
 *       width :320px;
 *       height: 30px;
 *       overflow : hidden;
 *   }
 *
 *
 *   .carouselItems {
 *       width: 600px;
 *   }
 *
 *
 *   .carouselItems strong {
 *       margin: 0 10px;
 *       width: 80px;                   // 100px with margin, which is this.view.itemWidth
 *       display: block;
 *       height: 30px;
 *       text-align: center;
 *       border:1px dashed #BBB;
 *       float: left;
 *   }
 *
 *  JAVASCRIPT:
 *
 *  var model = new ply.components.CarouselWidget.Model();
 *  var view = new ply.components.CarouselWidget.View();
 *
 *  var controller = new ply.components.CarouselWidget.Controller(model, view);
 *  var dom = controller.getDOM();
 *  dom.appendTo('body');
 *
 *  model.getItems();
 *
 *  model.next();
 *  model.prev(2);
 *  model.next(3);
 */


goog.require('goog.events.EventTarget');

goog.require('ply.components.CarouselWidget.Model');
goog.require('ply.components.CarouselWidget.View');
goog.require('tart.components.Controller');

goog.provide('ply.components.CarouselWidget.Controller');

/**
 * Example controller class
 *
 * @param {tart.components.Model=} model Model object instance.
 * @param {tart.components.View=} view View object instance.
 * @extends {tart.components.Controller}
 *
 * @constructor
 */
ply.components.CarouselWidget.Controller = function(model, view) {
    var that = this;

    that.model = model || new ply.components.CarouselWidget.Model();
    that.view = view || new ply.components.CarouselWidget.View();

    that.buildDOM();

    that.bindEvents_();
};
goog.inherits(ply.components.CarouselWidget.Controller, tart.components.Controller);

/**
 * Bind controller events
 * @private
 */
ply.components.CarouselWidget.Controller.prototype.bindEvents_ = function() {
    var that = this;

    //triggered when model.getItems() called
    goog.events.listen(that.model, ply.components.CarouselWidget.Model.EventTypes.ITEMS_LOADED, function(e) {
        that.view.buildCarouselItems(e.visibleItems);
    });

    //listen model events and call view methods
    goog.events.listen(that.model, ply.components.CarouselWidget.Model.EventTypes.NEXT, function(e) {
        that.view.move('next', e.itemsToBeInserted);
    });

    goog.events.listen(that.model, ply.components.CarouselWidget.Model.EventTypes.PREV, function(e) {
        that.view.move('prev', e.itemsToBeInserted);
    });


    //bind button events
    that.view.get(that.view.domMappings.PREV).bind('click', function(e) {
        e.preventDefault();
        that.model.prev(1);
    });

    that.view.get(that.view.domMappings.NEXT).bind('click', function(e) {
        e.preventDefault();
        that.model.next(1);
    });
};
