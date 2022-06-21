"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Handler = void 0;
const crypto_1 = __importDefault(require("crypto"));
const Notes_1 = require("./Notes");
class Handler {
    static addNoteHandler(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const addNote = new Notes_1.AddNote(request.payload);
            const title = addNote.getData().getTitle();
            const tags = addNote.getData().getTags();
            const body = addNote.getData().getBody();
            const createdAt = new Date().toISOString();
            const updateAt = createdAt;
            const id = crypto_1.default.randomUUID();
            const newNote = { title, tags, body, id, createdAt, updateAt };
            Handler.notes.push(new Notes_1.AddNote(newNote));
            const isSuccess = Handler.notes.filter((note) => note.getData().getId() === id).length > 0;
            if (isSuccess) {
                return response.response({
                    status: 'success',
                    message: 'Catatan berhasil ditambahkan',
                    data: {
                        noteId: id,
                    },
                }).code(201);
            }
            else {
                return response.response({
                    status: 'fail',
                    message: 'Catatan gagal ditambahkan',
                }).code(500);
            }
        });
    }
    static getAllHandler(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            return response.response({
                status: 'success',
                data: Handler.notes
            }).code(200);
        });
    }
    static getNoteByIdHandler(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = new Notes_1.AddNote(request.params);
            const notes = Handler.notes.filter((n) => n.getData().getId() === id.getData().getId())[0];
            if (notes !== undefined) {
                return response.response({
                    status: "success",
                    data: notes
                });
            }
            else {
                return response.response({
                    status: 'fail',
                    message: 'Catatan tidak ditemukan',
                }).code(404);
            }
        });
    }
    static editNoteByIdHandler(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = new Notes_1.AddNote(request.params);
            const addNote = new Notes_1.AddNote(request.payload);
            const title = addNote.getData().getTitle();
            const tags = addNote.getData().getTitle();
            const body = addNote.getData().getBody();
            const updateAt = new Date().toISOString();
            const newNote = { title, tags, body, id, updateAt };
            const index = Handler.notes.findIndex((note) => note.getData().getId() === id.getData().getId());
            if (index !== -1) {
                Handler.notes[index] = Object.assign(Object.assign({}, Handler.notes[index]), { title, tags, body, updateAt });
                return response.response({
                    status: 'success',
                    message: 'Catatan berhasil diperbarui',
                }).code(200);
            }
            else {
                return response.response({
                    status: 'fail',
                    message: 'Gagal memperbarui catatan. Id tidak ditemukan',
                }).code(400);
            }
        });
    }
    static deleteNoteByIdHandler(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = new Notes_1.AddNote(request.params);
            const index = Handler.notes.findIndex((note) => note.getData().getId() === id.getData().getId());
            if (index !== -1) {
                Handler.notes.splice(index, 1);
                return response.response({
                    status: 'success',
                    message: 'Catatan berhasil dihapus',
                }).code(200);
            }
            else {
                return response.response({
                    status: 'fail',
                    message: 'Catatan gagal dihapus. Id tidak ditemukan',
                }).code(404);
            }
        });
    }
}
exports.Handler = Handler;
Handler.notes = [];
