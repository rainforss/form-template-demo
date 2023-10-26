import { Center, Box } from "@chakra-ui/react";
import * as React from "react";
import ContactInfoForm from "../forms/ContactInfoForm";

interface IDemoFormProps {}

declare global {
  interface Window {
    d365mktforms: any;
  }
}

const DemoForm: React.FunctionComponent<IDemoFormProps> = () => {
  React.useEffect(() => {
    document
      .getElementById("d365-marketing-form-placeholder")
      ?.appendChild(
        window.d365mktforms.createForm(
          "d8fd5d51-cf6e-ee11-8df0-00224825b19c",
          "https://public-usa.mkt.dynamics.com/api/v1.0/orgs/5dd0fa48-823b-ee11-94d2-000d3a106937/landingpageforms",
          "https://assets-usa.mkt.dynamics.com/5dd0fa48-823b-ee11-94d2-000d3a106937/digitalassets/forms/d8fd5d51-cf6e-ee11-8df0-00224825b19c"
        )
      );
  }, []);
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
        <ContactInfoForm />
      </Box>
      <Box id="d365-marketing-form-placeholder" display="none"></Box>
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
