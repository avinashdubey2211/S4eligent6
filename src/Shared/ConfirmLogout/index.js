import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutDialog = ({ open, setOpen }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    handleClose();
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>{"Logout"}</DialogTitle>
      <DialogContent>
        <DialogContentText>Are you sure you want to logout?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button onClick={handleLogout} color="error">
          Logout
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LogoutDialog;
