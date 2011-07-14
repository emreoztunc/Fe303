/**
 * Tart Javascript Library base
 *
 * Copyright (c) 2009-2010 Techinox Information Technologies (http://www.techinox.com)
 * Techinox Commercial License
 *
 * @author osman.yuksel@tart.com.tr (Osman Yuksel)
 */

/**
 * @fileoverview tart.component.XhrModel a base model to handle xhr requests.
 */

goog.provide('tart.component.XhrModel');

goog.require('tart.XhrManager');
goog.require('tart.component.Model');



/**
 * Base model to handle xhr requests
 *
 * @extends {tart.component.Model}
 * @constructor
 */
tart.component.XhrModel = function() {
    goog.base(this);

    /** @private **/
    this.url_ = null;

    /** @private **/
    this.fethedData_ = null;

};
goog.inherits(tart.component.XhrModel, tart.component.Model);


/**
 * Set url to fetch data
 *
 * @param {string} url url to fetch data.
 */
tart.component.XhrModel.prototype.setUrl = function(url) {
    //TODO: valid url check???
    this.url_ = url;
};


/**
 * Fetch data using xhr
 *
 * @protected
 */
tart.component.XhrModel.prototype.fetchDataWithXhr = function(callback) {
    tart.XhrManager.get(this.url_, this.params.toObject(), callback);
};
