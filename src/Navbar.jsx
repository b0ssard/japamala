import { Box, Flex, Menu, Text } from '@chakra-ui/react';
import modalData from './ModalData';
import OpenModal from './Modal';

export default function Navbar() {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      py={4}
      bg="#990000"
      color="white"
      marginBottom="10px"
    >
      <Box color="#FFEE63" ml={8}>
        <Text fontSize="bg" fontWeight="semibold">
          Japamala Virtual
        </Text>
      </Box>
      <Box display={{ base: 'none', md: 'flex' }} alignItems="center">
        {modalData.map(item => (
          <Box key={item.key} >
            <OpenModal
              label={item.label}
              header={item.header}
              body={item.body}
            />
          </Box>
        ))}
      </Box>
      <Box display={{ base: 'block', md: 'none' }}>
        <Menu>
          {modalData.map(item => (
            <OpenModal
              key={item.label}
              label={item.label}
              header={item.header}
              body={item.body}
            />
          ))}
        </Menu>
      </Box>
    </Flex>
  );
}
