import mongoose from "mongoose";

export const Projeto = mongoose.model("Projeto", { nome: String, descricao: String});