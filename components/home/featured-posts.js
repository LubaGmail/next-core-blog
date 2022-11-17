import Head from 'next/head'
import Image from 'next/image'

import DUMMY_POSTS from '../../data/dummy-posts'
import PostsGrid from '../posts/posts-grid'
import styles from './featured-posts.module.css'

const FeaturedPosts = () => {

    return (
        <section>
            <h3 className='center'>Featured Posts</h3>
            <PostsGrid posts={DUMMY_POSTS} /> 
        </section>
    )
}

export default FeaturedPosts