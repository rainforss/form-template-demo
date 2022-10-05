import { Center, Box } from "@chakra-ui/react";
import * as React from "react";
import ContactInfoForm from "../forms/ContactInfoForm";

interface IDemoFormCaptureProps {}

const DemoFormCapture: React.FunctionComponent<IDemoFormCaptureProps> = () => {
  return (
    <Center
      h="100vh"
      w="100%"
      bg="linear-gradient(to top right, #548D9A 0%, #404040 100%)"
    >
      <Box w="30%" h="80vh" bg="white" borderRadius="10px" p="2rem">
        <ContactInfoForm />
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

export default DemoFormCapture;
