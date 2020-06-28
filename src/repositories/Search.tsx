import * as React from "react";
import { Box } from "rebass";
import { Input, Label } from "@rebass/forms";

type SearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export const Search: React.FC<SearchProps> = ({ value, onChange }) => {
  return (
    <Box>
      <Label>Search</Label>
      <Input
        autoFocus
        name="search"
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="react-router"
      />
    </Box>
  );
};
