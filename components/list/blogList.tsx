"use client"
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

import BlogCard from '../card/blogCard';

const blogList = ({ blogs }: { blogs: any[] }) => {
  const [filteredBlogs, setFilteredBlogs] = useState(blogs)
  const searchParams = useSearchParams();

  const category = searchParams.get('category')

  useEffect(() => {
    if (category) {
      const filtered = category === 'all'
        ? blogs
        : blogs.filter(b => b.properties.category.select?.name === category)
      setFilteredBlogs(filtered)
    }
  }, [category]);

  return (
    <div className="grid md:grid-cols-3 gap-5 mt-5">
      {filteredBlogs.map(blog => {
        return (
          <BlogCard key={blog.id} data={blog} />
        )
      })}
    </div>
  );
}

export default blogList;
