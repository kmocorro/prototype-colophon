import * as React from "react";
import { Box } from "@chakra-ui/react";

export const Card: React.FC<{}> = ({ children }) => {
  return (
    <Box
      w="100%"
      h="auto"
      borderWidth="1px"
      borderRadius="20px"
      overflow="hidden"
      background="white"
    >
      {children}
    </Box>
  );
};
