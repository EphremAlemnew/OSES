import React, { useState, useEffect } from "react";
import {
  Box,
  VStack,
  Text,
  Stack,
  Image,
  Blockquote,
  BlockquoteIcon,
  Float,
  Heading,
} from "@chakra-ui/react";
import { Toaster } from "@/components/ui/toaster";

const HomePage = () => {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["Mobile App Developer.", "Web App Developer."];
  const typingSpeed = 150; // Typing speed in ms
  const deletingSpeed = 50; // Deleting speed in ms
  const delayAfterTyping = 2000; // Delay after typing before deleting
  const transitionDelay = 500; // Delay between text transitions

  useEffect(() => {
    let timeout;

    const handleTyping = () => {
      const fullText = texts[textIndex];

      if (!isDeleting) {
        // Typing phase
        const nextText = fullText.slice(0, currentText.length + 1);
        setCurrentText(nextText);

        if (nextText === fullText) {
          // Text fully typed, pause before deleting
          timeout = setTimeout(() => setIsDeleting(true), delayAfterTyping);
        } else {
          timeout = setTimeout(handleTyping, typingSpeed);
        }
      } else {
        // Deleting phase
        const nextText = currentText.slice(0, currentText.length - 1);
        setCurrentText(nextText);

        if (nextText === "") {
          // Text fully deleted, move to the next text
          timeout = setTimeout(() => {
            setIsDeleting(false);
            setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
          }, transitionDelay);
        } else {
          timeout = setTimeout(handleTyping, deletingSpeed);
        }
      }
    };

    timeout = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [currentText, isDeleting, textIndex]);

  return (
    <VStack spacing={16} mt={16} mx={{ lg: "80" }} align="stretch">
      <Box p={"2"} borderBottom="md" py={{ lg: "64" }}>
        <Heading as="h1" size="4xl" fontWeight={"extrabold"}>
          About{" "}
        </Heading>
        <Text mt={4} fontFamily="lora" fontSize={{ base: "sm", md: "xl" }}>
          I am a passionate Full-Stack Developer dedicated to creating impactful
          web and mobile applications that blend cutting-edge technology with
          intuitive design. I thrive on transforming ideas into reality,
          delivering solutions that are scalable, efficient, and built to last.
          With a keen eye for detail and a commitment to excellence, I
          specialize in developing seamless user experiences and robust systems
          that drive results. From responsive web applications to cross-platform
          mobile solutions and scalable backend systems, my work is crafted to
          elevate your project and bring your vision to life.
        </Text>
        <Text mt={4} fontFamily="lora" fontSize={{ base: "sm", md: "xl" }}>
          I am a passionate Full-Stack Developer dedicated to creating impactful
          web and mobile applications that blend cutting-edge technology with
          intuitive design. I thrive on transforming ideas into reality,
          delivering solutions that are scalable, efficient, and built to last.
          With a keen eye for detail and a commitment to excellence, I
          specialize in developing seamless user experiences and robust systems
          that drive results. From responsive web applications to cross-platform
          mobile solutions and scalable backend systems, my work is crafted to
          elevate your project and bring your vision to life.
        </Text>
        <Text mt={4} fontFamily="lora" fontSize={{ base: "sm", md: "xl" }}>
          I am a passionate Full-Stack Developer dedicated to creating impactful
          web and mobile applications that blend cutting-edge technology with
          intuitive design. I thrive on transforming ideas into reality,
          delivering solutions that are scalable, efficient, and built to last.
          With a keen eye for detail and a commitment to excellence, I
          specialize in developing seamless user experiences and robust systems
          that drive results. From responsive web applications to cross-platform
          mobile solutions and scalable backend systems, my work is crafted to
          elevate your project and bring your vision to life.
        </Text>
        <Text mt={4} fontFamily="lora" fontSize={{ base: "sm", md: "xl" }}>
          I am a passionate Full-Stack Developer dedicated to creating impactful
          web and mobile applications that blend cutting-edge technology with
          intuitive design. I thrive on transforming ideas into reality,
          delivering solutions that are scalable, efficient, and built to last.
          With a keen eye for detail and a commitment to excellence, I
          specialize in developing seamless user experiences and robust systems
          that drive results. From responsive web applications to cross-platform
          mobile solutions and scalable backend systems, my work is crafted to
          elevate your project and bring your vision to life.
        </Text>
      </Box>
    </VStack>
  );
};

export default HomePage;
