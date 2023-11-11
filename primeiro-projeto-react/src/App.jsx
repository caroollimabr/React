import MeuComponente from "./components/MeuComponente"

function App() {

  return (
    <div>
      <h1>Olá, mundo!</h1>
      <MeuComponente />
      <MeuBotao conteudo='Clique-me' />

      <MeuBotao conteudo='Depois aqui'/>

      <MeuBotao conteudo='E, por fim, aqui' numero={2} />
    </div>
    
  )
}

function MeuBotao(props) { //propriedade
  console.log(props.numero);
  return (
    <button>{props.conteudo}</button>
  )
}

export default App
