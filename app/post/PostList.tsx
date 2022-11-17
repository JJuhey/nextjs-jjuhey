import React from 'react';
import Link from 'next/link';

const PostList = () => {
  const posts = [
    {
      id: 1,
      title: 'first-post',
      summary: '2022.01.28',
    },
    {
      id: 2,
      title: 'second-post',
      summary: '2022.02.25',
    },
    {
      id: 3,
      title: 'third-post',
      summary: '2022.03.24',
    },
    {
      id: 4,
      title: 'figma-drawing',
      summary: '2022.04.29'
    }
  ]

  const PostComp = posts.map((post) => {
    return (
      <li key={post.title}>
        <Link href={`/post/${post.title}`}>
          {post.title}
        </Link>
      </li>
    )
  })
  
  return (
    <ul>
      {PostComp}
    </ul>
  );
}

export default PostList;
