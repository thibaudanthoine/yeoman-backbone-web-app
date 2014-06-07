/*global BookmarkBackbone, Backbone, JST*/

BookmarkBackbone.Views = BookmarkBackbone.Views || {};

(function () {
    'use strict';
    BookmarkBackbone.Views.BookmarkEditView = Backbone.View.extend({
        el: '#app',
        template: JST['app/scripts/templates/BookmarkEditView.ejs'],
        tagName: 'div',
        id: '',
        className: '',
        events: {
            'click button.save': 'update'
        },

        initialize: function (options) {
            this.bookmark = options.bookmark;
            this.bookmarks = options.bookmarks;
            this.listenTo(this.bookmarks, 'change', this.render);
            this.render();
        },

        update: function (event) {
            event.stopPropagation();
            event.preventDefault();

            this.bookmark.set({
                title: this.$el.find('input[name=title]').val(),
                url: this.$el.find('input[name=url]').val(),
                description: this.$el.find('textarea[name=description]').val()
            });

            this.bookmark.save();
            window.location.hash = 'bookmarks/index';
        },

        render: function () {
            this.$el.html(this.template(this.bookmark.toJSON()));
            return this;
        }
    });
})();
