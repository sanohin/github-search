export interface SearchResultType {
  search: {
    repos: RepoElement[];
  };
}

export interface RepoElement {
  repo: RepoType;
}

export interface RepoType {
  id: string;
  name: string;
  url: string;
  forkCount: number;
  stargazers: {
    totalCount: number;
  };
  owner: {
    login: string;
  };
}
