"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hapi_1 = require("@hapi/hapi");
class Servers extends hapi_1.Server {
    constructor(host, port) {
        super({ host: host, port: port, routes: { cors: { origin: ["*"] } } });
    }
}
exports.default = Servers;
