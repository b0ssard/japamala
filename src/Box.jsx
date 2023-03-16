import { Box, Stack, Text } from '@chakra-ui/react';

export default function TextBox(props) {
  return (
    <Stack align="center" margin="20px">
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        alignItems="center"
        mt="1"
        fontWeight="semibold"
        as="h4"
        lineHeight="tight"
        noOfLines={1}
      >
        <Text>{props.text}</Text>
      </Box>
    </Stack>
  );
}
