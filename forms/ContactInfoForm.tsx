import { Button, useToast } from "@chakra-ui/react";
import { Formik, FormikProps, Form } from "formik";
import * as React from "react";
import RadioInput from "../components/RadioInput";
import TextInput from "../components/TextInput";
import configs from "../crin-config.json";
import CheckboxInput from "../components/CheckboxInput";

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
  bsi_membertype: string = "";
  donotbulkemail: boolean = false;
}

const ContactInfoForm: React.FunctionComponent<IContactInfoFormProps> = () => {
  const submit = async (values: ContactInfoValue) => {
    console.log(values);
  };
  const toast = useToast();
  return (
    <Formik
      initialValues={new ContactInfoValue()}
      onSubmit={async (values, actions) => {
        actions.setSubmitting(true);
        toast({
          status: "warning",
          title: "Update in progress",
          description:
            "Your contact information is being updated, please wait...",
          isClosable: true,
          duration: 3000,
        });
        await submit(values);
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
              display={props.values.firstname ? "initial" : "none"}
              isRequired
            />
            <TextInput
              id="emailaddress1"
              name="emailaddress1"
              label="E-Mail Address"
              type="email"
              my="1rem"
              display={props.values.lastname ? "initial" : "none"}
              isRequired
            />
            <TextInput
              id="telephone1"
              name="telephone1"
              label="Phone Number"
              type="tel"
              my="1rem"
              display={props.values.emailaddress1 ? "initial" : "none"}
              isRequired
            />
            <RadioInput
              id="bsi_membertype"
              name="bsi_membertype"
              label="Member Type"
              options={configs.membertypes}
              alignment="row"
              my="1rem"
              isRequired
              isEditing
            />
            <CheckboxInput
              id="donotbulkemail"
              name="donotbulkemail"
              label="I agree to receive email communications from CRIN, keeping me informed about upcoming events and opportunities. I understand that I can unsubscribe at any time."
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
