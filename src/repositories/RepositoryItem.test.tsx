import * as React from "react";
import { render } from "@testing-library/react";
import { RepositoryItem } from "./RespositoryItem";

const mock = {
  repo: {
    id: "1",
    name: "fakename",
    url: "https://google.com/",
    stargazers: { totalCount: 5 },
    forkCount: 10,
    owner: { login: "sanohin" },
  },
};

describe("<RepositoryItem />", () => {
  it("should render repository owner and name", () => {
    const { getByText } = render(<RepositoryItem value={mock} />);
    const el = getByText(`@${mock.repo.owner.login}/${mock.repo.name}`);
  });
  it("should render a link to the repository", () => {
    const { container } = render(<RepositoryItem value={mock} />);
    const link = container.querySelector("a");
    expect(link).toBeInTheDocument();
    expect(link?.href).toBe(mock.repo.url);
  });
  it("should render stars and forks count", () => {
    const { getByText } = render(<RepositoryItem value={mock} />);
    getByText(/5/);
    getByText(/10/);
  });
});
