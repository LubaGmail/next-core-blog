Setup
    npx create-next-app events-app
    npm i react-markdown                https://www.markdownguide.org/cheat-sheet/
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

IV.     Featured Posts
        HomePage        ->      FeaturedPosts                  ->      PostsGrid               ->       PostItem
        pages/index        components/home/featured-posts        components/posts/posts-grid            post-item  

V.      All Posts
        AllPostsPage    ->              AllPosts               ->      PostsGrid               ->       PostItem
        pages/posts/index      components/posts/fall-posts     ->      PostsGrid               ->       PostItem

VI.     Post Detail
        pages/events/[slug]                
                /components/posts/posts-detail/
                                post-content    
                                        post-header

        /data/DUMMY_POST        single post
        
                


