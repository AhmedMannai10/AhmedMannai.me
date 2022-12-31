import React from 'react'
import AuthCheck from '../../../components/AuthCheck'
import { useRouter } from 'next/router';
import { useState } from 'react';
import { firestore } from '../../../lib/firebase';
import { doc, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { useDocumentDataOnce } from 'react-firebase-hooks/firestore'
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'react-hot-toast';
import Link from 'next/link';
import CtaButton from '../../../components/CtaButton';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

export default function project() {
  return (
    <AuthCheck>
      <PostManager />
    </AuthCheck>
  )
}

function PostManager() {

  const [preview, setPreview] = useState(false);

  const router = useRouter();
  const { slug } = router.query;

  const postRef = doc(firestore, "projects", slug)
  const [post] = useDocumentDataOnce(postRef)


  return (
    <main>
      {post && (
        <>
          <section>
            <h1>{post.title}</h1>
            <p>ID: {post.slug}</p>

            <PostForm postRef={postRef} defaultValues={post} preview={preview} />
          </section>

          <aside>
            <h3>Tools</h3>
            <button onClick={() => setPreview(!preview)}>{preview ? 'Edit' : 'Preview'}</button>
            <Link href={`/${post.username}/${post.slug}`}>
              <CtaButton name="Live view" />
            </Link>

          </aside>

        </>
      )}
    </main>
  );
}

function PostForm({ defaultValues, postRef, preview }) {
  const { register, handleSubmit, reset, watch } = useForm({ defaultValues, mode: 'onChange' })

  const updatePost = async ({ content, published }) => {
    await updateDoc(postRef, {
      content: content,
      published: published,
      updatedAt: serverTimestamp(),
    });
    reset({ content, published });

    toast.success("Post updated successfully!");
  }

  return (
    <>
      <form onSubmit={handleSubmit(updatePost)}>

        {preview && (

          <div className=' '>
            <ReactMarkdown>{watch('content')}</ReactMarkdown>
          </div>
        )}

        <div>

          <textarea name='content' {...register('content')}></textarea>

          <fieldset>
            <input className='' name='published' type='checkbox' {...register('published')} />
            <label>Published</label>
          </fieldset>

          <button type='submit' >
            Save Changes
          </button>


        </div>

      </form>
    </>
  );
}

