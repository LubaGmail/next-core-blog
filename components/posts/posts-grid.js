import styles from './posts-grid.module.css'
import PostItem from './post-item'

const PostsGrid = ({posts}) => {
    return (
        <>
            <ul className={styles.grid}>
                {
                    posts.map((el, i) => (
                        <PostItem key={i} post={el} />
                    ))
                }
            </ul>
        </>
    )
}

export default PostsGrid