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
      <Link href="/form-by-designer-canvas" passHref>
        <Button as="a" variant="link" py={4} color="#ccc" fontSize="1.25rem">
          Designer Canvas Form
        </Button>
      </Link>
      <Link href="/form-by-custom-html" passHref>
        <Button as="a" variant="link" py={4} color="#ccc" fontSize="1.25rem">
          Custom HTML/CSS Form
        </Button>
      </Link>
      <Link href="/form-by-custom-designer-control" passHref>
        <Button as="a" variant="link" py={4} color="#ccc" fontSize="1.25rem">
          Custom Designer Control Form
        </Button>
      </Link>
    </Box>
  );
};

export default Home;
