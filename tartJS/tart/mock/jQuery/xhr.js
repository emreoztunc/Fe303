goog.provide('tart.mock.jQuery.xhr');

jQuery.ajaxSetup({
    converters: {
        'mockup text': function(requestOptions ) {
            return tart.mock.jQuery.xhr(requestOptions);
        },
        'mockup json': function(requestOptions ) {
            return tart.mock.jQuery.xhr(requestOptions);
        },
        'mockup xml': function(requestOptions ) {
            return tart.mock.jQuery.xhr(requestOptions);
        }
    }
});


jQuery.ajaxTransport('mockup', function(options ) {
    return {
        send: function(headers, callback ) {
            callback(200, 'OK', {
                mockup: options
            });
        }
    };
});

// Switch to mockup
jQuery.ajaxSetup({
    mock: true
});


jQuery.ajaxPrefilter(function(options ) {
    if (options.mock) {
        var finalDataType = options.dataTypes.pop();
        options.dataTypes = [finalDataType === '*' ? 'text' : finalDataType];
        return 'mockup';
    }
});
