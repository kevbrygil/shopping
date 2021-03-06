import React from 'react'
import Authenticated from '@/layouts/Authenticated'
import Head from '@/components/General/Head'
import Cart from '@/containers/Cart'

const Pay = () => {
    return (
        <>
            <Head>
                <title>Confirmar</title>
            </Head>
            <div className="container-fluid">
                <div className="row">
                    <h2>Confirmar</h2>
                    <div className="col-md-8">
                        <Cart />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pay

Pay.layout = Authenticated
