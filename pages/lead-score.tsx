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
        <div data-form-block-id="28e6ae7f-2499-ee11-be37-0022482e1e9c"></div>
        <div id="d8iyjDZ-Trf7Exp5DIl9bZ-pMk_DSrvlaU4p3N1t_1lg"></div>
        <div
          className="d365-mkt-config"
          style={{ display: "none" }}
          data-website-id="8iyjDZ-Trf7Exp5DIl9bZ-pMk_DSrvlaU4p3N1t_1lg"
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
