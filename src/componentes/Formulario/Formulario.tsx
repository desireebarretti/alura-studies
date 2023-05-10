import React from "react";
import Botao from "../Botao/Botao";

class Formulario extends React.Component {
    render() {
        return (
            <form action="">
                <div>
                    <label htmlFor="tarefa">Adicione o que deseja estudar: </label>
                    <input type="text" name="tarefa" id="tarefa" placeholder="Qual será o próximo estudo?" required></input>
                </div>
                <div>
                    <label htmlFor="tempo">Adicione o tempo que deseja estudar:</label>
                    <input type="time" step="1" name="tempo" id="tempo" min="00:00:00" max="01:30:00" required></input>
                </div>
                <Botao />
            </form>
        )
    }
}

export default Formulario;