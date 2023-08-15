import { Center, Box } from "@chakra-ui/react";
import * as React from "react";

interface IDemoFormProps {}

const DemoForm: React.FunctionComponent<IDemoFormProps> = () => {
  return (
    <Center
      h="100vh"
      w="100%"
      bg="linear-gradient(to top right, #548D9A 0%, #404040 100%)"
    >
      <Box w="30%" h="80vh" bg="white" borderRadius="10px" p="2rem">
        <div data-form-block-id="b0986eed-9a3b-ee11-bdf4-000d3a32eb8d"></div>
        <div id="d1cIZMCPTSA4UCePGonwQmBq63TaqKkrbRvVn5ALR-hY"></div>
        <div
          className="d365-mkt-config"
          style={{ display: "none" }}
          data-website-id="1cIZMCPTSA4UCePGonwQmBq63TaqKkrbRvVn5ALR-hY"
          data-hostname="9fe898b4fbf2478ebd936aa588e47059.svc.dynamics.com"
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
