import React from 'react';

const RootLayout = ({
  children
}: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body>
        <h1>Hello NEXTJS</h1>
        {children}
      </body>
    </html>
  );
}

export default RootLayout
