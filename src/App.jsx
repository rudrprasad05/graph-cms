
import { Route, Routes, BrowserRouter, Navigate} from 'react-router-dom'
import Header from "./components/Header"
import Home from './pages/Home'
import NotFound from './pages/NotFound'



function App() {
  

  return (
    <>
      <BrowserRouter>

        <Header/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/*' element={<NotFound/>}/>
        </Routes>

      </BrowserRouter>
      
    </>
  )
}

export default App
