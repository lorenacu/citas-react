import Formulario from "./Components/Formulario"
import Header from "./components/Header"
import ListadoPaciente from "./Components/ListadoPaciente"
function App() {
 
  return (
   
      <div className = "container mx-auto mt-40"> 
      <Header/>
      <Formulario/>
      <ListadoPaciente/>
      </div>
  )
}
export default App
 