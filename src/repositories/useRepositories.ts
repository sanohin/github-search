import useSWR from "swr";
import { GraphQLClient } from "graphql-request";
import { SearchResultType } from "./types";

const searchGithubReposQuery = `
query searchGithubRepositories($query: String!) {
    search(type: REPOSITORY, query: $query, first: 10) {
        repositoryCount
        repos: edges {
            repo: node {
            ... on Repository {
                    id
                    name
                    url
                    forkCount
                    stargazers {
                        totalCount
                    }
                    owner {
                    ... on User {
                            login
                        }
                    ... on Organization {
                            login
                        }
                    }
                }
            }
        }
    }
}
`;

const GITHUB_GRAPH_URL = "https://api.github.com/graphql";
const client = new GraphQLClient(GITHUB_GRAPH_URL, {
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
  },
});

const fetcher = (search: string) => {
  return client.request(searchGithubReposQuery, { query: search });
};

export const useRepositories = (search: string) => {
  const { data, error } = useSWR<SearchResultType>("react " + search, fetcher, {
    suspense: true,
  });
  return { data, error };
};
