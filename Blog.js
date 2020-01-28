import mongoose from "mongoose";

export const Blog = mongoose.model("Blog", { titulo: String, subtit: String, texto: String});