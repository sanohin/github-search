import * as React from "react";
import { Box, Text } from "rebass";
import { useRepositories } from "./useRepositories";
import { RepositoryItem } from "./RespositoryItem";

export const RepositoriesList: React.FC<{ searchValue: string }> = ({
  searchValue,
}) => {
  const { data, error } = useRepositories(searchValue);
  if (error) {
    return <Text>Error loading data.</Text>;
  } else if (data) {
    const list = data.search.repos;
    return (
      <Box>
        {list.map((element) => {
          return <RepositoryItem value={element} key={element.repo.id} />;
        })}
      </Box>
    );
  }
  return null;
};
