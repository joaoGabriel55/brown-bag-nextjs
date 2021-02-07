import React from 'react';
import Head from 'next/head'
import { LOGO_HEADER } from '../../../shared/constants';

export default function Header() {
  return (
    <header>
      <Head>
        <title>Yu-Gi-Oh!</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <figure>
        <img src={LOGO_HEADER} width="260" alt="Yu-gi-oh" />
      </figure>
    </header>
  );
}