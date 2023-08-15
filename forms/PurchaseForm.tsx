import { Button, useToast } from "@chakra-ui/react";
import { Formik, FormikProps, Form } from "formik";
import * as React from "react";
import CustomNumberInput from "../components/CustomNumberInput";
import TextInput from "../components/TextInput";

interface IPurchaseFormProps {}

interface PurchaseInfoValue {
  amount: string;
  firstname: string;
  lastname: string;
  email: string;
}

const PurchaseForm: React.FunctionComponent<IPurchaseFormProps> = (props) => {
  const [totalAmount, setTotalAmount] = React.useState(0);

  const track_msdynmkt_test = async (
    email: string,
    firstname: string,
    lastname: string,
    amount: number
  ) => {
    await (window["msdynmkt" as any] as any).setUser({
      authId: email,
    }); // ID, e-mail or phone number - see instructions
    await (window["msdynmkt" as any] as any).trackEvent({
      name: "msdynmkt_onlinepurchase_184349180", //Trigger title: Test
      ingestionKey:
        "52dd670be1004fe2bde2380e40c40997-a961e04a-6d71-443a-9a89-028baa6b8aa2-7442",
      version: "1.0.0",
      // To learn more about the event properties below, please see the documentation on  To learn more about the event properties below, please see the documentation on for custom triggers.
      properties: {
        purchaseamount: amount,
        firstname,
        lastname,
        bindingid: `contact/${email}`,
      },
    });
  };

  return (
    <Formik
      initialValues={{
        amount: "0",
        firstname: "",
        lastname: "",
        email: "",
      }}
      onSubmit={async (values, actions) => {
        actions.setSubmitting(true);
        setTotalAmount(() => parseInt(values.amount));
        await track_msdynmkt_test(
          values.email,
          values.firstname,
          values.lastname,
          parseInt(values.amount)
        );
        alert(`Your purchasing amount is ${values.amount}`);
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
            <CustomNumberInput id="amount" name="amount" label="Amount" />
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
