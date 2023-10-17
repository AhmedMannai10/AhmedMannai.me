import React from 'react'
import Head from 'next/head'

export default function MetaTags(
    {
        title = 'Ahmed Mannnai portfolio / blog website',
        description = 'Exploring the World of Software Engineering: Join me on my personal website as I embark on a journey through the realm of code and creativity.',
        // TODO : chnage for the current website
        image = 'https://firebasestorage.googleapis.com/v0/b/ahmed-mannai.appspot.com/o/uploads%2F1675363540779.jpeg?alt=media&token=56790d52-2d1b-42d4-a39a-99c89c661b07', 
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
            <meta name="title" property="og:title" content={title}/>
            <meta name="description" property="og:description" content={description}/>
            <meta name="image" property="og:image" content={image}/>
            <meta name="author" content="Ahmed Mannai"/>
        </Head>
    )
}
