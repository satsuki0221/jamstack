import Head from 'next/head'
import Link from 'next/link'

export default function Home({ blog }) {
  console.log(blog)
  return (
    <div style={{ padding: 20 }}>
      <Head>
        <title>ゆごのブログ</title>
      </Head>
      {
        blog.map((b, i) => {
          return <Link key={`a_${i}`} href={`/${b.id}`}><a>{b.title}</a></Link>
        })
      }
    </div>
  )
}

export const getStaticProps = async () => {
  const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };
  const data = await fetch('https://yugo0221.microcms.io/api/v1/blog', key)
    .then(res => res.json())
    .catch(() => null);

  return {
    props: {
      blog: data.contents,
    },
  };
};
