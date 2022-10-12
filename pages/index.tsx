import { Box, Button, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Box
      w="100%"
      h="100vh"
      display="flex"
      flexDir="column"
      justifyContent="center"
      bg="linear-gradient(to top right, #548D9A 0%, #404040 100%)"
    >
      <Heading as="h1" textAlign="center" mb={64} fontSize="4rem" color="white">
        Marketing Form Demo
      </Heading>
      <Button
        as="a"
        href="/demo-form-capture"
        variant="link"
        py={4}
        color="#ccc"
        fontSize="1.25rem"
      >
        Form Capture
      </Button>
      <Button
        as="a"
        href="/form-by-designer-canvas"
        variant="link"
        py={4}
        color="#ccc"
        fontSize="1.25rem"
      >
        Designer Canvas Form
      </Button>
      <Button
        as="a"
        href="/form-by-custom-html"
        variant="link"
        py={4}
        color="#ccc"
        fontSize="1.25rem"
      >
        Custom HTML/CSS Form
      </Button>
      <Button
        as="a"
        href="/form-by-custom-designer-control"
        variant="link"
        py={4}
        color="#ccc"
        fontSize="1.25rem"
      >
        Custom Designer Control Form
      </Button>
    </Box>
  );
};

export default Home;
