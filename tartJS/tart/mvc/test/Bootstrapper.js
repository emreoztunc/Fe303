goog.provide('ttnet.Bootstrapper');
goog.require('ttnet.Application');



/**
 * Bootstrapper of the example application.
 * @constructor
 */
ttnet.Bootstrapper = function() {
    new ttnet.Application();
};

goog.exportSymbol('ttnet.Bootstrapper', ttnet.Bootstrapper);
