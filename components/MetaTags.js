import React from 'react'
import Head from 'next/head'

export default function MetaTags(
    {
        title = 'Ahmed Mannnai portfolio / blog website',
        description = 'Personal website for documenting my coding journey',
        // TODO : chnage for the current website
        image, 
        url = "https://ahmedmannai.me/"
    }
) {
    return (
        <Head>
            <title>{title}</title>
            {/* ------- Twitter meta data ------- */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@Ahmed_Mannai_10" />
            <meta name="twitter:creator" content="@Ahmed_Mannai_10" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            <meta property="og:url" content={url}/>
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* ------- LinkedIN meta data ------- */}
        </Head>
    )
}
