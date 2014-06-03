/*global BookmarkBackbone, Backbone*/

BookmarkBackbone.Routers = BookmarkBackbone.Routers || {};

(function () {
    'use strict';
    BookmarkBackbone.Routers.BookmarkRouter = Backbone.Router.extend({
        el: '#app',
        routes: {
            'bookmark/new': 'create',
            'bookmarks/index': 'index',
            'bookmark/:id/edit': 'edit',
            'bookmark/:id/view': 'show'
        },

        initialize: function (options) {
            this.bookmarks = options.bookmarks;
            this.index();
        },

        create: function () {
            this.currentView = new BookmarkBackbone.Views.BookmarkNewView({
                bookmarks: this.bookmarks,
                bookmark: new BookmarkBackbone.Models.BookmarkModel()
            });
        },

        edit: function (id) {
            var bookmark = this.bookmarks.get(id);
            this.currentView = new BookmarkBackbone.Views.BookmarkEditView({
                bookmark: bookmark,
                bookmarks: this.bookmarks
            });
        },

        show: function (id) {
            var bookmark = this.bookmarks.get(id);
            this.currentView = new BookmarkBackbone.Views.BookmarkShowView({
                bookmark: bookmark,
                bookmarks: this.bookmarks
            });
        },

        index: function () {
            this.currentView = new BookmarkBackbone.Views.BookmarkIndexView({
                bookmarks: this.bookmarks
            });
        }
    });
})();