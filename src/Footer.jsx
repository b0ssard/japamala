import { Flex, Link, Text } from '@chakra-ui/react';

export default function Footer() {
  const links = [
    { label: 'Home', href: '#' },
    { label: 'Sobre', href: '#' },
    { label: 'Contato', href: '#' },
  ];

  return (
    <Flex
      as="footer"
      align="center"
      justify="space-between"
      py="6"
      px="8"
      bg="gray.800"
      color="white"
      position="fixed"
      bottom="0"
      width="100%"
    >
      <Text fontSize="sm" fontWeight="semibold">
        © {new Date().getFullYear()} Todos os direitos reservados.
      </Text>
      <Flex as="ul" listStyleType="none" ml="0" pl="0">
        {links.map(link => (
          <Link key={link.label} as="li" mr="6" href={link.href}>
            {link.label}
          </Link>
        ))}
      </Flex>
    </Flex>
  );
}
