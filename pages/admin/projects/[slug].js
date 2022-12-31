import React from 'react'
import AuthCheck from '../../../components/AuthCheck'
import { useRouter } from 'next/router';
import { useState } from 'react';
import { firestore } from '../../../lib/firebase';
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useDocumentDataOnce } from 'react-firebase-hooks/firestore'
import { useForm } from 'react-hook-form';
import { MDXRemote } from 'next-mdx-remote';

export default function project() {
  return (
    <AuthCheck>
        
        <PostManager />

    </AuthCheck>
  )
}

function PostManager() {

  const [preview , setPreview] = useState(true);

  const router = useRouter();
  const { slug } = router.query;

  const postRef = doc(firestore, "projects", slug)
  const [post] = useDocumentDataOnce(postRef)
  // TODO: connect to edit a document
  return (
    <main>
      {post && (
        <>
          <section>
            <h1>{post.title}</h1>
            <p>ID: {post.slug}</p>

            <PostForm postRef={postRef} defaultValues={post} preview={preview} key={post.slug}/>
          </section>

          <aside>

          </aside>

        </>
      )}
    </main>
  );
}

function PostForm ({defaultValues, postRef, preview}){
  const { register, handleSubmit, reset, watch } = useForm({defaultValues, mode:'onChange' , })

  return (
    <form onSubmit={handleSubmit(updatePost)}>

      {preview && (

          <div className=' '>
            {/* <MDXRemote {...watch('content')} /> */} 
          </div>
      )}

      <div>

        <textarea name='content' {...register('content')}>
          <fieldset>

            <input className=''  name='published' type='checkbox' {...register('content')}/>
          </fieldset>
        </textarea>
      </div>

    </form>
  );
}

const updatePost = () =>{
  
}


