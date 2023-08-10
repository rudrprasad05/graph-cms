
import { Route, Routes, BrowserRouter, Navigate} from 'react-router-dom'
import Header from "./components/Header"
import Blogs from './pages/Blogs'
import Categories from './pages/Categories'
import Home from './pages/Home'
import NotFound from './pages/NotFound'



function App() {
  

  return (
    <>
      <BrowserRouter>

        <Header/>

        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/category' element={ <Categories /> } />
          <Route path='/blog/:id' element={ <Blogs /> } />
          <Route path='/category/:id' element={ <Categories /> } />
          <Route path='/*' element={ <NotFound /> }/>
        </Routes>

      </BrowserRouter>
      
    </>
  )
}

export default App
