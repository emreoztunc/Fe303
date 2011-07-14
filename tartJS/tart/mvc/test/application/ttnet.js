goog.require('tart.mvc');
goog.require('ttnet.controllers.GamesController');
goog.require('ttnet.controllers.IndexController');
goog.require('ttnet.views.layouts.common');
goog.provide('ttnet.Application');



/**
 * @constructor
 * @extends {tart.mvc.Application}
 */
ttnet.Application = function() {
    goog.base(this);
    this.defaultRoute = new tart.mvc.uri.Route({
        name: 'default',
        format: '',
        controller: ttnet.controllers.IndexController,
        action: ttnet.controllers.IndexController.listAction
    });
};
goog.inherits(ttnet.Application, tart.mvc.Application);


/**
 * @inheritDoc
 */
ttnet.Application.prototype.basePath = '/tart/mvc/test/';


/**
 * @inheritDoc
 */
ttnet.Application.prototype.defaultLayout = ttnet.views.layouts.common;


/**
 * @inheritDoc
 */
ttnet.Application.prototype.initRouting = function() {
    var router = this.getRouter();
    router.addRoute(new tart.mvc.uri.Route({
        name: 'homeshow',
        format: 'home/show/',
        controller: ttnet.controllers.GamesController,
        action: ttnet.controllers.GamesController.showAction
    }));
    router.addRoute(new tart.mvc.uri.Route({
        name: 'homeList',
        format: 'home/list/:param1/:param2/',
        controller: ttnet.controllers.GamesController,
        action: ttnet.controllers.GamesController.listAction
    }));
    router.addRoute(new tart.mvc.uri.Route({
        name: 'homeList',
        format: 'home/list/',
        controller: ttnet.controllers.GamesController,
        action: ttnet.controllers.GamesController.listAction
    }));
    router.addRoute(new tart.mvc.uri.Route({
        name: 'home anything',
        format: 'home/list/:p1/:p2/*',
        controller: ttnet.controllers.GamesController,
        action: ttnet.controllers.GamesController.indexAction
    }));
};
