import React from 'react';
import Link from 'next/link'
import Head from 'next/head'
import styles from './Header.module.css'
import { LOGO_HEADER } from '../../../../shared/constants';

export default function Header() {
  return (
    <header>
      <Head>
        <title>Yu-Gi-Oh!</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={styles['header-container']}>
        <Link href={{ pathname: '/' }}>
          <figure>
            <img style={{ cursor: 'pointer' }} src={LOGO_HEADER} width="260" alt="Yu-gi-oh" />
          </figure>
        </Link>
      </div>
    </header>
  );
}