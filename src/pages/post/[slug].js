import React from 'react';

import HeaderNav from '../../shared/layout/HeaderNav';

const Post = ({ attributes, content: Content }) => (
  <>
    <HeaderNav />
    <h2>{ attributes.title }</h2>
    <Content />
  </>
);

Post.getInitialProps = async ({ query }) => {
  const mkp = await import(`../../../_content/posts/${query.slug}.md`);
  console.log(mkp);
  const { attributes, react: content } = mkp;
  return { attributes, content };
}

export default Post;