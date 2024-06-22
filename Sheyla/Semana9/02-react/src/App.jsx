
import Titulo from "./Titulo";
import Contador from "./Contador";

//1. El nombre del componente debe comenzar con mayúsculas
//
const App =()=>{
  const titulo="Ají de Gallina";
  const saludo = () => "Hola";

  const adios =() =>{
    alert("Byes!!!")
  }
//2. Tiene que retornar JSX(html)
return(
    //2.1 En el return SOLAMENTE se retorna 01 SOLO ELEMENTO
    //<> ES UN fRAGMENT
    <>
      {/* <h2 className="red">{titulo}</h2> */}
      <Titulo texto="Denys" numero={1} accion={adios}/>
      {/* Titulo({texto: "nombre", numero: 1}) */}
      <Titulo texto="Christian" numero={2} accion={adios}/>
      <Titulo texto="Renzo" numero={3} accion={adios}/>
      <Titulo texto={titulo} numero={4} accion={adios}/>
      <p>{saludo()} Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ullam voluptatum cupiditate.{50 + 60}</p>
      <label htmlFor="nombre">Nombre:</label>
      {/*Toda etiqueta tiene que tener su cierre*/}
      <input id="nombre"/>
      {/* onClick, onSubmit, onDobleClick, onChange */}
      <button onClick={(evento) =>{alert("Holaaa!!!" + evento.target.innerHTML)}}>
        Click!
      </button>
      <button onClick={adios}>
          Byes!!
      </button>
      <hr/>
      <Contador />
    </>
  
)
}

//3. Tiene que exportarse por defecto el componente
export default App;