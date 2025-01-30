import React from "react";
import {
  AvatarIcon,
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
import { BiLineChart, BiSolidDashboard } from "react-icons/bi";
import { LuLogOut, LuSettings } from "react-icons/lu";
import { GiTeacher } from "react-icons/gi";
import { PiExam, PiStudent } from "react-icons/pi";
import { MdGrade } from "react-icons/md";

const SideBarContents = () => {
  return (
    <VStack
      alignContent={"space-around"}
      spaceY={{ md: "44" }}
      h={"full"}
      p={"2"}
      color={"#11bd6b"}
    >
      <VStack w={"full"}>
        <HStack
          mt={"2"}
          as={RouterLink}
          to="/"
          _hover={{ border: "sm", textDecoration: "none" }}
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
          _hover={{ border: "sm", textDecoration: "none" }}
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
          _hover={{ border: "sm", textDecoration: "none" }}
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
          _hover={{ border: "sm", textDecoration: "none" }}
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
          _hover={{ border: "sm", textDecoration: "none" }}
          p="2"
          w="full"
          rounded="md"
          fontWeight={"bold"}
        >
          <PiExam size={20} />
          Exams
        </HStack>
        <HStack
          as={RouterLink}
          to="/exams"
          _hover={{ border: "sm", textDecoration: "none" }}
          p="2"
          w="full"
          rounded="md"
          fontWeight={"bold"}
        >
          <MdGrade size={20} />
          Results
        </HStack>
        <HStack
          as={RouterLink}
          to="/exams"
          _hover={{ border: "sm", textDecoration: "none" }}
          p="2"
          w="full"
          rounded="md"
          fontWeight={"bold"}
        >
          <BiLineChart size={20} />
          Report
        </HStack>
      </VStack>
      <Spacer />
      <VStack borderTop={"sm"} w={"full"}>
        <HStack
          as={RouterLink}
          mt={"2"}
          to="/settings"
          _hover={{ border: "sm", textDecoration: "none" }}
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
          _hover={{ border: "sm", textDecoration: "none" }}
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
  );
};

export default SideBarContents;
