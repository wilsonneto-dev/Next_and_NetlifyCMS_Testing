import Head from "next/head"
import { Component } from 'react'
import { attributes, react as HomeContent } from '../../../_content/home.md';

import HeaderNav from '../../shared/layout/HeaderNav';

export default class Home extends Component {
  render() {
    let { title, cats } = attributes;
    return (
      <>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <article>
          <HeaderNav />
          
          <h1>{title}</h1>
          <HomeContent />
          <ul>
            {cats.map((cat, k) => (
              <li key={k}>
                <h2>{cat.name}</h2>
                <p>{cat.description}</p>
              </li>
            ))}
          </ul>
        </article>
      </>
    )
  }
}