import { Button, useToast } from "@chakra-ui/react";
import { Formik, FormikProps, Form } from "formik";
import * as React from "react";
import CustomNumberInput from "../components/CustomNumberInput";
import TextInput from "../components/TextInput";
import { useRouter } from "next/router";

interface IPurchaseFormProps {}

interface PurchaseInfoValue {
  firstname: string;
  lastname: string;
  item: string;
  email: string;
}

const PurchaseForm: React.FunctionComponent<IPurchaseFormProps> = (props) => {
  const [totalAmount, setTotalAmount] = React.useState("");
  const router = useRouter();
  const formRef = React.useRef<any>();
  const track_msdynmkt_test = async (email: string, item: string) => {
    await (window["msdynmkt" as any] as any).setUser({
      authId: email,
    }); // ID, e-mail or phone number - see instructions
    await (window["msdynmkt" as any] as any).trackEvent({
      name: "msdynmkt_cartabandoned_044137059", //Trigger title: Test
      ingestionKey:
        "ea333410c4424ba8862fafa6468f4094-8bd86c66-69dd-4c5b-a7f2-936a3c0c6524-7928",
      version: "1.0.0",
      // To learn more about the event properties below, please see the documentation on  To learn more about the event properties below, please see the documentation on for custom triggers.
      properties: {
        cartcontent: item,
        cartlink: window.location.href,
        bindingid: `contact/${email}`,
      },
    });
  };

  React.useEffect(() => {
    const onBeforeUnload = () => {
      if (
        document.visibilityState !== "visible" &&
        formRef.current.values.email &&
        formRef.current.values.item
      ) {
        console.log("refreshing");
        track_msdynmkt_test(
          formRef.current?.values.email || "",
          formRef.current?.values.item || ""
        );
      }
    };

    document.addEventListener("visibilitychange", onBeforeUnload);

    return () => {
      document.removeEventListener("visibilitychange", onBeforeUnload);
    };
  }, []);

  return (
    <Formik
      innerRef={formRef}
      initialValues={{
        item: "",
        firstname: "",
        lastname: "",
        email: "",
      }}
      onSubmit={async (values, actions) => {
        actions.setSubmitting(true);
        setTotalAmount(() => values.item);
        await track_msdynmkt_test(values.email, values.item);
        alert(`You are purchasing ${values.item}`);
        actions.setSubmitting(false);
      }}
    >
      {(props: FormikProps<PurchaseInfoValue>) => {
        return (
          <Form
            style={{
              padding: "0",
              display: "flex",
              width: "100%",
              flexWrap: "wrap",
            }}
          >
            <TextInput
              id="firstname"
              name="firstname"
              label="First Name"
              type="text"
              mb={4}
            />
            <TextInput
              id="lastname"
              name="lastname"
              label="Last Name"
              type="text"
              mb={4}
            />
            <TextInput
              id="email"
              name="email"
              label="Email Address"
              type="email"
              mb={4}
            />
            <TextInput id="item" name="item" label="Items" type="text" mb={4} />
            <Button
              type="submit"
              mr="auto"
              my="2rem"
              bgColor="#173f5e"
              color="white"
              px="2rem"
              py="1.5rem"
              isLoading={props.isSubmitting}
              disabled={props.isSubmitting}
            >
              Update
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default PurchaseForm;
