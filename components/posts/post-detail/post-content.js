import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'

import DUMMY_POST from '../../../data/dummy-post'
import PostHeader from './post-header'
import styles from './post-content.module.css'

const PostContent = () => {
  // const router = useRouter()
  // const query = router.query;
  // const path = router.pathname;

  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`
    
  return (
    <article className={styles.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath}
      />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  )
}

export default PostContent