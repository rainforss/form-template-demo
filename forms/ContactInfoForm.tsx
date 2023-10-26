import { Button, useToast } from "@chakra-ui/react";
import { Formik, FormikProps, Form } from "formik";
import * as React from "react";
import RadioInput from "../components/RadioInput";
import TextInput from "../components/TextInput";
import configs from "../crin-config.json";
import CheckboxInput from "../components/CheckboxInput";
import TextAreaInput from "../components/TextAreaInput";

export interface Member {
  contactid: string;
  firstname: string;
  lastname: string;
  fullname: string;
  emailaddress1: string;
  customertypecode: number;
  donotbulkemail: boolean;
  "customertypecode@OData.Community.Display.V1.FormattedValue": string;
  bsi_organization: string;
  jobtitle: string;
  bsi_membertype: number;
  "bsi_membertype@OData.Community.Display.V1.FormattedValue": string;
  bsi_MemberCompany: {
    bsi_name: string;
    bsi_organizationsize: number;
    "bsi_organizationsize@OData.Community.Display.V1.FormattedValue": string;
    bsi_membercompanyid: string;
  };
  address1_line1: string;
  address1_postalcode: string;
  address1_stateorprovince: string;
  address1_city: string;
  address1_country: string;
  bsi_dateregistered: Date;
  telephone1: string;
  bsi_MemberAssociatedSector_Member_Contact: Array<{
    bsi_name: string;
    bsi_memberassociatedsectorid: string;
    _bsi_sector_value: string;
  }>;
  bsi_bsi_memberassociatedtheme_Member_contact: Array<{ bsi_name: string }>;
  bsi_contact_bsi_memberassociatedfocusarea_Member: Array<{
    bsi_name: string;
    bsi_memberassociatedfocusareaid: string;
  }>;
  websiteurl: string;
  bsi_linkedinprofile: string;
  bsi_twitterprofile: string;
  bsi_facebookprofile: string;
  bsi_othersocialmediaprofile: string;
}

interface IContactInfoFormProps {}

export class ContactInfoValue {
  firstname: string = "";
  lastname: string = "";
  emailaddress1: string = "";
  telephone1: string = "";
  address1_city: string = "";
  address1_state: string = "";
  rdo_equipmentinterestedin: string = "";
  description: string = "";
}

const ContactInfoForm: React.FunctionComponent<IContactInfoFormProps> = () => {
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
  let D365FormSubmissionRes: any;
  React.useEffect(() => {
    document.addEventListener("d365mkt-afterformsubmit", (e: any) => {
      D365FormSubmissionRes = e.detail.successful;
    });
  }, []);

  const toast = useToast();
  return (
    <Formik
      initialValues={new ContactInfoValue()}
      onSubmit={async (values, actions) => {
        actions.setSubmitting(true);
        (
          document.querySelector(
            "[data-targetproperty='firstname'] > input"
          ) as HTMLInputElement
        ).value = values.firstname;
        (
          document.querySelector(
            "[data-targetproperty='lastname'] > input"
          ) as HTMLInputElement
        ).value = values.lastname;
        (
          document.querySelector(
            "[data-targetproperty='emailaddress1'] > input"
          ) as HTMLInputElement
        ).value = values.emailaddress1;
        (
          document.querySelector(
            "[data-targetproperty='telephone1'] > input"
          ) as HTMLInputElement
        ).value = values.telephone1;
        (
          document.querySelector(
            "[data-targetproperty='address1_city'] > input"
          ) as HTMLInputElement
        ).value = values.address1_city;
        (
          document.querySelector(
            "[data-targetproperty='address1_stateorprovince'] > input"
          ) as HTMLInputElement
        ).value = values.address1_state;
        (
          document.querySelector(
            "[data-targetproperty='rdo_equipmentinterestedin'] > textarea"
          ) as HTMLInputElement
        ).value = values.rdo_equipmentinterestedin;
        (
          document.querySelector(
            "[data-targetproperty='description'] > textarea"
          ) as HTMLInputElement
        ).value = values.description;
        (
          document.querySelector(
            "[data-targetproperty='rdo_referrerpageurl'] > input"
          ) as HTMLInputElement
        ).value = document.referrer;
        (
          document.querySelector(
            "div[data-editorblocktype='SubmitButton'] > button"
          ) as HTMLButtonElement
        ).click();
        await sleep(1500);
        if (!D365FormSubmissionRes) {
          actions.setSubmitting(false);
          return toast({
            status: "error",
            title: "Submission Failed",
            description: "Failed to submit your response, please try again.",
            isClosable: true,
            duration: 3000,
          });
        }
        actions.setSubmitting(false);
        toast({
          status: "success",
          title: "Update success",
          description: "Your contact information has been updated.",
          isClosable: true,
          duration: 3000,
        });
      }}
    >
      {(props: FormikProps<ContactInfoValue>) => {
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
              my="1rem"
              isRequired
            />
            <TextInput
              id="lastname"
              name="lastname"
              label="Last Name"
              type="text"
              my="1rem"
              isRequired
            />
            <TextInput
              id="emailaddress1"
              name="emailaddress1"
              label="E-Mail Address"
              type="email"
              my="1rem"
              isRequired
            />
            <TextInput
              id="telephone1"
              name="telephone1"
              label="Phone Number"
              type="tel"
              my="1rem"
              isRequired
            />
            <TextInput
              id="address1_city"
              name="address1_city"
              label="City"
              type="text"
              my="1rem"
              isRequired
            />
            <TextInput
              id="address1_state"
              name="address1_state"
              label="State"
              my="1rem"
              isRequired
              type="text"
            />
            <TextInput
              id="rdo_equipmentinterestedin"
              name="rdo_equipmentinterestedin"
              label="Equipment Interested In"
              my="1rem"
              isRequired
              type="text"
            />
            <TextAreaInput
              id="description"
              name="description"
              label="Message"
              my="1rem"
            />
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

export default React.memo(ContactInfoForm);
