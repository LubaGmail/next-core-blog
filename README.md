Setup
    npx create-next-app events-app
    npx next dev
        npm run build
        npm start

I.  Define pages under /pages/ 
        index.js for the HomePage, contact.js for ContactPage 
        posts/index.js for AllPostsPage and posts/[slug].js for DetailPage

II. Set generic meta in _app.js and other pages under /pages/

III.    Layout 
                components/layout/layout.js     logo.js         main-nav.js
                wrap pages with Layout in _app.js

IV.     Posts
        HomePage        ->      FeaturedPosts                  ->      PostsGrid               ->       PostItem
        pages/index        components/home/featured-posts        components/posts/posts-grid            post-item  



