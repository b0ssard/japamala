import { Flex, Link, Text } from '@chakra-ui/react';
import links from './FooterData';

export default function Footer() {
  return (
    <Flex
      as="footer"
      align="center"
      justify="space-between"
      py="6"
      px="8"
      bg="#990000"
      color="#FFEE63"
      mt="10px"
      bottom="0"
      width="100%"
    >
      <Text fontSize="sm" fontWeight="semibold">
        Por Victor Bossard © {new Date().getFullYear()}.
      </Text>
      <Flex as="ul" listStyleType="none">
        {links.map(link => (
          <Link
            key={link.href}
            alt={link.alt}
            mr="6"
            href={link.href}
            target="_blank"
            rel="noreferrer"
            w="24px"
            h="24px"
          >
            {link.label}
          </Link>
        ))}
      </Flex>
    </Flex>
  );
}
