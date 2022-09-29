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
      <Box
        w="30%"
        h="80vh"
        bg="white"
        borderRadius="10px"
        p="2rem"
        dangerouslySetInnerHTML={{
          __html: `<div data-form-block-id="a1f005e6-b030-ed11-9db0-000d3af4fa76"></div>
        <div id="dKNNozqqrFm67u-5ar8Nb5AnkgQJQztxqb5LA8wbVhes"></div>
        <div
          class="d365-mkt-config"
          style={{ display: "none" }}
          data-website-id="KNNozqqrFm67u-5ar8Nb5AnkgQJQztxqb5LA8wbVhes"
          data-hostname="92164b15708a49468ceb8389bcf7d220.svc.dynamics.com"
        ></div>`,
        }}
      >
        {/* <div data-form-block-id="a1f005e6-b030-ed11-9db0-000d3af4fa76"></div>
        <div id="dKNNozqqrFm67u-5ar8Nb5AnkgQJQztxqb5LA8wbVhes"></div>
        <div
          className="d365-mkt-config"
          style={{ display: "none" }}
          data-website-id="KNNozqqrFm67u-5ar8Nb5AnkgQJQztxqb5LA8wbVhes"
          data-hostname="92164b15708a49468ceb8389bcf7d220.svc.dynamics.com"
        ></div> */}
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

export default FormByDesignerCanvas;
