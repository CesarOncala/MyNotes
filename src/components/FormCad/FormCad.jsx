import React, { Component } from "react";
import "./estilo.css"

export class FormCad extends Component {

   constructor(props) {
      super(props);
      this.title = "";
      this.text = "";
      this.category = "Without Category";
      this._newCategorys = this._newCategorys.bind(this);
      this.state = {categorys:[]};

   }

   componentDidMount(){
      this.props.categorys.subscribe(this._newCategorys);
   }

   componentWillUnmount(){
      this.props.categorys.unsubscribe(this._newCategorys);
   }


   _newCategorys(o){
      this.setState({...this.state,o});
   }

   _getTitle(e) {
      e.stopPropagation();
      this.title = e.target.value;
   }

   _getText(e) {

      e.stopPropagation();
      this.text = e.target.value;
   }

   _newNote(e) {
      e.preventDefault();
      e.stopPropagation();
      this.props.CreateNote(this.title, this.text, this.category);
   }


   render() {
      return (
         <form className="form-cadastro"
            onSubmit={this._newNote.bind(this)}
         >

            <select
               onChange={(e)=>{
                     this.category = e.target.value;
               }}
               className="form-cadastro_input"
            >
               <option>Without Category</option>
               {this.props.categorys.categorys.map((o,id)=>{
                  return <option key={id} >{o}</option>
               })}

            </select>

            <input type="text"
               placeholder="Title"
               className="form-cadastro_input"
               onChange={this._getTitle.bind(this)}
            />

            <textarea
               rows={15}
               placeholder='Type Your Note Here...'
               className='form-cadastro_input'
               onChange={this._getText.bind(this)}
            />

            <button className="form-cadastro_input form-cadastro_submit">
               Create Note
               </button>

         </form>

      );
   }
}