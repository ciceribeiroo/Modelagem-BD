import mongoose from "mongoose";

export const Cores = mongoose.model("Cores", { hexa1: String, hexa2: String, hexa3: String, hexa4: String});