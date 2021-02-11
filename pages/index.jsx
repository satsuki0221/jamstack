import Head from 'next/head'
import Link from 'next/link'

export default function Home({ blog }) {
  return (
    <div>
      <Head>
        <title>ゆごのブログ</title>
      </Head>
      <ul>
        {
          blog.map((b, i) => {
            return <li><Link key={`a_${i}`} href={`/${b.id}`}><a>link: {b.title}</a></Link></li>
          })
        }
      </ul>
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
