import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import Charts from "../components/Charts";
import KpiCards from "../components/KpiCards";
import useStockCalls from "../hooks/useStockCalls";

const Home = () => {
  const { getSales, getPurchases } = useStockCalls();

  useEffect(() => {
    getSales();
    getPurchases();
  }, []);

  return (
    <Box>
      <Typography variant="h4" color="error" mb={4}>
        Dashboard
      </Typography>
      <KpiCards />
      <Charts />
    </Box>
  );
};

export default Home;
