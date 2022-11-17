import React from 'react';
import Link from 'next/link'

const Page = () => {
  return (
    <div>
      Hello HomePage<br/>
      <Link href="/blog">BLOG</Link>
    </div>
  );
}

export default Page
