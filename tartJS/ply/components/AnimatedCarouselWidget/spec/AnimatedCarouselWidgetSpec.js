goog.require('ply.components.AnimatedCarouselWidget.Controller');
goog.require('ply.components.AnimatedCarouselWidget.Model');
goog.require('ply.components.AnimatedCarouselWidget.View');

goog.provide('ply.components.AnimatedCarouselWidget.SpecRunner');

describe('AnimatedCarouselWidget', function() {
    var controller,
        model,
        view;

    beforeEach(function() {
        model = new ply.components.AnimatedCarouselWidget.Model();
        view = new ply.components.AnimatedCarouselWidget.View();

        controller = new ply.components.AnimatedCarouselWidget.Controller(model, view);
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

                waitsFor(function() {
                    return view.animating == false;
                }, 10000);

                runs(function() {
                    var itemsAfter = itemContainer.find('>*');
                    expect(itemsBefore.eq(0).text() == 'one' && itemsAfter.eq(0).text() == 'seven').toBeTruthy();
                });
            });


            it('should trigger prev on previous button click even cursor is not on inital position', function() {
                model.next(); //move cursor next before

                waitsFor(function() {
                    return view.animating == false;
                }, 10000);


                runs(function() {
                    var itemsBefore = itemContainer.find('>*');

                    previousButton.trigger('click');

                    waitsFor(function() {
                        return view.animating == false;
                    }, 10000);


                    runs(function() {
                        var itemsAfter = itemContainer.find('>*');

                        expect(itemsBefore.eq(0).text() == 'two' && itemsAfter.eq(0).text() == 'one').toBeTruthy();

                    });

                });


            });


            it('should trigger prev on previous button click even cursor moved more than one times', function() {
                model.prev(6); //move cursor 6 times prev before

                waitsFor(function() {
                    return view.animating == false;
                }, 10000);


                runs(function() {
                    var itemsBefore = itemContainer.find('>*');

                    previousButton.trigger('click');

                    waitsFor(function() {
                        return view.animating == false;
                    }, 10000);


                    runs(function() {
                        var itemsAfter = itemContainer.find('>*');

                        expect(itemsBefore.eq(0).text() == 'two' && itemsAfter.eq(0).text() == 'one').toBeTruthy();

                    });

                });
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

                waitsFor(function() {
                    return view.animating == false;
                }, 10000);

                runs(function() {

                    var itemsAfter = itemContainer.find('>*');

                    expect(itemsBefore.eq(0).text() == 'one' && itemsAfter.eq(0).text() == 'two').toBeTruthy();
                });
            });


            it('should trigger next on button click even cursor is not on inital position', function() {
                model.next(); //move cursor next before

                waitsFor(function() {
                    return view.animating == false;
                }, 10000);


                runs(function() {
                    var itemsBefore = itemContainer.find('>*');

                    nextButton.trigger('click');

                    waitsFor(function() {
                        return view.animating == false;
                    }, 10000);


                    runs(function() {
                        var itemsAfter = itemContainer.find('>*');

                        expect(itemsBefore.eq(0).text() == 'two' && itemsAfter.eq(0).text() == 'three').toBeTruthy();
                    });

                });

            });


            it('should trigger next button click even cursor moved more than one times', function() {

                model.next(6);


                waitsFor(function() {
                    return view.animating == false;
                }, 10000);


                runs(function() {
                    var itemsBefore = itemContainer.find('>*');

                    nextButton.trigger('click');

                    waitsFor(function() {
                        return view.animating == false;
                    }, 10000);


                    runs(function() {
                        var itemsAfter = itemContainer.find('>*');

                        expect(itemsBefore.eq(0).text() == 'seven' && itemsAfter.eq(0).text() == 'one').toBeTruthy();
                    });

                });
            });

        });
    });
});


/**
 * Run jasmine spec
 */
ply.components.AnimatedCarouselWidget.SpecRunner = function() {
    jasmine.getEnv()['addReporter'](new jasmine.TrivialReporter());
    jasmine.getEnv()['execute']();
}();
