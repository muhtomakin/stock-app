import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { btnHoverStyle } from "../styles/globalStyles";
import useStockCalls from "../hooks/useStockCalls";

const FirmCard = ({ item, setInfo, info, open, setOpen }) => {
  const { deleteStockData } = useStockCalls();

  const handleDelete = (id) => {
    const url = "firms";
    deleteStockData(url, id);
  };

  const handleEdit = () => {
    setOpen(true);
    setInfo({
      ...info,
      name: item?.name,
      phone: item?.phone,
      address: item?.address,
      image: item?.image,
      id: item.id,
    });
    console.log(info);
  };
  return (
    <Card
      sx={{
        maxWidth: "300px",
        maxHeight: "400px",
        minHeight: "400px",
        display: "flex",
        margin: "10px",
        flexDirection: "column",
      }}
    >
      <CardMedia
        height="325"
        width={"250"}
        sx={{ p: 1, objectFit: "contain" }}
        component="img"
        image={item?.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item?.phone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item?.address}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button size="small">
          <EditIcon sx={btnHoverStyle} onClick={() => handleEdit(item)} />
        </Button>
        <Button size="small">
          <DeleteOutlineIcon
            sx={btnHoverStyle}
            onClick={() => handleDelete(item?.id)}
          />
        </Button>
      </CardActions>
    </Card>
  );
};

export default FirmCard;
