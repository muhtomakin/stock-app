import React, { useEffect, useState } from "react";
import useStockCalls from "../hooks/useStockCalls";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import FirmCard from "../components/FirmCard";
import FirmModal from "../components/modals/FirmModal";

const Firms = () => {
  const [open, setOpen] = useState(false);
  const { getFirms } = useStockCalls();
  const { firms } = useSelector((state) => state.stock);
  const [info, setInfo] = useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  });

  const modalOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    getFirms();
  }, []);
  


  
  return (
    <Box>
      <Typography variant="h4" color="error" mb={4}>
        Firms
      </Typography>
      <Button variant="contained" onClick={modalOpen}>
        New Firm
      </Button>

      <FirmModal open={open} setOpen={setOpen} info={info} setInfo={setInfo} />

      {firms?.length > 0 && (
        <Grid container justifyContent={"center"} gap="2">
          {firms?.map((item) => {
            return (
              <Grid item key={item.id}>
                <FirmCard
                  item={item}
                  setInfo={setInfo}
                  info={info}
                  open={open}
                  setOpen={setOpen}
                />
              </Grid>
            );
          })}
        </Grid>
      )}
    </Box>
  );
};

export default Firms;
