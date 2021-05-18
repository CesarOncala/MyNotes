export class Category {

    constructor() {
        this.categorys =localStorage.getItem("mycategorys") !== null ? JSON.parse(localStorage.getItem("mycategorys")) :  []
        this._subscribeds = []
    }

    addCategory(o) {
        this.categorys.push(o);
        localStorage.setItem("mycategorys",JSON.stringify(this.categorys));
        this.sendNotification();
    }


    subscribe(func) {
        this._subscribeds.push(func);
    }

    sendNotification() {
        this._subscribeds.forEach(o => o(this.categorys))
    }


    unsubscribe(func) {
        console.log(this._subscribeds.length)
        this._subscribeds = this._subscribeds.filter(o => o !== func);
        console.log(this._subscribeds.length)
    }


}