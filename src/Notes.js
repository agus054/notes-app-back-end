"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddNote = void 0;
class AddNote {
    constructor(data) {
        this.data = data;
    }
    getData() {
        return new NewNote(this.data);
    }
}
exports.AddNote = AddNote;
class NewNote {
    constructor(dataObj) {
        this.title = dataObj.title;
        this.tags = dataObj.tags;
        this.body = dataObj.body;
        this.id = dataObj.id;
        this.createdAt = dataObj.createdAt;
        this.updateAt = dataObj.updateAt;
    }
    getTitle() {
        return this.title;
    }
    setTitle(title) {
        this.title = title;
    }
    getTags() {
        return this.tags;
    }
    setTags(tags) {
        this.tags = tags;
    }
    getBody() {
        return this.body;
    }
    setBody(body) {
        this.body = body;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
}
