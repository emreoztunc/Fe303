/**
 * Copyright (c) 2011 Techinox Information Technologies (http://www.techinox.com)
 * Techinox Commercial License
 *
 * @author armagan.amcalar@tart.com.tr (Armagan Amcalar)
 */

/**
 * @fileoverview tartJS error library and utility functions.
 */

goog.provide('tart.Err');
goog.require('tart');


/**
 * Returns a new Error object which contains a custom error name and message.
 *
 * @param {string=} message Message to set as the error message.
 * @param {string=} name Optional error name.
 * @extends {Error}
 * @constructor
 */

tart.Err = function(message, name) {
    this.name = name || 'Error';
    this.message = message || '';
};
goog.inherits(tart.Err, Error);


/**
 * Returns a new Error object which contains a implementation error message.
 *
 * @param {string} methodName Name of the unimplemented method. This will be set as the error message.
 * @throws {Error} Error object containing the details.
 */
tart.Err.unimplementedMethod = function(methodName) {
    throw new tart.Err('Wrong implementation',
        'You should implement your own ' + methodName + ' method in child class which you want to use.');
};
