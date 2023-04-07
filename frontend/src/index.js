import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Podcasts from './pages/Podcasts'
import FilmCollection from './data/FilmCollection'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Styles.css' //Permits Styles.css for the pages

//Routes the pages
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="podcasts" element={<Podcasts />} />
          <Route path="filmcollection" element={<FilmCollection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
