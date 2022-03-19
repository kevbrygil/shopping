import React from 'react'
import Authenticated from '@/layouts/Authenticated'
import Head from '@/components/General/Head'

const Thanks = () => {
    return (
        <>
            <Head>
                <title>Gracias</title>
            </Head>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-offset-4 col-sm-4">
                        <h2 className="text-info">Gracias por su compra</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Thanks

Thanks.layout = Authenticated
