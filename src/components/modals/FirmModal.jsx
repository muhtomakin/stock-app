import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { flexCenter, flexColumn, modalStyle } from "../../styles/globalStyles";
import { TextField } from "@mui/material";
import useStockCalls from "../../hooks/useStockCalls";

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

export default function FirmModal({ open, setOpen, info, setInfo }) {
  const { postFirm, putFirm } = useStockCalls();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (info.id) {
      console.log(info.id);
      putFirm(info);
    } else {
      postFirm(info);
    }

    setOpen(false);
    setInfo({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box component="form" onSubmit={handleSubmit} sx={flexColumn}>
            <TextField
              margin="dense"
              label="Firm Name"
              name="name"
              id="name"
              type={"text"}
              variant="outlined"
              value={info?.name || ""}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              label="phone"
              name="phone"
              id="phone"
              type={"text"}
              variant="outlined"
              value={info?.phone || ""}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              label="Firm Name"
              name="address"
              id="address"
              type={"text"}
              variant="outlined"
              value={info?.address || ""}
              onChange={handleChange}
            />
            <TextField
              margin="dense"
              label="Firm Name"
              name="image"
              id="image"
              type={"url"}
              variant="outlined"
              value={info?.image || ""}
              onChange={handleChange}
            />

            <Button type="submit" variant="contained" size="large">
              Save Firm
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
