import React, { Component } from "react";
import CardNote from "../CardNote/CardNote";
import "./estilo.css";

export class NotesList extends Component {

    constructor() {
        super();
        this.state = { notes: [] }
        this._newNotes = this._newNotes.bind(this);
    }

    componentDidMount() {
        this.props.Notes.subscribe(this._newNotes);
    }
    componentWillUnmount() {
        this.props.Notes.unsubscribe(this._newNotes);
    }
    _newNotes(notas) {
        this.setState({ ...this.state, notas })
    }

    render() {
        return (
            <ul className="lista-notas">
                {this.props.Notes.notes.map((categoria, index) => {
                    return (
                        <li className="lista-notas_item" key={index}>
                            <CardNote
                                DeleteNote={this.props.DeleteNote}
                                Title={categoria.title}
                                Text={categoria.text}
                                Category={categoria.category}
                                index={index}
                            />
                        </li>
                    );
                })}
            </ul>
        )
    }
}