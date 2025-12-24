import ProductCard from "./ProductCard";
import { Box, Typography, Divider } from "@mui/material";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ScheduleIcon from "@mui/icons-material/Schedule";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";

import { useState } from "react";
import InfoPopover from "./InfoPopover";

const ProductsPage = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleOpenPopover = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const products = [
    { length: 200, width: 180, price: 19500 },
    { length: 190, width: 180, price: 19500 },
    { length: 200, width: 160, price: 19000 },
    { length: 190, width: 160, price: 19000 },
    { length: 200, width: 140, price: 18500 },
    { length: 190, width: 140, price: 18500 },
    { length: 200, width: 120, price: 17500 },
    { length: 200, width: 90, price: 15000 },
    { length: 190, width: 90, price: 15000 },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <Box
        sx={{
          mb: 4,
          px: 3,
          py: 2.5,
          borderRadius: 2,
          border: "1px solid",
          borderColor: "grey.200",
          backgroundColor: "grey.50",
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={3}
          flexWrap="wrap"
        >
          <Box display="flex" alignItems="center" gap={1}>
            <CardGiftcardIcon sx={{ fontSize: 28 }} />

            <Typography fontSize={17} color="text.primary">
              <strong>6 poklona</strong> uz svaki dušek
            </Typography>

            <div onClick={handleOpenPopover}>
              <InfoOutlineIcon
                sx={{
                  fontSize: 20,
                  color: "text.secondary",
                  cursor: "pointer",
                }}
              />
            </div>
          </Box>

          <Divider
            orientation="vertical"
            flexItem
            sx={{
              display: { xs: "none", md: "block" },
            }}
          />

          <Box display="flex" alignItems="center" gap={1.5}>
            <LocalShippingIcon sx={{ fontSize: 28 }} />
            <Typography fontSize={17} color="text.primary">
              Dostava <strong>1.000 RSD</strong> po dušeku
            </Typography>
          </Box>

          <Divider
            orientation="vertical"
            flexItem
            sx={{
              display: { xs: "none", md: "block" },
            }}
          />
          <Box display="flex" alignItems="center" gap={1.5}>
            <ScheduleIcon sx={{ fontSize: 28 }} />
            <Typography fontSize={17} color="text.primary">
              Isporuka <strong>5–7 radnih dana</strong>
            </Typography>
          </Box>
        </Box>
      </Box>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, id) => (
          <ProductCard data={product} key={id} />
        ))}
      </div>
      {open && (
        <InfoPopover
          open={open}
          anchorEl={anchorEl}
          handleClosePopover={handleClosePopover}
        />
      )}
    </div>
  );
};

export default ProductsPage;
