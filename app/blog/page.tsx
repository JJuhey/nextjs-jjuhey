import React from 'react';
import BlogItem from '../../components/blogItem';

import { TOKEN, DATABASE_ID } from '../../config'

const BlogPage = async () => {
  const { projects } = await getData()

  return (
    <div>
      <h1 className='text-2xl font-bold sm:text-4xl m-4'>
        포스팅 수: 
        <span className='pl-4 text-gray-500'>{projects.results.length}</span>
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {projects.results.map(blog => {
          return (
            <BlogItem key={blog.id} data={blog} />
          )
        })}
      </div>
    </div>
  );
}

export default BlogPage

async function getData() {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'content-type': 'application/json',
      Authorization: `Bearer ${TOKEN}`
    },
    body: JSON.stringify({
      sorts: [
        {
          "property": "Title",
          "direction": "ascending"
        }
      ],
      page_size: 100,
    })
  };
  
  const response = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
  const projects = await response.json()
  // console.log(project)

  const blogNames = projects.results.map(r => r.properties.Title.title[0].plain_text)
  // console.log(blogNames)

  return {
    projects
  }
}