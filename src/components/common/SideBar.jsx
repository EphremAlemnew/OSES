import React from "react";
import {
  Box,
  Flex,
  HStack,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";

import { Link as RouterLink } from "react-router-dom";
import { School } from "lucide-react";
import { BiSolidDashboard } from "react-icons/bi";
import { LuLogOut, LuSettings } from "react-icons/lu";
import { GiTeacher } from "react-icons/gi";
import { PiExam, PiStudent } from "react-icons/pi";

const SidebarContent = () => {
  return (
    <Box
      color={"#11bd6b"}
      w={{ base: "full", md: "60" }}
      h="full"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box>
        <Flex h="20" alignItems="center" justifyContent="space-between">
          <HStack borderBottom={"sm"} p={"2"}>
            <Image
              src="OSES.png"
              alt="OSES logo"
              w={"40px"}
              h={"auto"}
              rounded={"lg"}
            />
            <Spacer />
            <Text fontSize="xl" p={"2"} textAlign={"center"} fontWeight="bold">
              Online Student Examination System (OSES)
            </Text>
          </HStack>
        </Flex>
        <VStack
          alignContent={"space-around"}
          spaceY={{ md: "56" }}
          h={"full"}
          p={"4"}
        >
          <VStack w={"full"}>
            <HStack
              as={RouterLink}
              to="/"
              _hover={{ textDecoration: "none", bg: "gray.300" }}
              p="2"
              w="full"
              rounded="md"
              fontWeight={"bold"}
            >
              <BiSolidDashboard size={20} />
              Dashboard
            </HStack>
            <HStack
              as={RouterLink}
              to="/schools"
              _hover={{ textDecoration: "none", bg: "gray.300" }}
              p="2"
              w="full"
              rounded="md"
              fontWeight={"bold"}
            >
              <School size={20} />
              Schools
            </HStack>
            <HStack
              as={RouterLink}
              to="/teachers"
              _hover={{ textDecoration: "none", bg: "gray.300" }}
              p="2"
              w="full"
              rounded="md"
              fontWeight={"bold"}
            >
              <GiTeacher size={20} />
              Teachers
            </HStack>
            <HStack
              as={RouterLink}
              to="/students"
              _hover={{ textDecoration: "none", bg: "gray.300" }}
              p="2"
              w="full"
              rounded="md"
              fontWeight={"bold"}
            >
              <PiStudent size={20} />
              Students
            </HStack>
            <HStack
              as={RouterLink}
              to="/exams"
              _hover={{ textDecoration: "none", bg: "gray.300" }}
              p="2"
              w="full"
              rounded="md"
              fontWeight={"bold"}
            >
              <PiExam size={20} />
              Exams
            </HStack>
          </VStack>
          <Spacer />
          <VStack borderTop={"sm"} w={"full"}>
            <HStack
              as={RouterLink}
              to="/settings"
              _hover={{ textDecoration: "none", bg: "gray.300" }}
              p="2"
              w="full"
              rounded="md"
              fontWeight={"bold"}
            >
              <LuSettings size={20} />
              Settings
            </HStack>
            <HStack
              as={RouterLink}
              to="/logout"
              _hover={{ textDecoration: "none", bg: "gray.300" }}
              p="2"
              w="full"
              rounded="md"
              fontWeight={"bold"}
            >
              <LuLogOut size={20} />
              Logout
            </HStack>
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
};

const Sidebar = () => {
  return (
    <>
      <Box display={{ base: "none", md: "block" }}>
        <SidebarContent />
      </Box>
    </>
  );
};

export default Sidebar;
