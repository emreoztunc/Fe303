/**
 * Tart Javascript Library base
 *
 * Copyright (c) 2009-2010 Techinox Information Technologies (http://www.techinox.com)
 * Techinox Commercial License
 *
 * @author osman.yuksel@tart.com.tr (Osman Yuksel)
 */

/**
 * @fileoverview tart.components.Model is a base class for all components Models's.
 *
 * Example usage:
 *
 * var ModelClass = function () {
 *     goog.base(this);
 * };
 * goog.inherits(ModelClass, tart.components.Model);
 *
 * ModelClass.EventTypes = {
 *     SOMETHING_HAPPENED : "foobar"
 * };
 *
 * ModelClass.prototype.doSomething = function () {
 *     //do some stuff here, fetch data etc.
 *     this.dispatchEvent({type: ModelClass.EventTypes.SOMETHING_HAPPENED});
 * };
 */

goog.require('goog.debug.ErrorHandler');
goog.require('goog.events.EventHandler');
goog.require('goog.events.EventTarget');

goog.provide('tart.components.Model');



/**
 * All component models should be inherited from goog.events.EventTarget
 * to publish events to controllers
 * @extends {goog.events.EventTarget}
 * @constructor
 */
tart.components.Model = function() {
    goog.events.EventTarget.call(this);
};
goog.inherits(tart.components.Model, goog.events.EventTarget);


/** @typedef {{type: string, oldValue, newValue}} */
tart.components.Model.Event;


/**
 * Overriding goog.events.EventTarget's dispatchEvent method, to make this event consistent in application
 *
 * @param {Object|string} modelEvent event object which has type, oldValue and newValue fields.
 * @return {boolean} .
 * @override
 */
tart.components.Model.prototype.dispatchEvent = function(modelEvent) {
    return goog.base(this, 'dispatchEvent', modelEvent);
};
