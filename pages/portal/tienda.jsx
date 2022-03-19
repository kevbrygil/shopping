import React from 'react'
import Authenticated from '@/layouts/Authenticated'
import Head from '@/components/General/Head'
import Cart from '@/containers/Cart'
import ProductList from '@/containers/ProductList'

const Shop = () => {
    return (
        <>
            <Head>
                <title>Productos</title>
            </Head>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <ProductList />
                    </div>
                    <div className="col-md-4">
                        <Cart />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop

Shop.layout = Authenticated
