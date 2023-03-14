import { Flex, HStack, chakra } from '@chakra-ui/react';
import React from 'react';

export default function Navbar() {
  return (
    <chakra.header id="header">
      <Flex w="100%" px="6" py="5" align="center" justify="space-between" backgroundColor="red">
        <HStack as="nav" spacing="15"></HStack>
        <HStack></HStack>
      </Flex>
    </chakra.header>
  );
}
