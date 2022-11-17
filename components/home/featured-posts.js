import Head from 'next/head'
import Image from 'next/image'

import DUMMY_POSTS from '../../data/dummy-posts'
import styles from './featured-posts.module.css'
import PostsGrid from '../posts/posts-grid'

const FeaturedPosts = () => {

    return (
        <>
            <PostsGrid posts={DUMMY_POSTS} /> 
        </>
    )
}

export default FeaturedPosts