import React from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Spacer,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { Link as RouterLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { GrDashboard } from "react-icons/gr";

const SidebarContent = ({ onClose }) => {
  const links = [
    { name: "Home", path: "/" },
    {
      name: "Dashboard",
      path: "/dashboard",
      // icon: <BiSolidDashboard size={20} />,
    },
    { name: "Settings", path: "/settings" },
    { name: "Profile", path: "/profile" },
    { name: "Logout", path: "/logout" },
  ];

  return (
    <Box color={"#11bd6b"} w={{ base: "full", md: "60" }} h="full">
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
      <VStack align="start" spacing="4" p={"4"}>
        {links.map((link) => (
          <HStack
            as={RouterLink}
            to={link.path}
            key={link.name}
            _hover={{ textDecoration: "none", bg: "gray.300" }}
            p="2"
            w="full"
            rounded="md"
          >
            <BiSolidDashboard size={20} />
            {link.name}
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* Sidebar for larger screens */}
      <Box display={{ base: "none", md: "block" }}>
        <SidebarContent />
      </Box>
    </>
  );
};

export default Sidebar;
