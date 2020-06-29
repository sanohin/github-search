import * as React from "react";
import { Box, Flex, Link } from "rebass";
import { RepoElement } from "./types";

export const RepositoryItem: React.FC<{ value: RepoElement }> = ({ value }) => {
  const {
    owner: { login },
    name,
    url,
    forkCount,
    stargazers,
  } = value.repo;
  const fullName = `@${login}/${name}`;
  return (
    <Flex>
      <Box width={4 / 6}>
        <Link href={url}>{fullName}</Link>
      </Box>
      <Box
        width={1 / 6}
        aria-label={`${stargazers.totalCount} users starred this repository`}
      >
        <span role="img" aria-label="star">🌟</span>{stargazers.totalCount}
      </Box>
      <Box
        width={1 / 6}
        aria-label={`${forkCount} users forked this repository`}
      >
        <span role="img" aria-label="fork">🍴</span>{forkCount}
      </Box>
    </Flex>
  );
};
