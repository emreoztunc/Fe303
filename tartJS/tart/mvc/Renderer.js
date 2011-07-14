// Copyright (c) 2009-2010 Techinox Information Technologies (http://www.techinox.com)
// Techinox Commercial License
//
// @author Armagan Amcalar <armagan@tart.com.tr>

goog.provide('tart.mvc.Renderer');
goog.require('tart.mvc.Action');
goog.require('tart.mvc.Layout');
goog.require('tart.mvc.View');



/**
 * @constructor
 * @param {tart.mvc.LayoutTemplate} layout The default layout of the application. This layout will be used when an
 * action chooses not to set its own layout.
 */
tart.mvc.Renderer = function(layout) {
    this.defaultLayout = layout;
};


/**
 * Renders the final view; executing the action and putting the resulting view script in a related layout.
 * @param {tart.mvc.uri.Router} router Application's router.
 */
tart.mvc.Renderer.prototype.render = function(router) {
    var viewMarkup, layout,
        view = new tart.mvc.View(),
        oldLayout = this.currentLayout,
        action = new tart.mvc.Action(router.getParams(), this.defaultLayout, view);

    // execute the action
    router.getAction().call(action);
    // generate the view markup
    viewMarkup = action.getViewScript().call(action.view);

    // instantiate the layout, set its content and then markup.
    layout = new tart.mvc.Layout();
    layout.setContent(viewMarkup);
    this.currentLayout = action.getLayout();
    this.currentLayout.call(layout);

    // have to reset the layout if the action's layout is different than the previous one
    if (this.currentLayout != oldLayout)
        layout.resetLayout = true;

    layout.render();
};
