import { Box, Stack, Text } from '@chakra-ui/react';

export default function BuddhaCard(props) {
  return (
    <Stack align="center" margin="20px">
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        borderColor="grey"
        overflow="hidden"
        height="200px"
        width="200px"
        alignItems="center"
      >
        <Stack spacing={5} alignItems="center" padding="25px">
          <Text fontSize="105px">{props.content}</Text>
        </Stack>
      </Box>
    </Stack>
  );
}
