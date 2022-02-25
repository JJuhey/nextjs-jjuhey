import PostCard from '../components/PostCard';
import Layout from '../components/Layout';

import styles from '../styles/Home.module.css';

const mockpost = [
  {
    title: 'first-post',
    summary: '2022.01.28',
  },
  {
    title: 'second-post',
    summary: '2022.02.25',
  },
  {
    title: 'post3',
    summary: 'content2',
  },
]

export default function Home() {
  return (
    <Layout home={true}>
      📚 BLOG POSTS 📚
      <div className={styles.postList}>
        {mockpost.map((post) => <PostCard key={post.title} post={post}/>)}
      </div>
    </Layout>
  )
}
