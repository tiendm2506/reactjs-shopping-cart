import './App.css'
import { Routes, Route, NavLink } from 'react-router-dom'

import AlbumFeature from './features/Album'
import TodoFeature from './features/Todo'
import CounterFeature from './features/Counter'
import NotFound from './components/NotFound'

import productApi from './api/productApi'
import { useEffect } from 'react'
import Header from 'components/Header'

function App() {
    useEffect(() => {
        const getProducts = async () => {
            const params = {
                _limit: 10,
            }
            const productList = await productApi.getAll(params)
        }
        getProducts()
    }, [])
    return (
        <div className='App'>
            <Header />
            <p>
                <NavLink to='/todos'>Todos</NavLink>
            </p>
            <p>
                <NavLink to='/albums'>Albums</NavLink>
            </p>
            <Routes>
                <Route path='/todos/*' Component={CounterFeature} />
                <Route path='/albums' Component={AlbumFeature} />
                <Route path='*' Component={NotFound} />
            </Routes>
        </div>
    )
}

export default App
