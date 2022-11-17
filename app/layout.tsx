import React from 'react';
import './globals.css'

import Header from '../components/header'
import Footer from '../components/footer'

const RootLayout = ({
  children
}: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body>
        <Header/>
        {children}
        {/* <section className="text-gray-600 body-font">
          <div className="container px-5 py-8 mx-auto">
            {children}
          </div>
        </section> */}
        <Footer/>
      </body>
    </html>
  );
}

export default RootLayout
