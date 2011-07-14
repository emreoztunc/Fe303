// Copyright (c) 2009-2010 Techinox Information Technologies (http://www.techinox.com)
// Techinox Commercial License
//
// @author Armagan Amcalar <armagan@tart.com.tr>

goog.provide('tart.mvc.Action');



/**
 * @constructor
 * @param {Object} params Params.
 * @param {tart.mvc.LayoutTemplate} layout Layout.
 * @param {tart.mvc.View} view View.
 */
tart.mvc.Action = function(params, layout, view) {
    this.params = params;
    this.view = view;
    this.layout_ = layout;
};


/**
 *
 * @param {tart.mvc.LayoutTemplate} layout Layout.
 */
tart.mvc.Action.prototype.setLayout = function(layout) {
    this.layout_ = layout;
};


/** @nosideeffects */
tart.mvc.Action.prototype.params;


/** @nosideeffects */
tart.mvc.Action.prototype.layout;


/** @nosideeffects */
tart.mvc.Action.prototype.view;


/**
 * @return {tart.mvc.LayoutTemplate} The layout template (whether custom or default) that belongs to the action.
 */
tart.mvc.Action.prototype.getLayout = function() {
    return this.layout_;
};


/**
 * @return {tart.mvc.ViewTemplate} The view script that belongs to the action.
 */
tart.mvc.Action.prototype.getViewScript = function() {
    return this.viewScript_;
};


/**
 * Sets the action's view script.
 * @param {tart.mvc.ViewTemplate} viewScript view script.
 */
tart.mvc.Action.prototype.setViewScript = function(viewScript) {
    this.viewScript_ = viewScript;
};
