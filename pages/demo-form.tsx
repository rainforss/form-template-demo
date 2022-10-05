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
        <div data-form-block-id="77abc1bd-b244-ed11-bba2-0022482640c4"></div>
        <div id="dChSPZufhxuKY7ZVuvGwVVm5t7r3_UptQ-FbsB_LJvis"></div>
        <div
          className="d365-mkt-config"
          style={{ display: "none" }}
          data-website-id="ChSPZufhxuKY7ZVuvGwVVm5t7r3_UptQ-FbsB_LJvis"
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
