import { Box, Button, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Home: NextPage = () => {
  const searchParams = useSearchParams();
  const surveyId = searchParams.get("surveyid");
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
        OMAX Installation Guide
      </Heading>

      <Button
        as="a"
        href="/join-email-list"
        variant="link"
        py={4}
        color="#ccc"
        fontSize="1.25rem"
      >
        Utility Requirements Document
      </Button>
      <Button
        as="a"
        href="/request-a-quote#d365mkt-nocache"
        variant="link"
        py={4}
        color="#ccc"
        fontSize="1.25rem"
      >
        Table Specifications Document
      </Button>
      <Button
        as="a"
        href={`https://customervoice.microsoft.com/Pages/ResponsePage.aspx?id=${surveyId}`}
        variant="link"
        py={4}
        color="#ccc"
        fontSize="1.25rem"
      >
        Installation Survey
      </Button>
      <Button
        as="a"
        href="/request-a-quote#d365mkt-nocache"
        variant="link"
        py={4}
        color="#ccc"
        fontSize="1.25rem"
      >
        OMAX Online Account
      </Button>
    </Box>
  );
};

export default Home;
