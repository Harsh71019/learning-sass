import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import ModalContext from './context/ModalContext'

function App() {
  const [state, dispatch] = useState({ modalStatus: false })
  const openModel = () => {
    dispatch({ modalStatus: true })
  }
  const closeModal = () => {
    dispatch({ modalStatus: false })
  }
  return (
    <BrowserRouter>
      <ModalContext.Provider value={{ state, dispatch, openModel, closeModal }}>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' exact element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </ModalContext.Provider>
    </BrowserRouter >
  );
}

export default App;
