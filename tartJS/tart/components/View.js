/**
 * Tart Javascript Library base
 *
 * Copyright (c) 2009-2010 Techinox Information Technologies (http://www.techinox.com)
 * Techinox Commercial License
 *
 * @author osman.yuksel@tart.com.tr (Osman Yuksel)
 */

/**
 * @fileoverview tart.components.View is a base class for all components View's.
 *
 * Example usage:
 *
 * SubViewClass = function() {
 *     goog.base(this);
 *
 *     this.domMappings = {
 *         HEADER: 'h1'
 *     };
 * };
 * goog.inherits(SubViewClass, tart.components.View);
 *
 * SubViewClass.prototype.templates_header = function(text) {
 *     text = text || '';
 *     return '<h1>' + text + '</h1>';
 * };
 *
 * SubViewClass.prototype.render = function() {
 *    return this.templates_header();
 * };
 *
 * var subView = new SubViewClass();
 *
 * var dummyDiv = $('<div>').append(subView.render());
 *
 * subView.setDOM(dummyDiv);
 * subView.get(subView.domMappings.HEADER);
 *
 *  Known issues:
 *  - Templates will be injected withing Templates object
 *  - jQuery dependency should be removed
 */

goog.provide('tart.components.View');



/**
 * View class base
 * @constructor
 */
tart.components.View = function() {
    /** @private */
    this.$dom_ = undefined;

    /** @private */
    this.$domCache_ = {};
};


/**
 * Render abstract method, which all subclasses should implement
 */
tart.components.View.prototype.render = function() {
    throw new Error('Not implemneted yet');
};


/**
 * Sets base DOM tree for component
 * @param {Object} dom base DOM reference for component.
 */
tart.components.View.prototype.setDOM = function(dom) {
    this.$dom_ = dom;
};


/**
 * get current DOM reference
 *
 * @return {(Object|null|undefined)} .
 */
tart.components.View.prototype.getDOM = function() {
    return this.$dom_;
};


/**
 * Get item, which is indicated on domMappings node
 * Cache them to $domCache_ and return item
 *
 * @param {string} key Object key from domMappings node.
 * @return {Object} found object after traverse.
 */
tart.components.View.prototype.get = function(key) {
    //TODO: make it owrk with closure
    //TODO: find or filter ???
    if (!this.$dom_) {
        throw new Error('DOM not set yet');
    }

    this.$domCache_[key] = this.$domCache_[key] || this.$dom_.find(key);
    return this.$domCache_[key];
};
