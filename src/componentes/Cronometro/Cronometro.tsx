import React from "react";
import Botao from "../Botao/Botao";
import Relogio from "./Relogio/Relogio";
import style from './Cronometro.module.scss'

export default function Cronometro() {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronometro
            </p>
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>
            <div>
                <Botao
                    texto={"Começar!"}
                />
            </div>
        </div>
    )
}