import React, { useState, useEffect } from "react";
import { Box, VStack, Heading } from "@chakra-ui/react";

const NotificationsPage = () => {
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
          Notifications page{" "}
        </Heading>
      </Box>
    </VStack>
  );
};

export default NotificationsPage;
