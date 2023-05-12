import { constants } from "buffer";
import React, { useState } from "react";
import style from './Lista.module.scss';
import Item from "./Item/Item";

function Lista() {
    const [tarefas, setTarefas] = useState([{
        tarefa: 'React',
        tempo: '02:00:00'
    },
    {

        tarefa: 'JavaScript',
        tempo: '01:00:00'
    },
    {
        tarefa: 'Python',
        tempo: '01:30:00'
    }])

    return (
        <aside className={style.listaTarefas}>
            <h2 onClick={() => {
                setTarefas([...tarefas, { tarefa: "Estudar estado", tempo: "05:00" }])
            }}>
                Estudos do dia
            </h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                        key={index}
                        tarefa={item.tarefa}
                        tempo={item.tempo}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;