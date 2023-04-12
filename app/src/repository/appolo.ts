import { ApolloClient, DocumentNode, InMemoryCache } from '@apollo/client';

export const apollo = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache(),
});

export const queryAPI = async (query: DocumentNode) => {
    try {
        const result = await apollo.query({ query });
        if (result.error) {
            console.error(result.error)
        }

        return result
    } catch(e) {
        console.error(e)
        return { data: null, error: e }
    }
}

export const mutateAPI = async (query: DocumentNode, variables: any) => {
    try {
        const { data } = await apollo.mutate({ mutation: query, variables });
        return { data, error: null }
    } catch (e) {
        console.error(e)
        return { data: null, error: e }
    }
}