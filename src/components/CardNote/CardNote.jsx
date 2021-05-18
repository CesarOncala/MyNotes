import { Component } from "react"
import "../CardNote/estilo.css"
import Trash from "../../assests/Img/delete.svg"

export default class CardNote extends Component {
    render() {
        return (
            <section className="card-nota">
                <header className="card-nota_cabecalho">
                    <img src={Trash}
                        onClick={()=> this.props.DeleteNote(this.props.index)}
                    />
                    <h3 className="card-nota_titulo">{this.props.Title}</h3>
                    <h4>{this.props.Category} </h4>
                </header>

                <p className="card-nota_texto">{this.props.Text}</p>
            </section>

        )
    }
}