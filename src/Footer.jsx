import { Box, Flex, Link, Text } from '@chakra-ui/react';
import linkedinImage from './images/linkedin.png';
import githubImage from './images/github.png';
import emailImage from './images/email.png';
import whatsappImage from './images/whatsapp.png';

export default function Footer() {
  const links = [
    {
      label: <Box as="img" src={linkedinImage} alt="LinkedIn" />,
      href: 'https://www.linkedin.com/in/victorbossard/',
    },
    {
      label: <Box as="img" src={githubImage} alt="GitHub" />,
      href: 'https://github.com/b0ssard',
    },
    {
      label: <Box as="img" src={emailImage} alt="EMail" />,
      href: 'mailto:victorquindere@gmail.com',
    },
    {
      label: <Box as="img" src={whatsappImage} alt="WhatsApp" />,
      href: 'https://wa.me/5585988812838',
    },
  ];

  return (
    <Flex
      as="footer"
      align="center"
      justify="space-between"
      py="6"
      px="8"
      bg="#990000"
      color="#FFEE63"
      // position="fixed"
      bottom="0"
      width="100%"
    >
      <Text fontSize="sm" fontWeight="semibold">
        Por Victor Bossard © {new Date().getFullYear()}.
      </Text>
      <Flex as="ul" listStyleType="none" ml="0" pl="0">
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
