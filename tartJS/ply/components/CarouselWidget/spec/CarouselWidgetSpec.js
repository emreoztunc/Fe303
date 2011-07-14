goog.require('ply.components.CarouselWidget.Controller');
goog.require('ply.components.CarouselWidget.Model');
goog.require('ply.components.CarouselWidget.View');


goog.provide('ply.components.CarouselWidget.SpecRunner');

describe('CarouselWidget', function() {
    var controller,
        model,
        view;

    beforeEach(function() {
        model = new ply.components.CarouselWidget.Model();
        view = new ply.components.CarouselWidget.View();

        controller = new ply.components.CarouselWidget.Controller(model, view);
        controller.model.getItems();
    });

    it('should have 3 DOM visible items at a time', function() {
        var itemContainer = controller.view.get(controller.view.domMappings.ITEMS);
        var items = itemContainer.find('>*');
        expect(items.length).toEqual(3);
    });

    describe('prev and next buttons will navigate', function() {
        describe('trigger prev on prev button click', function() {

            var previousButton,
                itemContainer;

            beforeEach(function() {
                previousButton = controller.view.get(controller.view.domMappings.PREV);
                itemContainer = controller.view.get(controller.view.domMappings.ITEMS);
            });


            it('should trigger prev on previous button click', function() {
                var itemsBefore = itemContainer.find('>*');

                previousButton.trigger('click');

                var itemsAfter = itemContainer.find('>*');

                expect(itemsBefore.eq(0).text() == 'one' && itemsAfter.eq(0).text() == 'seven').toBeTruthy();

            });


            it('should trigger prev on previous button click even cursor is not on inital position', function() {
                model.next(); //move cursor next before

                var itemsBefore = itemContainer.find('>*');

                previousButton.trigger('click');

                var itemsAfter = itemContainer.find('>*');

                expect(itemsBefore.eq(0).text() == 'two' && itemsAfter.eq(0).text() == 'one').toBeTruthy();
            });


            it('should trigger prev on previous button click even cursor moved more than one times', function() {
                model.prev(6); //move cursor 6 times prev before

                var itemsBefore = itemContainer.find('>*');

                previousButton.trigger('click');

                var itemsAfter = itemContainer.find('>*');

                expect(itemsBefore.eq(0).text() == 'two' && itemsAfter.eq(0).text() == 'one').toBeTruthy();
            });

        }); //describe prev




        describe('trigger next  on next button click', function() {

            var nextButton,
                itemContainer;

            beforeEach(function() {
                nextButton = controller.view.get(controller.view.domMappings.NEXT);
                itemContainer = controller.view.get(controller.view.domMappings.ITEMS);
            });


            it('should trigger next button click', function() {
                var itemsBefore = itemContainer.find('>*');

                nextButton.trigger('click');

                var itemsAfter = itemContainer.find('>*');

                expect(itemsBefore.eq(0).text() == 'one' && itemsAfter.eq(0).text() == 'two').toBeTruthy();
            });


            it('should trigger next on button click even cursor is not on inital position', function() {
                model.next(); //move cursor next before

                var itemsBefore = itemContainer.find('>*');

                nextButton.trigger('click');

                var itemsAfter = itemContainer.find('>*');

                expect(itemsBefore.eq(0).text() == 'two' && itemsAfter.eq(0).text() == 'three').toBeTruthy();
            });


            it('should trigger next button click even cursor moved more than one times', function() {

                model.next(6);

                var itemsBefore = itemContainer.find('>*');

                nextButton.trigger('click');

                var itemsAfter = itemContainer.find('>*');

                expect(itemsBefore.eq(0).text() == 'seven' && itemsAfter.eq(0).text() == 'one').toBeTruthy();
            });

        });

    });
});



/**
 * Run jasmine spec
 */
ply.components.CarouselWidget.SpecRunner = function() {
    jasmine.getEnv()['addReporter'](new jasmine.TrivialReporter());
    jasmine.getEnv()['execute']();

}();
