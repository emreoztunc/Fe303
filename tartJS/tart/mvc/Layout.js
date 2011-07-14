// Copyright (c) 2009-2010 Techinox Information Technologies (http://www.techinox.com)
// Techinox Commercial License
//
// @author Armagan Amcalar <armagan@tart.com.tr>

goog.provide('tart.mvc.Layout');
goog.require('tart.mvc.View');



/**
 * @constructor
 * @extends {tart.mvc.View}
 */
tart.mvc.Layout = function() {
    goog.base(this);
};
goog.inherits(tart.mvc.Layout, tart.mvc.View);


/**
 * Sets the content of the layout. This will generally be the output of a view script associated with an action.
 * @param {string} content Output of a view script.
 */
tart.mvc.Layout.prototype.setContent = function(content) {
    this.content_ = content;
};


/**
 * @return {string} Current content of the layout.
 */
tart.mvc.Layout.prototype.getContent = function() {
    return this.content_;
};


/**
 * Renders the layout.
 */
tart.mvc.Layout.prototype.render = function() {
    if (this.resetLayout == true) {
        this.getBody().html(this.markup);
        this.resetLayout = false;
    }
    else {
        this.getContentArea().html(this.getContent());
    }
};


/**
 * If resetLayout is true, the layout will be redrawn upon next action call whatever the circumstance.
 */
tart.mvc.Layout.prototype.resetLayout = false;


/** @nosideeffects */
tart.mvc.Layout.prototype.body;


/** @nosideeffects */
tart.mvc.Layout.prototype.contentArea;


/**
 * Default markup of a layout.
 */
tart.mvc.Layout.prototype.markup = '';


/**
 * Default content of a layout.
 * @private
 */
tart.mvc.Layout.prototype.content_ = '';


/**
 * Returns the body element for the layout. As a default, this is the <body> element; but users are free to override
 * as they implement their own applications.
 * @return {jQueryObject} The main element the layout will be placed in.
 */
tart.mvc.Layout.prototype.getBody = function() {
    if (!this.body) {
        this.body = $('body');
    }
    return this.body;
};


/**
 * Returns the content are element where the content will be placed.
 * @return {jQueryObject} The main elmeent the contents will reside in.
 */
tart.mvc.Layout.prototype.getContentArea = function() {
    if (!this.contentArea) {
        this.contentArea = $('#content');
    }
    return this.contentArea;
};
