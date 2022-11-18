import React from 'react';
import Image from 'next/image'

const BlogItem = ({ data }) => {
  // console.log(data)
  const title = data.properties.Title.title[0].plain_text
  const url = data.properties.URL.url
  const date = data.properties.Date.date.start

  const imgSrc = data.cover.file?.url || data.cover.external.url

  const tags = data.properties.Tags.multi_select

  return (
    <div className='blog-card'>
      <Image
        style={{ backgroundColor: 'gray', width: '100%', height: '250px' }}
        className='rounded-t-md object-none'
        alt="blog cover image" 
        src={imgSrc} 
        width={1000}
        height={100}
        quality={75}
      />
      <div className='p-4 flex flex-col'>
        <h1 className='text-2xl font-bold'>{title}</h1>
        <h3 className='text-xl'>{date}</h3>
        {url && <a href={url}>URL바로가기</a>}
        <div className='flex item-start mt-2'>
          {tags.map(t => (
            <h1 className='px-2 py-1 mr-2 rounded-md bg-blue-200' key={t.id}>{t.name}</h1>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogItem;
