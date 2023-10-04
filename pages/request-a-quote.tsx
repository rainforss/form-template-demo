import { Center, Box } from "@chakra-ui/react";
import * as React from "react";

interface IDemoFormProps {}

const DemoForm: React.FunctionComponent<IDemoFormProps> = () => {
  return (
    <Center
      w="100%"
      bg="linear-gradient(to top right, #548D9A 0%, #404040 100%)"
    >
      <Box w="60%" h="fit-content" bg="#efeff4" borderRadius="10px" p="2rem">
        <div data-form-block-id="7fe71819-ea62-ee11-be6e-00224825b9dd"></div>
        <div id="dkWcCr2cBRe1rwuY37vTJuSbgiPiZp4_SQBuhApKiLt4"></div>
        <div
          className="d365-mkt-config"
          style={{ display: "none" }}
          data-website-id="kWcCr2cBRe1rwuY37vTJuSbgiPiZp4_SQBuhApKiLt4"
          data-hostname="78259aeb4bd244c0b3adb9f8257c48de.svc.dynamics.com"
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
