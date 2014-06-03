/*global BookmarkBackbone, Backbone*/

BookmarkBackbone.Collections = BookmarkBackbone.Collections || {};

(function () {
    'use strict';
    BookmarkBackbone.Collections.BookmarksCollection = Backbone.Collection.extend({
        localStorage: new Backbone.LocalStorage('backbone-generator-bookmark'),
        model: BookmarkBackbone.Models.BookmarkModel,

        getNextId: function () {
            if (!this.length) {
                return 1;
            }
            return this.last().get('id') + 1;
        }
    });
})();