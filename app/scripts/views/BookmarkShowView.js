/*global BookmarkBackbone, Backbone, JST*/

BookmarkBackbone.Views = BookmarkBackbone.Views || {};

(function () {
    'use strict';

    BookmarkBackbone.Views.BookmarkShowView = Backbone.View.extend({

        el: '#app',

        template: JST['app/scripts/templates/BookmarkShowView.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function (options) {
            this.bookmark = options.bookmark;
            this.bookmarks = options.bookmarks;
            this.listenTo(this.bookmarks, 'change', this.render);
            this.render();
        },

        render: function () {
            this.$el.html(this.template(this.bookmark.toJSON()));
            return this;
        }

    });

})();
