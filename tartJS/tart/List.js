/**
 * Tart Javascript Library base
 *
 * Copyright (c) 2009-2010 Techinox Information Technologies (http://www.techinox.com)
 * Techinox Commercial License
 *
 * @author osman.yuksel@tart.com.tr (Osman Yuksel)
 */

/**
 * @fileoverview tart.List to handle List typed data structures extended from tart.Collection.
 */

goog.provide('tart.List');

goog.require('tart.Collection');



/**
 * List data structure
 *
 * @extends {tart.Collection}
 * @constructor
 */
tart.List = function() {
    goog.base(this);

    /** @private **/
    this.keyCount_ = 0;
};
goog.inherits(tart.List, tart.Collection);


/**
 * Adds a new item to list .
 *
 * @param {*} value Value for the pair.
 */
tart.List.prototype.addItem = function(value) {
    tart.Collection.prototype.addItem.call(this, this.keyCount_++, value);
};
