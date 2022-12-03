import React from 'react';
import { StaticImage } from 'gatsby-plugin-image'

import config from '../../config';

export default function Footer() {
  return (
    <header>
      <span className="avatar">
        <StaticImage
          alt="Avatar Bitmoji"
          height="128px"
          width="128px"
          src="../assets/images/avatar.png"
        />
      </span>
      <h1>{config.authorName}</h1>
      <p>{config.heading}</p>
      <p>{config.location}</p>
    </header>
  );
}
