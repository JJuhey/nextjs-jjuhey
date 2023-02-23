import BlogCard from '../../components/card/blogCard';

import { DATABASE_ID } from '../../config'
import { getData } from '../../data/fetch';

const BlogPage = async ({ category }) => {
  const body = {
    sorts: [
      {
        "property": "Date",
        "direction": "descending"
      }
    ],
    page_size: 100,
  }

  const projects = await getData('POST', `databases/${DATABASE_ID}/query`, body);

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
