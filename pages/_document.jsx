import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class NZXTDOCUMENT extends Document {
    render() {
        return (
            <Html lang="es">
                <Head>
                    <meta charSet="utf-8" />
                    <link rel="shortcut icon" href="/favicon.ico" />
                </Head>
                <body>
                    <div id="page-transition"></div>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default NZXTDOCUMENT
