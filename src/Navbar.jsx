import {
  Box,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';

export default function Navbar() {
  const menuItems = [
    { label: 'Instruções', href: '#' },
    { label: 'Sobre', href: '#' },
    { label: 'CEBB', href: '#' },
  ];

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      py={4}
      bg="gray.800"
      color="white"
    >
      <Box ml={8}>Japamala Virtual</Box>
      <Box display={{ base: 'none', md: 'flex' }} alignItems="center">
        {menuItems.map(item => (
          <Box key={item.label} mr={6}>
            <a href={item.href}>{item.label}</a>
          </Box>
        ))}
      </Box>
      <Box display={{ base: 'block', md: 'none' }}>
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<i className="fas fa-bars"></i>}
            variant="ghost"
            aria-label="Menu"
          />
          <MenuList>
            {menuItems.map(item => (
              <MenuItem key={item.label}>
                <a href={item.href}>{item.label}</a>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
}
