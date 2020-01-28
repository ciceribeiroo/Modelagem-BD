import { Blog } from "./models/Blog";
import { Projeto } from "./models/Projeto";
import {Capa} from "./models/Capa";

export const resolvers = {
  Query: {
    blogs: () => Blog.find(),
    projetos: () => Projeto.find(),
    capas: ()=> Capa.find()
  },
  Mutation: {
    createBlog: async (_, { titulo, subtit, texto }) => {
      const temp = new Blog({ titulo, subtit, texto});
      await temp.save();
      return temp;
    },
    createProjeto: async (_, { nome, descricao }) => {
      const tempo = new Projeto({ nome, descricao});
      await tempo.save();
      return tempo;
    },
    createCapa: async (_, { texto }) => {
      const tempo = new Capa({texto});
      await tempo.save();
      return tempo;
    },
    updateCapa: async (_, { textoAntigo, textoNovo }) => { 
      const cover = Capa.findOne( {texto: textoAntigo}); //erro esta aqui
      console.log(cover.texto); //pois nao imprime aqui

      if (cover.texto == null) {
        throw new Error(`Couldn’t find capa`);
      }

      cover.texto=textoNovo;
      console.log(cover.texto);
      await cover.update();
      return cover;
     }
}
};