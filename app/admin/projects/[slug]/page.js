import React from 'react'
import AuthCheck from '../../../components/AuthCheck'
import { useRouter } from 'next/router';
import { useState } from 'react';
import { firestore } from '../../../lib/firebase';
import { doc, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { useDocumentDataOnce } from 'react-firebase-hooks/firestore'
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'react-hot-toast';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import PostTitle from '../../../components/PostTitle';

import ImageUploader from '../../../components/ImageUploader';
import PostManager from '../../../components/PostManager';

export default function project({params}) {
  const {slug} = params;
  return (
    <AuthCheck>
      <PostManager postType={'projects'} slug={slug} />
    </AuthCheck>
  )
}

