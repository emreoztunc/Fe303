/**
 * Tart Javascript Library base
 *
 * Copyright (c) 2009-2010 Techinox Information Technologies (http://www.techinox.com)
 * Techinox Commercial License
 *
 * @author osman.yuksel@tart.com.tr (Osman Yuksel)
 */

/**
 * @fileoverview tart.XhrManager static class to handle XHR requests.
 */

goog.provide('tart.XhrManager');

tart.XhrManager.get = function(url, params, callback) {
    return jQuery.get(url, params, callback, 'json');
};


tart.XhrManager.post = function(url, params, callback) {
    return jQuery.post(url, params, callback, 'json');
};
