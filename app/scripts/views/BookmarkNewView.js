/*global BookmarkBackbone, Backbone, JST*/

BookmarkBackbone.Views = BookmarkBackbone.Views || {};

(function () {
    'use strict';
    BookmarkBackbone.Views.BookmarkNewView = Backbone.View.extend({
        el: '#app',
        template: JST['app/scripts/templates/BookmarkNewView.ejs'],
        tagName: 'div',
        id: '',
        className: '',
        events: {
            'click button.save': 'save'
        },

        initialize: function (options) {
            this.bookmark = options.bookmark;
            this.bookmarks = options.bookmarks;
            this.listenTo(this.bookmarks, 'change', this.render);
            this.render();
        },

        save: function (event) {
            event.stopPropagation();
            event.preventDefault();

            this.bookmark.set({
                id: this.bookmarks.getNextId(),
                title: this.$el.find('input[name=title]').val(),
                url: this.$el.find('input[name=url]').val(),
                description: this.$el.find('textarea[name=description]').val()
            });

            if (this.bookmark.isValid()) {
                this.bookmarks.add(this.bookmark);
                this.bookmark.save();
                window.location.hash = 'bookmarks/index';
            }
        },

        render: function () {
            this.$el.html(this.template(this.bookmark.toJSON()));
            return this;
        }
    });
})();