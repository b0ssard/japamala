import { Box, Stack, Text } from '@chakra-ui/react';

export default function TextBox(props) {
  return (
    <Stack align="center">
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        borderColor="blackAlpha.500"
        overflow="hidden"
        alignItems="center"
        mt="1"
        fontWeight="semibold"
        as="h4"
        lineHeight="tight"
        noOfLines={1}
        marginBottom="10px"
        paddingLeft="15px"
        paddingRight="15px"
      >
        <Text>{props.text}</Text>
      </Box>
    </Stack>
  );
}
