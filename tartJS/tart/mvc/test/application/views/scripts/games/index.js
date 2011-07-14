// Copyright (c) 2009-2010 Techinox Information Technologies (http://www.techinox.com)
// Techinox Commercial License
//
// @author Armagan Amcalar <armagan@tart.com.tr>

goog.provide('ttnet.views.scripts.games.index');


/**
 * @this {tart.mvc.View}
 * @return {string} Output.
 */
ttnet.views.scripts.games.index = function() {
    var ps = [this.p1, this.p2, this.a, this.b];
    return 'games index content ' + ps.join(' ') + ' will be here';
};
