import BlogCard from '../../components/card/blogCard';

import { TOKEN, DATABASE_ID } from '../../config'

const BlogPage = async ({ category }) => {
  const { projects } = await getData();

  return (
    <div className="min-h-screen px-2">
      {/* <h1>전체보기</h1> */}
      <div className="grid md:grid-cols-3 gap-5 mt-5">
        {projects.results.map(blog => {
          return (
            <BlogCard key={blog.id} data={blog} />
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
  // console.log(projects)

  // const blogNames = projects.results.map(r => r.properties.Title.title[0].plain_text)
  // console.log(blogNames)

  return {
    projects
  }
}