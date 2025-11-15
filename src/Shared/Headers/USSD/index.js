import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import CustomButton from "../../../Shared/CustomButton";
import Text from "../../../Shared/Text";
import { Chip, IconButton, ModalClose } from "@mui/joy";
import classNames from "classnames";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import CustomDiv from "../../CustomDiv";

export default function USSD() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const hanldeClick = () => {};
  return (
    <>
      <CustomButton
        className="whitespace-nowrap !rounded"
        variant="text"
        onClick={handleOpen}
        endIcon={<KeyboardArrowDownOutlined />}
      >
        USSD
      </CustomButton>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box
            className={classNames(
              "absolute flex rounded outline-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35%] h-fit bg-white  shadow"
            )}
          >
            <ModalClose component={IconButton} onClick={handleClose} />
            <CustomDiv className="p-5 flex flex-col gap-4 items-center justify-center w-full my-10">
              <Text className="text-3xl font-bold text-center">
                Select currency
              </Text>
              <span className="flex items-center gap-3">
                <Chip onClick={hanldeClick}>USSD</Chip>
                <Chip onClick={hanldeClick} variant="outlined">
                  EUR
                </Chip>
                <Chip onClick={hanldeClick} variant="outlined">
                  JPY
                </Chip>
              </span>
            </CustomDiv>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
