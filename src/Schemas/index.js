import * as yup from "yup";

export const addAddressSchema = yup.object({
  address_type: yup.string().required("Address type is required"),
  area: yup.string().required("Area  is required."),
  street_address: yup.string().required("Street address  is required."),
  city_id: yup.number().required("City number  is required."),
  state_id: yup.number().required("State number  is required."),
  country_id: yup.number().required("Country number  is required."),
  pincode: yup
    .string()
    .required("Pincode is required.")
    .matches(/^[0-9]{6}$/g, "Pincode have Only 6 digits."),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email  is required."),
  mobile_number: yup
    .string()
    .required("Mobile number is required.")
    .matches(/^[0-9]{10}$/g, "Mobile number have Only 10 digits."),
  address: yup.string().required("Flat/House No./Compnay Name  is required."),
});
