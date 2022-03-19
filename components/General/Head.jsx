import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

const HeadApp = (props) => {
    const { children } = props
    return <Head>{children}</Head>
}

HeadApp.propTypes = {
    children: PropTypes.any.isRequired,
}

export default HeadApp
