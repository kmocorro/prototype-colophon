import * as React from "react";
import { Center } from "@chakra-ui/react";

export const Layout: React.FC<{}> = ({ children }) => {
  return <Center p="16">{children}</Center>;
};
