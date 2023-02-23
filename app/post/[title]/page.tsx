import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const isExisted = fs.existsSync(fullPath)

  if (!isExisted) return null

  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const result = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(result.content)
  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    ...result.data,
  }
}

export default async function Head({ params }) {
  const post = await getPostData(params.title)
  if (!post) return null

  return (
    <div>
      <h1>{params.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }}></div>
    </div>
  )
}
