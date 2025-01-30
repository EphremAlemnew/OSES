import React from "react";
import {
  Flex,
  Box,
  Image,
  Input,
  Button,
  VStack,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <Flex
      color={"black"}
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
      bg="gray.50"
      w={"full"}
    >
      <Stack
        direction={{ base: "column", md: "row" }}
        bg="white"
        p={8}
        borderRadius="lg"
        boxShadow="lg"
        alignItems="center"
        maxW="800px"
        w="90%"
      >
        {/* Image Section */}
        <Box flex="1" textAlign="center">
          <Image
            src="OSES-ICON.png" // Replace with your image URL
            alt="Login Image"
            borderRadius="lg"
            w={{ base: "1/3", md: "full" }}
            h="auto"
            mx={"auto"}
          />
        </Box>

        {/* Form Section */}
        <Box flex="1" px={{ base: "2" }} w={"full"}>
          <Heading
            as="h1"
            size={{ base: "xl", md: "3xl" }}
            textAlign="center"
            fontWeight={"bolder"}
            mb={6}
          >
            OSES Login Page
          </Heading>
          <VStack spacing={4}>
            <Input
              placeholder="Enter your email"
              required
              type="email"
              size="md"
            />
            <Input
              placeholder="Enter your password"
              type="password"
              size="md"
              required
              visibility={true}
            />

            {/* Remember Me Checkbox */}
            <Box w="full">
              <Checkbox colorScheme="blue" size="md">
                Remember Me
              </Checkbox>
            </Box>

            {/* Sign In Button */}
            <Button
              bg={"#3fd7f4"}
              _hover={{ bg: "#304552" }}
              color={"white"}
              width="full"
            >
              Sign In
            </Button>

            {/* Forgot Password Link */}
            <Text
              as={Link}
              to="/forgot"
              color="blue.500"
              fontSize="sm"
              textAlign="center"
              _hover={{ textDecoration: "underline" }}
            >
              Forgot Password?
            </Text>
          </VStack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default LoginPage;
