import { Button, useToast } from "@chakra-ui/react";
import { Formik, FormikProps, Form } from "formik";
import * as React from "react";
import CustomNumberInput from "../components/CustomNumberInput";

interface IPurchaseFormProps {}

interface PurchaseInfoValue {
  amount: number;
}

const PurchaseForm: React.FunctionComponent<IPurchaseFormProps> = (props) => {
  const toast = useToast();
  const [totalAmount, setTotalAmount] = React.useState(0);
  const handleTabClosing = () => {
    track_msdynmkt_test;
  };

  const track_msdynmkt_test = () => {
    (window["msdynmkt" as any] as any).setUser({
      authId: "rainforss123@gmail.com",
    }); // ID, e-mail or phone number - see instructions
    (window["msdynmkt" as any] as any).trackEvent({
      name: "msdynmkt_test", //Trigger title: Test
      ingestionKey:
        "03f9833e415547d1ba1927136e50c8e7-2c6b926b-6cad-40bc-8deb-2741510efb06-7059",
      version: "1.0.0",
      // To learn more about the event properties below, please see the documentation on  To learn more about the event properties below, please see the documentation on for custom triggers.
      properties: {
        amount: totalAmount,
        bindingid: `test/${totalAmount}`,
      },
    });
  };

  const alertUser = (event: any) => {
    event.preventDefault();
    event.returnValue = "Test";
  };
  React.useEffect(() => {
    window.addEventListener("beforeunload", alertUser);
    window.addEventListener("unload", handleTabClosing);
    return () => {
      window.removeEventListener("beforeunload", alertUser);
      window.removeEventListener("unload", handleTabClosing);
    };
  });
  return (
    <Formik
      initialValues={{ amount: totalAmount }}
      onSubmit={(values, actions) => {
        actions.setSubmitting(true);
        setTotalAmount(() => values.amount);
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
