import { Box, Button, TextField, Typography } from "@mui/material";
import { useCart } from "../../CartContext";

const CheckoutForm = ({ onBack }: { onBack: () => void }) => {
  const { items } = useCart();

  return (
    <Box maxWidth={600} mx="auto" py={8} px={4}>
      <Typography variant="h5" fontWeight={600} mb={3}>
        Podaci za isporuku
      </Typography>

      <Box display="grid" gap={2}>
        <TextField label="Ime i prezime" fullWidth required />
        <TextField label="Adresa" fullWidth required />
        <TextField label="Poštanski broj" fullWidth required />
        <TextField label="Grad" fullWidth required />
        <TextField label="Kontakt telefon" fullWidth required />

        <TextField
          label="Dimenzije dušeka"
          fullWidth
          value={items.map((i) => `${i.width}×${i.length}`).join(", ")}
          disabled
          rows={2}
        />

        <Typography fontSize={13} color="text.secondary" mt={1}>
          Vaši podaci biće korišćeni isključivo u svrhu obrade porudžbine i
          isporuke, u skladu sa politikom zaštite privatnosti.
        </Typography>

        <Box display="flex" gap={2} mt={2}>
          <Button variant="outlined" fullWidth onClick={onBack}>
            Nazad u korpu
          </Button>

          <Button variant="contained" fullWidth>
            Pošalji porudžbinu
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CheckoutForm;
