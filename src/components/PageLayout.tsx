import { Box, SimpleGrid } from "@chakra-ui/react";
import React, { memo, ReactNode } from "react";

interface PageLayoutProps {
  children?: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = memo(({ children }) => {
  return (
    <Box flex="1" overflowY="auto" bg="gray.900" p={4}>
      <SimpleGrid columns={{ base: 1, md: 4 }} gap={6}>
        {children}
      </SimpleGrid>
    </Box>
  );
});

export default PageLayout;
