import * as React from "react";
import { Box, Flex } from "rebass";

export const AppLayout: React.FC = ({ children }) => {
  return (
    <Flex justifyContent="center" padding={30}>
      <Box maxWidth={500} width={"100%"}>
        {children}
      </Box>
    </Flex>
  );
};
