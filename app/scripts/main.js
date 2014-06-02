/*global BookmarkBackbone, $*/

window.BookmarkBackbone = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        return new BookmarkBackbone.Routers.BookmarkRouter({
            bookmarks: new this.Collections.BookmarksCollection()
        });
    }
};

$(document).ready(function () {
    'use strict';
    var router = BookmarkBackbone.init();
    router.bookmarks.reset([
        {
            id: 1,
            title: 'Bookmark 1',
            url: 'http://www.example.com',
            description: 'Cherry pie'
        },
        {
            id: 2,
            title: 'Bookmark 2',
            url: 'http://www.example.com',
            description: 'Layer cake'
        },
        {
            id: 3,
            title: 'Bookmark 3',
            url: 'http://www.example.com',
            description: 'Bookmarking is a science'
        }
    ]);
    Backbone.history.start();
});