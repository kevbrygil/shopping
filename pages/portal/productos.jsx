import React from 'react'
import Authenticated from '@/layouts/Authenticated'
import Head from '@/components/General/Head'

const Products = () => {
    return (
        <>
            <Head>
                <title>Productos</title>
            </Head>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-offset-4 col-sm-4">
                        <h2>Productos</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products

Products.layout = Authenticated
