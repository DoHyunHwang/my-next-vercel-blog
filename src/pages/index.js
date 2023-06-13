import Head from 'next/head';
// import { useEffect, useState } from 'react';
import utilStyles from '../styles/utils.module.css';
import Layout, { siteTitle } from '/components/Layout';
import Link from 'next/link';
import Date from '/components/Date';
import { getSortedPostsData } from '../../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

// export async function getServerSideProps() {
//   const response = await fetch('http://localhost:3000/api/posts');
//   const json = await response.json();

//   return {
//     props: {
//       allPostsData: json.allPostsData,
//     },
//   };
// }

export default function Home({ allPostsData }) {
  // const [allPostsData, setAllPostsData] = useState([]);

  // useEffect(async () => {
  //   const res = await fetch('api/posts').then((res) => res.json());
  //   setAllPostsData(res.allPostsData);
  // }, []);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          안녕하세요! FrontEnd Developer 황도현 입니다 😁
          <br />
        </p>
        <p>
          <a href="https://github.com/DoHyunHwang" target="_blank">
            My Git URL &rarr;
          </a>
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
