"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const bot_1 = require("./bot");
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(routes_1.router);
app.listen(() => {
    console.log(`Servidor abierto en el puerto ${port}`);
    bot_1.bot.launch().then(() => {
        console.log('Bot de desarrollo iniciado');
    });
});
