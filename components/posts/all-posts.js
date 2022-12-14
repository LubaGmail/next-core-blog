import DUMMY_POSTS from '../../data/dummy-posts'
import PostsGrid from '../posts/posts-grid'
import styles from './all-posts.module.css'

const AllPosts = () => {
  return (
    <section className={styles.posts}>
        <h3>All Posts</h3>
        <PostsGrid posts={DUMMY_POSTS} /> 
    </section>
  )
}

export default AllPosts
  