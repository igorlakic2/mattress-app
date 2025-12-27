import {
  Box,
  Typography,
  Button,
  Divider,
  Card,
  CardContent,
  IconButton,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ScheduleIcon from "@mui/icons-material/Schedule";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import { useCart } from "../../CartContext";
import { useState } from "react";
import CheckoutForm from "./CheckoutForm";
import { EnumProductType } from "../../model/EnumProductType";

const CartPage = () => {
  const [step, setStep] = useState<"cart" | "checkout">("cart");
  const { items, subtotal, remove } = useCart();

  const deliveryPrice = 1000;
  const total =
    subtotal +
    items.filter((item) => item.type === EnumProductType.DUSEK).length *
      deliveryPrice;

  return (
    <>
      {step === "cart" ? (
        <Box className="mx-auto max-w-7xl px-4 py-8">
          <Typography variant="h5" fontWeight={600} mb={4}>
            Korpa
          </Typography>

          <Box
            display="grid"
            gridTemplateColumns={{ xs: "1fr", md: "2fr 1fr" }}
            gap={4}
          >
            <Box>
              {items.map((item, id) => (
                <Card key={id} sx={{ mb: 3 }}>
                  <CardContent>
                    <Box display="flex" justifyContent="space-between">
                      <Box>
                        <Typography fontWeight={600}>
                          Dušek {item.width}×{item.length}
                        </Typography>

                        <Typography color="text.secondary" mt={0.5}>
                          Debljina: 20 cm
                        </Typography>

                        <Box display="flex" alignItems="start" gap={1} mt={1}>
                          <CardGiftcardIcon fontSize="small" />
                          <Typography fontSize={14}>
                            <span>
                              <strong>6 poklona uključeno</strong> (1x jorgan,
                              2x jastuk, 1x čaršav, 1x vodootporni čaršav, 1x
                              zaštitna podloga)
                            </span>
                          </Typography>
                        </Box>

                        <Box display="flex" alignItems="center" gap={1} mt={1}>
                          <LocalShippingIcon fontSize="small" />
                          <Typography fontSize={14}>
                            Dostava: 1.000 RSD
                          </Typography>
                        </Box>
                      </Box>

                      <Box textAlign="right">
                        <Typography fontWeight={600}>
                          {item.price.toLocaleString("sr-RS")} RSD
                        </Typography>

                        <IconButton
                          sx={{ mt: 1 }}
                          onClick={() => remove(item.id)}
                        >
                          <DeleteOutlineIcon />
                        </IconButton>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>

            <Card sx={{ height: "fit-content", position: "sticky", top: 120 }}>
              <CardContent>
                <Typography fontWeight={600} mb={2}>
                  Rezime porudžbine
                </Typography>

                <Box display="flex" justifyContent="space-between" mb={1}>
                  <Typography>Proizvodi</Typography>
                  <Typography>
                    {subtotal.toLocaleString("sr-RS")} RSD
                  </Typography>
                </Box>

                <Box display="flex" justifyContent="space-between" mb={1}>
                  <Typography>Dostava</Typography>
                  <Typography>
                    {(
                      items.filter(
                        (item) => item.type === EnumProductType.DUSEK
                      ).length * deliveryPrice
                    ).toLocaleString("sr-RS")}{" "}
                    RSD
                  </Typography>
                </Box>

                <Divider sx={{ my: 2 }} />

                <Box display="flex" justifyContent="space-between" mb={2}>
                  <Typography fontWeight={600}>Ukupno</Typography>
                  <Typography fontWeight={600}>
                    {total.toLocaleString("sr-RS")} RSD
                  </Typography>
                </Box>

                <Box display="flex" alignItems="center" gap={1} mb={2}>
                  <ScheduleIcon fontSize="small" />
                  <Typography fontSize={14}>
                    Isporuka: 5–7 radnih dana
                  </Typography>
                </Box>

                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  onClick={() => setStep("checkout")}
                >
                  Nastavi kupovinu
                </Button>
              </CardContent>
            </Card>
          </Box>
        </Box>
      ) : (
        <CheckoutForm onBack={() => setStep("cart")} />
      )}
    </>
  );
};

export default CartPage;
