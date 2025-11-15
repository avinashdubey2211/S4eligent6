import { Modal, ModalClose, Sheet } from "@mui/joy";
import { Checkbox, Rating, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useSnackbar } from "notistack";
import React from "react";
import { useState } from "react";
import { API_URLS } from "../../../../Config/API_URLS";
import axiosInstance from "../../../../Config/axios";
import CustomButton from "../../../../Shared/CustomButton";
import Text from "../../../../Shared/Text";

const WriteReviw = ({ productId }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(2);
  const [image, setImage] = useState(null);
  const { enqueueSnackbar } = useSnackbar();
  const initialValues = {
    address_type: "",
    area: "",
    street_address: "",
    city_id: "",
    state_id: "",
    country_id: "",
    pincode: "",
    email: "",
    mobile_number: "",
  };

  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: initialValues,

    onSubmit: (values, action) => {
      const reqBody = new FormData();
      reqBody.append("product_id", Number(productId));
      reqBody.append("rating", Number(value));
      reqBody.append("subject", values.subject);
      reqBody.append("comment", values.comment);
      reqBody.append("reccomendation", "Yes");
      reqBody.append("review_img", image);
      axiosInstance
        .post(API_URLS.writeReviw, reqBody)
        .then((response) => {
          setOpen(false);
          enqueueSnackbar(response.data.msg);
        })
        .catch((error) => {
          enqueueSnackbar("Something went wrong..!", { variant: "error" });
        });
    },
  });

  return (
    <>
      <CustomButton
        variant="outlined"
        className="!rounded-none !w-fit"
        onClick={() => setOpen(true)}
      >
        Write Review
      </CustomButton>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        className="flex justify-center items-center"
      >
        <Sheet variant="outlined" className="rounded">
          <ModalClose variant="outlined" />
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12 bg-gray-50 text-gray-800">
              <div className="flex flex-col items-center w-96">
                <h2 className="text-3xl font-semibold text-center">
                  Your opinion matters!
                </h2>
                <div className="flex flex-col items-center py-6 space-y-3">
                  <span className="text-center">How was your experience?</span>
                  <Rating
                    value={value}
                    size="large"
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </div>
                <div className="flex flex-col gap-3 w-full">
                  <TextField
                    id="subject"
                    name="subject"
                    label="Subject"
                    value={values["subject"]}
                    onChange={handleChange}
                    variant="outlined"
                    color="primary"
                  />
                  <TextField
                    id="comment"
                    name="comment"
                    label="Comment"
                    value={values["comment"]}
                    onChange={handleChange}
                    variant="outlined"
                    multiline
                    color="primary"
                    rows={3}
                  />
                  <fieldset className="w-full space-y-1 text-gray-800">
                    <div className="flex">
                      <input
                        type="file"
                        className="px-5 py-5 border-2 border-dashed rounded-md border-gray-300 text-gray-600"
                        onChange={(event) => setImage(event.target.files[0])}
                      />
                    </div>
                  </fieldset>
                  <span className="flex items-center gap-1">
                    <Checkbox
                      id="reccomendation"
                      name="reccomendation"
                      value={values["reccomendation"]}
                      onChange={handleChange}
                      color="primary"
                      className="!p-0"
                    />
                    <Text>Recommended</Text>
                  </span>

                  <CustomButton
                    type="submit"
                    className="py-4 my-8 font-semibold rounded-md text-gray-50 bg-violet-600"
                  >
                    Leave feedback
                  </CustomButton>
                </div>
              </div>
            </div>
          </form>
        </Sheet>
      </Modal>
    </>
  );
};

export default WriteReviw;
