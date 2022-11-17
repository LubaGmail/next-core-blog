import Head from 'next/head'
import Image from 'next/image'
import {useRouter} from 'next/router'

const DetailPage = () => {
  const router = useRouter()
  const query = router.query;
  const path = router.pathname

  return (
    <>
      <Head>
        <title>Single Post</title>
        <meta
          name='post'
          content='individual post'
        />
      </Head>
      DetailPage {JSON.stringify(query)} {JSON.stringify(path)}
    </>
  )
}

export default DetailPage
