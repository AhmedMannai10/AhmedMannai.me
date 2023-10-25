import React from 'react'
import Head from 'next/head'
import {useRouter} from 'next/router';

export default function MetaTags(
    {
        pageMeta
    }
) {
    const router = useRouter();

    const meta = {
        title: "Home | Ahmed Mannai",
        description: "Documenting my journey as a software engineer",
        type: "website",
        image: "https://ahmedmannai.me/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fahmed-mannai.appspot.com%2Fo%2Fuploads%252F1675363540779.jpeg%3Falt%3Dmedia%26token%3D56790d52-2d1b-42d4-a39a-99c89c661b07&w=1920&q=75",
        ... pageMeta
    };

    return (
        <Head>
        
                <title>{meta.title}</title>
                <meta name="description" content={meta.description}/>
                <meta name="title" content={meta.title}/>
                {/* open graph */}
                <meta property="og:url" content={`https://www.ahmedmannai.me${router.asPath}`}/>
                <meta property="og:type" content={meta.type}/>
                <meta property="og:title" content={meta.title}/>
                <meta property="og:site_name" content="Ahmed Mannai"/>
                <meta property="og:description" content={meta.description}/>
                <meta property="og:image" content={meta.image}/>
                <meta name="author" content="@ahmmed_mannai_10"/>

                {/* ------- Twitter meta data ------- */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:site" content="@Ahmed_Mannai_10" />
                <meta property="twitter:creator" content="@Ahmed_Mannai_10" />
                <meta property="twitter:title" content={meta.title} />
                <meta property="twitter:description" content={meta.description} />
                <meta property="twitter:image" content={meta.image} />





        </Head>
    )
}
