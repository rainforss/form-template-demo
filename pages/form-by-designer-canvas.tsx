import { Center, Box } from "@chakra-ui/react";
import Script from "next/script";
import * as React from "react";

interface IFormByDesignerCanvasProps {}

const FormByDesignerCanvas: React.FunctionComponent<
  IFormByDesignerCanvasProps
> = () => {
  return (
    <Center
      h="100vh"
      w="100%"
      bg="linear-gradient(to top right, #548D9A 0%, #404040 100%)"
    >
      <Box w="30%" h="80vh" bg="white" borderRadius="10px" p="2rem">
        <div data-form-block-id="a1f005e6-b030-ed11-9db0-000d3af4fa76"></div>{" "}
        <Script src="https://mktdplp102cdn.azureedge.net/public/latest/js/form-loader.js?v=1.84.2007" />{" "}
        <div id="dKNNozqqrFm67u-5ar8Nb5AnkgQJQztxqb5LA8wbVhes"></div>
        <Script src="https://mktdplp102cdn.azureedge.net/public/latest/js/ws-tracking.js?v=1.84.2007" />
        <div
          className="d365-mkt-config"
          style={{ display: "none" }}
          data-website-id="KNNozqqrFm67u-5ar8Nb5AnkgQJQztxqb5LA8wbVhes"
          data-hostname="92164b15708a49468ceb8389bcf7d220.svc.dynamics.com"
        ></div>
      </Box>
    </Center>
  );
};

export default FormByDesignerCanvas;
