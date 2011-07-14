// Copyright (c) 2009-2010 Techinox Information Technologies (http://www.techinox.com)
// Techinox Commercial License
//
// @author Armagan Amcalar <armagan@tart.com.tr>
goog.provide('ttnet.views.layouts.common');


/**
 * @this {tart.mvc.Layout}
 */
ttnet.views.layouts.common = function() {
    this.markup = '<div id="header">header</div>' +
        '<div id="content">' +
        this.getContent() +
        '</div>' +
        '<div id="footer">footer</div>';
};
