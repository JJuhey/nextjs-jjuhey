import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import IntroductionCard from './IntroductionCard';

import styles from '../styles/Layout.module.css';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>JJuhey</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.contentArea}>
          <div>{children}</div>
          <div style={{ fontSize: '1rem', textAlign: 'left', color: 'grey', marginTop: '10px', marginBottom: '50px' }}>
            {!home && (<Link href='/'><a>← Back to home</a></Link>)}
          </div>
        </div>
        <div className={styles.introArea}>
          <IntroductionCard />
        </div>
      </main>
      <footer className={styles.footer}>JJUHEY BLOG</footer>
    </div>
  )
}