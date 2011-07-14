/**
 * Tart Javascript Library base
 *
 * Copyright (c) 2009-2010 Techinox Information Technologies (http://www.techinox.com)
 * Techinox Commercial License
 *
 * @author osman.yuksel@tart.com.tr (Osman Yuksel)
 */

/**
 * @fileoverview ply.objects.Game, value class to hold game data.
 */

goog.provide('ply.objects.Game');


/**
 * Game value class
 * @param {Object} data
 * 
 * @constructor
 */
ply.objects.Game = function(data) {
    data = data || {};

    this.image = data.image;
    this.name = data.name;
    this.marketPrice = data.marketPrice;
    this.buyLink = data.buyLink;
    this.vote = data.vote;
    this.operatingSystem = data.operatingSystem;
    this.version = data.version;
    this.description = data.description;
    this.genre = data.genre;
    this.developer = data.developer;
    this.distributor = data.distributor;
    this.ageLimit = data.ageLimit;
    this.releaseDate = data.releaseDate;
};

