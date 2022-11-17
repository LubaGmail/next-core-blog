import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

import DUMMY_POST from '../../../data/dummy-post'
import PostHeader from './post-header'
import styles from './post-content.module.css'

const PostContent = () => {
  const router = useRouter()
  const query = router.query;
  const path = router.pathname;

  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`
    
  return (
    <article className={styles.content}>
        <PostHeader title={DUMMY_POST.title} image={imagePath}
        />
        {DUMMY_POST.content}
    </article>
  )
}

export default PostContent