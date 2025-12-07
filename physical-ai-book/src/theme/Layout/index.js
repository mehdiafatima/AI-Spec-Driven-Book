import React from 'react';
import Layout from '@theme-original/Layout';
import BookChatbot from '@site/src/components/BookChatbot';

export default function LayoutWrapper(props) {
  return (
    <>
      <Layout {...props} />
      <BookChatbot />
    </>
  );
}