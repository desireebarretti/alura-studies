import React from "react";
import Botao from "../Botao/Botao";
import style from './Formulario.module.scss';

// forma antiga de escrever um componente react js
class Formulario extends React.Component {
    state = {
        tarefa: '',
        tempo: '00:00'
    }

    addTarefa(evento: React.FormEvent) {
        evento.preventDefault();
        console.log('state: ', this.state);
    }

    render() {
        return (
            <form action="" className={style.novaTarefa}onSubmit={this.addTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label
                        htmlFor="tarefa">
                        Adicione o que deseja estudar:
                    </label>
                    <input
                        type="text"
                        name="tarefa"
                        value={this.state.tarefa}
                        onChange={evento => this.setState({...this.state, tarefa: evento.target.value})}
                        id="tarefa"
                        placeholder="Qual será o próximo estudo?" required>
                    </input>
                </div>
                <div className={style.inputContainer}>
                    <label
                        htmlFor="tempo">
                        Adicione o tempo que deseja estudar:
                    </label>
                    <input
                        type="time"
                        step="1"
                        name="tempo"
                        value={this.state.tempo}
                        onChange={evento => this.setState({...this.state, tempo: evento.target.value})}
                        id="tempo"
                        min="00:00:00"
                        max="01:30:00"
                        required>
                    </input>
                </div>
                <Botao texto="Adicionar"/>
            </form>
        )
    }
}

export default Formulario;