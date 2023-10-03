import { Center, Box } from "@chakra-ui/react";
import * as React from "react";

interface IDemoFormProps {}

const DemoForm: React.FunctionComponent<IDemoFormProps> = () => {
  return (
    <Center
      w="100%"
      bg="linear-gradient(to top right, #548D9A 0%, #404040 100%)"
    >
      <Box w="30%" h="fit-content" bg="white" borderRadius="10px" p="2rem">
        <div data-form-block-id="882ef3ec-1c62-ee11-be6e-00224825b9dd"></div>
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
