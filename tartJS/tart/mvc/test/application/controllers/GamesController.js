// Copyright (c) 2009-2010 Techinox Information Technologies (http://www.techinox.com)
// Techinox Commercial License
//
// @author Armagan Amcalar <armagan@tart.com.tr>
goog.provide('ttnet.controllers.GamesController');
goog.require('ttnet.views.layouts.rare');
goog.require('ttnet.views.scripts.games.index');
goog.require('ttnet.views.scripts.games.list');



/**
 * @constructor
 * @extends {tart.mvc.Controller}
 */
ttnet.controllers.GamesController = function() {
    goog.base(this);
};
goog.inherits(ttnet.controllers.GamesController, tart.mvc.Controller);


/**
 * @this {tart.mvc.Action}
 */
ttnet.controllers.GamesController.indexAction = function() {
    this.setViewScript(ttnet.views.scripts.games.index);
    this.setLayout(ttnet.views.layouts.rare);
    console.log('games index');
    console.dir(this);
    this.view.p1 = this.params['p1'];
    this.view.p2 = this.params['p2'];
    this.view.a = this.params['a'];
    this.view.b = this.params['b'];
};


/**
 * @this {tart.mvc.Action}
 */
ttnet.controllers.GamesController.listAction = function() {
    this.setViewScript(ttnet.views.scripts.games.list);
    this.view.vp1 = this.params['param1'];
    this.view.vp2 = this.params['param2'];
    console.log('games list');
};


/**
 * @this {tart.mvc.Action}
 */
ttnet.controllers.GamesController.showAction = function() {
    console.log('games show');
};
