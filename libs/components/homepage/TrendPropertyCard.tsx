import React from "react";
import { Stack, Box, Divider, Typography, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const TrendPropertiesCard = () => {
  return (
    <Stack className="trend-card-box">
      <Box
        className="card-img"
        style={{
          backgroundImage: "url('/img/banner/types/house.webp')",
        }}
      >
        <div>$420,000</div>
      </Box>

      <Box className="info">
        <Typography className="title">Run Will Buildings</Typography>
        <Typography className="desc">Seoul Gangnam Apartments</Typography>

        <Box className="options">
          <Box>
            <img src="/img/icons/bed.svg" alt="Beds" />
            <span>3 beds</span>
          </Box>
          <Box>
            <img src="/img/icons/room.svg" alt="Rooms" />
            <span>7 rooms</span>
          </Box>
          <Box>
            <img src="/img/icons/expand.svg" alt="Area" />
            <span>250 m²</span>
          </Box>
        </Box>

        <Divider sx={{ mt: "15px", mb: "17px" }} />

        <Box className="bott">
          <Typography>Rent</Typography>
          <Box className="view-like-box">
            <IconButton size="small">
              <RemoveRedEyeIcon />
            </IconButton>
            <Typography className="view cnt">120</Typography>
            <IconButton size="small">
              <FavoriteIcon />
            </IconButton>
            <Typography className="view cnt">200</Typography>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default TrendPropertiesCard;
