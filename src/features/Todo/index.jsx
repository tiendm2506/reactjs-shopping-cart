import React from 'react'
import { Route, Routes } from 'react-router-dom'

import NotFound from '../../components/NotFound'
import DetailPage from './pages/DetailPage'
import ListPage from './pages/ListPage'

TodoFeature.propTypes = {}

function TodoFeature(props) {
    return (
        <div>
            <Routes>
                <Route path='/' Component={ListPage} />
                <Route path='/:todoId' Component={DetailPage} />
                <Route Component={NotFound} />
            </Routes>
        </div>
    )
}

export default TodoFeature
