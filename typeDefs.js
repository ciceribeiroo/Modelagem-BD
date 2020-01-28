import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    blogs: [Blog!]!
    projetos: [Projeto]!
    capas: [Capa]!
  }
  type Cores {
    hexa1: String!
    hexa2: String!
    hexa3: String!
    hexa4: String!
  }
  type Apresentacao{
    texto: String!
  }
  type Capa{
    texto: String!
  }
  type Blog {
    id: ID!
    titulo: String!
    subtit: String
    texto: String!
  }
  type Projeto{
    nome: String!
    descricao: String
  }
  type Mutation {
    createBlog(titulo: String!, subtit: String, texto: String!): Blog!
    createProjeto(nome: String!, descricao: String): Projeto!
    createCapa(texto: String!): Capa!
    updateCapa( textoAntigo: String!, textoNovo: String!): Capa!
  }
`;