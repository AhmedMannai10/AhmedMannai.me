'use client'
import React from 'react'
import AuthCheck from '../../../../components/AuthCheck'
import PostManager from '../../../../components/PostManager'

export default function blogPosts({params}) {
  const {slug} = params;
  return (
    <AuthCheck>
      <PostManager postType={'blog-posts'} slug={slug} />
    </AuthCheck>
  )
}
