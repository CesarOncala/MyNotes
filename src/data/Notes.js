export class Notes {
    constructor() {
        this.notes = localStorage.getItem("mynotes") !== null ? [...JSON.parse(localStorage.getItem("mynotes"))] : []
        this._subscribeds = [];

    }

    addNote(title, text, category) {
        this.notes.push(new Note(title, text, category));
        localStorage.setItem("mynotes",JSON.stringify(this.notes));
        this.sendNotification();
    }

    deleteNote(index) {
        this.notes.splice(index, 1);
        localStorage.removeItem("mynotes");
        localStorage.setItem("mynotes",JSON.stringify(this.notes))
        this.sendNotification();
    }

    subscribe(func) {
        this._subscribeds.push(func);
    }

    sendNotification() {
        this._subscribeds.forEach(o => o(this.notes))
    }

    unsubscribe(func){
            this._subscribeds = this._subscribeds.filter(o=> o!== func)
    }


}

class Note {
    constructor(title, text, category) {
        this.title = title;
        this.text = text;
        this.category = category;
    }
}