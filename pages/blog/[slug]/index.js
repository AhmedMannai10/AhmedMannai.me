import React from 'react'
import useRouter from 'next/router';
import PostTitle from '../../../components/PostTitle';


const blogPost = () => { 

  return (
    <div className='flex flex-col gap-10 items-center pt-16 min-h-screen'>
      <PostTitle title="Serial Port Flutter App" publichedDate="4/5/1002"/>
    </div>
  )
}

export default blogPost;