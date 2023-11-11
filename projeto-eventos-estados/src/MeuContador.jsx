import { useState } from "react";
import styles from "./button.module.css"

export default function MeuContador(){

    console.log('renderizando meu contador')

    const [contador, setContador] = useState(0);

    function aumentar(){
        setContador(contador + 1);
    }

    function diminuir(){
        setContador(contador - 1);
    }

    if (contador > 5){
        return(
            <div className="container">
                <h1>Meu Contador: {contador}</h1>
                <h3>Valor muito alto!</h3>
                <button className={styles.myButton} onClick={aumentar}>aumentar</button>
                <button className={styles.myButton} onClick={diminuir}>diminuir</button>
            </div>
        )   
    }

    return (
        <div className="container">
            <h1>Meu Contador: {contador}</h1>
            {/* { contador > 9 ? <h3>valor muito grande</h3> : null } */}
            <button className={styles.myButton} onClick={aumentar}>aumentar</button>
            <button className={styles.myButton} onClick={diminuir}>diminuir</button>

        </div>
    )
}