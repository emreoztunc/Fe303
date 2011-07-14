/**
 * Tart Javascript Library base
 *
 * Copyright (c) 2009-2010 Techinox Information Technologies (http://www.techinox.com)
 * Techinox Commercial License
 *
 * @author osman.yuksel@tart.com.tr (Osman Yuksel)
 */

/**
 * @fileoverview ply.models.GameModel Game model which gets data from Xhr.
 */


goog.provide('ply.models.GameModel');

goog.require('tart.component.XhrModel');
goog.require('ply.GameList');

/**
 * Game Model
 *
 * @extends {tart.component.XhrModel}
 * @constructor
 */
ply.models.GameModel = function() {
    goog.base(this);
    this.setUrl('getGames');
};
goog.inherits(ply.models.GameModel, tart.component.XhrModel);


/**
 * Load data and map data to game list
 */
ply.models.GameModel.prototype.load = function() {
    var that = this;
    this.fetchDataWithXhr(function (xhrData) {
        that.mapDataToGameList_(xhrData);
    });
};


/**
 * map data to game list
 * @param {Object} xhrData data returned from xhr request.
 * @private
 */
ply.models.GameModel.prototype.mapDataToGameList_ = function(xhrData) {
    var gameList = new ply.GameList(),
        gameItem,
        gameItemData;

    for (var i = 0, ii = xhrData.length; i < ii; i++) {
        gameItemData = xhrData[i];
        gameItem = new ply.objects.Game(gameItemData);
        gameList.addItem(gameItem);
    }

    var gameItems = gameList.getItems();
    this.setItems(gameItems);
};
