import React from 'react';

const RootLayout = ({
  children
}: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body>
        <header><h1>Hello NEXTJS</h1></header>
        {children}
        <footer>JJUHEY BLOG</footer>
      </body>
    </html>
  );
}

export default RootLayout
