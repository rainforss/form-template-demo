import { Center, Box } from "@chakra-ui/react";
import Script from "next/script";
import * as React from "react";

interface IAusNZFormProps {}

const AusNZForm: React.FunctionComponent<IAusNZFormProps> = () => {
  return (
    <Center
      h="100vh"
      w="100%"
      bg="linear-gradient(to top right, #548D9A 0%, #404040 100%)"
    >
      <Box w="30%" h="80vh" bg="white" borderRadius="10px" p="2rem">
        <div data-form-block-id="09cc22bd-0440-ed11-9db0-000d3a986a67"></div>
        <div id="dmS1SLrE66Bikzp6MuGoeDC77G0GdJ9o9Qcsk-NnnKiM"></div>
        <div
          className="d365-mkt-config"
          style={{ display: "none" }}
          data-website-id="mS1SLrE66Bikzp6MuGoeDC77G0GdJ9o9Qcsk-NnnKiM"
          data-hostname="6ee2aedd3e0e48e3baa469db6f6b747e.svc.dynamics.com"
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

export default AusNZForm;
