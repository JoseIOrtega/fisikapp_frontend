import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './paginas/Login'
import Registrar from './paginas/Registrar'
import RecuperarContrasena from './paginas/RecuperarContrasena'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registro" element={<Registrar />} />
      <Route path="/recuperar" element={<RecuperarContrasena />} />
    </Routes>
   
  )
}
export default App
