import React, { useEffect } from 'react'
import Navbar from '@/components/Navbars/GlobalNavbar'
import FooterGlobal from '@/components/Footers/FooterGlobal'
import PropTypes from 'prop-types'
import useUser from '@/swr/useUser'
import Router from 'next/router'

const Auth = ({ children }) => {
    const { loggedIn } = useUser()
    useEffect(() => {
        if (loggedIn) Router.replace('/portal/productos')
    }, [loggedIn])
    return (
        <>
            <Navbar />
            <main>
                <section>
                    {children}
                    <FooterGlobal />
                </section>
            </main>
        </>
    )
}

Auth.propTypes = {
    children: PropTypes.any,
}

export default Auth
