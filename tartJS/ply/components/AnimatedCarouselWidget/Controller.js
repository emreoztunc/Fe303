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
 *  var model = new ply.components.AnimatedCarouselWidget.Model();
 *  var view = new ply.components.AnimatedCarouselWidget.View();
 *
 *  var controller = new ply.components.AnimatedCarouselWidget.Controller(model, view);
 *  var dom = controller.getDOM();
 *  dom.appendTo('body');
 *
 *  model.getItems();
 *
 *  model.next();
 *  model.prev(2);
 *  model.next(3);
 */

goog.require('goog.debug.ErrorHandler');
goog.require('goog.events.EventHandler');
goog.require('goog.events.EventTarget');

goog.require('ply.components.AnimatedCarouselWidget.Model');
goog.require('ply.components.AnimatedCarouselWidget.View');
goog.require('ply.components.CarouselWidget.Controller');

goog.provide('ply.components.AnimatedCarouselWidget.Controller');

/**
 * Example controller class
 *
 * @param {tart.components.Model=} model Model object instance.
 * @param {tart.components.View=} view View object instance.
 * @extends {ply.components.CarouselWidget.Controller}
 *
 * @constructor
 */
ply.components.AnimatedCarouselWidget.Controller = function(model, view) {
    goog.base(this, model, view);
};
goog.inherits(ply.components.AnimatedCarouselWidget.Controller, ply.components.CarouselWidget.Controller);
