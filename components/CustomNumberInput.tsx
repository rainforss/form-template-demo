import {
  ChakraProps,
  FormControl,
  FormErrorMessage,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputField,
  NumberInputStepper,
  NumberInput,
} from "@chakra-ui/react";
import { useField } from "formik";
import * as React from "react";

interface INumberInputProps extends ChakraProps {
  id: string;
  name: string;
  label: string;
  isRequired?: boolean;
}

const CustomNumberInput: React.FunctionComponent<INumberInputProps> = ({
  id,
  name,
  label,
  isRequired,
  ...chakraProps
}) => {
  const [field, meta] = useField(name);
  return (
    <FormControl
      isInvalid={!!(meta.error && meta.touched)}
      isRequired={isRequired}
      {...chakraProps}
    >
      <FormLabel htmlFor={id}>{label}</FormLabel>

      <NumberInput>
        <NumberInputField {...field} id={id} name={name} />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      {!!meta.error && <FormErrorMessage>{meta.error}</FormErrorMessage>}
    </FormControl>
  );
};

export default CustomNumberInput;
