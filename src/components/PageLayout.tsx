import { Box, SimpleGrid } from "@chakra-ui/react";
import React, { memo, ReactNode } from "react";

interface PageLayoutProps {
  children?: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = memo(({ children }) => {
  return (
    <Box flex="1" overflowY="auto" bg="gray.900" p={8}>
      <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
        {children}
      </SimpleGrid>
    </Box>
  );
});

export default PageLayout;
