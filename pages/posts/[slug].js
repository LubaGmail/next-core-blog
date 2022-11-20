import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

import PostContent from '../../components/posts/post-detail/post-content'

const DetailPage = () => {
  const router = useRouter()
  const query = router.query;
  const path = router.pathname

  return (
    <>
      <Head>
        <title>Single Post for {JSON.stringify(query.slug)}</title>
        <meta
          name='post'
          content={query.slug}
        />
      </Head>
      <PostContent />
    </>
  )
}

export default DetailPage
