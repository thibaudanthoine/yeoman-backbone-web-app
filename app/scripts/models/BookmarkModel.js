/*global BookmarkBackbone, Backbone*/

BookmarkBackbone.Models = BookmarkBackbone.Models || {};

(function () {
    'use strict';
    BookmarkBackbone.Models.BookmarkModel = Backbone.Model.extend({
        url: '',
        defaults: {
            id: 1,
            title: '',
            url: '',
            description: ''
        },

        initialize: function () {
        },

        validate: function (attrs, options) {
            var errors = {};
            if (!attrs.title) errors.title = 'Enter a title';
            if (!attrs.description) errors.description = 'Enter a description';
            if (!attrs.url) errors.url = 'Enter an URL';

            if (!_.isEmpty(errors)) {
                return errors;
            }
        },

        parse: function (response, options) {
            return response;
        }
    });
})();
