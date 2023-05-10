import React from "react";
import './style.scss';

// formato de componente em typescript
class Botao extends React.Component {
    render() {
        return (
            <button className="botao">
                Botão
            </button>
        )
    }
}

export default Botao;