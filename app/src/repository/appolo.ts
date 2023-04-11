import { ApolloClient, InMemoryCache } from '@apollo/client';
import gql from "graphql-tag";

export const apollo = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache(),
});

export const queryAPI = async (q: string) => {
    try {
        const query = gql`${q}`;
        return await apollo.query({ query });
    } catch(e) {
        return { data: null, error: e }
    }
}