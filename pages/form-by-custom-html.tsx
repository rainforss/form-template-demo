import { Center, Box } from "@chakra-ui/react";
import Script from "next/script";
import * as React from "react";

interface IFormByCustomHtmlProps {}

const FormByCustomHtml: React.FunctionComponent<
  IFormByCustomHtmlProps
> = () => {
  return (
    <Center
      h="100vh"
      w="100%"
      bg="linear-gradient(to top right, #548D9A 0%, #404040 100%)"
    >
      <Box w="30%" h="80vh" bg="white" borderRadius="10px" p="2rem">
        <div data-form-block-id="0f899a43-b130-ed11-9db0-000d3af4fa76"></div>
        <div id="dAdutjjzRH-XWSHihc1yWqUg3WWGy6tTbskOGn_UPtlo"></div>
        <div
          className="d365-mkt-config"
          style={{ display: "none" }}
          data-website-id="AdutjjzRH-XWSHihc1yWqUg3WWGy6tTbskOGn_UPtlo"
          data-hostname="92164b15708a49468ceb8389bcf7d220.svc.dynamics.com"
        ></div>
      </Box>
    </Center>
  );
};

export default FormByCustomHtml;
