import React from 'react'
import { ExtendedRecordMap } from 'notion-types'

import { NotionPage } from '../../../components/notion'
import { notion } from '../../../data/fetch'

const BlogDetailPage = async ({ params }) => {
  const { id } = params
  const pageId = id.replace(/-/g, '')

  let recordMap = null
  try {
    recordMap = await notion.getPage(pageId)
    // console.log(recordMap)
  } catch(err) {
    console.error(err)
  }

  if (!recordMap) return null

  return (
    <div>
      <NotionPage recordMap={recordMap} />
    </div>
  );
}

export default BlogDetailPage;
