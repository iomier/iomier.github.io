import React from "react"
import { client } from "./client"
import { ApolloProvider } from "react-apollo"

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)
