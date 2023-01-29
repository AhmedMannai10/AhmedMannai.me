import React from 'react'
import Head from 'next/head'

export default function MetaTags(
    {
        title = 'Ahmed Mannnai portfolio / blog website',
        description = 'Personal website for documenting my coding journey',
        image = "https://ahmedmannai.com/resources/img/ahmedimg1.jpeg"
    }
) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@Ahmed_Mannai_10" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
        </Head>
    )
}
