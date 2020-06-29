import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

let App: any;

beforeAll(() => {
  jest.mock("./repositories/useRepositories.ts", () => ({
    ...jest.requireActual("./repositories/useRepositories.ts"),
    useRepositories: (query: string) => {
      return {
        data: {
          search: {
            repos: [
              {
                repo: {
                  id: "1",
                  name: query === "router" ? "react-router" : "react",
                  url: "https://google.com",
                  forkCount: 1,
                  stargazers: {
                    totalCount: 2,
                  },
                  owner: {
                    login: "me",
                  },
                },
              },
            ],
          },
        },
      };
    },
  }));
  App = require("./App").default;
});

afterAll(() => {
  jest.unmock("./repositories/useRepositories.ts");
});

describe("<RepositoriesList />", () => {
  it("renders list", () => {
    const { queryByText } = render(<App />);
    const reactElement = queryByText(/react/i);
    expect(reactElement).toBeInTheDocument();
  });

  it("list is updated when input value changes", () => {
    const { queryByText, getByPlaceholderText } = render(<App />);
    const input = getByPlaceholderText("react-router");
    let reactElement = queryByText(/react$/i);
    let routerElement = queryByText(/react-router/i);
    expect(reactElement).toBeInTheDocument();
    expect(routerElement).not.toBeInTheDocument();

    userEvent.type(input, "router");

    reactElement = queryByText(/react$/i);
    routerElement = queryByText(/react-router/i);
    expect(reactElement).not.toBeInTheDocument();
    expect(routerElement).toBeInTheDocument();
  });
});
