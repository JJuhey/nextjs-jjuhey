import { NotionAPI } from 'notion-client';

import { TOKEN, NOTION_AUTH_TOKEN, NOTION_ACTIVE_USER } from 'src/config'

export const notion = new NotionAPI({
  authToken: NOTION_AUTH_TOKEN,
  activeUser: NOTION_ACTIVE_USER,
})

export async function getData(method: string, url: string, body?: any) {
  console.log(`[${method}]: ${url}`)
  const options = {
    method,
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'content-type': 'application/json',
      Authorization: `Bearer ${TOKEN}`
    },
    body: body && JSON.stringify(body)
  };

  const response = await fetch(`https://api.notion.com/v1/${url}`, options)
  return response.json()
}
