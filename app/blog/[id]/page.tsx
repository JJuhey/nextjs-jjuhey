import React from 'react'

import { NotionPage } from '../../../components/notion'
import { notion } from '../../../data/fetch'

const BlogDetailPage = async ({ params }) => {
  const { id } = params
  const pageId = id.replace(/-/g, '')

  let recordMap
  try {
    recordMap = await notion.getPage(pageId)
    // console.log(recordMap)
  } catch(err) {
    console.error(err)
    return null
  }

  return (
    <div>
      <NotionPage recordMap={recordMap} />
    </div>
  );
}

export default BlogDetailPage;
