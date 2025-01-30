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
import SideBarContents from "./SideBarContents";

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
        <SideBarContents />
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
