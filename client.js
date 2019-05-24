import ApolloClient from "apollo-boost"
import fetch from "isomorphic-fetch"
export const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  fetch,
  request: operation => {
    operation.setContext({
      headers: {
        authorization: `Bearer 71ffdfd39d2d1e94501287b74d9890c5231eaaec`,
      },
    })
  },
})
