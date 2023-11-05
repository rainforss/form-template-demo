import { Center, Box } from "@chakra-ui/react";
import * as React from "react";

interface IDemoFormProps {}

const DemoForm: React.FunctionComponent<IDemoFormProps> = () => {
  return (
    <Center
      w="100%"
      bg="linear-gradient(to top right, #548D9A 0%, #404040 100%)"
    >
      <Box
        w={{ base: "100%", md: "60%" }}
        h="fit-content"
        bg="#efeff4"
        borderRadius="10px"
        p="10px"
      >
        <div data-form-block-id="2a13b6da-167c-ee11-8179-0022482a4b51"></div>
        <div id="dbLNLp2yuHUhFpB1RqwweYWdYvc_gjJrhv5xAN7G6_1I"></div>
        <div
          className="d365-mkt-config"
          style={{ display: "none" }}
          data-website-id="bLNLp2yuHUhFpB1RqwweYWdYvc_gjJrhv5xAN7G6_1I"
          data-hostname="1aada63857d94e9bb83a1f055ffe0999.svc.dynamics.com"
        ></div>
      </Box>
    </Center>
  );
};

export const getServerSideProps = async () => {
  return {
    props: {
      test: true,
    },
  };
};

export default DemoForm;
