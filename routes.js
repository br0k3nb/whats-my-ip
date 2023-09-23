"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/json', (req, res) => {
    var _a;
    return res.status(200).json({ ip: (_a = res.socket) === null || _a === void 0 ? void 0 : _a.remoteAddress });
});
router.get('/', (req, res) => {
    var _a;
    return res.status(200).send((_a = res.socket) === null || _a === void 0 ? void 0 : _a.remoteAddress);
});
exports.default = router;
