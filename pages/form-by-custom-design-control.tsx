import { Center, Box } from "@chakra-ui/react";
import Script from "next/script";
import * as React from "react";

interface IFormByCustomDesignControlProps {}

const FormByCustomDesignControl: React.FunctionComponent<
  IFormByCustomDesignControlProps
> = () => {
  return (
    <Center
      h="100vh"
      w="100%"
      bg="linear-gradient(to top right, #548D9A 0%, #404040 100%)"
    >
      <Box w="30%" h="80vh" bg="white" borderRadius="10px" p="2rem">
        <div data-form-block-id="b80e381a-e19b-ec11-b401-0022486df69c"></div>{" "}
        <Script src="https://mktdplp102cdn.azureedge.net/public/latest/js/form-loader.js?v=1.84.2007" />{" "}
        <div id="dRpU44_CbC03f6BDoPWOc2IpHp-RcHwUqmwh0HMuiXyA"></div>
        <Script src="https://mktdplp102cdn.azureedge.net/public/latest/js/ws-tracking.js?v=1.84.2007" />
        <div
          className="d365-mkt-config"
          style={{ display: "none" }}
          data-website-id="RpU44_CbC03f6BDoPWOc2IpHp-RcHwUqmwh0HMuiXyA"
          data-hostname="92164b15708a49468ceb8389bcf7d220.svc.dynamics.com"
        ></div>
      </Box>
    </Center>
  );
};

export default FormByCustomDesignControl;
