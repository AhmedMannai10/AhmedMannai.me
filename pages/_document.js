import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
    return (
        <Html>
            <Head>
               
                <meta
                    property="og:image"
                    content="/ahmedCoverPhoto.png"
                />

                <meta
                    property="og:image"
                    content="https://firebasestorage.googleapis.com/v0/b/ahmed-mannai.appspot.com/o/uploads%2F1675363540779.jpeg?alt=media&token=56790d52-2d1b-42d4-a39a-99c89c661b07"

                />

                <meta name="description" content="I share about Software Engineering and life lessons"/>


                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="1024"/>
                <meta property="og:image:height" content="1024"/>
                {/* <!-- Twitter --> */}
                <meta property="twitter:card" content="ahmedCoverPhoto.png"/>
                <meta property="twitter:image" content="https://firebasestorage.googleapis.com/v0/b/ahmed-mannai.appspot.com/o/uploads%2F1675363540779.jpeg?alt=media&token=56790d52-2d1b-42d4-a39a-99c89c661b07" />
                <meta property="twitter:image:type" content="image/png" />
                <meta property="twitter:title" content="Home"/>
                <meta property="twitter:description" content="Documenting my Journey as Software Engineer"/>



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

               <link rel="icon" href="/ahmedIcon.png" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
