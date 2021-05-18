import React, { Component } from 'react';
import '../src/assests/App.css'
import '../src/assests/index.css'
import { FormCad } from "./components/FormCad/FormCad";
import { ListCategory } from './components/ListCategory/ListCategory';
import { NotesList } from "./components/NotesList/NotesList"
import { Category } from '../src/data/Category'
import { Notes } from '../src/data/Notes'

export class App extends Component {

  constructor() {
    super();
    this.categorys = new Category();
    this.notes = new Notes();
  }

  render() {
    return (
      <section className="conteudo">
        <FormCad CreateNote={this.notes.addNote.bind(this.notes)}
          categorys={this.categorys}
        />
        <main className="conteudo-principal">
          <ListCategory
            CreateCategory={this.categorys.addCategory.bind(this.categorys)}
            categorys={this.categorys}
          />
          <NotesList
            DeleteNote={this.notes.deleteNote.bind(this.notes)}
            Notes={this.notes} />
        </main>
      </section>
    );
  }
}






// this.state = {
//   notes: [],
//   categorys: []
// }
 // CreateCategory(name) {

  //   let newStateCtg = {
  //     categorys: [...this.state.categorys, name]
  //   }

  //   this.setState(newStateCtg)
  // }

  // CreateNote(title, text, category) {

  //   let newState = {
  //     notes: [...this.state.notes, { title, text, category }]
  //   }

  //   this.setState(newState);
  // }

  // DeleteNote(index) {
  //   let x = this.state.notes;
  //   x.splice(index, 1);
  //   this.setState({ notes: x })
  // }

  // <section className="conteudo">
  //       <FormCad CreateNote={this.CreateNote.bind(this)} 
  //         categorys={this.state.categorys}
  //       />
  //       <main>
  //         <ListCategory
  //           CreateCategory={this.CreateCategory.bind(this)}
  //           categorys={this.state.categorys}
  //         />
  //         <NotesList
  //           DeleteNote={this.DeleteNote.bind(this)}
  //           Notes={this.state.notes} />
  //       </main>
  //     </section>