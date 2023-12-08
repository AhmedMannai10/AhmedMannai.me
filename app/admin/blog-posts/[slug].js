import React from 'react'
import AuthCheck from '../../../components/AuthCheck'
import PostManager from '../../../components/PostManager'

export default function blogPosts() {
  return (
    <AuthCheck>
      <PostManager postType={'blog-posts'} />
    </AuthCheck>
  )
}
