/**
 * Tart Javascript Library base
 *
 * Copyright (c) 2009-2010 Techinox Information Technologies (http://www.techinox.com)
 * Techinox Commercial License
 *
 * @author osman.yuksel@tart.com.tr (Osman Yuksel)
 */

/**
 * @fileoverview ply.GameList to hold game items as a list.
 */

goog.provide('ply.GameList');

goog.require('tart.List');
goog.require('ply.objects.Game');

/**
 * GameList class to hold game items as a list
 *
 * @extends {tart.List}
 * @constructor
 */
ply.GameList = function() {
    goog.base(this);
};
goog.inherits(ply.GameList, tart.List);


/**
 * Add game item to list
 *
 * @param {ply.objects.Game} gameItem GameItem object to add to list
 */
ply.GameList.prototype.addItem = function(gameItem) {
    tart.List.prototype.addItem.call(this, gameItem); 
};
