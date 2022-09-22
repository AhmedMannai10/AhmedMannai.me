import React from 'react'
import useRouter from 'next/router';


const post = () => {

  const router = useRouter();
  const {id} = router.query;

  return (
    <div>
        hello there
    </div>
  )
}

export default post;