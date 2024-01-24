import React from 'react'
import PropTypes from 'prop-types'
import { Route, Routes } from 'react-router-dom'

import ListPage from './pages/ListPage'

ProductFeature.propTypes = {}

function ProductFeature(props) {
    return (
        <div>
            <Routes>
                <Route path='/' Component={ListPage} />
            </Routes>
        </div>
    )
}

export default ProductFeature
