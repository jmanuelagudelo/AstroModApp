import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import RelatividadGeneral from "./pages/Relatividad"
import Estelar from "./pages/Estelar"
import Cuantica from "./pages/Cuantica"

function App() {
  return (
    <BrowserRouter basename="/AstroModApp">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/relatividad-especial" element={<RelatividadGeneral />} />
        <Route path="/astrofisica-estelar" element={<Estelar/>}/>
        <Route path="/mecanica-cuantica" element={<Cuantica/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App