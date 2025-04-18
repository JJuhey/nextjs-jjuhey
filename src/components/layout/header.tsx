"use client"
import React, { useEffect, useState } from 'react';

import Button from '@components/button';

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // just trigger this so that the initial state
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 ${scrollY === 0 ? 'bg-black' : 'bg-white'} z-10`}>
      <div className="container mx-auto max-w-5xl	flex p-4 flex-row items-center">
        <a className="title-font font-medium" href="/">
          {scrollY === 0 ? (
            <svg width="79" height="25" viewBox="0 0 79 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.908 20.2C18.348 20.2 17.8147 20.16 17.308 20.08C16.8014 20.0133 16.3147 19.9 15.848 19.74V16.62C16.168 16.7533 16.528 16.8533 16.928 16.92C17.328 16.9867 17.728 17.02 18.128 17.02C18.848 17.02 19.3614 16.8733 19.668 16.58C19.9747 16.2867 20.128 15.8 20.128 15.12V7.12H23.888V15.72C23.888 17.12 23.4614 18.22 22.608 19.02C21.768 19.8067 20.5347 20.2 18.908 20.2ZM31.5934 20.2C30.3934 20.2 29.3334 20.0067 28.4134 19.62C27.5067 19.22 26.7934 18.64 26.2734 17.88C25.7534 17.1067 25.4934 16.16 25.4934 15.04V7.12H29.2534V14.64C29.2534 16.2133 30.0334 17 31.5934 17C32.34 17 32.9134 16.8067 33.3134 16.42C33.7134 16.0333 33.9134 15.44 33.9134 14.64V7.12H37.6734V15.04C37.6734 16.16 37.4134 17.1067 36.8934 17.88C36.3867 18.64 35.6734 19.22 34.7534 19.62C33.8467 20.0067 32.7934 20.2 31.5934 20.2ZM39.3824 20V7.12H43.1424V11.92H47.5824V7.12H51.3424V20H47.5824V15.2H43.1424V20H39.3824ZM53.152 20V7.12H62.912V10H56.912V12.1H62.172V15.02H56.912V17.12H62.912V20H53.152ZM68.349 20V15.28L63.709 7.12H67.629L70.229 11.98L72.829 7.12H76.749L72.109 15.28V20H68.349Z" fill="white"/>
              <circle cx="7.5" cy="16.5" r="4.5" fill="white"/>
              <rect x="3" y="7" width="9" height="9" fill="white"/>
            </svg>) : (
            <svg width="79" height="25" viewBox="0 0 79 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.908 20.2C18.348 20.2 17.8147 20.16 17.308 20.08C16.8014 20.0133 16.3147 19.9 15.848 19.74V16.62C16.168 16.7533 16.528 16.8533 16.928 16.92C17.328 16.9867 17.728 17.02 18.128 17.02C18.848 17.02 19.3614 16.8733 19.668 16.58C19.9747 16.2867 20.128 15.8 20.128 15.12V7.12H23.888V15.72C23.888 17.12 23.4614 18.22 22.608 19.02C21.768 19.8067 20.5347 20.2 18.908 20.2ZM31.5934 20.2C30.3934 20.2 29.3334 20.0067 28.4134 19.62C27.5067 19.22 26.7934 18.64 26.2734 17.88C25.7534 17.1067 25.4934 16.16 25.4934 15.04V7.12H29.2534V14.64C29.2534 16.2133 30.0334 17 31.5934 17C32.34 17 32.9134 16.8067 33.3134 16.42C33.7134 16.0333 33.9134 15.44 33.9134 14.64V7.12H37.6734V15.04C37.6734 16.16 37.4134 17.1067 36.8934 17.88C36.3867 18.64 35.6734 19.22 34.7534 19.62C33.8467 20.0067 32.7934 20.2 31.5934 20.2ZM39.3824 20V7.12H43.1424V11.92H47.5824V7.12H51.3424V20H47.5824V15.2H43.1424V20H39.3824ZM53.152 20V7.12H62.912V10H56.912V12.1H62.172V15.02H56.912V17.12H62.912V20H53.152ZM68.349 20V15.28L63.709 7.12H67.629L70.229 11.98L72.829 7.12H76.749L72.109 15.28V20H68.349Z" fill="#5A37D7"/>
              <circle cx="7.5" cy="16.5" r="4.5" fill="#5A37D7"/>
              <rect x="3" y="7" width="9" height="9" fill="#5A37D7"/>
            </svg>
          )}
        </a>
        <div className="flex-auto"/>
        <Button className="py-2 px-3 md:py-2 md:px-4 text-xs md:text-sm" href="https://youtube.com/@jjuhey">Youtube</Button>
      </div>
    </header>
  );
}

export default Header;
