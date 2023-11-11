import { useState } from "react";
import { useEffect } from "react";

export default function App() {

  const [tarefas, setTarefas] = useState([]);

useEffect(()=>{
  async function buscarDados(){
    const resultado = await fetch("https://jsonplaceholder.typicode.com/todos"); //await - assincrono
    const resultadoFinal = await resultado.json();
    return resultadoFinal;
  }

  buscarDados().then(res => setTarefas(res));
  //console.log(buscarDados().then(res => console.log(res) ))
}, [])

  return (
    <div>
      <h1>Buscando dados</h1>
      <ol>
      {tarefas.map((tarefa)=>{
        return (
          <div>
            <li key={tarefa.id}>
              {tarefa.title}
              {tarefa.completed ? "- Tarefa concluída" : null} 
            </li>
              
          </div>
        )
      })}
      </ol>
    </div>
  )
}
