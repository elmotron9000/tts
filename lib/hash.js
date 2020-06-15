"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHash = void 0;
var crypto_1 = require("crypto");
function getHash(input) {
    return crypto_1.createHash("sha1").update(input).digest("hex");
}
exports.getHash = getHash;
