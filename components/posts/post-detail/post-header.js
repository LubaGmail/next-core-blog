import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

import styles from './post-header.module.css'

const PostHeader = (props) => {
  // const router = useRouter()
  // const query = router.query;
  // const path = router.pathname;

  return (
    <header className={styles.header}>
        <h3>
          {props.title}
        </h3>
          
        <Image src={props.image}
          width={200}
          height={150}
          alt={props.title}
        />
          
    </header>
  )
}

export default PostHeader   