goog.require('ply.models.GameModel');
goog.require('tart.mock.jQuery.xhr');

goog.provide('ply.models.GameModel.SpecRunner');

describe('GameModel', function() {
    it("test", function () {

        var mockData = [];
        mockData['getGames'] = [{name : "nba 2k11"}, {name : "crysis"}];
        mockData['getGames?page=2'] = [{name : 'fifa 2011'}, {name : 'age of empires'}];

        tart.mock.jQuery.xhr = function (request) {
            var url = request.url;
            var data = request.data || "";


            var key;
            if (request.type == "GET") {
                key = url;
            }
            else {
                key = url + "|" + data;
            }

            var result = mockData[key];
            return result;
        };


        var gameModel = new ply.models.GameModel();
        gameModel.params.set("page","2");
        gameModel.load();

        expect(true).toBeTruthy();
    });
});



/**
 * Run jasmine spec
 */
ply.models.GameModel.SpecRunner = function() {
    jasmine.getEnv()['addReporter'](new jasmine.TrivialReporter());
    jasmine.getEnv()['execute']();

}();
