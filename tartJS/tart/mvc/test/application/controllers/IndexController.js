// Copyright (c) 2009-2010 Techinox Information Technologies (http://www.techinox.com)
// Techinox Commercial License
//
// @author Armagan Amcalar <armagan@tart.com.tr>
goog.provide('ttnet.controllers.IndexController');
goog.require('ttnet.views.scripts.index.list');



/**
 * @constructor
 * @extends {tart.mvc.Controller}
 */
ttnet.controllers.IndexController = function() {
    goog.base(this);
};
goog.inherits(ttnet.controllers.IndexController, tart.mvc.Controller);


/**
 * @this {tart.mvc.Action}
 */
ttnet.controllers.IndexController.indexAction = function() {
    console.log('Index');
    console.log(this);
};


/**
 * @this {tart.mvc.Action}
 */
ttnet.controllers.IndexController.listAction = function() {
    this.setViewScript(ttnet.views.scripts.index.list);
    console.log('list');
    this.view.id = 'id: 3';
    console.log(this);

};


/**
 * @this {tart.mvc.Action}
 */
ttnet.controllers.IndexController.showAction = function() {
    console.log('show');
};
