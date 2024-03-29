import React from 'react';

import { notion } from 'src/utils/fetch';

import { NotionPage } from 'src/components/notion';

const BlogDetailPage = async ({ params }) => {
  const { id } = params
  const pageId = id.replace(/-/g, '')

  let recordMap = null
  try {
    recordMap = await notion.getPage(pageId)
    // console.log(recordMap)
    // recordMap.preview_images[src] =
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
