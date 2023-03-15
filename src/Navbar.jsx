import { Box, HStack, StackDivider } from '@chakra-ui/react';
import React from 'react';

export default function Navbar() {
  return (
    <HStack
      direction={['column', 'row']}
      spacing="24px"
      divider={<StackDivider borderColor="gray.200" />}
    >
      <Box w="40px" h="40px" bg="yellow.200">
        1
      </Box>
      <Box w="40px" h="40px" bg="tomato">
        2
      </Box>
      <Box w="40px" h="40px" bg="pink.100">
        3
      </Box>
    </HStack>
  );
}
