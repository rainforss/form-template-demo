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
        <div data-form-block-id="4dc0ce45-637d-ed11-81ad-000d3a99e741"></div>
        <div id="doIt5Yp9rDot8FSWV5bLQkYtBHZ56YBpOoEi0e6FJ30c"></div>
        <div
          className="d365-mkt-config"
          style={{ display: "none" }}
          data-website-id="oIt5Yp9rDot8FSWV5bLQkYtBHZ56YBpOoEi0e6FJ30c"
          data-hostname="53b5d92930b045c68a07d11ed0e50c9c.svc.dynamics.com"
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
