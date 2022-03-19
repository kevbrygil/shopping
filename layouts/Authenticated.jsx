import React, { useEffect } from 'react'
import Navbar from '@/components/Navbars/OptionsNavbar'
import FooterGlobal from '@/components/Footers/FooterGlobal'
import PropTypes from 'prop-types'
import useUser from '@/swr/useUser'
import Router from 'next/router'
import { Provider } from 'react-redux'
import store from '@/store/index'

const Authenticated = ({ children }) => {
    const { loggedOut } = useUser()
    useEffect(() => {
        if (loggedOut) Router.replace('/auth/login')
    }, [loggedOut])
    return (
        <>
            <Navbar />
            <main>
                <section>
                    <Provider store={store}>{children}</Provider>
                    <FooterGlobal />
                </section>
            </main>
        </>
    )
}

Authenticated.propTypes = {
    children: PropTypes.any,
}

export default Authenticated
