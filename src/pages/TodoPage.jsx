import * as React from "react";
import { useState } from "react";

import { Helmet } from "react-helmet-async";
// @mui
import { styled } from "@mui/material/styles";
import {
  Link,
  Container,
  Typography,
  Divider,
  Stack,
  Button,
} from "@mui/material";

import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
// import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import Iconify from "../components/iconify";
// sections
import ControlCard from "../sections/todo/app/ControlCard";

// ----------------------------------------------------------------------

const StyledRoot = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const StyledContent = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));

const rendering = () => {
  const result = [];
  const name = ["a", "b", "c", "d", "e", "f"];
  for (let i = 0; i < name.length; i++) {
    result.push(<ControlCard></ControlCard>);
  }
  return result;
};

const fabStyle = {
  position: "absolute",
  bottom: 20,
  right: 20,
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const [open, setOpen] = useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

// ----------------------------------------------------------------------

export default function TodoPage() {
  return (
    <>
      <Helmet>
        <title> ToDo </title>
      </Helmet>

      <StyledRoot>
        <Container maxWidth="sm">
          <StyledContent>
            {/* <ControlCard></ControlCard> */}
            {rendering()}
          </StyledContent>
        </Container>
      </StyledRoot>
      <Fab sx={fabStyle} color="primary" aria-label="add" onClick={handleOpen}>
        <AddIcon />
      </Fab>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
