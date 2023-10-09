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
        Marketing Demo
      </Heading>

      <Button
        as="a"
        href="/join-email-list"
        variant="link"
        py={4}
        color="#ccc"
        fontSize="1.25rem"
      >
        Join Email List
      </Button>
      <Button
        as="a"
        href="/request-a-quote"
        variant="link"
        py={4}
        color="#ccc"
        fontSize="1.25rem"
      >
        Request a Quote
      </Button>
    </Box>
  );
};

export default Home;
