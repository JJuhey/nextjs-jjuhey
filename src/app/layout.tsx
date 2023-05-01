import React from 'react';
import './globals.css'
// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'

// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-tomorrow.css'

// used for rendering equations (optional)
import 'katex/dist/katex.min.css'

// skeleton for loading
import 'react-loading-skeleton/dist/skeleton.css'

import Header from '@components/layout/header'
import Footer from '@components/layout/footer'

const RootLayout = ({
  children
}: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

export default RootLayout
