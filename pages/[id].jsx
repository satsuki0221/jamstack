import Head from 'next/head'
import Link from 'next/link'

export default function Home(b) {
  console.log(b)
  return (
    <div style={{ padding: 20 }}>
      <Head>
        <title>{b.title} | ゆごのブログ</title>
      </Head>

      <h1>{b.title}</h1>

      <div dangerouslySetInnerHTML={{ __html: b.detail }}></div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };
  const data = await fetch('https://yugo0221.microcms.io/api/v1/blog', key)
    .then(res => res.json())
    .catch(() => null);

  const paths = ['/wiuabgcgtqx']

  // const paths = data.contents.map(item => `/${item.id}`);

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps = async ({ params }) => {

  const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };
  const data = await fetch(`https://yugo0221.microcms.io/api/v1/blog/${params.id}`, key)
    .then(res => {
      return res.json()
    })
    .catch(() => null);

    return {
      props: {
        ...data,
      },
    };
};
