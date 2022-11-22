import DUMMY_POSTS from '../../data/dummy-posts'
import PostsGrid from '../posts/posts-grid'

const FeaturedPosts = () => {

    return (
        <section>
            <h3 className='center'>Featured Posts</h3>
            <PostsGrid posts={DUMMY_POSTS} /> 
        </section>
    )
}

export default FeaturedPosts