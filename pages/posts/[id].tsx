import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

import { getAllPostIds, getPostData } from '../../lib/posts'

interface PostProps {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const postData = await getPostData(context.params.id as string)
  return {
    props: { postData }
  }
}

export default function Post({ postData }: PostProps) {
  return (
    <div style={{ margin: '20px' }}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1>{postData.title}</h1>
        <div>{postData.date}</div>
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
      </article>
    </div>
  )
}