import {
  Box,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text
} from '@chakra-ui/react';

export default function Navbar() {
  const menuItems = [
    { label: 'Instruções', href: '#' },
    { label: 'Sobre', href: '#' },
    { label: 'CEBB', href: 'https://cebb.org.br/' },
  ];

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
    >
      <Box color="#FFEE63" ml={8}>
        <Text fontSize="bg" fontWeight="semibold">
          Japamala Virtual
        </Text>
      </Box>
      <Box
        color="#FC8621"
        display={{ base: 'none', md: 'flex' }}
        alignItems="center"
      >
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
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                </a>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
}
