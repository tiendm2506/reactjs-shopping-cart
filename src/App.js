import './App.css'
import { Routes, Route } from 'react-router-dom'

import AlbumFeature from './features/Album'
import CounterFeature from './features/Counter'
import ProductFeature from './features/Product'
import NotFound from './components/NotFound'
import Header from 'components/Header'

function App() {
    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path='/todos/*' Component={CounterFeature} />
                <Route path='/albums' Component={AlbumFeature} />
                <Route path='/products/*' Component={ProductFeature} />
                <Route path='*' Component={NotFound} />
            </Routes>
        </div>
    )
}

export default App
