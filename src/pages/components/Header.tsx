import React from 'react';
import { LOGO_HEADER } from '../../shared/constants';

export default function Header() {
  return (
    <header>
      <figure>
        <img src={LOGO_HEADER} width="260" alt="Yu-gi-oh" />
      </figure>
    </header>
  );
}