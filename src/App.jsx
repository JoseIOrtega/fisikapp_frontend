import Login from './paginas/Login'
import Registrar from './paginas/Registrar'
import RecuperarContrasena from './paginas/RecuperarContrasena'

function App() {
  return (
    <div>
      <Registrar></Registrar>
      {/* Aquí cada quien llama a su componente el que va a trabajar....*/}
      {/* ejemplo: <Login></Login> ó <Registrar></Registrar> ó <RecuperarContrasena></RecuperarContrasena>*/}
      {/* Asi puede cada uno ver su pantalla sin necesidad de esperar a que algun compañero termine para avanzar*/}
      
    </div>
  )
}
export default App
