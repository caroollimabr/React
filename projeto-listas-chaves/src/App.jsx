import { useEffect, useState } from 'react'

const minhaLista = [
  {id: "1", value: "Fruta"},
  {id: "2", value: "Legume"},
  {id: "3", value: "Carne"}
]

export default function App() {
  
  const [produtos, setProdutos] = useState(minhaLista);
  const [pesquisa, setPesquisa] = useState("");

  useEffect(
    ()=>{
      if(pesquisa){
      const novaLista = minhaLista.filter((item)=>{
        return item.value.toLowerCase().includes(pesquisa.toLowerCase()); //verifica se caracteres da pesquisa incluem na lista existente
      })
        setProdutos(novaLista);
      } else {
        setProdutos(minhaLista);
      }
    },
    [pesquisa]) //toda vez que pesquisa for alterada

  return (
    <div>
      <h1>Listas e Efeitos Colaterais no React</h1>
      <input 
        value={pesquisa}
        onChange={(e)=>setPesquisa(e.target.value)}
        placeholder="pesquise aqui">
      </input>
      {produtos.map( (item)=>{
        return (
            <div key={item.id}>
                <h4>{item.value}</h4>
            </div>
        )
    })}
    </div>

  )
}
