import React from 'react'
import ReactDOM from 'react-dom'
import App from 'next/app'
import Head from '@/components/General/Head'
import PageChange from '@/components/PageChange/PageChange'
import Router from 'next/router'
import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/productList.css'
import '@/styles/product.css'
import '@/styles/cart.css'
import '@/styles/global.css'

Router.events.on('routeChangeStart', (url) => {
    document.body.classList.add('body-page-transition')
    ReactDOM.render(<PageChange path={url} />, document.getElementById('page-transition'))
})
Router.events.on('routeChangeComplete', () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('page-transition'))
    document.body.classList.remove('body-page-transition')
})
Router.events.on('routeChangeError', () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('page-transition'))
    document.body.classList.remove('body-page-transition')
})

class NZXTAPP extends App {
    render() {
        const { Component, pageProps } = this.props
        const Layout = Component.layout || (({ children }) => <>{children}</>)
        return (
            <>
                <Head>
                    <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                    />
                </Head>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </>
        )
    }
}

export default NZXTAPP
