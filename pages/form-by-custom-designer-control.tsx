import { Center, Box } from "@chakra-ui/react";
import Script from "next/script";
import * as React from "react";

interface IFormByCustomDesignerControlProps {}

const FormByCustomDesignerControl: React.FunctionComponent<
  IFormByCustomDesignerControlProps
> = () => {
  return (
    <Center
      h="100vh"
      w="100%"
      bg="linear-gradient(to top right, #548D9A 0%, #404040 100%)"
    >
      <Box w="30%" h="80vh" bg="white" borderRadius="10px" p="2rem">
        <div data-form-block-id="7d53cc91-b130-ed11-9db0-000d3af4fa76"></div>
        <div id="d7An4sRmNBQLwGcXwm7adukCoCGHItP7J1T69ZKurHdQ"></div>
        <div
          className="d365-mkt-config"
          style={{ display: "none" }}
          data-website-id="7An4sRmNBQLwGcXwm7adukCoCGHItP7J1T69ZKurHdQ"
          data-hostname="92164b15708a49468ceb8389bcf7d220.svc.dynamics.com"
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

export default FormByCustomDesignerControl;
