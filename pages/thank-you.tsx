import { Box, Heading } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useEffect } from "react";

declare global {
  interface Window {
    msdynmkt: any;
  }
}

const Home: NextPage = () => {
  function track_msdynmkt_doubleopt_inconfirmed_033246949(
    ingestionKey: string
  ) {
    const url = new URL(window.location.href);
    const contactId = url.searchParams.get("contactid");
    if (!contactId) {
      return;
    }
    window["msdynmkt"].setUser({ authId: decodeURIComponent(contactId) }); // ID, e-mail or phone number - see instructions
    window["msdynmkt"].trackEvent({
      name: "msdynmkt_doubleopt_inconfirmed_033246949", //Trigger title: Double Opt-in Confirmed
      ingestionKey,
      version: "1.0.0",
      // To learn more about the event properties below, please see the documentation on Special attributes for custom triggers.
      properties: {
        bindingid: `contact/${contactId}`,
      },
    });
  }
  useEffect(() => {
    fetch("/api/confirm")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        track_msdynmkt_doubleopt_inconfirmed_033246949(data.ingestionKey);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <Box
      w="100%"
      h="100vh"
      display="flex"
      flexDir="column"
      justifyContent="center"
      bg="linear-gradient(to top right, #548D9A 0%, #404040 100%)"
    >
      <Heading as="h1" textAlign="center" mb={64} fontSize="4rem" color="white">
        Thank you for subscribing.
      </Heading>
    </Box>
  );
};

export default Home;
