import { DATABASE_ID } from 'src/config'

import { getData } from '@utils/fetch';

import BlogList from '@components/list/blogList';

const BlogPage = async () => {
  const body = {
    sorts: [
      {
        "property": "Date",
        "direction": "descending"
      }
    ],
    filter: {
      "property": "Status",
      "status": {
        "does_not_equal": "Draft",
      },
    },
    page_size: 100,
  }

  const project = await getData('POST', `databases/${DATABASE_ID}/query`, body);

  return (
    <div className="min-h-screen px-2">
      {/* <h1>전체보기</h1> */}
      <BlogList blogs={project.results}/>
    </div>
  );
}

export default BlogPage
