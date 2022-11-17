import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from './post-item.module.css'

const PostItem = ({post}) => {
    const { slug, title, image, excerpt, date } = post
    const imagePath = `/images/posts/${slug}/${image}`
    const linkPath = `posts/${slug}`

    return (
        <>
            <li className={styles.post}>
                <Link href={linkPath}>
                    <div className={styles.image}>
                        <Image
                            src={imagePath}
                            width={300}
                            height={200}
                            alt={title}
                            layout='responsive'
                        />
                    </div>
                    <div className={styles.content}>
                        <h3>{title}</h3>
                        <time>{date}</time>
                        <p>{excerpt}</p>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default PostItem 