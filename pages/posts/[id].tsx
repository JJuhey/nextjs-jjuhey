import { GetStaticPaths, GetStaticProps } from 'next'

import Layout from '../../components/layout';

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
    <Layout home={false}>
      <article style={{ fontSize: '1rem', textAlign: 'left', color: 'black' }}>
        <h1>{postData.title}</h1>
        <div>{postData.date}</div>
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
      </article>
    </Layout>
  )
}