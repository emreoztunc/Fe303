/**
 * Copyright (c) 2011 Techinox Information Technologies (http://www.techinox.com)
 * Techinox Commercial License
 *
 * @author armagan.amcalar@tart.com.tr (Armagan Amcalar)
 */

/**
 * @fileoverview Builder class for dropdown lists.
 */
goog.require('tart.Builder');
goog.provide('tart.DropdownBuilder');



/**
 * DropdownBuilder class builds the DOM for DropdownList class.
 *
 * @constructor
 * @extends {tart.Builder}
 * @param {string} id id for the builder. Can be used as the id of the DOM element this builder will build.
 * @return {tart.DropdownBuilder} A builder object.
 */
tart.DropdownBuilder = function(id) {
    goog.base(this, id);
    this.owner = null;
    return this;
};
goog.inherits(tart.DropdownBuilder, tart.Builder);


/**
 * Main namespace of HTML templates for DOM structure.
 */
tart.DropdownBuilder.templates = {};


/**
 * Select menu template.
 * @param {string} id Id of the container.
 * @param {string} optionListHTML HTML of the list of options.
 * @return {string} the container HTML.
 */
tart.DropdownBuilder.templates.container = function(id, optionListHTML) {
    return '<select id="' + id + '">' + optionListHTML + '</select>';
};


/**
 * Generates a select menu element, converts it to a jQuery object and passes to this.$dom_.
 *
 * @param {tart.Collection} owner Owner tart.Collection instance.
 */
tart.DropdownBuilder.prototype.buildDOM = function(owner) {
    this.owner = owner;
    var opts = [];
    for (var k = 0, z = this.owner.keys_.length; k < z; k++) {
        var option = tart.DropdownBuilder.templates.option(
            this.owner.keys_[k], this.owner.values_[k], (k == this.owner.getActiveItemIndex()));
        opts.push(option);
    }
    var finalDOM = tart.DropdownBuilder.templates.container(this.id_, opts.join(''));
    this.$dom_ = $(finalDOM);
    this.$dom_.change(function() {
        owner.switchIndex($(this).attr('selectedIndex'));
    });
};


/**
 * Generates a single option element which ready-to-use in a HTML select menu element.
 *
 * @param {string|number} key Option value.
 * @param {string|number} value Option value.
 * @param {boolean} selected Whether the option is selected.
 * @return {string} the option HTML.
 */
tart.DropdownBuilder.templates.option = function(key, value, selected) {
    var active = (selected) ? ' selected="selected"' : '';
    return '<option value="' + key + '"' + active + '>' + value + '</option>';
};


/**
 * Sets an select option's "selected" property to True.
 *
 * @param {number} newIndex the new index of the element to set the dropdown list to.
 */
tart.DropdownBuilder.prototype.changeActiveItem = function(newIndex) {
    this.$dom_.attr('selectedIndex', newIndex).change();
};


/**
 * Removes a single select option from DOM by index which given as parameter.
 *
 * @param {number} index the index of the element to remove from the list.
 */
tart.DropdownBuilder.prototype.removeOption = function(index) {
    this.$dom_.children().eq(index).remove();
};


/**
 * Creates a single select option and attachs it to the current DOM.
 *
 * @param {string|number} key value for the option.
 * @param {string|number} value Text for the option.
 * @return {jQueryObject} the jQuery object that holds the DOM object of the dropdown list.
 */
tart.DropdownBuilder.prototype.addOption = function(key, value) {
    return this.$dom_.append(tart.DropdownBuilder.templates.option(key, value, false));
};


/**
 * @inheritDoc
 */
tart.DropdownBuilder.prototype.removeDOM = function() {
    this.$dom_.remove();
};
