import React from 'react';
import './globals.css'

import Header from '../components/layout/header'
import Footer from '../components/layout/footer'

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
