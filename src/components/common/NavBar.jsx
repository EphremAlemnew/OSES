import {
  Box,
  HStack,
  Spacer,
  Button,
  VStack,
  useDisclosure,
  Text,
  Input,
  AvatarIcon,
} from "@chakra-ui/react";

import { useColorMode } from "../ui/color-mode";
import { BiMoon, BiSun, BiMenu, BiX, BiSearch } from "react-icons/bi";

import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Avatar, AvatarGroup } from "../ui/avatar";
import Sidebar from "./SideBar";
import { Bell, Languages } from "lucide-react";
import SideBarContents from "./SideBarContents";
import { base } from "framer-motion/client";

function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();
  const bg = colorMode === "light" ? "white" : "gray.800";
  const textColor = colorMode === "light" ? "#11bd6b" : "#11bd6b";

  return (
    <HStack
      px={4}
      shadow="sm"
      fontFamily="nunito"
      position="fixed"
      top={0}
      w={"full"}
      zIndex={1000}
      bg={bg}
      color={textColor}
      h={16}
      justifyContent={"space-between"}
      borderBottom={"sm"}
    >
      {/* Logo or App Name */}
      <HStack fontWeight="bold" fontSize="lg">
        <DrawerRoot placement={"start"} size={"xs"}>
          <DrawerBackdrop />
          <DrawerTrigger asChild>
            <Button variant={"plain"} display={{ base: "none", md: "flex" }}>
              {isOpen ? <BiMenu /> : <BiMenu />}
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            {/* <DrawerHeader>
              <DrawerTitle></DrawerTitle>
            </DrawerHeader> */}
            <DrawerBody>
              <Sidebar />
            </DrawerBody>
            <DrawerFooter></DrawerFooter>
            <DrawerCloseTrigger />
          </DrawerContent>
        </DrawerRoot>
        <Text textAlign={"center"} display={{ base: "none", md: "block" }}>
          Online Student Examination System
        </Text>
        <Text display={{ base: "flex", md: "none" }}>OSES</Text>
      </HStack>
      <Spacer />

      {/* Desktop Navigation Links */}
      <HStack
        fontWeight={"bold"}
        spaceX={"8"}
        as="nav"
        display={{ base: "none", md: "flex" }}
        justifyContent="space-between"
        alignSelf={"center"}
      >
        <Input
          placeholder="Search here..."
          name="name"
          w={{ lg: "xl" }}
          rounded={"2xl"}
        />
      </HStack>

      {/* Mobile Menu Icon */}
      <Spacer />
      <HStack spaceX={"-4"}>
        <DrawerRoot placement={"top"}>
          <DrawerBackdrop />
          <DrawerTrigger asChild>
            <Button variant={"plain"} display={{ base: "flex", md: "none" }}>
              <BiSearch />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Search</DrawerTitle>
            </DrawerHeader>
            <DrawerBody>
              <Input
                placeholder="Search here..."
                name="name"
                w={{ lg: "xl" }}
                rounded={"2xl"}
              />
            </DrawerBody>
            <DrawerFooter></DrawerFooter>
            <DrawerCloseTrigger />
          </DrawerContent>
        </DrawerRoot>

        <Button variant={"plain"} onClick={toggleColorMode} rounded={"full"}>
          {colorMode === "light" ? <BiMoon /> : <BiSun />}
        </Button>
        <Button variant={"plain"}>
          <Bell />
        </Button>
        <Button variant={"plain"}>
          <Languages />
        </Button>
        <Box display={{ base: "flex", md: "flex" }} variant={"plain"}>
          <AvatarGroup>
            <Avatar />
          </AvatarGroup>
        </Box>

        <DrawerRoot placement={"top"}>
          <DrawerBackdrop />
          <DrawerTrigger asChild>
            <Button variant={"plain"} display={{ base: "flex", md: "none" }}>
              {isOpen ? <BiX /> : <BiMenu />}
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Menu</DrawerTitle>
            </DrawerHeader>
            <DrawerBody>
              <Box>
                <SideBarContents />
              </Box>
            </DrawerBody>
            <DrawerFooter></DrawerFooter>
            <DrawerCloseTrigger />
          </DrawerContent>
        </DrawerRoot>
      </HStack>
    </HStack>
  );
}

export default NavBar;
