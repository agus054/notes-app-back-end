"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const hapi_1 = require("@hapi/hapi");
const Handler_1 = require("./Handler");
class Routes extends hapi_1.Server {
    static router() {
        return [{
                method: "POST",
                path: '/notes',
                handler: Handler_1.Handler.addNoteHandler,
            }, {
                method: "GET",
                path: "/notes",
                handler: Handler_1.Handler.getAllHandler
            }, {
                method: "GET",
                path: "/notes/{id}",
                handler: Handler_1.Handler.getNoteByIdHandler
            }, {
                method: "PUT",
                path: "/notes/{id}",
                handler: Handler_1.Handler.editNoteByIdHandler
            }, {
                method: "DELETE",
                path: "/notes/{id}",
                handler: Handler_1.Handler.deleteNoteByIdHandler
            }];
    }
}
exports.Routes = Routes;
