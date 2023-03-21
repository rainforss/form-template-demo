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
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: `<div data-form-block-id="96fe6225-44c3-ed11-83ff-0022482dbc5d"></div> <script src="https://mktdplp102cdn.azureedge.net/public/latest/js/form-loader.js?v=1.84.2007"></script> <div id="dAgiKKnEz7t28bfs6oiBl4FbTBlKyfOKNYuFwnqWk09g"></div><script src="https://mktdplp102cdn.azureedge.net/public/latest/js/ws-tracking.js?v=1.84.2007"></script><div class="d365-mkt-config" style="display:none" data-website-id="AgiKKnEz7t28bfs6oiBl4FbTBlKyfOKNYuFwnqWk09g" data-hostname="6ee2aedd3e0e48e3baa469db6f6b747e.svc.dynamics.com"></div><script>MsCrmMkt.MsCrmFormLoader.on("afterFormLoad", () => {
          const inputs = document.querySelectorAll(".lp-form-fieldInput");
          inputs.forEach((input) => {
            input.addEventListener("focus", () => {
              input.previousElementSibling.style.transform = "translate(5px, -50%)";
              input.previousElementSibling.style.background = "#fff";
              input.previousElementSibling.style.fontSize = "10px";
              input.previousElementSibling.style.padding = "5px";
              input.previousElementSibling.style.zIndex = "10";
            });
            input.addEventListener("blur", (event) => {
              if (!event.target.value) {
                input.previousElementSibling.style.transform = "translate(0, 0)";
                input.previousElementSibling.style.background = "transparent";
                input.previousElementSibling.style.fontSize = "16px";
                input.previousElementSibling.style.padding = "12px 15px";
                input.previousElementSibling.style.zIndex = "0";
              }
            });
          });
        });</script>`,
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
        <div data-form-block-id="0f899a43-b130-ed11-9db0-000d3af4fa76"></div>
        <div id="dAdutjjzRH-XWSHihc1yWqUg3WWGy6tTbskOGn_UPtlo"></div>
        <div
          className="d365-mkt-config"
          style={{ display: "none" }}
          data-website-id="AdutjjzRH-XWSHihc1yWqUg3WWGy6tTbskOGn_UPtlo"
          data-hostname="92164b15708a49468ceb8389bcf7d220.svc.dynamics.com"
        ></div>
      </Box>
    </Center>
  );
};

// export const getServerSideProps = async () => {
//   return {
//     props: {
//       test: true,
//     },
//   };
// };

export default FormByDesignerCanvas;
