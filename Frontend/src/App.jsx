import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Display from "./pages/Display"
import Insert from "./pages/Insert"



function App() {
  
  return (
    <>
       <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout></Layout>}>
              <Route index  element={<Home></Home>}></Route>
              <Route path="home" element={<Home></Home>}></Route>
              <Route path="about" element={<About></About>}></Route>
              <Route path="display" element={<Display></Display>}></Route>
              <Route path="insert" element={<Insert></Insert>}></Route>
              </Route>

          </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
