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
import PostTitle from '../../../components/PostTitle';
import EditPostLayout from '../../../Layouts/EditPostLayout';

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

    <main className=' mt-5'>
      {post && (
        <>
          <PostTitle title={post.title} publichedDate={post.publichedDate} />
          <EditPostLayout>
            <section className=' flex-1 lg:mx-autogray-300 px-4 lg:max-w-4xl lg:mx-auto'>

              <p className='text-lg mb-1'>ID: {post.slug}</p>

              <PostForm postRef={postRef} defaultValues={post} preview={preview} />
            </section>

            <aside className=' pt-10 top-14 lg:sticky lg:h-full w-full lg:w-80 flex-col align-center space-y-2'>
              <h3 className=' font-bold'>Tools</h3>
              <button className=' border-1 bg-bg_btn text-white px-2 rounded-full' onClick={() => setPreview(!preview)}>{preview ? 'Edit' : 'Preview'}</button>
              <Link href={`/${post.username}/${post.slug}`}>
                <CtaButton name="Live view" />
              </Link>

            </aside>

          </EditPostLayout>
        </>
      )}

    </main>
  );
}

function PostForm({ defaultValues, postRef, preview }) {
  const { register, handleSubmit, reset, watch, formState, errors } = useForm({ defaultValues, mode: 'onChange' })

  const { isValid, isDirty } = formState;

  const updatePost = async ({ content, description, published }) => {
    await updateDoc(postRef, {
      content: content,
      description: description,
      published: published,
      updatedAt: serverTimestamp(),
    });
    reset({ content, description, published });

    toast.success("Post updated successfully!");
  }

  return (
    <>
      <form onSubmit={handleSubmit(updatePost)}>

        {preview && (

          <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 prose dark:prose-invert p-4 max-w-none">
            <ReactMarkdown>{watch('content')}</ReactMarkdown>
          </div>
        )}
        <div className={preview ? "hidden" : ""}>
          <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div class="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
              <button type="button" data-tooltip-target="tooltip-fullscreen" class="p-2 text-gray-500 rounded cursor-pointer sm:ml-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Full screen</span>
              </button>
              <div id="tooltip-fullscreen" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Show full screen
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
            </div>

            <div class="my-2">
              <input name="description" {...register('description')} class="shadow-sm bg-white  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
            </div>

            <div class=" bg-white rounded-b-lg dark:bg-gray-800">
              <label for="editor" class="sr-only">Publish post</label>
              <textarea name='content' {...register('content', {
                maxLength: { value: 20000, message: 'content is too long' },
                minLength: { value: 20, message: 'content is too short' },
                required: true
              })} id="editor" rows="15" class="block w-full p-2 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write an article..." required></textarea>
            </div>
            {errors && <p className=' text-red-600 font-bold'>{errors}</p>}

            <div className='flex items-center space-x-1 sm:pr-4 '>
              <fieldset className=' ml-2 '>
                <input className='' name='published' type='checkbox' {...register('published')} />
                <label>Published</label>
              </fieldset>
            </div>
          </div>
          <button type="submit" disabled={!isValid} class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
            Publish post
          </button>
        </div>

      </form>
    </>
  );
}

