/*global BookmarkBackbone, Backbone, JST*/

BookmarkBackbone.Views = BookmarkBackbone.Views || {};

(function () {
    'use strict';
    BookmarkBackbone.Views.BookmarkIndexView = Backbone.View.extend({
        el: '#app',
        template: JST['app/scripts/templates/BookmarkIndexView.ejs'],
        tagName: '',
        id: '',
        className: '',
        events: {},

        initialize: function (options) {
            this.bookmarks = options.bookmarks;
            this.bookmarks.bind('reset', this.addAll, this);
            this.listenTo(this.bookmarks, 'change', this.render);
            this.render();
        },

        addAll: function () {
            this.$el.find('tbody').children().remove();
            _.each(this.bookmarks.models, $.proxy(this, 'addOne'));
        },

        addOne: function (bookmark) {
            var view = new BookmarkBackbone.Views.BookmarkRowView({
                bookmarks: this.bookmarks,
                bookmark: bookmark
            });
            this.$el.find('tbody').append(view.render().el);
        },

        render: function () {
            this.$el.html(this.template(this.bookmarks.toJSON()));
            this.addAll();
            return this;
        }
    });
})();