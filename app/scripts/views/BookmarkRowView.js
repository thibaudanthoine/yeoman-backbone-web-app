/*global BookmarkBackbone, Backbone, JST*/

BookmarkBackbone.Views = BookmarkBackbone.Views || {};

(function () {
    'use strict';
    BookmarkBackbone.Views.BookmarkRowView = Backbone.View.extend({
        template: JST['app/scripts/templates/BookmarkRowView.ejs'],
        tagName: 'tr',
        id: '',
        className: '',
        events: {
            'click a.delete': 'destroy'
        },

        initialize: function (options) {
            this.bookmark = options.bookmark;
            this.bookmarks = options.bookmarks;
            this.listenTo(this.bookmarks, 'change', this.render);
        },

        destroy: function (event) {
            event.preventDefault();
            event.stopPropagation();
            this.bookmarks.remove(this.bookmark);
            this.$el.remove();
        },

        render: function () {
            this.$el.html(this.template(this.bookmark.toJSON()));
            return this;
        }
    });
})();
