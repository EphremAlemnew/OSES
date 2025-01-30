import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Flex
      color={"#11bd6b"}
      direction="column"
      align="center"
      justify="center"
      height="100vh"
      textAlign="center"
      w={"full"}
    >
      <Box textAlign="center" p={"4"}>
        <Image src="OSES-ICON.png" />
        <Heading size="xl" color="red.500">
          404
        </Heading>
        <Text fontWeight={"bold"} fontSize="lg" mt={4}>
          Oops! The page you are looking for does not exist.
        </Text>
        <Button as={Link} to="/" colorScheme="blue" mt={6}>
          Go to Home
        </Button>
      </Box>
    </Flex>
  );
};

export default ErrorPage;
