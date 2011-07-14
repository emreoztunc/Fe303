/**
 * Tart Javascript Library base
 *
 * Copyright (c) 2009-2010 Techinox Information Technologies (http://www.techinox.com)
 * Techinox Commercial License
 *
 * @author osman.yuksel@tart.com.tr (Osman Yuksel)
 */

/**
 * @fileoverview tart.component.Model base model.
 */

goog.provide('tart.component.Model');

goog.require('goog.structs.Map');



/**
 * Base model
 *
 * @constructor
 */
tart.component.Model = function() {
    /** @private **/
    this.items_ = null;

    this.params = new goog.structs.Map();
};


/**
 * Abstract method to load data from any resource
 */
tart.component.Model.prototype.load = goog.abstractMethod;


/**
 * getter for items
 * @return {Object} items all items.
 */
tart.component.Model.prototype.getItems = function() {
    return this.items_;
};


/**
 * Setter for items
 * @param {Object} items items to be set.
 */
tart.component.Model.prototype.setItems = function(items) {
    this.items_ = items;
};
