import React from 'react'
import Authenticated from '@/layouts/Authenticated'
import Head from '@/components/General/Head'

const Pay = () => {
    return (
        <>
            <Head>
                <title>Confirmar</title>
            </Head>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-offset-4 col-sm-4">
                        <h2>Comfirmar</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pay

Pay.layout = Authenticated
