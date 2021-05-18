import { Component } from "react";
import '../ListCategory/estilo.css'

export class ListCategory extends Component {

constructor(){
    super();
    this.state = {categorys:[]}
    this._newCategorys = this._newCategorys.bind(this);
}

    componentDidMount(){
        this.props.categorys.subscribe(this._newCategorys);
    }

    componentWillUnmount(){
        this.props.categorys.unsubscribe(this._newCategorys);
      }

    _newCategorys(categorys){
            this.setState({...this.state,categorys})
    }


    render() {
        return (
            <section  className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {this.props.categorys.categorys.map((ctg,index) =>{
                        return <li key={index} className="lista-categorias_item">{ctg} </li>
                    })}
                </ul>
                <input placeholder="Type New Category Here"
                    onKeyUp={(e) => {
                        if (e.keyCode === 13)
                                this.props.CreateCategory(e.target.value)
                    }}
                    type="text" 
                    className="lista-categorias_input"
                    />
            </section>

        )
    }

}