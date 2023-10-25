import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
    return (
        <Html lang="en">
            <Head>

                <meta name="description" content="Documenting my journey as a software engineer"/>
                <meta property="og:url" content="https://www.ahmedmannai.me${router.asPath"/>
                <meta property="og:type" content="website"/>
                <meta property="og:site_name" content="Ahmed Mannai"/>
                <meta property="og:description" content="Documenting my journey as a software engineer"/>
                <meta property="og:image" content="https://www.ahmedmannai.me/ahmedCoverPhoto.png" />
                <meta name="author" content="@ahmmed_mannai_10"/>

                {/* ------- Twitter meta data ------- */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:site" content="@Ahmed_Mannai_10" />
                <meta property="twitter:creator" content="@Ahmed_Mannai_10" />
                <meta property="twitter:description" content="Documenting my journey as a software engineer" />
                <meta property="twitter:image" content="https://www.ahmedmannai.me/ahmedCoverPhoto.png" />




                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />

                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,500&display=swap"
                    rel="stylesheet"
                />

               <link rel="icon" type="image/x-icon" href="/ahmedIcon.png" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
