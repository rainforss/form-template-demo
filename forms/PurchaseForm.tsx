import { Button, useToast } from "@chakra-ui/react";
import { Formik, FormikProps, Form } from "formik";
import * as React from "react";
import CustomNumberInput from "../components/CustomNumberInput";

interface IPurchaseFormProps {}

interface PurchaseInfoValue {
  amount: string;
}

const PurchaseForm: React.FunctionComponent<IPurchaseFormProps> = (props) => {
  const [totalAmount, setTotalAmount] = React.useState(0);

  const track_msdynmkt_test = async (amount: number) => {
    await (window["msdynmkt" as any] as any).setUser({
      authId: "ce70624d-f489-49fc-862f-15999e545cdf",
    }); // ID, e-mail or phone number - see instructions
    await (window["msdynmkt" as any] as any).trackEvent({
      name: "msdynmkt_doubleopt_ininitiation", //Trigger title: Test
      ingestionKey:
        "ea333410c4424ba8862fafa6468f4094-8bd86c66-69dd-4c5b-a7f2-936a3c0c6524-7928",
      version: "1.0.0",
      // To learn more about the event properties below, please see the documentation on  To learn more about the event properties below, please see the documentation on for custom triggers.
      properties: {
        category: amount,
        bindingid: `contact/ce70624d-f489-49fc-862f-15999e545cdf`,
      },
    });
  };

  return (
    <Formik
      initialValues={{ amount: "0" }}
      onSubmit={async (values, actions) => {
        actions.setSubmitting(true);
        setTotalAmount(() => parseInt(values.amount));
        await track_msdynmkt_test(parseInt(values.amount));
        alert(`Your purchasing amount is ${values.amount}`);
        actions.setSubmitting(false);
      }}
      onReset={async (values, actions) => {
        setTotalAmount(() => 0);
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
            <Button
              type="reset"
              mr="auto"
              my="2rem"
              bgColor="#173f5e"
              color="white"
              px="2rem"
              py="1.5rem"
            >
              Reset
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default PurchaseForm;
